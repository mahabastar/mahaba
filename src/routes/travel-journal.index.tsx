import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CATEGORIES, JOURNAL_POSTS, type Category } from "@/lib/journal-posts";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/travel-journal/")({
  head: () => ({
    meta: [
      { title: "Uganda Travel Journal — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Destination stories, culture, conservation and travel advice from across Uganda — the Pearl of Africa in longer form.",
      },
      { property: "og:title", content: "Uganda Travel Journal — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/travel-journal` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/travel-journal` }],
  }),
  component: TravelJournal,
});

function TravelJournal() {
  const [category, setCategory] = useState<Category | "All">("All");

  const posts = useMemo(
    () => (category === "All" ? JOURNAL_POSTS : JOURNAL_POSTS.filter((p) => p.category === category)),
    [category],
  );

  const [featured, ...rest] = posts;

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Uganda Travel Journal</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Stories from <em className="italic text-gold">the Pearl of Africa.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Destinations, culture, conservation and travel advice — written by people who
            have actually stood in the places they describe.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10">
          <div className="flex flex-wrap gap-2">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  category === c
                    ? "bg-forest text-ivory"
                    : "border border-charcoal/15 text-charcoal/60 hover:border-forest hover:text-forest"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          {posts.length === 0 ? (
            <div className="rounded-2xl bg-mist p-10 text-center text-charcoal/60">
              No stories in this category yet — check back soon.
            </div>
          ) : (
            <>
              {featured && (
                <Link
                  to="/travel-journal/$slug"
                  params={{ slug: featured.slug }}
                  className="group relative block overflow-hidden rounded-3xl hover-lift"
                >
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="h-[420px] w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105 md:h-[560px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
                    <div className="eyebrow !text-gold-soft">{featured.category} · {featured.readMins} min read</div>
                    <div className="mt-3 max-w-2xl font-display text-3xl text-ivory text-balance md:text-5xl">
                      {featured.title}
                    </div>
                    <p className="mt-3 max-w-xl text-sm text-ivory/70 md:text-base">{featured.excerpt}</p>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p) => (
                    <Link
                      key={p.slug}
                      to="/travel-journal/$slug"
                      params={{ slug: p.slug }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white hover-lift"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="eyebrow !text-gold">{p.category} · {p.readMins} min read</div>
                        <h3 className="mt-3 font-display text-xl text-charcoal text-balance">{p.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{p.excerpt}</p>
                        <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-forest">
                          Read the story <span aria-hidden>→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}