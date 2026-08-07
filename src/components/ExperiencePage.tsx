import { Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SaveButton } from "@/components/SaveButton";
import { EXPERIENCES, type Experience } from "@/lib/experiences";

export function ExperiencePage({ experience }: { experience: Experience }) {
  const others = EXPERIENCES.filter((e) => e.slug !== experience.slug);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal">
        <img src={experience.heroImg} alt={experience.title} className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/experiences" className="hover:text-gold">Experiences</Link>
          </nav>
          <div className="eyebrow !text-gold">Experience Guide</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">{experience.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/75">{experience.tagline}</p>
          <div className="mt-8">
            <SaveButton type="experience" slug={experience.slug} name={experience.title} img={experience.heroImg} to={`/experiences/${experience.slug}`} />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Overview</div>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80 text-pretty">{experience.intro}</p>
        </div>
      </section>

      {/* Comparison table, if present */}
      {experience.comparison && (
        <section className="bg-charcoal grain text-ivory">
          <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-20">
            <div className="overflow-x-auto rounded-3xl border border-ivory/10">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ivory/10">
                    <th className="px-6 py-5 text-xs uppercase tracking-widest text-ivory/50">&nbsp;</th>
                    <th className="px-6 py-5 font-display text-lg text-gold">{experience.comparison.labelA}</th>
                    <th className="px-6 py-5 font-display text-lg text-gold">{experience.comparison.labelB}</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.comparison.rows.map((r) => (
                    <tr key={r.label} className="border-b border-ivory/10 last:border-0">
                      <td className="px-6 py-4 text-xs uppercase tracking-widest text-ivory/50">{r.label}</td>
                      <td className="px-6 py-4 text-ivory/90">{r.a}</td>
                      <td className="px-6 py-4 text-ivory/90">{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="space-y-14">
            {experience.sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-2xl text-charcoal text-balance md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal/75 text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">At a glance</div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experience.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl bg-white p-6">
                <div className="font-display text-lg text-charcoal">{h.title}</div>
                <p className="mt-2 text-sm text-charcoal/60">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations + journey */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Where this takes you</div>
          <div className="mt-8 flex flex-wrap gap-3">
            {experience.destinations.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                {d.name} <span aria-hidden>→</span>
              </Link>
            ))}
          </div>

          {experience.journey && (
            <Link
              to="/journeys/$slug"
              params={{ slug: experience.journey.slug }}
              className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-charcoal/10 bg-white p-6 hover-lift sm:flex-row sm:items-center"
            >
              <div>
                <div className="eyebrow !text-gold">Suggested journey</div>
                <div className="mt-2 font-display text-xl text-charcoal">{experience.journey.name}</div>
              </div>
              <span className="text-sm font-medium text-forest">See the itinerary →</span>
            </Link>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">Questions</div>
          <div className="mt-10 space-y-8">
            {experience.faqs.map((f) => (
              <div key={f.q} className="border-b border-ivory/10 pb-8 last:border-0">
                <h3 className="font-display text-lg text-ivory">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other experiences */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">Other ways to travel</div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((e) => (
              <Link
                key={e.slug}
                to="/experiences/$slug"
                params={{ slug: e.slug }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img src={e.heroImg} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 font-display text-lg text-ivory">{e.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready to make it real</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's build <em className="italic text-gold">this trip for you.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan my {experience.title.toLowerCase()} trip
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
