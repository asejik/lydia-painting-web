```markdown
# Lydia Painting Website & Admin Portal

A premium, high-performance web application built for Lydia Painting, a veteran and minority-owned gold standard commercial painting company based in Farmers Branch, Texas.

This project serves as both a public-facing lead generation portfolio and a secure, authenticated Admin Dashboard for managing project galleries dynamically.

**Live Site:** [https://www.lydiapainting.org](https://www.lydiapainting.org)

## Tech Stack

* **Frontend Framework:** Next.js (App Router, Server-Side Rendering)
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion (Scroll reveals, ambient gradients, micro-interactions)
* **Database:** Firebase Firestore (NoSQL document database)
* **Authentication:** Firebase Auth (Email/Password)
* **Image Hosting:** Cloudinary (Unsigned client-side uploads)
* **Lead Routing:** Self-hosted n8n Webhook to SMTP Email
* **Hosting/Deployment:** Vercel

## Core Features

* **Dynamic Project Portfolio:** A responsive masonry-style grid that fetches live project data from Firestore.
* **Interactive Gallery Modals:** Custom-built, accessible modals (avoiding native browser popups) that display full project descriptions and multi-image galleries.
* **Secure Admin Dashboard:** A protected route (`/admin`) requiring Firebase authentication. Allows authorized users to Create, Read, Update, and Delete (CRUD) projects.
* **Cloudinary Integration:** Direct-to-cloud unsigned image uploads from the Admin Dashboard, generating optimized URLs for the database.
* **Automated Lead Generation:** A custom contact form that posts data to an n8n webhook, which parses the JSON payload and automatically fires a formatted HTML email to the company inbox.
* **Premium UI/UX:** Features include an animated gradient hero overlay, dot-matrix footer patterns, frosted glass (glassmorphism) elements, a custom SVG favicon, and a global scroll-to-top action button.

## Local Setup & Installation

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/lydia-painting-web.git](https://github.com/your-username/lydia-painting-web.git)
cd lydia-painting-web

```

### 2. Install dependencies

```bash
npm install

```

### 3. Environment Variables

Create a `.env.local` file in the root directory and populate it with your specific service keys. **Never commit this file to version control.**

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset

# n8n Lead Routing
NEXT_PUBLIC_N8N_WEBHOOK_URL=[https://n8n.yourdomain.com/webhook/your-webhook-id](https://n8n.yourdomain.com/webhook/your-webhook-id)

```

### 4. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages (Public & Admin)
├── components/
│   ├── layout/           # Header, Footer, PageHeader
│   ├── sections/         # Hero, Services, Projects, Contact, Map
│   └── ui/               # Reusable Modal, ScrollToTop
├── hooks/                # Custom React hooks (useAuth)
├── lib/                  # Utility functions and Firebase initialization
└── types/                # TypeScript interfaces (Project data models)

```

## Security Rules

### Firestore Database

Read access is granted to the public for rendering the portfolio. Write and Delete operations strictly require an authenticated Admin token.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}

```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Import the GitHub repository into your Vercel dashboard.
2. Navigate to the project settings and input all variables from your `.env.local` file.
3. Deploy the main branch.

## License

Copyright 2026 Lydia Painting Company LLC. All rights reserved.