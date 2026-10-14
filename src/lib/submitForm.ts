export type FormType = "contact" | "bid-request" | "careers" | "job-application";

/**
 * Sends a website form to /api/submit, which emails it to the company inboxes.
 * Throws if the email could not be delivered so the form can show an error.
 */
export async function submitForm(formType: FormType, data: Record<string, string>) {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...data }),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
