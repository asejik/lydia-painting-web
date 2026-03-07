```markdown
# Lydia Painting Website & Admin Portal
**Commercial & Industrial Painting Subcontractor Platform**

A premium, high-performance web application built for Lydia Painting, a veteran and minority-owned gold standard commercial painting company based in Farmers Branch, Texas.

This platform serves as a B2B project acquisition tool designed specifically to attract General Contractors and Developers. It features a Contractor Hub, dynamic Case Studies, a Bid Request portal, and a secure Admin Dashboard.

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

## Core Commercial Features

* **Contractor Hub:** Dedicated pages for Subcontractor Prequalification documents, Active Plan Room (Bid Calendar), OSHA Safety Standards, and DFW Service Area coverage.
* **Commercial Case Studies:** A dynamic, interactive portfolio that details project scope, General Contractor, square footage, contract value, challenges, and results.
* **Lead Generation & Estimating Pipeline:** A dedicated Bid Request form that allows GCs to submit project details and plan links directly to the estimating team.
* **Careers & Recruiting Portal:** An integrated application system to recruit painters, foremen, and project managers.
* **Smart Webhook Routing:** All forms (Contact, Bid Request, Careers) route through a single, intelligent n8n webhook that conditionally formats email payloads based on the lead type.
* **Secure Admin Dashboard:** A protected route (`/admin`) requiring Firebase authentication, allowing authorized users to manage complex project data and upload galleries directly to Cloudinary.

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

Create a `.env.local` file in the root directory. **Never commit this file to version control.**

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

## Database Schema (Firestore)

**Collection:** `projects`

* `name` (string)
* `location` (string)
* `description` (string)
* `featuredImage` (string - URL)
* `gallery` (array of strings - URLs)
* `createdAt` (timestamp)
* `gc` (string)
* `size` (string)
* `contractValue` (string)
* `scope` (string)
* `completionDate` (string)
* `challenges` (string)
* `results` (string)

## Security Rules

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

## License

Copyright 2026 Lydia Painting Company LLC. All rights reserved.

```