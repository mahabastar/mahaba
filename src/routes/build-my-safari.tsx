import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {buildWhatsAppHref, buildEmailHref, SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";

export const Route = createFileRoute("/build-my-safari")({
  head: () => ({
    meta: [
      { title: "Build My Safari — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Answer a few questions and get personalised Uganda safari suggestions — destinations, trip length and travel style, tailored to you.",
      },
      { property: "og:title", content: "Build My Safari — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/build-my-safari` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/build-my-safari` }],
  }),
  component: BuildMySafari,
});

/* ---------------- Data ---------------- */

type DestinationKey = "gorilla-trekking" | "tree-climbing-lions" | "murchison-falls" | "sipi-falls" | "lake-bunyonyi";

const DESTINATIONS: Record<DestinationKey, { name: string; to: string; img: string }> = {
  "gorilla-trekking": { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
  "tree-climbing-lions": { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions", img: sceneLion },
  "murchison-falls": { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
  "sipi-falls": { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi },
  "lake-bunyonyi": { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
};

const INTERESTS: { key: string; label: string; dest: DestinationKey[] }[] = [
  { key: "gorillas", label: "Mountain Gorillas", dest: ["gorilla-trekking"] },
  { key: "big-game", label: "Big Game & Tree-Climbing Lions", dest: ["tree-climbing-lions"] },
  { key: "nile", label: "The Nile & Waterfalls", dest: ["murchison-falls"] },
  { key: "adventure", label: "Hiking & Adventure", dest: ["sipi-falls"] },
  { key: "lakes", label: "Lakes & Relaxation", dest: ["lake-bunyonyi"] },
  { key: "birding", label: "Birding", dest: ["murchison-falls", "lake-bunyonyi"] },
  { key: "culture", label: "Culture & Communities", dest: ["sipi-falls", "gorilla-trekking"] },
];

const TIMINGS = ["In the next month", "1–3 months from now", "3–6 months from now", "Just exploring, no date yet"];
const DAYS = ["3–5 days", "6–9 days", "10–14 days", "15+ days"];
const STYLES = [
  { label: "Comfort", desc: "Well-appointed mid-range lodges" },
  { label: "Luxury", desc: "Premium camps & private guides" },
  { label: "Adventure", desc: "Lean, active, budget-conscious" },
];
const TRAVELERS = ["Solo", "Couple", "Family with kids", "Friends / group"];

type Answers = {
  interests: string[];
  days: string | null;
  style: string | null;
  travelers: string | null;
  timing: string | null;
};

const EMPTY_ANSWERS: Answers = { interests: [], days: null, style: null, travelers: null, timing: null };

const STEPS = ["interests", "days", "style", "travelers", "timing"] as const;
type StepKey = (typeof STEPS)[number];

/* ---------------- Component ---------------- */

function BuildMySafari() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [done, setDone] = useState(false);

  const step: StepKey = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;

  const canAdvance = useMemo(() => {
    switch (step) {
      case "interests":
        return answers.interests.length > 0;
      case "days":
        return !!answers.days;
      case "style":
        return !!answers.style;
      case "travelers":
        return !!answers.travelers;
      case "timing":
        return !!answers.timing;
    }
  }, [step, answers]);

  function toggleInterest(key: string) {
    setAnswers((a) => ({
      ...a,
      interests: a.interests.includes(key) ? a.interests.filter((i) => i !== key) : [...a.interests, key],
    }));
  }

  function next() {
    if (isLastStep) {
      setDone(true);
    } else {
      setStepIndex((i) => i + 1);
    }
  }
  function back() {
    setStepIndex((i) => Math.max(0, i - 1));
  }
  function startOver() {
    setAnswers(EMPTY_ANSWERS);
    setStepIndex(0);
    setDone(false);
  }

  const suggested = useMemo(() => {
    const keys = new Set<DestinationKey>();
    for (const i of answers.interests) {
      const match = INTERESTS.find((x) => x.key === i);
      match?.dest.forEach((d) => keys.add(d));
    }
    return Array.from(keys).map((k) => DESTINATIONS[k]);
  }, [answers.interests]);

  const summaryText = useMemo(() => {
    const interestLabels = answers.interests.map((k) => INTERESTS.find((i) => i.key === k)?.label).join(", ");
    return [
      `Hi! I'd like a Uganda safari built around: ${interestLabels || "—"}.`,
      `Trip length: ${answers.days ?? "—"}.`,
      `Travel style: ${answers.style ?? "—"}.`,
      `Travelers: ${answers.travelers ?? "—"}.`,
      `Timing: ${answers.timing ?? "—"}.`,
    ].join(" ");
  }, [answers]);

  const whatsappHref = buildWhatsAppHref(summaryText);
  const emailHref = buildEmailHref({ subject: "Build My Safari — trip request", body: summaryText });

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Build My Safari</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            A few questions. <em className="italic text-gold">One safari, made for you.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            No forms to fill in triplicate — just tell us how you like to travel and we'll
            suggest where in Uganda to start.
          </p>
        </div>
      </section>

      {/* Planner card */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[820px] px-6 py-16 md:px-10 md:py-24">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-luxe md:p-12">
            {!done ? (
              <>
                {/* Progress */}
                <div className="mb-10 flex items-center gap-2">
                  {STEPS.map((s, i) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                        i <= stepIndex ? "bg-forest" : "bg-charcoal/10"
                      }`}
                    />
                  ))}
                </div>
                <div className="eyebrow !text-gold">
                  Step {stepIndex + 1} of {STEPS.length}
                </div>

                {step === "interests" && (
                  <StepBlock title="What draws you to Uganda?" hint="Choose as many as you like.">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {INTERESTS.map((i) => (
                        <OptionCard
                          key={i.key}
                          label={i.label}
                          selected={answers.interests.includes(i.key)}
                          onClick={() => toggleInterest(i.key)}
                        />
                      ))}
                    </div>
                  </StepBlock>
                )}

                {step === "days" && (
                  <StepBlock title="How many days do you have?">
                    <div className="grid grid-cols-2 gap-3">
                      {DAYS.map((d) => (
                        <OptionCard
                          key={d}
                          label={d}
                          selected={answers.days === d}
                          onClick={() => setAnswers((a) => ({ ...a, days: d }))}
                        />
                      ))}
                    </div>
                  </StepBlock>
                )}

                {step === "style" && (
                  <StepBlock title="How do you like to travel?">
                    <div className="grid grid-cols-1 gap-3">
                      {STYLES.map((s) => (
                        <OptionCard
                          key={s.label}
                          label={s.label}
                          sub={s.desc}
                          selected={answers.style === s.label}
                          onClick={() => setAnswers((a) => ({ ...a, style: s.label }))}
                        />
                      ))}
                    </div>
                  </StepBlock>
                )}

                {step === "travelers" && (
                  <StepBlock title="Who's traveling?">
                    <div className="grid grid-cols-2 gap-3">
                      {TRAVELERS.map((t) => (
                        <OptionCard
                          key={t}
                          label={t}
                          selected={answers.travelers === t}
                          onClick={() => setAnswers((a) => ({ ...a, travelers: t }))}
                        />
                      ))}
                    </div>
                  </StepBlock>
                )}

                {step === "timing" && (
                  <StepBlock title="When are you thinking of traveling?">
                    <div className="grid grid-cols-1 gap-3">
                      {TIMINGS.map((t) => (
                        <OptionCard
                          key={t}
                          label={t}
                          selected={answers.timing === t}
                          onClick={() => setAnswers((a) => ({ ...a, timing: t }))}
                        />
                      ))}
                    </div>
                  </StepBlock>
                )}

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    onClick={back}
                    disabled={stepIndex === 0}
                    className="rounded-full border border-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest disabled:opacity-0"
                  >
                    Back
                  </button>
                  <button
                    onClick={next}
                    disabled={!canAdvance}
                    className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
                  >
                    {isLastStep ? "See My Safari" : "Next"}
                  </button>
                </div>
              </>
            ) : (
              <div>
                <div className="eyebrow !text-gold">Your suggested starting point</div>
                <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">
                  Here's where we'd begin.
                </h2>
                <p className="mt-4 max-w-lg text-charcoal/70">
                  Based on what you told us, these destinations fit best. Send us your answers
                  and a Trek Wild Uganda specialist will turn this into a full itinerary.
                </p>

                {suggested.length > 0 ? (
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {suggested.map((d) => (
                      <Link
                        key={d.to}
                        to={d.to}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl hover-lift"
                      >
                        <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                        <div className="absolute inset-x-4 bottom-4">
                          <div className="font-display text-lg text-ivory">{d.name}</div>
                          <div className="mt-1 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold">
                            Discover <span aria-hidden>→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 rounded-2xl bg-mist p-6 text-sm text-charcoal/70">
                    Tell us a bit more about your interests and we'll match you to the right
                    destinations — or just send us your answers and we'll do it for you.
                  </p>
                )}

                <div className="mt-10 rounded-2xl bg-mist p-6 text-sm text-charcoal/70">
                  <div className="eyebrow !text-forest">Your answers</div>
                  <p className="mt-3 leading-relaxed">{summaryText}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("safari_plan_sent", { channel: "whatsapp", days: answers.days, style: answers.style })}
                    className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
                  >
                    Send via WhatsApp
                  </a>
                  <a
                    href={emailHref}
                    onClick={() => trackEvent("safari_plan_sent", { channel: "email", days: answers.days, style: answers.style })}
                    className="rounded-full border border-charcoal/15 px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
                  >
                    Email This Plan
                  </a>
                  <button
                    onClick={startOver}
                    className="rounded-full px-7 py-4 text-sm font-medium text-charcoal/50 transition-colors hover:text-forest"
                  >
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ---------------- Bits ---------------- */

function StepBlock({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <h2 className="font-display text-2xl text-charcoal text-balance md:text-3xl">{title}</h2>
      {hint && <p className="mt-2 text-sm text-charcoal/50">{hint}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function OptionCard({
  label,
  sub,
  selected,
  onClick,
}: {
  label: string;
  sub?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex flex-col items-start rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
        selected
          ? "border-forest bg-forest/5 shadow-md"
          : "border-charcoal/10 bg-white hover:border-forest/40"
      }`}
    >
      <span className="flex items-center gap-2">
        <span className={`text-sm font-medium ${selected ? "text-forest" : "text-charcoal"}`}>{label}</span>
        {selected && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-forest" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {sub && <span className="mt-1 text-xs text-charcoal/50">{sub}</span>}
    </button>
  );
}
