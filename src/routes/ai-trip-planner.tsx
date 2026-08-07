import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref } from "@/lib/site-config";
import { planTrip, type TripPlan } from "@/lib/ai-trip-planner";
import { draftItinerary, type ItineraryDraft } from "@/lib/trip-planner.functions";


import sceneRwenzori from "@/assets/scene-rwenzori.jpg";

export const Route = createFileRoute("/ai-trip-planner")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner — Trek Wild Uganda" },
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
  const [draft, setDraft] = useState<ItineraryDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const draftFn = useServerFn(draftItinerary);

  async function handleSubmit() {
    if (!input.trim()) return;
    setThinking(true);
    setPlan(null);
    setDraft(null);
    setError(null);

    // Match against the real journeys/experiences first, then hand that
    // grounding to the model so the draft can't invent products.
    const matched = planTrip(input);
    setPlan(matched);

    try {
      const result = await draftFn({
        data: {
          request: input.trim(),
          journey: {
            title: matched.journey.title,
            days: matched.journey.days,
            tagline: matched.journey.tagline,
            overview: matched.journey.overview,
            highlights: matched.journey.highlights,
          },
          experiences: matched.experiences.map((e) => ({ title: e.title, excerpt: e.excerpt })),
        },
      });
      setDraft(result);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(
        message.includes("429")
          ? "Our planner is busy right now — please try again in a minute."
          : message.includes("402")
            ? "The planner is temporarily unavailable. Please reach out on WhatsApp and we'll draft it by hand."
            : "We couldn't draft the written itinerary just now, but your journey match below still stands.",
      );
    } finally {
      setThinking(false);
    }
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

            {error && (
              <p className="mt-8 rounded-2xl border border-charcoal/10 bg-white p-5 text-sm text-charcoal/70">
                {error}
              </p>
            )}

            {draft && (
              <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">
                <h3 className="font-display text-2xl text-charcoal md:text-3xl">{draft.headline}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">{draft.summary}</p>

                <ol className="mt-8 space-y-6 border-l border-charcoal/10 pl-6">
                  {draft.days.map((d) => (
                    <li key={d.day}>
                      <div className="eyebrow">Day {d.day}</div>
                      <h4 className="mt-1 font-display text-lg text-charcoal">{d.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{d.description}</p>
                    </li>
                  ))}
                </ol>

                {draft.notes.length > 0 && (
                  <ul className="mt-8 space-y-2 border-t border-charcoal/10 pt-6">
                    {draft.notes.map((n) => (
                      <li key={n} className="text-xs text-charcoal/60">
                        · {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

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
              This draft is written by our AI planner, grounded in the real journeys and
              experiences we operate
              {plan.dayHint ? ` (we picked up roughly ${plan.dayHint} days)` : ""}. Lodges,
              permits and exact dates still need confirming by a human — treat it as a fast
              starting point, then refine the details with us directly.
            </div>


            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/build-my-safari"
                className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                Refine this plan with our team
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
