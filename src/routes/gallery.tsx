import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  GALLERY_SECTION_CTAS,
  type GalleryCategory,
} from "@/lib/gallery";
import { SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Photographs from across Uganda — gorillas, chimpanzees, big game, mountains, lakes, lodges and culture. Every image shot in the field by our own guides.",
      },
      { property: "og:title", content: "Photo Gallery — Trek Wild Uganda" },
      {
        property: "og:description",
        content:
          "Gorillas, chimpanzees, big game, mountains, lakes, lodges and culture — Uganda as our guides see it.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_CONFIG.url}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/gallery` }],
  }),
  component: Gallery,
});

const FILTERS = ["All", ...GALLERY_CATEGORIES] as const;

function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sections = useMemo(() => {
    const cats = (filter === "All" ? GALLERY_CATEGORIES : [filter]) as readonly GalleryCategory[];
    return cats
      .map((category) => ({
        category,
        meta: GALLERY_SECTION_CTAS[category],
        photos: GALLERY_PHOTOS.filter((p) => p.category === category),
      }))
      .filter((s) => s.photos.length > 0);
  }, [filter]);

  const photos = useMemo(() => sections.flatMap((s) => s.photos), [sections]);

  const open = (slug: string) => {
    const i = photos.findIndex((p) => p.slug === slug);
    if (i < 0) return;
    setOpenIndex(i);
    trackEvent("gallery_photo_open", {
      photo_slug: photos[i].slug,
      photo_category: photos[i].category,
    });
  };

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Gallery</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda, <em className="italic text-gold">as we've seen it.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            {GALLERY_PHOTOS.length} photographs from the field — no stock imagery, just what
            was actually there. Every section ends with a way to start planning that exact
            experience.
          </p>
        </div>
      </section>

      {/* Section filters */}
      <section className="sticky top-0 z-30 border-b border-charcoal/10 bg-ivory/95 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-6 py-4 md:px-10">
          <div className="flex snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((f) => {
              const count = f === "All" ? GALLERY_PHOTOS.length : GALLERY_PHOTOS.filter((p) => p.category === f).length;
              if (count === 0) return null;
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`shrink-0 snap-start rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                    active
                      ? "border-forest bg-forest text-ivory"
                      : "border-charcoal/15 text-charcoal/60 hover:border-forest/40 hover:text-forest"
                  }`}
                >
                  {f} <span className={active ? "text-ivory/60" : "text-charcoal/35"}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="bg-ivory">
        {sections.map((section, idx) => (
          <section
            key={section.category}
            id={section.category.toLowerCase().replace(/[^a-z]+/g, "-")}
            className={idx % 2 === 1 ? "bg-charcoal/[0.03]" : ""}
          >
            <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <div className="eyebrow">{section.photos.length} photographs</div>
                  <h2 className="mt-3 font-display text-3xl text-charcoal md:text-5xl">
                    {section.category}
                  </h2>
                  <p className="mt-3 text-charcoal/60">{section.meta.blurb}</p>
                </div>
                <Link
                  to={section.meta.to}
                  onClick={() =>
                    trackEvent("gallery_section_cta", { photo_category: section.category })
                  }
                  className="inline-flex shrink-0 rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition-all hover:bg-forest hover:text-ivory"
                >
                  {section.meta.cta} →
                </Link>
              </div>

              <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
                {section.photos.map((p) => (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => open(p.slug)}
                    className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100" />
                    <div className="absolute inset-x-4 bottom-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                      <div className="text-[0.6rem] uppercase tracking-widest text-gold">{p.category}</div>
                      <div className="mt-1 text-sm text-ivory">{p.title}</div>
                      <div className="mt-2 text-[0.65rem] uppercase tracking-widest text-ivory/70">
                        Interested in this experience? →
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  to={section.meta.to}
                  onClick={() =>
                    trackEvent("gallery_section_cta_bottom", { photo_category: section.category })
                  }
                  className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
                >
                  {section.meta.cta}
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Seen enough to start planning</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's put you <em className="italic text-gold">in the picture.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Take me to these places
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />

      {openIndex !== null && photos[openIndex] && (
        <GalleryLightbox
          photo={photos[openIndex]}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length)}
          onNext={() => setOpenIndex((i) => ((i ?? 0) + 1) % photos.length)}
        />
      )}
    </div>
  );
}
