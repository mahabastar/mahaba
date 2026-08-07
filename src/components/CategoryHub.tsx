import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref } from "@/lib/site-config";

export type CategoryItem = {
  slug: string;
  name: string;
  location: string;
  knownFor: string;
  blurb: string;
  img: string;
  /** Link to a full detail page, if one exists. Falls back to a WhatsApp enquiry when omitted. */
  to?: string;
};

export interface CategoryHubProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroImage: string;
  heroAlt: string;
  items: CategoryItem[];
  ctaTitle: string;
  ctaBody: string;
}

function ItemCard({ item }: { item: CategoryItem }) {
  const className = "group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal hover-lift sm:aspect-[16/11]";

  const inner = (
    <>
      <img
        src={item.img}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />

      <div className="absolute left-4 top-4 rounded-full bg-charcoal/60 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-ivory/85 backdrop-blur-sm">
        {item.location}
      </div>
      {!item.to && (
        <div className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
          Guide coming soon
        </div>
      )}

      <div className="absolute inset-x-5 bottom-5">
        <div className="font-display text-2xl text-ivory">{item.name}</div>
        <p className="mt-1 text-sm font-medium text-gold">{item.knownFor}</p>
        <p className="mt-2 max-w-md text-sm text-ivory/70">{item.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-ivory/85">
          {item.to ? "Explore" : "Ask us directly"}
          <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </>
  );

  if (item.to) {
    return (
      <Link to={item.to} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={buildWhatsAppHref(`Hi! Could you tell me more about ${item.name} for my Uganda trip?`)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}

export function CategoryHub(p: CategoryHubProps) {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[60svh] w-full overflow-hidden bg-charcoal grain">
        <img src={p.heroImage} alt={p.heroAlt} className="absolute inset-0 h-full w-full object-cover ken-burns opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex min-h-[60svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 text-center md:px-10 md:pb-20">
          <div className="eyebrow !text-gold">{p.eyebrow}</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">{p.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/75">{p.intro}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${p.items.length >= 3 ? "lg:grid-cols-3" : ""}`}
          >
            {p.items.map((item) => (
              <ItemCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[1000px] px-6 py-20 text-center md:px-10 md:py-24">
          <h2 className="font-display text-3xl text-ivory md:text-4xl">{p.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-lg text-ivory/70">{p.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/build-my-safari"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Start planning with a Ugandan guide
            </Link>
            <a
              href={buildWhatsAppHref(p.ctaBody)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-ivory hover:border-gold hover:text-gold"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
