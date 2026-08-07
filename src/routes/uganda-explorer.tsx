import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/uganda-explorer")({
  head: () => ({
    meta: [
      { title: "Uganda Explorer — Interactive Map | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "An interactive map of Uganda's national parks and destinations — gorilla trekking, tree-climbing lions, waterfalls and crater lakes, all in one place.",
      },
      { property: "og:title", content: "Uganda Explorer — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/uganda-explorer` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/uganda-explorer` }],
  }),
  component: UgandaExplorer,
});

/* ---------------- Data ---------------- */
// Pin positions are on a stylised, abstract silhouette of Uganda (0–100 viewBox),
// matching the illustration style already used on the homepage — not a literal GPS map.

type Tag = "Wildlife" | "Adventure" | "Relaxation";

type Spot = {
  slug: string;
  name: string;
  region: string;
  tags: Tag[];
  blurb: string;
  img: string;
  to: string;
  x: number;
  y: number;
};

const SPOTS: Spot[] = [
  {
    slug: "gorilla-trekking",
    name: "Gorilla Trekking, Bwindi",
    region: "South-western Uganda",
    tags: ["Wildlife"],
    blurb: "An hour face-to-face with a mountain gorilla family in ancient rainforest.",
    img: heroGorilla,
    to: "/destinations/gorilla-trekking",
    x: 17, y: 66,
  },
  {
    slug: "tree-climbing-lions",
    name: "Tree-Climbing Lions, Ishasha",
    region: "South-western Uganda",
    tags: ["Wildlife"],
    blurb: "Lions draped over fig branches in Queen Elizabeth's Ishasha sector.",
    img: sceneLion,
    to: "/destinations/tree-climbing-lions",
    x: 25, y: 58,
  },
  {
    slug: "murchison-falls",
    name: "Murchison Falls",
    region: "North-western Uganda",
    tags: ["Wildlife", "Adventure"],
    blurb: "The Nile forced through a 7-metre gorge, with elephants and giraffe on its banks.",
    img: sceneFalls,
    to: "/destinations/murchison-falls",
    x: 37, y: 23,
  },
  {
    slug: "sipi-falls",
    name: "Sipi Falls",
    region: "Eastern Uganda",
    tags: ["Adventure"],
    blurb: "Three waterfalls, coffee terraces, and views across the plains from Mount Elgon.",
    img: expSipi,
    to: "/destinations/sipi-falls",
    x: 82, y: 38,
  },
  {
    slug: "lake-bunyonyi",
    name: "Lake Bunyonyi",
    region: "South-western Uganda",
    tags: ["Relaxation"],
    blurb: "A crater-studded lake ringed by terraced hills — Uganda's slow-travel counterpoint.",
    img: sceneBunyonyi,
    to: "/destinations/lake-bunyonyi",
    x: 15, y: 74,
  },
  {
    slug: "kibale-forest",
    name: "Chimpanzee Trekking, Kibale",
    region: "Western Uganda",
    tags: ["Wildlife"],
    blurb: "The highest primate density in Africa, led by over 1,500 wild chimpanzees.",
    img: expChimp,
    to: "/destinations/kibale-forest",
    x: 20, y: 44,
  },
  {
    slug: "jinja-source-of-the-nile",
    name: "Jinja, Source of the Nile",
    region: "Eastern Uganda",
    tags: ["Adventure"],
    blurb: "Grade 3–5 white water rafting where Lake Victoria becomes the Nile.",
    img: nileBridgeAerial,
    to: "/destinations/jinja-source-of-the-nile",
    x: 60, y: 64,
  },
  {
    slug: "rwenzori-mountains",
    name: "Rwenzori Mountains",
    region: "Western Uganda",
    tags: ["Adventure"],
    blurb: "Glaciated peaks on the equator — Africa's third-highest summit.",
    img: sceneRwenzori,
    to: "/destinations/rwenzori-mountains",
    x: 12, y: 48,
  },
  {
    slug: "kidepo-valley",
    name: "Kidepo Valley",
    region: "North-eastern Uganda",
    tags: ["Wildlife"],
    blurb: "Uganda's remotest park — cheetah, ostrich, and total isolation.",
    img: sceneElephants,
    to: "/destinations/kidepo-valley",
    x: 68, y: 12,
  },
  {
    slug: "queen-elizabeth-national-park",
    name: "Queen Elizabeth National Park",
    region: "South-western Uganda",
    tags: ["Wildlife"],
    blurb: "The Kazinga Channel, Kasenyi Plains and Kyambura Gorge chimps.",
    img: sceneLion,
    to: "/destinations/queen-elizabeth-national-park",
    x: 22, y: 50,
  },
  {
    slug: "entebbe",
    name: "Entebbe",
    region: "Central Uganda",
    tags: ["Relaxation"],
    blurb: "Lakeside gateway city, with a chimpanzee sanctuary a boat ride away.",
    img: expChimp,
    to: "/destinations/entebbe",
    x: 48, y: 68,
  },
];

const FILTERS: (Tag | "All")[] = ["All", "Wildlife", "Adventure", "Relaxation"];

/* ---------------- Component ---------------- */

function UgandaExplorer() {
  const [filter, setFilter] = useState<Tag | "All">("All");
  const [active, setActive] = useState<string | null>(null);

  const visible = SPOTS.filter((s) => filter === "All" || s.tags.includes(filter as Tag));
  const activeSpot = SPOTS.find((s) => s.slug === active);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Uganda Explorer</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            The whole country, <em className="italic text-gold">one map.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Every destination we cover, placed in context. Hover a pin to preview it, or
            filter by what draws you.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  filter === f
                    ? "bg-forest text-ivory"
                    : "border border-charcoal/15 text-charcoal/60 hover:border-forest hover:text-forest"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Map + list */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            {/* Map */}
            <div className="relative aspect-square rounded-3xl border border-charcoal/10 bg-charcoal grain md:aspect-[4/3]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-forest">
                <path
                  d="M20 30 Q28 18 42 20 Q60 15 72 26 Q86 34 82 52 Q88 66 78 76 Q66 88 50 84 Q32 88 22 76 Q12 62 18 48 Q14 38 20 30 Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth="0.4"
                />
              </svg>

              {SPOTS.map((s) => {
                const isVisible = visible.includes(s);
                const isActive = active === s.slug;
                return (
                  <button
                    key={s.slug}
                    onMouseEnter={() => setActive(s.slug)}
                    onFocus={() => setActive(s.slug)}
                    onClick={() => setActive(s.slug)}
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      isVisible ? "opacity-100" : "opacity-20"
                    }`}
                    aria-label={s.name}
                  >
                    <span
                      className={`flex items-center justify-center rounded-full bg-gold/30 transition-all duration-500 ${
                        isActive ? "h-8 w-8" : "h-5 w-5"
                      }`}
                    >
                      <span className={`block rounded-full bg-gold transition-all duration-500 ${isActive ? "h-5 w-5" : "h-2.5 w-2.5"}`} />
                    </span>
                  </button>
                );
              })}

              {/* Hover/active tooltip */}
              {activeSpot && (
                <Link
                  to={activeSpot.to}
                  className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl bg-ivory/95 p-3 shadow-luxe backdrop-blur-sm transition-all sm:left-auto sm:right-4 sm:w-80"
                >
                  <img src={activeSpot.img} alt={activeSpot.name} className="h-16 w-16 shrink-0 rounded-xl object-cover"
          loading="lazy"
        />
                  <div className="min-w-0">
                    <div className="text-[0.65rem] uppercase tracking-widest text-forest">{activeSpot.region}</div>
                    <div className="truncate font-display text-base text-charcoal">{activeSpot.name}</div>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-gold">
                      Explore <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* List */}
            <div className="flex flex-col gap-2">
              {visible.map((s) => (
                <Link
                  key={s.slug}
                  to={s.to}
                  onMouseEnter={() => setActive(s.slug)}
                  onFocus={() => setActive(s.slug)}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                    active === s.slug ? "border-forest bg-forest/5" : "border-charcoal/10 hover:border-forest/40"
                  }`}
                >
                  <img src={s.img} alt={s.name} className="h-16 w-16 shrink-0 rounded-xl object-cover"
          loading="lazy"
        />
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/40">{s.region}</div>
                    <div className="font-display text-lg text-charcoal">{s.name}</div>
                    <p className="mt-1 text-sm text-charcoal/60 line-clamp-1">{s.blurb}</p>
                  </div>
                  <span className="shrink-0 text-forest opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Found somewhere you like</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's turn it into <em className="italic text-gold">a real itinerary.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Turn my map into an itinerary
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
