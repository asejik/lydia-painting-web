# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site + admin portal for Lydia Painting, a commercial painting subcontractor in DFW (live at lydiapainting.org, deployed on Vercel). The site targets General Contractors: case-study portfolio, bid request form, contractor hub pages (prequalification, plan room, safety, service area), careers, and a blog.

## Commands

```bash
npm run dev      # Next.js dev server on localhost:3000
npm run build    # production build (also the main type-check)
npm run lint     # ESLint (flat config, eslint-config-next)
```

There is no test suite.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Firebase (Firestore + Auth, client SDK only), Cloudinary, Nodemailer (Gmail SMTP). Path alias `@/*` → `src/*`.

## Architecture

**Almost everything runs in the browser.** Pages talk to Firestore and Cloudinary directly using `NEXT_PUBLIC_*` env vars (see README for the full `.env.local` list); the only server code is the form email route:
- **Firestore** (`src/lib/firebase.ts`) — collections `projects` and `blogPosts`. Public read, authenticated write, enforced only by `firestore.rules`. If you add a collection, add a rule there (and deploy it via Firebase; it isn't deployed by Vercel).
- **Cloudinary** — admin pages upload images via unsigned preset (`uploadToCloudinary` is duplicated in `src/app/admin/page.tsx` and `src/app/admin/blog/page.tsx`); only the resulting URLs are stored in Firestore.
- **Form email (`src/app/api/submit/route.ts`)** — Contact, Bid Request, Careers and Job Application forms call `submitForm(formType, data)` from `src/lib/submitForm.ts`, which POSTs to `/api/submit`. The route whitelists each form's fields (the `FORMS` map), then emails the submission via Gmail SMTP (`GMAIL_USER`, `GMAIL_APP_PASSWORD` — server-only env vars) to the hard-coded `RECIPIENTS`, with the submitter as reply-to. When adding a form field, add it to that form's entry in `FORMS` or it won't appear in the email.

**Data rendering patterns:**
- `projects` are fetched client-side (`src/components/sections/Projects.tsx`, admin page) ordered by `createdAt`.
- Blog pages (`src/app/blog/`) are server components using ISR (`revalidate = 60`), looked up by `slug` field. Post content is Quill HTML rendered with `html-react-parser` inside `.prose.ql-editor`; Quill/prose spacing fixes live in `src/app/globals.css`.
- Careers job listings are static data in `src/data/careers.ts`; `src/app/careers/[slug]` uses `generateStaticParams` from it.

**Layout:** `src/app/layout.tsx` renders the global Header, Footer, GlobalCTA, ScrollToTop around `MainWrapper`, which adds `pt-20` for the fixed header except on `/admin*`. The root layout also contains an inline script (plus `public/sw.js`) that unregisters stale service workers and clears caches — intentional cleanup, not a PWA.

**Admin auth:** `src/app/admin/layout.tsx` is a client-side guard using `useAuth` (Firebase `onAuthStateChanged`) that redirects to `/admin/login`. Real protection is the Firestore rules; any signed-in Firebase user is treated as admin.

**Styling:** Tailwind v4 configured in CSS (`@theme` in `globals.css`, no tailwind.config). Brand tokens: `brand-navy`, `brand-orange`, `brand-orange-hover`; fonts `font-sans` (Inter) and `font-heading` (Outfit). Use `cn()` from `src/lib/utils.ts` to merge classes. A custom brush SVG cursor is applied globally.

## Project conventions (from `ai_context.md`)

- No native browser popups for new UI — use the custom `src/components/ui/Modal.tsx`.
- Mobile-first layouts with large touch targets.
- `ai_context.md` is a running project log: append to it, never overwrite or truncate it.
- The `Project` type in `src/types/index.ts` mirrors the Firestore schema documented in the README; update both together.
