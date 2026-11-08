// Spam protection shared by the website forms (client) and /api/submit (server)

// Hidden "honeypot" field: invisible to people, but bots tend to fill it in
export const HONEYPOT_FIELD = "website";

// Signed timestamp from when the form was loaded, see src/lib/formToken.ts
export const TOKEN_FIELD = "form_token";

// Submissions sent faster than this after the form loaded are treated as bots
export const MIN_FILL_MS = 3000;
