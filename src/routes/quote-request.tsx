import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {buildWhatsAppHref, buildEmailHref, SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/quote-request")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Get a fast, no-obligation quote for your Uganda safari — trip length, travel style and must-sees in one short form.",
      },
      { property: "og:title", content: "Request a Quote — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/quote-request` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/quote-request` }],
  }),
  component: QuoteRequest,
});

const DAYS = ["3–5 days", "6–9 days", "10–14 days", "15+ days", "Not sure yet"];
const STYLES = [
  { label: "Comfort", desc: "Well-appointed mid-range lodges" },
  { label: "Luxury", desc: "Premium camps & private guides" },
  { label: "Adventure", desc: "Lean, active, budget-conscious" },
];
const INTERESTS = ["Gorillas & Chimps", "Big Game Safari", "Birding", "Adventure & Hiking", "Culture & Communities", "Honeymoon"];

function OptionChip({ label, selected, onClick, sub }: { label: string; sub?: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border px-4 py-2.5 text-left text-sm transition-all ${
        selected ? "border-forest bg-forest/5 text-forest" : "border-charcoal/15 text-charcoal/70 hover:border-forest/40"
      }`}
    >
      <span className="font-medium">{label}</span>
      {sub && <span className="ml-1.5 text-xs text-charcoal/45">— {sub}</span>}
    </button>
  );
}

function QuoteRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travelers, setTravelers] = useState("");
  const [days, setDays] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleInterest = (i: string) =>
    setInterests((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  const ready = name.trim().length > 0 && email.trim().length > 0;

  const summary = [
    `Hi! I'd like a quote for a Uganda trip.`,
    `Name: ${name || "…"}`,
    `Email: ${email || "…"}`,
    travelers ? `Travelers: ${travelers}` : "",
    days ? `Trip length: ${days}` : "",
    style ? `Style: ${style}` : "",
    interests.length > 0 ? `Interests: ${interests.join(", ")}` : "",
    notes ? `Notes: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = buildWhatsAppHref(summary);
  const emailHref = buildEmailHref({ subject: "Uganda trip quote request", body: summary });

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Request a Quote</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            A quick form, <em className="italic text-gold">a fast reply.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            No obligation, no lengthy wizard — just the essentials, and we'll come back to you
            directly with pricing and options. Want something more guided instead?{" "}
            <Link to="/build-my-safari" className="underline decoration-gold/50 underline-offset-4 hover:text-gold">
              Walk me through it step by step
            </Link>.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="qr-name" className="text-xs uppercase tracking-widest text-charcoal/50">
                Your name
              </label>
              <input
                id="qr-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Traveler"
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <div>
              <label htmlFor="qr-email" className="text-xs uppercase tracking-widest text-charcoal/50">
                Email
              </label>
              <input
                id="qr-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="qr-travelers" className="text-xs uppercase tracking-widest text-charcoal/50">
              Number of travelers
            </label>
            <input
              id="qr-travelers"
              type="text"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              placeholder="e.g. 2 adults"
              className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-charcoal/50">Trip length</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {DAYS.map((d) => (
                <OptionChip key={d} label={d} selected={days === d} onClick={() => setDays(d)} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-charcoal/50">Travel style</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <OptionChip key={s.label} label={s.label} sub={s.desc} selected={style === s.label} onClick={() => setStyle(s.label)} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-charcoal/50">Must-sees (pick any)</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <OptionChip key={i} label={i} selected={interests.includes(i)} onClick={() => toggleInterest(i)} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="qr-notes" className="text-xs uppercase tracking-widest text-charcoal/50">
              Anything else we should know?
            </label>
            <textarea
              id="qr-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Dates, special occasions, accessibility needs — anything helpful."
              className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ready ? whatsappHref : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!ready}
              onClick={(e) => {
                if (!ready) e.preventDefault();
                else trackEvent("quote_request_sent", { channel: "whatsapp", style, days, travelers });
              }}
              className={`rounded-full px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all ${
                ready ? "bg-forest hover:scale-105 hover:bg-forest-deep" : "cursor-not-allowed bg-charcoal/20"
              }`}
            >
              Send via WhatsApp
            </a>
            <a
              href={ready ? emailHref : undefined}
              aria-disabled={!ready}
              onClick={(e) => {
                if (!ready) e.preventDefault();
                else trackEvent("quote_request_sent", { channel: "email", style, days, travelers });
              }}
              className={`rounded-full border px-7 py-4 text-sm font-medium transition-all ${
                ready ? "border-forest/70 text-forest hover:border-forest hover:bg-forest/5" : "cursor-not-allowed border-charcoal/15 text-charcoal/30"
              }`}
            >
              Send via Email
            </a>
          </div>
          {!ready && <p className="mt-4 text-xs text-charcoal/40">Name and email are needed before sending.</p>}
          <p className="mt-6 text-xs text-charcoal/40">
            This opens WhatsApp or your email client with your details pre-filled — nothing is sent automatically, and there's no account or commitment required.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
