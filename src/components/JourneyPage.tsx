import { Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JOURNEYS, type Journey } from "@/lib/journeys";

export function JourneyPage({ journey }: { journey: Journey }) {
  const otherJourneys = JOURNEYS.filter((j) => j.slug !== journey.slug).slice(0, 3);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[75svh] w-full overflow-hidden bg-charcoal">
        <img src={journey.img} alt={journey.title} className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        <div className="relative mx-auto flex min-h-[75svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/" hash="journeys" className="hover:text-gold">Signature Journeys</Link>
          </nav>
          <div className="eyebrow !text-gold">{journey.days}-Day Journey</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">{journey.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/75">{journey.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Overview</div>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80 text-pretty">{journey.overview}</p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {journey.highlights.map((h) => (
              <div key={h} className="flex gap-3 rounded-2xl bg-mist p-4 text-sm text-charcoal/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">The route</div>
          <h2 className="mt-4 font-display text-4xl text-ivory text-balance md:text-5xl">Day by day</h2>

          <div className="mt-14 space-y-10">
            {journey.itinerary.map((d) => (
              <div key={d.day} className="flex gap-6 border-b border-ivory/10 pb-10 last:border-0">
                <div className="shrink-0 font-display text-3xl text-gold/70 md:text-4xl">
                  {typeof d.day === "number" ? String(d.day).padStart(2, "0") : d.day}
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory md:text-2xl">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70 md:text-base">{d.copy}</p>
                  {d.destination && (
                    <Link
                      to={d.destination.to}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-gold hover:text-ivory"
                    >
                      Explore {d.destination.name} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations on this journey */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Destinations on this journey</div>
          <div className="mt-8 flex flex-wrap gap-3">
            {journey.destinations.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                {d.name} <span aria-hidden>→</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/safari-budget-calculator"
              className="rounded-2xl border border-charcoal/10 bg-white p-6 hover-lift"
            >
              <div className="eyebrow !text-gold">What it costs</div>
              <div className="mt-2 font-display text-xl text-charcoal">Estimate this trip</div>
              <p className="mt-2 text-sm text-charcoal/60">Adjust travel style and group size to see a realistic budget.</p>
            </Link>
            <Link
              to="/seasonal-safari-calendar"
              className="rounded-2xl border border-charcoal/10 bg-white p-6 hover-lift"
            >
              <div className="eyebrow !text-gold">When to go</div>
              <div className="mt-2 font-display text-xl text-charcoal">Check the season</div>
              <p className="mt-2 text-sm text-charcoal/60">See what's best month by month before you lock in dates.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Other journeys */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">Other journeys</div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherJourneys.map((j) => (
              <Link
                key={j.slug}
                to="/journeys/$slug"
                params={{ slug: j.slug }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img src={j.img} alt={j.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal">
                  {j.days} Days
                </div>
                <div className="absolute inset-x-4 bottom-4 font-display text-lg text-ivory">{j.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready to make it yours</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's shape <em className="italic text-gold">this journey around you.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Make this {journey.days}-day journey mine
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
