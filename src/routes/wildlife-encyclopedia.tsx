import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneCrane from "@/assets/scene-crane.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/wildlife-encyclopedia")({
  head: () => ({
    meta: [
      { title: "Wildlife Encyclopedia — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "A searchable guide to Uganda's mammals, primates, birds and reptiles — what to look for, where to see it, and when.",
      },
      { property: "og:title", content: "Wildlife Encyclopedia — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/wildlife-encyclopedia` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/wildlife-encyclopedia` }],
  }),
  component: WildlifeEncyclopedia,
});

/* ---------------- Data ---------------- */

type Category = "Mammals" | "Primates" | "Birds" | "Reptiles";

type Species = {
  id: string;
  name: string;
  latin: string;
  category: Category;
  status: "Endangered" | "Vulnerable" | "Near Threatened" | "Least Concern";
  blurb: string;
  bestSeen: string;
  whereToSee: { name: string; to: string }[];
  img?: string;
};

const SPECIES: Species[] = [
  {
    id: "mountain-gorilla",
    name: "Mountain Gorilla",
    latin: "Gorilla beringei beringei",
    category: "Primates",
    status: "Endangered",
    blurb:
      "Uganda's signature encounter. Families are tracked daily through Bwindi's forest, offering a rare hour face-to-face with one of our closest living relatives.",
    bestSeen: "Year-round, drier months (Jun–Aug, Dec–Feb) ease the trek",
    whereToSee: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    img: heroGorilla,
  },
  {
    id: "chimpanzee",
    name: "Chimpanzee",
    latin: "Pan troglodytes",
    category: "Primates",
    status: "Endangered",
    blurb:
      "Boisterous, intelligent and highly social, chimp communities move through the forest canopy in loose troops — expect noise, drama and the occasional charging display.",
    bestSeen: "Year-round; early morning tracking gives the best odds",
    whereToSee: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    img: expChimp,
  },
  {
    id: "golden-monkey",
    name: "Golden Monkey",
    latin: "Cercopithecus kandti",
    category: "Primates",
    status: "Endangered",
    blurb:
      "A flash of burnt-orange fur high in the bamboo of the Virunga foothills — playful, fast-moving, and found almost nowhere else on Earth.",
    bestSeen: "Year-round, best in the Virunga bamboo zone",
    whereToSee: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
  },
  {
    id: "african-elephant",
    name: "African Elephant",
    latin: "Loxodonta africana",
    category: "Mammals",
    status: "Endangered",
    blurb:
      "Herds move along ancient river paths through Murchison Falls, often crossing the Nile itself — matriarchs leading calves down to drink at dusk.",
    bestSeen: "Dry season (Dec–Feb, Jun–Sep) for easier river-crossing sightings",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
    img: sceneElephants,
  },
  {
    id: "tree-climbing-lion",
    name: "Tree-Climbing Lion",
    latin: "Panthera leo",
    category: "Mammals",
    status: "Vulnerable",
    blurb:
      "One of only two populations on the continent known for lounging in fig trees — a Ugandan curiosity found in the Ishasha sector, silhouetted against the plains.",
    bestSeen: "Dry season mornings, when they climb to escape the heat and biting flies",
    whereToSee: [{ name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" }],
    img: sceneLion,
  },
  {
    id: "african-buffalo",
    name: "African Buffalo",
    latin: "Syncerus caffer",
    category: "Mammals",
    status: "Near Threatened",
    blurb:
      "Herds of hundreds gather on the savannah at Murchison and Ishasha — one of the 'Big Five' and, by reputation, the most unpredictable when alone.",
    bestSeen: "Year-round on open savannah, especially near water in the dry season",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
    ],
  },
  {
    id: "uganda-kob",
    name: "Uganda Kob",
    latin: "Kobus kob thomasi",
    category: "Mammals",
    status: "Least Concern",
    blurb:
      "A russet-coated antelope and Uganda's national emblem — males gather on breeding grounds called leks, performing display duels at dawn.",
    bestSeen: "Year-round; lek displays peak at sunrise",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
  },
  {
    id: "rothschilds-giraffe",
    name: "Rothschild's Giraffe",
    latin: "Giraffa camelopardalis rothschildi",
    category: "Mammals",
    status: "Near Threatened",
    blurb:
      "Among the rarest giraffe subspecies left in the wild, distinguished by their white 'socks' — Murchison's northern bank is one of their last strongholds.",
    bestSeen: "Year-round on the savannah north of the Nile",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
  },
  {
    id: "hippopotamus",
    name: "Hippopotamus",
    latin: "Hippopotamus amphibius",
    category: "Mammals",
    status: "Vulnerable",
    blurb:
      "Uganda's rivers and lakes hold some of Africa's densest hippo populations — mostly submerged by day, grazing the shorelines after dark.",
    bestSeen: "Year-round on Nile boat cruises and Lake Bunyonyi's calmer bays",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
  },
  {
    id: "leopard",
    name: "Leopard",
    latin: "Panthera pardus",
    category: "Mammals",
    status: "Vulnerable",
    blurb:
      "Solitary and superbly camouflaged, Uganda's leopards are more often heard than seen — a rasping cough in the dark, or a tail draped from a acacia branch.",
    bestSeen: "Night game drives improve the odds considerably",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
  },
  {
    id: "grey-crowned-crane",
    name: "Grey Crowned Crane",
    latin: "Balearica regulorum",
    category: "Birds",
    status: "Endangered",
    blurb:
      "Uganda's national bird, crowned with a spray of golden feathers — pairs mate for life and perform an elaborate, bouncing courtship dance.",
    bestSeen: "Year-round in wetlands and open grassland countrywide",
    whereToSee: [{ name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" }],
    img: sceneCrane,
  },
  {
    id: "shoebill-stork",
    name: "Shoebill Stork",
    latin: "Balaeniceps rex",
    category: "Birds",
    status: "Vulnerable",
    blurb:
      "A prehistoric-looking giant that stands stock-still for hours in the papyrus swamps, waiting to strike lungfish with its enormous clog-shaped bill.",
    bestSeen: "Dry season, early morning swamp canoe trips",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
    img: expShoebill,
  },
  {
    id: "african-fish-eagle",
    name: "African Fish Eagle",
    latin: "Haliaeetus vocifer",
    category: "Birds",
    status: "Least Concern",
    blurb:
      "Its ringing call is the sound of the Nile — a white-headed raptor that plucks fish from the water in a low, talons-first swoop.",
    bestSeen: "Year-round along the Nile and Lake Bunyonyi's shoreline",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
  },
  {
    id: "nile-crocodile",
    name: "Nile Crocodile",
    latin: "Crocodylus niloticus",
    category: "Reptiles",
    status: "Least Concern",
    blurb:
      "Some of the largest crocodiles in Africa bask along the Nile's banks below Murchison Falls, occasionally topping five metres in length.",
    bestSeen: "Year-round, most visible basking mid-morning",
    whereToSee: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }],
  },
  {
    id: "nile-monitor",
    name: "Nile Monitor Lizard",
    latin: "Varanus niloticus",
    category: "Reptiles",
    status: "Least Concern",
    blurb:
      "Africa's largest lizard, a powerful swimmer often seen patrolling riverbanks and lakeshores for eggs, crabs and carrion.",
    bestSeen: "Year-round along rivers, lakes and wetland edges",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
  },
];

const CATEGORIES: (Category | "All")[] = ["All", "Mammals", "Primates", "Birds", "Reptiles"];

const STATUS_COLOR: Record<Species["status"], string> = {
  Endangered: "text-destructive",
  Vulnerable: "text-gold",
  "Near Threatened": "text-river",
  "Least Concern": "text-forest",
};

/* ---------------- Component ---------------- */

function WildlifeEncyclopedia() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(Category | "All")>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SPECIES.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = !q || s.name.toLowerCase().includes(q) || s.latin.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Wildlife Encyclopedia</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Know it <em className="italic text-gold">before you see it.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Mammals, primates, birds and reptiles found across Uganda's parks and lakes —
            what to look for, and where you're most likely to find it.
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name…"
                className="w-full rounded-full border border-charcoal/15 bg-white py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
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
        </div>
      </section>

      {/* Results */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm text-charcoal/50">
            {results.length} {results.length === 1 ? "species" : "species"} found
          </p>

          {results.length === 0 ? (
            <div className="mt-10 rounded-2xl bg-mist p-10 text-center text-charcoal/60">
              No matches — try a different search or category.
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((s) => (
                <article
                  key={s.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white hover-lift"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep/10">
                    {s.img ? (
                      <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-forest/10 to-earth/10 text-forest/40">
                        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M4 20c3-4 5-10 8-10s5 6 8 10" />
                          <circle cx="12" cy="7" r="2.5" />
                        </svg>
                        <span className="text-[0.65rem] uppercase tracking-widest">Photo coming soon</span>
                      </div>
                    )}
                    <div className="absolute left-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-ivory backdrop-blur-sm">
                      {s.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl text-charcoal">{s.name}</h3>
                    <p className="mt-0.5 text-xs italic text-charcoal/40">{s.latin}</p>
                    <div className={`mt-3 text-xs font-medium uppercase tracking-widest ${STATUS_COLOR[s.status]}`}>
                      {s.status}
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{s.blurb}</p>
                    <p className="mt-4 text-xs text-charcoal/50">
                      <span className="text-charcoal/40">Best seen: </span>{s.bestSeen}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 border-t border-charcoal/10 pt-4">
                      {s.whereToSee.map((w) => (
                        <Link
                          key={w.to}
                          to={w.to}
                          className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-gold hover:text-forest"
                        >
                          {w.name} <span aria-hidden>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready to see it for yourself</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's build a trip around <em className="italic text-gold">what you want to see.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan a trip around this wildlife
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
