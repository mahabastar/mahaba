import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import sceneFalls from "@/assets/scene-falls.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import gorillaBacklit from "@/assets/gorilla-lookup.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/wild-uganda-tv")({
  head: () => ({
    meta: [
      { title: "Wild Uganda TV — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Destination films, wildlife clips, culture and traveller stories from across Uganda — Trek Wild Uganda' video hub.",
      },
      { property: "og:title", content: "Wild Uganda TV — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/wild-uganda-tv` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/wild-uganda-tv` }],
  }),
  component: WildUgandaTV,
});

/* ---------------- Data ---------------- */

type VideoCategory = "Destination Films" | "Wildlife Clips" | "Culture & Community" | "Traveller Stories";

type Video = {
  id: string;
  title: string;
  category: VideoCategory;
  duration: string;
  img: string;
  teaser: string;
  related?: { label: string; to: string; params?: Record<string, string> };
};

const VIDEOS: Video[] = [
  {
    id: "bwindi-silverback",
    title: "Bwindi: A Silverback's Domain",
    category: "Destination Films",
    duration: "4:12",
    img: gorillaBacklit,
    teaser: "Following a single trek into Bwindi's undergrowth, from the trailhead to an hour spent with a habituated gorilla family.",
    related: { label: "Read the story", to: "/travel-journal/$slug", params: { slug: "the-silverbacks-silence" } },
  },
  {
    id: "murchison-nile",
    title: "Murchison: Where the Nile Roars",
    category: "Destination Films",
    duration: "3:45",
    img: sceneFalls,
    teaser: "The entire Nile forced through a 7-metre gorge — filmed from the water, the cliff top, and the air.",
    related: { label: "Explore Murchison Falls", to: "/destinations/murchison-falls" },
  },
  {
    id: "sipi-terraces",
    title: "Sipi's Misty Terraces",
    category: "Destination Films",
    duration: "3:20",
    img: expSipi,
    teaser: "Three waterfalls and a ridge of coffee terraces on the slopes of Mount Elgon, filmed at first light.",
    related: { label: "Explore Sipi Falls", to: "/destinations/sipi-falls" },
  },
  {
    id: "tree-climbing-lions",
    title: "Tree-Climbing Lions of Ishasha",
    category: "Wildlife Clips",
    duration: "3:10",
    img: sceneLion,
    teaser: "One of only two lion populations on the continent known to climb — filmed lounging in Ishasha's fig trees.",
    related: { label: "Explore Ishasha", to: "/destinations/tree-climbing-lions" },
  },
  {
    id: "chasing-shoebill",
    title: "Chasing the Shoebill",
    category: "Wildlife Clips",
    duration: "2:30",
    img: expShoebill,
    teaser: "A dawn canoe launch into Murchison's papyrus swamp in search of one of the world's strangest-looking birds.",
    related: { label: "Read the story", to: "/travel-journal/$slug", params: { slug: "chasing-the-shoebill" } },
  },
  {
    id: "tea-coffee-terraces",
    title: "Tea & Coffee, From Terrace to Cup",
    category: "Culture & Community",
    duration: "5:00",
    img: expCoffee,
    teaser: "Following a handful of arabica cherries from a Sipi hillside to the roasting pan — plus the tea estates further west, where the same terraced-hillside rhythm shapes daily life.",
    related: { label: "Read the story", to: "/travel-journal/$slug", params: { slug: "coffee-from-bean-to-fire" } },
  },
  {
    id: "kigezi-homestay",
    title: "A Day in a Kigezi Homestay",
    category: "Culture & Community",
    duration: "4:30",
    img: sceneCulture,
    teaser: "An overnight stay with a family in the terraced hills near Lake Bunyonyi — meals cooked together, and an evening of stories by the fire.",
    related: { label: "Responsible Tourism Centre", to: "/responsible-tourism" },
  },
  {
    id: "voices-from-the-trail",
    title: "Voices from the Trail",
    category: "Traveller Stories",
    duration: "6:15",
    img: expLodge,
    teaser: "Travellers on what they didn't expect to feel — from a first gorilla encounter to a quiet evening on Lake Bunyonyi.",
    related: { label: "Build My Safari", to: "/build-my-safari" },
  },
];

const CATEGORIES: (VideoCategory | "All")[] = ["All", "Destination Films", "Wildlife Clips", "Culture & Community", "Traveller Stories"];

/* ---------------- Component ---------------- */

function WildUgandaTV() {
  const [category, setCategory] = useState<VideoCategory | "All">("All");
  const [selected, setSelected] = useState<Video | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const visible = category === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === category);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Wild Uganda TV</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda, <em className="italic text-gold">in motion.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Destination films, wildlife clips, culture and traveller stories — our video
            library is in production. Here's what's coming.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
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

      {/* Grid */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v)}
                className="group relative block aspect-video overflow-hidden rounded-2xl text-left"
              >
                <img src={v.img} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

                <div className="absolute right-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
                  Coming Soon
                </div>
                <div className="absolute left-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[0.65rem] text-ivory/80 backdrop-blur-sm">
                  {v.duration}
                </div>

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ivory/90 text-forest shadow-luxe transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>

                <div className="absolute inset-x-4 bottom-4">
                  <div className="text-[0.65rem] uppercase tracking-widest text-gold-soft">{v.category}</div>
                  <div className="mt-1 font-display text-lg text-ivory">{v.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-2 shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <img src={selected.img} alt={selected.title} className="h-full w-full object-cover"
          loading="lazy"
        />
              <div className="absolute inset-0 bg-charcoal/40" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-ivory/90 text-forest">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-charcoal/60 text-ivory"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-widest text-gold">{selected.category} · {selected.duration}</div>
              <h3 className="mt-2 font-display text-2xl text-charcoal">{selected.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{selected.teaser}</p>
              <p className="mt-4 rounded-xl bg-mist px-4 py-3 text-xs text-charcoal/50">
                This film is currently in production. In the meantime:
              </p>
              {selected.related && (
                <Link
                  to={selected.related.to}
                  params={selected.related.params}
                  onClick={() => setSelected(null)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
                >
                  {selected.related.label} <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
