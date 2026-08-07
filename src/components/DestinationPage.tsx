import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JOURNAL_POSTS } from "@/lib/journal-posts";
import { SITE_CONFIG } from "@/lib/site-config";

export type DestinationFact = { label: string; value: string };
export type DestinationSection = { title: string; body: string };
export type DestinationHighlight = { title: string; desc: string };
export type DestinationItineraryDay = { day: string; title: string; desc: string };

export type DestinationFaq = { q: string; a: string };

export interface DestinationPageProps {
  slug: string;
  eyebrow: string;
  name: string;
  tagline: ReactNode;
  intro: string;
  heroImage: string;
  heroAlt: string;
  galleryImages: { src: string; alt: string }[];
  facts: DestinationFact[];
  sections: DestinationSection[];
  highlights: DestinationHighlight[];
  itinerary: DestinationItineraryDay[];
  bestTime: string;
  gettingThere: string;
  related: { name: string; to: string; img: string }[];
  faqs?: DestinationFaq[];
}

export function DestinationPage(p: DestinationPageProps) {
  const relatedPosts = JOURNAL_POSTS.filter((post) => post.destination?.to === `/destinations/${p.slug}`);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[92svh] w-full overflow-hidden bg-charcoal grain">
        <img
          src={p.heroImage}
          alt={p.heroAlt}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
          <nav className="mb-8 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2 text-ivory/40">/</span>
            <Link to="/national-parks" className="text-ivory/60 hover:text-gold">Destinations</Link>
            <span className="mx-2 text-ivory/40">/</span>
            <span className="text-gold">{p.name}</span>
          </nav>
          <div className="max-w-3xl reveal">
            <div className="mb-6 flex items-center gap-3 text-ivory/80">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow !text-gold">{p.eyebrow}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] text-ivory text-balance">
              {p.tagline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-xl">{p.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/build-my-safari"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-medium tracking-wide text-ivory shadow-md transition-all duration-500 hover:scale-105 hover:bg-forest-deep"
              >
                Plan This Journey
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center gap-3 rounded-full border border-forest/70 px-7 py-4 text-sm font-medium tracking-wide text-ivory backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
              >
                Explore the Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-charcoal/10 bg-ivory">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:gap-10 md:px-10 md:py-14">
          {p.facts.map((f) => (
            <div key={f.label}>
              <div className="eyebrow">{f.label}</div>
              <div className="mt-2 font-display text-2xl text-forest md:text-3xl">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview sections */}
      <section id="overview" className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <div className="sticky top-32">
                <div className="eyebrow">The story</div>
                <h2 className="mt-5 font-display text-4xl text-charcoal text-balance md:text-5xl">
                  A place that <em className="italic text-forest">rearranges</em> what you thought travel could feel like.
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 space-y-10">
              {p.sections.map((s) => (
                <article key={s.title}>
                  <h3 className="font-display text-2xl text-charcoal md:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow !text-gold-soft">In pictures</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-ivory text-balance md:text-6xl">
            Moments from <em className="italic text-gold">{p.name}</em>.
          </h2>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {p.galleryImages.map((g, i) => (
              <div
                key={g.src + i}
                className={`overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2" : ""} ${
                  i % 6 === 3 ? "col-span-2" : ""
                }`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow">Why travellers love it</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-charcoal text-balance md:text-5xl">
            The moments that make <em className="italic text-forest">{p.name}</em> unforgettable.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-charcoal/10 bg-white p-8 hover-lift">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l2.6 6.2L21 9l-5 4.4L17.6 20 12 16.7 6.4 20 8 13.4 3 9l6.4-.8L12 2z" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl text-charcoal">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-earth text-ivory grain">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow !text-gold-soft">Sample itinerary</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-ivory text-balance md:text-5xl">
            A rhythm shaped around <em className="italic text-gold">wonder</em>, not schedules.
          </h2>
          <div className="mt-14 space-y-4">
            {p.itinerary.map((d) => (
              <div key={d.day} className="grid gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.03] p-6 md:grid-cols-12 md:items-baseline md:gap-8 md:p-8">
                <div className="md:col-span-2">
                  <div className="eyebrow !text-gold">{d.day}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="font-display text-2xl text-ivory">{d.title}</div>
                </div>
                <p className="text-sm leading-relaxed text-ivory/75 md:col-span-7">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-2 md:gap-14 md:px-10 md:py-32">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-10">
            <div className="eyebrow">Best time to visit</div>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/80">{p.bestTime}</p>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-white p-10">
            <div className="eyebrow">Getting there</div>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/80">{p.gettingThere}</p>
          </div>
        </div>
      </section>

      {/* From the Journal */}
      {relatedPosts.length > 0 && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <div className="eyebrow">From the journal</div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl text-charcoal text-balance md:text-5xl">
              Read more about <em className="italic text-forest">{p.name}</em>.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to="/travel-journal/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white hover-lift"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={post.img} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="eyebrow !text-gold">{post.category} · {post.readMins} min read</div>
                    <h3 className="mt-3 font-display text-xl text-charcoal text-balance">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {p.faqs && p.faqs.length > 0 && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl text-charcoal text-balance md:text-5xl">
              What travellers <em className="italic text-forest">ask us</em> most.
            </h2>
            <div className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {p.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <span className="font-display text-xl text-charcoal md:text-2xl">{f.q}</span>
                    <span className="mt-1 shrink-0 text-gold transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="bg-forest-deep text-ivory grain">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow !text-gold-soft">Continue exploring</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-ivory text-balance md:text-5xl">
            Other <em className="italic text-gold">chapters</em> of Uganda.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group relative block h-[320px] overflow-hidden rounded-3xl hover-lift"
              >
                <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="font-display text-2xl text-ivory">{r.name}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold">
                    Discover <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready when you are</div>
          <h2 className="mt-6 font-display text-5xl text-ivory text-balance md:text-7xl">
            Let's shape your <em className="italic text-gold">{p.name}</em> story.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Tell us how you like to travel. We'll design a journey that feels entirely yours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/build-my-safari"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md hover:scale-105 hover:bg-forest-deep transition-all"
            >
              Plan my trip to {p.name}
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-ivory hover:border-gold hover:text-gold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
