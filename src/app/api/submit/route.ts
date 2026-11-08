import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { FormType } from "@/lib/submitForm";
import { HONEYPOT_FIELD, TOKEN_FIELD } from "@/lib/formGuard";
import { checkFormToken } from "@/lib/formToken";

// Every website form submission is emailed to these inboxes
const RECIPIENTS = ["Info@lydiapainting.com", "lydiapaintingweb@gmail.com"];

const MAX_FIELD_LENGTH = 5000;

interface FormConfig {
  subject: (data: Record<string, string>) => string;
  replyToField: string;
  // Field key -> label, in the order they appear in the email
  fields: Record<string, string>;
  required: string[];
}

const careerFields = {
  name: "Full Name",
  email: "Email",
  phone: "Phone",
  position: "Position",
  resumeLink: "Resume / Portfolio Link",
  message: "Message",
};

const FORMS: Record<FormType, FormConfig> = {
  contact: {
    subject: (d) => `New Contact Inquiry: ${d.firstName} ${d.lastName}`,
    replyToField: "email",
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      service: "Service Needed",
      message: "Message",
    },
    required: ["firstName", "email"],
  },
  "bid-request": {
    subject: (d) => `New Bid Request: ${d.projectName} (${d.companyName})`,
    replyToField: "contactEmail",
    fields: {
      companyName: "Company Name",
      contactName: "Contact Name",
      contactEmail: "Contact Email",
      phone: "Phone",
      projectName: "Project Name",
      projectAddress: "Project Address",
      projectType: "Project Type",
      estimatedStartDate: "Estimated Start Date",
      planLink: "Plans / Specs Link",
      additionalDetails: "Additional Details",
    },
    required: ["companyName", "contactEmail", "projectName"],
  },
  careers: {
    subject: (d) => `New Career Application: ${d.name} – ${d.position}`,
    replyToField: "email",
    fields: careerFields,
    required: ["name", "email"],
  },
  "job-application": {
    subject: (d) => `New Job Application: ${d.name} – ${d.position}`,
    replyToField: "email",
    fields: careerFields,
    required: ["name", "email"],
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Where a submission came from, using the headers Vercel adds to each request
function getSenderInfo(request: Request) {
  const h = request.headers;
  const decode = (value: string | null) => {
    if (!value) return "";
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
  const location =
    [decode(h.get("x-vercel-ip-city")), h.get("x-vercel-ip-country-region"), h.get("x-vercel-ip-country")]
      .filter(Boolean)
      .join(", ") || "unknown";
  const userAgent = (h.get("user-agent") || "unknown").slice(0, 300);
  return { ip, location, userAgent };
}

export async function POST(request: Request) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Form email is not configured: GMAIL_USER / GMAIL_APP_PASSWORD missing");
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const formType = body.formType as FormType;
  const config = FORMS[formType];
  if (!config) {
    return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  }

  const sender = getSenderInfo(request);

  // Spam filter: honeypot filled in, or no valid / aged load-time token.
  // Reply with success so bots don't learn they were blocked, but send nothing.
  const honeypot = body[HONEYPOT_FIELD];
  const tokenCheck = checkFormToken(body[TOKEN_FIELD]);
  const blockReason =
    typeof honeypot === "string" && honeypot.trim() ? "honeypot" : tokenCheck !== "ok" ? `token-${tokenCheck}` : null;
  if (blockReason) {
    console.warn("Blocked form submission", { reason: blockReason, formType, ...sender });
    return NextResponse.json({ ok: true });
  }

  // Only keep the fields this form is expected to send
  const data: Record<string, string> = {};
  for (const key of Object.keys(config.fields)) {
    const value = body[key];
    data[key] = typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
  }

  const missing = config.required.filter((key) => !data[key]);
  const replyTo = data[config.replyToField];
  if (missing.length > 0 || !EMAIL_PATTERN.test(replyTo)) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const rows = Object.entries(config.fields).map(([key, label]) => ({
    label,
    value: data[key] || "—",
  }));

  const senderRows = [
    { label: "IP Address", value: sender.ip },
    { label: "Location", value: sender.location },
    { label: "Browser", value: sender.userAgent },
  ];

  const text = [
    ...rows.map((r) => `${r.label}: ${r.value}`),
    "",
    "Sender details",
    ...senderRows.map((r) => `${r.label}: ${r.value}`),
  ].join("\n");
  const html = `
    <h2 style="font-family:sans-serif;color:#0a1f35;">${escapeHtml(config.subject(data))}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      ${rows
        .map(
          (r) => `<tr>
            <td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap;">${escapeHtml(r.label)}</td>
            <td style="padding:6px 0;white-space:pre-wrap;">${escapeHtml(r.value)}</td>
          </tr>`
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#64748b;margin-top:24px;">
      <strong>Sender details</strong><br>
      ${senderRows.map((r) => `${escapeHtml(r.label)}: ${escapeHtml(r.value)}`).join("<br>")}
    </p>
    <p style="font-family:sans-serif;font-size:12px;color:#64748b;">Sent from the lydiapainting.org website. Reply to this email to respond directly.</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Lydia Painting Website" <${GMAIL_USER}>`,
      to: RECIPIENTS,
      replyTo,
      subject: config.subject(data).replace(/[\r\n]+/g, " "),
      text,
      html,
    });
  } catch (error) {
    console.error("Failed to send form email:", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
