import { HONEYPOT_FIELD, MIN_FILL_MS, TOKEN_FIELD } from "@/lib/formGuard";

export type FormType = "contact" | "bid-request" | "careers" | "job-application";

async function fetchFormToken() {
  const res = await fetch("/api/form-token", { cache: "no-store" });
  const data = await res.json();
  return typeof data.token === "string" ? data.token : "";
}

/**
 * Sends a website form to /api/submit, which emails it to the company inboxes.
 * `form` must contain a <FormGuard />. Throws if the email could not be
 * delivered so the form can show an error.
 */
export async function submitForm(formType: FormType, data: Record<string, string>, form: HTMLFormElement) {
  const fields = new FormData(form);
  const honeypot = String(fields.get(HONEYPOT_FIELD) ?? "");
  let token = String(fields.get(TOKEN_FIELD) ?? "");

  // Token didn't load with the page: get one now and wait so it isn't rejected as too fast
  if (!token) {
    token = await fetchFormToken();
    await new Promise((resolve) => setTimeout(resolve, MIN_FILL_MS));
  }

  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...data, [HONEYPOT_FIELD]: honeypot, [TOKEN_FIELD]: token }),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
