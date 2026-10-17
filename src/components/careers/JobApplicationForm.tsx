"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, Mail, Copy, Check, FileText, ExternalLink } from "lucide-react";
import { JobPosition } from "@/data/careers";
import { submitForm } from "@/lib/submitForm";

interface JobApplicationFormProps {
  job: JobPosition;
}

export default function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [activeTab, setActiveTab] = useState<"email" | "form">("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: job.title,
    resumeLink: "",
    message: ""
  });

  const mailtoUrl = `mailto:${job.howToApply.email}?subject=${encodeURIComponent(
    job.howToApply.subject
  )}&body=${encodeURIComponent(
    `Dear Hiring Team at Lydia Painting LLC,\n\nI am applying for the ${job.title} position.\n\nPlease find attached:\n${job.howToApply.requirements.map((r) => `- ${r}`).join("\n")}\n\nFull Name: \nPhone: \nLocation: \n${job.howToApply.linkLabel}: \n\nThank you for your consideration,\n`
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(job.howToApply.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm("job-application", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: job.title,
        resumeLink: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Error submitting application. Please apply directly via email to " + job.howToApply.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="apply" className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-brand-navy p-6 text-white">
        <span className="text-xs uppercase font-bold tracking-wider text-brand-orange bg-brand-orange/15 px-2.5 py-1 rounded-full">
          Official Application
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-bold mt-2">Ready to Apply?</h3>
        <p className="text-xs md:text-sm text-slate-300 font-sans mt-1">
          {job.howToApply.deadline}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50">
        <button
          onClick={() => setActiveTab("email")}
          type="button"
          className={`flex-1 py-3 text-xs sm:text-sm font-semibold text-center transition-colors flex items-center justify-center gap-2 ${
            activeTab === "email"
              ? "bg-white text-brand-orange border-b-2 border-brand-orange shadow-xs"
              : "text-slate-600 hover:text-brand-navy"
          }`}
        >
          <Mail className="w-4 h-4" />
          Apply via Email
        </button>
        <button
          onClick={() => setActiveTab("form")}
          type="button"
          className={`flex-1 py-3 text-xs sm:text-sm font-semibold text-center transition-colors flex items-center justify-center gap-2 ${
            activeTab === "form"
              ? "bg-white text-brand-orange border-b-2 border-brand-orange shadow-xs"
              : "text-slate-600 hover:text-brand-navy"
          }`}
        >
          <FileText className="w-4 h-4" />
          Quick Web Form
        </button>
      </div>

      <div className="p-6">
        {activeTab === "email" ? (
          <div className="space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Recipient Email
              </p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-bold text-brand-navy truncate">
                  {job.howToApply.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover px-2.5 py-1 bg-white border border-slate-200 rounded-md shadow-xs transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Required Subject Line
              </p>
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-amber-900 select-all font-mono">
                {job.howToApply.subject}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Please attach or include:
              </p>
              <ul className="space-y-2">
                {job.howToApply.requirements.map((req, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mailtoUrl}
              className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-sm sm:text-base text-center"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Open Email Application
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <p className="text-xs text-center text-slate-500 font-sans">
              Clicking will open your default email app with the subject and outline pre-filled.
            </p>
          </div>
        ) : isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-brand-navy mb-1">Application Submitted!</h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Thank you for applying for the {job.title} role. Our recruiting team will review your qualifications and reach out soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-brand-orange hover:underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <input
                required
                type="text"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                <input
                  required
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {job.howToApply.linkLabel} *
              </label>
              <input
                required
                type="url"
                placeholder={job.howToApply.linkPlaceholder}
                value={formData.resumeLink}
                onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                {job.howToApply.linkHelp}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cover Note / Relevant Experience
              </label>
              <textarea
                rows={3}
                placeholder={job.howToApply.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Application Online
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
