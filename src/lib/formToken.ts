import { createHmac, timingSafeEqual } from "crypto";
import { MIN_FILL_MS } from "@/lib/formGuard";

// Server-only: issues and checks the signed "form loaded at" timestamps

const MAX_AGE_MS = 24 * 60 * 60 * 1000;

export type TokenCheck = "ok" | "missing" | "invalid" | "too-fast" | "expired";

function signingKey() {
  // Reuse an existing secret so no extra setup is required; FORM_TOKEN_SECRET overrides it
  const secret = process.env.FORM_TOKEN_SECRET || process.env.GMAIL_APP_PASSWORD;
  if (!secret) return null;
  return createHmac("sha256", "lydia-form-token").update(secret).digest();
}

function sign(key: Buffer, timestamp: string) {
  return createHmac("sha256", key).update(timestamp).digest("base64url");
}

export function createFormToken() {
  const key = signingKey();
  if (!key) return null;
  const timestamp = Date.now().toString();
  return `${timestamp}.${sign(key, timestamp)}`;
}

export function checkFormToken(token: unknown): TokenCheck {
  if (typeof token !== "string" || !token) return "missing";

  const key = signingKey();
  const [timestamp, signature] = token.split(".");
  if (!key || !timestamp || !signature) return "invalid";

  const expected = Buffer.from(sign(key, timestamp));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return "invalid";

  const age = Date.now() - Number(timestamp);
  if (age < MIN_FILL_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "expired";
  return "ok";
}
