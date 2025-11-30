<div align="center">
<br />
<a href="https://github.com/samarth-kamble/echo-tut" target="_blank">
    <img src="./public/Banner.png" alt="Project Banner">
</a>
<br />
<br />

<div>
    <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" height="40" alt="nextjs logo"  />
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge" height="40" alt="tailwindcss logo"  />
    <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" height="40" alt="github logo"  />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="40" alt="typescript logo"  />
    <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" height="40" alt="vercel logo"  />
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" height="40" alt="vite logo"  />
    <img src="https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white&style=for-the-badge" height="40" alt="sentry logo"  />
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" height="40" alt="react logo"  />
</div>

<h3 align="center">Echo - B2B AI Support Platform</h3>
</div>

📋 <a name="table">Table of Contents</a>
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
<a name="#introduction">🤖 Introduction</a>

Echo is a production-grade B2B SaaS AI support platform designed to revolutionize customer service. It enables businesses to deploy intelligent AI agents that can handle support queries via both chat and voice.

Powered by RAG (Retrieval Augmented Generation), Echo learns from your documentation to provide accurate answers. It features a multi-tenant architecture where organizations can bring their own API keys, secure credential storage with AWS Secrets Manager, and a real-time operator dashboard to monitor, intercept, and resolve conversations seamlessly.

<a name="#tech-stack">⚙️ Tech Stack</a>

- Next.js 15
- TypeScript
- Convex (Backend & Realtime Database)
- Vapi (Voice AI)
- AWS Secrets Manager
- Clerk (Auth & Billing)
- ShadCN UI
- Tailwind CSS
- Turborepo

<a name="#features">🔋 Features</a>

👉 Multi-Tenant B2B Architecture: Complete organization isolation allowing businesses to manage their own workspaces, team members, and settings independently via Clerk.

👉 AI Voice Agents: Integrated with Vapi to support real-time voice conversations, allowing customers to talk directly to support agents via the widget.

👉 Smart Knowledge Base (RAG): Upload documentation and files to generate embeddings, enabling the AI to answer specific questions based on your product's data using Vector Search.

👉 Real-Time Operator Dashboard: A live dashboard for support teams to view active conversations, monitor AI responses, and take over chats instantly when needed.

👉 Automatic Escalation: The AI detects user frustration or specific requests for a human and automatically escalates the ticket to a live operator.

👉 Secure Credential Management: Uses AWS Secrets Manager to securely store and manage API keys for each tenant (Bring Your Own Key support).

👉 Embeddable Chat Widget: A fully functional, customizable chat and voice widget that can be embedded into any website via a simple script.

👉 Full-Stack Billing: Integrated Clerk authentication and billing system to manage subscriptions and organizations.

👉 Robust Error Tracking: Integrated with Sentry for full-stack error monitoring and debugging.

<a name="quickstart">🤖 Quickstart</a>
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/samarth-kamble/echo-tut.git
cd echo-tut
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env

CONVEX_DEPLOYMENT=
CONVEX_URL=
CLERK_JWT_ISSUER_DOMAIN=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
GOOGLE_GENERATIVE_AI_API_KEY=

```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.

**Running the Project**

```bash
pnpm turbo dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
