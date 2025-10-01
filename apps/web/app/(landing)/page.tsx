"use client";

import { JSX, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  Phone,
  Database,
  ShieldCheck,
  Headphones,
  Upload,
  Mic,
  Search,
  Users,
  Zap,
  Activity,
  Lock,
  Building2,
  Layers,
  Wrench,
  ChartBar,
  Check,
  ChevronDown,
  Globe,
  CreditCard,
  Settings,
} from "lucide-react";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const { user } = useUser();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <main className="min-h-dvh bg-white text-gray-900">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 10%, rgba(99,102,241,.15), transparent 60%), radial-gradient(50% 40% at 80% 10%, rgba(16,185,129,.12), transparent 60%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white md:bg-white/70 md:backdrop-blur-md transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src={"/logo.svg"} alt="Logo" height={24} width={24} />
            <span className="text-lg font-semibold">Echo</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <div className="flex items-center rounded-full border border-gray-200 bg-white/80 px-2 py-1 shadow-sm">
              <Link
                href="#features"
                className="px-3 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#integrations"
                className="px-3 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                Integrations
              </Link>
              <Link
                href="#use-cases"
                className="px-3 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                Use cases
              </Link>
              <Link
                href="#pricing"
                className="px-3 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="px-3 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </nav>

          {user ? (
            <div className="flex items-center gap-4">
              <Button
                variant={"outline"}
                onClick={() => router.push("/conversations")}
              >
                Dashboard
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/sign-in"
                className="hidden rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition-colors sm:inline-block"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Sign Up
              </Link>
              <button
                className="rounded-md p-2 hover:bg-gray-100 md:hidden transition-colors"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile drawer (animated) */}
        <div
          className={`fixed inset-0 z-50 md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!mobileOpen}
        >
          {/* Overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          />
          {/* Panel */}
          <div
            className={`ml-auto h-full w-80 bg-white p-6 shadow-xl transition-transform duration-300 ease-out will-change-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                className="rounded-md p-2 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 grid gap-2">
              {[
                ["Features", "#features"],
                ["Integrations", "#integrations"],
                ["Use cases", "#use-cases"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href || ""}
                  className="rounded-md px-3 py-2 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            {user ? (
              <div className="flex items-center gap-4">
                <Button
                  variant={"outline"}
                  onClick={() => router.push("/conversations")}
                >
                  Dashboard
                </Button>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <div className="mt-6 grid gap-3">
                <Link
                  href="/sign-in"
                  className="hidden rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition-colors sm:inline-block"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                  Sign Up
                </Link>
                <button
                  className="rounded-md p-2 hover:bg-gray-100 md:hidden transition-colors"
                  aria-label="Open menu"
                  onClick={() => setMobileOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="motion-safe:transition-all motion-safe:duration-300">
              <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
                Launch ready
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Voice + RAG + Handoff
              </p>
              <h1 className="mt-3 text-4xl/tight font-semibold tracking-tight sm:text-5xl/tight">
                AI support that speaks, searches, and solves
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                Grounded answers from org‑scoped knowledge, real‑time voice via
                Vapi, and seamless human escalation when needed.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="rounded-md px-5 py-3 font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50 transition-colors"
                >
                  See features
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Tenant isolation
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  Fast setup
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-indigo-600" />
                  99.9% uptime
                </div>
              </div>
            </div>

            {/* Product mock */}
            <div className="relative motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:hover:scale-[1.01]">
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-100 via-white to-indigo-50"></div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/logo.svg"}
                      alt="Logo"
                      height={40}
                      width={40}
                    />
                    <div className="text-sm">
                      <div className="font-semibold">Echo Assistant</div>
                      <div className="text-gray-500">Live conversation</div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                    Connected
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-gray-200 p-2">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="w-full rounded-lg bg-gray-50 p-4 text-sm text-gray-800">
                      “Hi, how do I reset my password?”
                    </div>
                  </div>
                  <div className="ml-auto flex items-start gap-3">
                    <div className="w-full rounded-lg bg-indigo-600 p-4 text-sm text-white">
                      “Here are the steps based on your org policy and a
                      one‑time link.”
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-gray-200 p-2">
                      <Mic className="h-4 w-4" />
                    </div>
                    <div className="w-full rounded-lg bg-gray-50 p-4 text-sm text-gray-800">
                      Voice enabled via Vapi, want to continue by phone?
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-md bg-gray-50 p-3">
                    RAG hits
                    <div className="mt-1 text-lg font-semibold">4</div>
                  </div>
                  <div className="rounded-md bg-gray-50 p-3">
                    Escalations
                    <div className="mt-1 text-lg font-semibold">0</div>
                  </div>
                  <div className="rounded-md bg-gray-50 p-3">
                    CSAT
                    <div className="mt-1 text-lg font-semibold">4.9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything support needs
            </h2>
            <p className="mt-3 text-gray-600">
              Voice by Vapi, RAG knowledge in Convex, secure org namespaces, and
              a widget that drops into any site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                <MessageSquare key="1" className="h-5 w-5 text-indigo-600" />,
                "Real‑time AI chat",
                "Tool calling, auto‑close, and frustration detection.",
              ],
              [
                <Phone key="2" className="h-5 w-5 text-indigo-600" />,
                "Voice support",
                "Inbound/outbound calls with natural conversations.",
              ],
              [
                <Database key="3" className="h-5 w-5 text-indigo-600" />,
                "RAG knowledge base",
                "Upload files; embed and retrieve per organization.",
              ],
              [
                <Headphones key="4" className="h-5 w-5 text-indigo-600" />,
                "Human handoff",
                "Escalate mid‑thread and continue seamlessly.",
              ],
              [
                <Layers key="5" className="h-5 w-5 text-indigo-600" />,
                "Embeddable widget",
                "Install with one script across any product.",
              ],
              [
                <ChartBar key="6" className="h-5 w-5 text-indigo-600" />,
                "Operator dashboard",
                "Monitor, search, and resolve conversations.",
              ],
              [
                <Lock key="7" className="h-5 w-5 text-indigo-600" />,
                "Secrets manager",
                "BYOK with rotation and access controls.",
              ],
              [
                <CreditCard key="8" className="h-5 w-5 text-indigo-600" />,
                "Subscriptions",
                "Usage‑based tiers with instant upgrades.",
              ],
              [
                <Settings key="9" className="h-5 w-5 text-indigo-600" />,
                "Observability",
                "Errors, replays, and traces end‑to‑end.",
              ],
            ].map(([IconEl, title, desc], idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center gap-2 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  {IconEl as JSX.Element}
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {title as string}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Integrations
            </h2>
            <p className="mt-3 text-gray-600">
              Connect telephony, identity, analytics, and providers while
              keeping knowledge in one place.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                <Phone key="i1" className="h-5 w-5" />,
                "Vapi",
                "Voice calls and real‑time audio.",
              ],
              [
                <Building2 key="i2" className="h-5 w-5" />,
                "Clerk",
                "Auth, orgs, teams, and billing.",
              ],
              [
                <ShieldCheck key="i3" className="h-5 w-5" />,
                "Sentry",
                "Errors, replays, and alerts.",
              ],
              [
                <Wrench key="i4" className="h-5 w-5" />,
                "LLMs",
                "OpenAI, Anthropic, Gemini, Grok.",
              ],
            ].map(([IconEl, name, desc], i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-gray-100 p-2">
                    {IconEl as JSX.Element}
                  </div>
                  <div className="font-semibold">{name as string}</div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Use cases</h2>
            <p className="mt-3 text-gray-600">
              From SaaS onboarding to enterprise SLAs, deploy assistants that
              actually know the product.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                <Globe key="u1" className="h-5 w-5 text-indigo-600" />,
                "Self‑serve support",
                "Cut wait times with reliable answers for docs, billing, and accounts.",
              ],
              [
                <Users key="u2" className="h-5 w-5 text-indigo-600" />,
                "CS teams",
                "Assist agents with suggested replies and instant escalation.",
              ],
              [
                <Wrench key="u3" className="h-5 w-5 text-indigo-600" />,
                "Developer help",
                "Ground answers in runbooks and internal knowledge bases.",
              ],
            ].map(([IconEl, title, desc], idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 p-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center gap-2 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  {IconEl as JSX.Element}
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {title as string}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              How it works
            </h2>
            <p className="mt-3 text-gray-600">
              Upload docs, embeddings are created per org, and chat or voice
              retrieves context at runtime.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              [
                <Upload key="h1" className="h-5 w-5 text-indigo-600" />,
                "1. Connect & upload",
                "Invite teammates, define namespaces, and upload PDFs, images, HTML, and text.",
              ],
              [
                <Search key="h2" className="h-5 w-5 text-indigo-600" />,
                "2. Embed & index",
                "We parse content and store vector embeddings with org isolation.",
              ],
              [
                <Phone key="h3" className="h-5 w-5 text-indigo-600" />,
                "3. Retrieve & answer",
                "Chat and voice retrieve relevant chunks for grounded responses.",
              ],
            ].map(([IconEl, title, desc], idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white p-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center gap-2 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  {IconEl as JSX.Element}
                </div>
                <div className="mt-4 text-sm font-semibold text-indigo-700">
                  {title as string}
                </div>
                <p className="mt-2 text-sm text-gray-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            ["MTTR", "‑42%"],
            ["Deflection", "+55%"],
            ["CSAT", "4.8/5"],
            ["Setup", "< 1d"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-gray-200 p-6 text-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
            >
              <div className="text-sm text-gray-600">{k}</div>
              <div className="mt-1 text-2xl font-semibold">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing (monthly only) */}
      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Simple, scalable pricing
          </h2>
          <p className="mt-3 text-gray-600">
            Start free, upgrade as conversations grow.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                blurb: "Everything to test AI support",
                price: "$0/mo",
                features: [
                  "Chat + voice",
                  "RAG knowledge",
                  "Widget + dashboard",
                  "Email support",
                ],
                highlight: false,
              },
              {
                name: "Pro",
                blurb: "For growing teams",
                price: "$127/mo",
                features: [
                  "All Starter",
                  "Human handoff",
                  "Custom tools",
                  "Priority support",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                blurb: "Security & scale",
                price: "Custom",
                features: [
                  "SSO/SAML",
                  "Custom SLOs",
                  "Onboarding & training",
                  "Dedicated support",
                ],
                highlight: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 shadow-sm transition ${
                  plan.highlight
                    ? "border-indigo-300 ring-1 ring-indigo-200"
                    : "border-gray-200"
                } motion-safe:duration-300 motion-safe:hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm text-gray-600">{plan.blurb}</div>
                <div className="mt-4 text-3xl font-semibold">{plan.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#cta"
                  className={`mt-6 inline-block w-full rounded-md px-4 py-2 text-center font-semibold ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  } transition-colors`}
                >
                  {plan.name === "Enterprise" ? "Contact sales" : "Choose plan"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              [
                "Do you fine‑tune models?",
                "No, responses are grounded via retrieval against your org’s documents.",
              ],
              [
                "How is data isolated?",
                "Each org has a dedicated namespace for embeddings and retrieval.",
              ],
              [
                "Can we bring our LLM?",
                "Yes, connect preferred providers while keeping your knowledge in place.",
              ],
              [
                "How fast is setup?",
                "Most teams ship chat in a day and voice shortly after.",
              ],
            ].map(([q, a], i) => (
              <div key={q} className="p-5">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setFaqOpen((v) => (v === i ? null : i))}
                  aria-expanded={faqOpen === i}
                >
                  <span className="font-medium">{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === i && (
                  <p className="mt-2 text-sm text-gray-600">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Ship AI support this week
              </h2>
              <p className="mt-2 text-indigo-100">
                Start free, upgrade when ready.
              </p>
            </div>
            <form className="rounded-xl bg-white/10 p-3 backdrop-blur sm:p-4 md:ml-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-md border border-white/30 bg-white/90 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors"
                >
                  Get invite
                </button>
              </div>
              <p className="mt-2 text-xs text-indigo-100">
                No credit card required.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image src={"/logo.svg"} alt="Logo" height={24} width={24} />
                <span className="text-sm text-gray-600">Echo</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                AI support that actually knows the product.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#use-cases" className="hover:underline">
                    Use cases
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row">
            <span>© {new Date().getFullYear()} Echo </span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:underline">
                Security
              </Link>
              <Link href="#" className="hover:underline">
                Compliance
              </Link>
              <Link href="#" className="hover:underline">
                DPA
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Page;
