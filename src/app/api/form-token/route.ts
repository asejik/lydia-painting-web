import { NextResponse } from "next/server";
import { createFormToken } from "@/lib/formToken";

export const dynamic = "force-dynamic";

// Issued when a form loads; /api/submit rejects submissions without a valid, aged token
export async function GET() {
  const token = createFormToken();
  if (!token) {
    return NextResponse.json({ error: "Form protection is not configured." }, { status: 500 });
  }
  return NextResponse.json({ token }, { headers: { "Cache-Control": "no-store" } });
}
