import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref } from "@/lib/site-config";
import { planTrip, type TripPlan } from "@/lib/ai-trip-planner";

import sceneRwenzori from "@/assets/scene-rwenzori.jpg";

export const Route = createFileRoute("/ai-trip-planner")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner — Wild Uganda Treks" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AiTripPlanner,
});

const EXAMPLES = [
  "10 days, gorillas and chimps, mid-range budget, two of us",
  "A relaxed honeymoon, around a week, some wildlife but not too rushed",
  "2 weeks, adventure-heavy — rafting, hiking, wildlife, self-drive if possible",
];

function AiTripPlanner() {
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  function handleSubmit() {
    if (!input.trim()) return;
    setThinking(true);
    setPlan(null);
    // Brief pause before showing the result — the matching itself is
    // instant, but an instant flash-to-answer reads as broken, not fast.
    window.setTimeout(() => {
      setPlan(planTrip(input));
      setThinking(false);
    }, 900);
  }

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[55svh] w-full overflow-hidden bg-charcoal grain">
        <img src={sceneRwenzori} alt="Uganda landscape" className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex min-h-[55svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 text-center md:px-10 md:pb-20">
          <div className="eyebrow !text-gold">Smart Trip Planner</div>
          <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,4rem)] text-ivory text-balance">
            Describe your trip. <em className="italic text-gold">We'll draft it.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Tell us roughly what you want in your own words — length, interests, pace, budget —
            and we'll match you to a starting itinerary pulled from our real journeys and
            experiences. It's a draft to react to, not a final booking.
          </p>
        </div>
      </section>

      {/* Input */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-10 md:py-20">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="e.g. 10 days, gorillas and chimps, mid-range budget, two of us"
            className="w-full rounded-2xl border border-charcoal/15 bg-white px-5 py-4 text-base text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setInput(ex)}
                className="rounded-full border border-charcoal/15 px-4 py-2 text-xs text-charcoal/60 transition-colors hover:border-forest hover:text-forest"
              >
                {ex}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!input.trim() || thinking}
            className="mt-6 w-full rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-[1.01] hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            {thinking ? "Drafting your itinerary…" : "Draft my itinerary"}
          </button>
        </div>
      </section>

      {/* Result */}
      {plan && (
        <section className="bg-mist">
          <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
            <div className="eyebrow">Your draft</div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-charcoal text-balance md:text-4xl">
              A starting point — <em className="italic text-forest">not the final word</em>.
            </h2>

            {/* Journey match */}
            <Link
              to="/journeys/$slug"
              params={{ slug: plan.journey.slug }}
              className="group mt-10 flex flex-col overflow-hidden rounded-3xl bg-white shadow-md hover-lift md:flex-row"
            >
              <div className="h-56 w-full overflow-hidden md:h-auto md:w-2/5">
                <img
                  src={plan.journey.img}
                  alt={plan.journey.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <div className="eyebrow">{plan.journey.days} Days · Closest-matching journey</div>
                <h3 className="mt-2 font-display text-2xl text-charcoal md:text-3xl">{plan.journey.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{plan.journey.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-forest">
                  See the full itinerary <span aria-hidden>→</span>
                </span>
              </div>
            </Link>

            {/* Experience matches */}
            {plan.experiences.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plan.experiences.map((e) => (
                  <Link
                    key={e.slug}
                    to="/experiences/$slug"
                    params={{ slug: e.slug }}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover-lift"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={e.heroImg}
                        alt={e.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-display text-lg text-charcoal">{e.title}</h4>
                      <p className="mt-2 flex-1 text-xs text-charcoal/60">{e.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 text-sm text-charcoal/70">
              This draft is matched from keywords in what you typed
              {plan.dayHint ? ` (we picked up roughly ${plan.dayHint} days)` : ""} against our
              real journeys and experiences — it isn't a live conversation, and it won't always
              read your intent perfectly. Treat it as a fast starting point, then refine the
              details with us directly.
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/build-my-safari"
                className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                Refine with Build My Safari
              </Link>
              <a
                href={buildWhatsAppHref(
                  `Hi! I used the trip planner and got matched to "${plan.journey.title}" — I'd like to refine it.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-forest hover:border-forest hover:bg-forest/5"
              >
                Talk it through on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
