<div align="center">
  <br />
    <a href="https://www.github.com/samarth-kamble/echo-tut" target="_blank">
      <img src="assets/readme/hero.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white" alt="react hook form" />
    <img src="https://img.shields.io/badge/-Open_AI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
    <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" alt="vercel logo"  />
    <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" alt="github logo"  />
    <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge"  alt="git logo"  />
  </div>
     <h3 align="center">⚡️ Echo — AI B2B SaaS Support Platform</h3>
     <div align="center">
     An intelligent, multi-tenant customer support platform built with Next.js 15, Convex, and Turborepo.
     🤖 Real-time AI chat • 🎙️ Voice assistant • 🔐 Role-based auth • 📚 RAG-powered knowledge base  .
     </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

**Echo** is a next-generation **AI-powered support platform** for B2B companies.
It enables real-time chat automation, voice calls, and human escalation — all within a unified monorepo. With **multi-tenant support**, **subscription billing**, and **RAG-driven knowledge**, Echo is built for scale and flexibility.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js 15**
- **React 19**
- **Convex** (backend + real-time data)
- **Turborepo** + **pnpm**
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Clerk** (authentication & roles)
- **AWS Secrets Manager** (secure per-tenant key storage)
- **VAPI** (voice & telephony)
- **Sentry** (monitoring & error tracking)
- **TypeScript** for type safety

---

## <a name="features">🔋 Features</a>

### 🧩 Platform Highlights

- 🏢 **B2B SaaS architecture** with Turborepo and shared packages
- 💬 **Three apps:** Operator Dashboard, End-User Widget & Developer Embed Toolkit
- ⚡ **Real-time support** with AI automation, human takeover & lifecycle management

---

### 🤖 AI & Automation

- 🧠 Real-time AI chat via **Convex Agents** with tool-calling _(handoff, auto-close, etc.)_
- 🔄 **Model-agnostic** — Supports OpenAI, Anthropic, Gemini, and Grok
- 😡 **Frustration detection** for automatic escalation to human operators
- 🧩 **Context-rich replies** grounded in knowledge base, metadata, and session history

---

### 📚 Knowledge Base & RAG

- 📄 Ingests **PDFs, images, HTML, and plain text** via AI pipelines
- 🔍 Uses **Convex RAG embeddings** for precise semantic retrieval
- 🧠 **AI-powered semantic search** with context injection into chat
- 🏷️ **Per-organization isolation** for secure, tenant-scoped knowledge

---

### 🎙️ Voice & Telephony

- ☎️ **VAPI voice support** with inbound/outbound calls and live AI assistant
- 🧩 **Plugin-based configuration** per tenant with detailed call logs
- 🗣️ **Voice-to-text & text-to-voice** integration enabling AI-human loops

---

### 🔐 Multi-Tenancy, Auth & Billing

- 🧭 **Organization-scoped data** with workspaces & team invites
- 👥 **Role-based access control** via Clerk _(Admin / Operator / Member)_
- 💳 **Subscription tiers** unlock AI, Voice & RAG features
- 🔑 **Bring-Your-Own-Keys (BYOK)** using AWS Secrets Manager

---

### 🧑‍💼 Operator Dashboard

- 📥 **Live inbox** with infinite scroll & typing indicators
- 🗨️ **Operator chat** with AI interruption handling
- 🧾 **Full user context:** device info, session history & metadata
- ✅ **Workflow management:** unresolved → escalated → resolved _(auto-close supported)_

---

### 💬 Widget & Embed

- 🧩 **Embeddable chat widget** for any frontend
- 💾 **Session handling** & multi-screen router UX
- 📎 **File uploads** for RAG-enhanced conversations
- 🎤 **Optional voice chat** initiation for end-users

---

### 🧑‍💻 Developer Experience

- ⚙️ **Turborepo + pnpm workspaces** for efficient parallel builds
- 🎨 **Shared shadcn/ui** components across all apps
- 🧰 **Built with:**
  - Next.js 15
  - React 19
  - Tailwind CSS 4
  - TypeScript
- 🤖 **Automated PR reviews** via CodeRabbit for code quality

---

### 🛡️ Security & Observability

- 🔒 **Per-tenant secrets** via AWS Secrets Manager
- 🧩 **Full-stack error tracking** with Sentry
- 🧼 **Safe file uploads** with MIME validation
- 🧱 **Strict input validation** & sandboxed AI execution

---

### ⚙️ Performance & Reliability

- ⚡ **Convex real-time sync** for reactive UIs
- 📜 **Infinite scroll + pagination** for large chat histories
- ⚙️ **Optimized embedding & retrieval** for low latency
- 🧩 **Production-optimized RAG architecture**

---

### 🎨 Theming & UX

- 🧑‍🎨 **Unified design system** for dashboard & widget
- 🌈 **Responsive, accessible UI** for users and operators
- 🪄 **Clean, modern design** inspired by enterprise SaaS

---

### ☁️ Deployment & Ops

- 🧰 **Production-ready CI/CD** with Turborepo builds
- 🔐 **Environment-based secrets management**
- 🧱 **Consistent package versions** across workspaces
- 🪄 **Ready for cloud or container-based deployment**

---

## <a name="quick-start">🤸 Quick Start</a>

## <a name="quick-start">🤸 Quick Start</a>

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

### Clone the Repository

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

Create a new file named `.env.local` in the `web` of your project and add the following content:

```.env.local

# CONVEX (DATABASE)
NEXT_PUBLIC_CONVEX_URL=

# CLERK (AUTHENTICATION)
NEXT_PUBLIC_CLERK_FRONTEND_API_URL=

# CLERK (AUTHENTICATION) CREDENTIALS
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# CLERK (AUTHENTICATION) REDIRECTS
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

# SENTRY (ERROR MONITORING)
SENTRY_AUTH_TOKEN=

```

Create a new file named `.env.local` in the `widget` of your project and add the following content:

```.env.local

NEXT_PUBLIC_CONVEX_URL=

```

Create a new file named `.env.local` in the `backend` of your project and add the following content:

```.env.local

<!-- Convex URLS -->
CONVEX_DEPLOYMENT=
CONVEX_URL=

<!-- Clerk Auth Key -->
CLERK_JWT_ISSUER_DOMAIN=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_KEY=

<!-- Open AI API KEY -->
OPENAI_API_KEY=

<!-- AWS Credentials -->
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=

```

**Running the Project**

```bash
turbo dev
```

**NOTE : if CLI is not available then run with following script.**

```bash

pnpm turbo dev

```
