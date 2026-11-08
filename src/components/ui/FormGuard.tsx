"use client";

import { useEffect, useState } from "react";
import { HONEYPOT_FIELD, TOKEN_FIELD } from "@/lib/formGuard";

/**
 * Place inside every website <form>. Adds a hidden honeypot field and the
 * signed load-time token that /api/submit uses to filter out bots.
 */
export default function FormGuard() {
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch("/api/form-token", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setToken(data.token ?? ""))
      .catch(() => {
        // submitForm fetches a token at submit time if this fails
      });
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label>
          Leave this field empty
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name={TOKEN_FIELD} value={token} />
    </>
  );
}
