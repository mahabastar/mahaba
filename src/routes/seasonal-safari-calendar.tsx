import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/seasonal-safari-calendar")({
  head: () => ({
    meta: [
      { title: "Seasonal Safari Calendar — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "What's best each month in Uganda — weather, wildlife highlights, and which destinations to prioritise, from dry-season gorilla trekking to green-season birding.",
      },
      { property: "og:title", content: "Seasonal Safari Calendar — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/seasonal-safari-calendar` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/seasonal-safari-calendar` }],
  }),
  component: SeasonalSafariCalendar,
});

/* ---------------- Data ---------------- */

type Season = "Dry" | "Wet";

type MonthInfo = {
  month: string;
  short: string;
  season: Season;
  rainfall: "Low" | "Moderate" | "High";
  tempRange: string;
  highlights: string[];
  bestFor: string[];
  destinations: { name: string; to: string }[];
  crowdNote: string;
};

const MONTHS: MonthInfo[] = [
  {
    month: "January", short: "Jan", season: "Dry", rainfall: "Low", tempRange: "18–28°C",
    highlights: ["Easiest gorilla trekking trails of the year", "Migratory Palearctic birds still present in wetlands", "Clear Nile views on Murchison launch cruises"],
    bestFor: ["Gorilla trekking", "Hiking Sipi Falls", "Photography — clear skies"],
    destinations: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }, { name: "Sipi Falls", to: "/destinations/sipi-falls" }],
    crowdNote: "Peak season — book gorilla permits well in advance.",
  },
  {
    month: "February", short: "Feb", season: "Dry", rainfall: "Low", tempRange: "18–29°C",
    highlights: ["Driest trekking conditions in Bwindi", "Good visibility for tree-climbing lions in Ishasha", "Warm, settled weather across the south-west"],
    bestFor: ["Gorilla & chimp trekking", "Game drives", "Crater lake hikes"],
    destinations: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }, { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" }],
    crowdNote: "Still peak season — lodges fill quickly.",
  },
  {
    month: "March", short: "Mar", season: "Wet", rainfall: "Moderate", tempRange: "17–27°C",
    highlights: ["Rains begin — forests turn deep green", "Fewer visitors on the trekking trails", "Calving season begins for several antelope species"],
    bestFor: ["Value trekking permits", "Lush landscape photography", "Birding"],
    destinations: [{ name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" }, { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    crowdNote: "Shoulder season — better availability and lower rates.",
  },
  {
    month: "April", short: "Apr", season: "Wet", rainfall: "High", tempRange: "17–26°C",
    highlights: ["Long rains at their heaviest", "Waterfalls at their most dramatic", "Excellent birding as resident species breed"],
    bestFor: ["Birding", "Waterfall photography", "Quiet, low-crowd travel"],
    destinations: [{ name: "Sipi Falls", to: "/destinations/sipi-falls" }, { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" }],
    crowdNote: "Low season — some trails muddy, but excellent value.",
  },
  {
    month: "May", short: "May", season: "Wet", rainfall: "High", tempRange: "17–26°C",
    highlights: ["Rains easing toward month-end", "Forest at its most vivid green", "Fewer trekkers on Bwindi's trails"],
    bestFor: ["Budget-conscious trekking", "Slow, scenic travel", "Coffee harvest around Sipi"],
    destinations: [{ name: "Sipi Falls", to: "/destinations/sipi-falls" }, { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    crowdNote: "Lowest season of the year — best permit availability.",
  },
  {
    month: "June", short: "Jun", season: "Dry", rainfall: "Low", tempRange: "17–27°C",
    highlights: ["Dry season returns — trails firm up fast", "Kob rutting displays visible at dawn", "Elephant herds gather along the Nile's banks"],
    bestFor: ["Gorilla trekking", "Game drives at Murchison", "Nile boat cruises"],
    destinations: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }, { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    crowdNote: "Peak season begins — book ahead for July–August.",
  },
  {
    month: "July", short: "Jul", season: "Dry", rainfall: "Low", tempRange: "16–26°C",
    highlights: ["Coolest, driest month in the south-west", "Prime tree-climbing lion sightings in Ishasha", "Long, clear days for hiking"],
    bestFor: ["Tree-climbing lions", "Multi-day hiking", "Chimp tracking"],
    destinations: [{ name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" }, { name: "Sipi Falls", to: "/destinations/sipi-falls" }],
    crowdNote: "Peak season — Uganda's busiest month for trekking.",
  },
  {
    month: "August", short: "Aug", season: "Dry", rainfall: "Low", tempRange: "17–27°C",
    highlights: ["Dry trails continue across the country", "Excellent game viewing at Murchison Falls", "Warm evenings on Lake Bunyonyi"],
    bestFor: ["Gorilla trekking", "Game drives", "Boat safaris"],
    destinations: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }, { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    crowdNote: "Peak season — permits and lodges book out early.",
  },
  {
    month: "September", short: "Sep", season: "Wet", rainfall: "Moderate", tempRange: "17–27°C",
    highlights: ["Short rains begin gently", "Crowds thin as peak season ends", "Landscapes green up again"],
    bestFor: ["Better-value trekking", "Birding as migrants begin arriving", "Photography"],
    destinations: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }, { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" }],
    crowdNote: "Shoulder season — a good balance of weather and value.",
  },
  {
    month: "October", short: "Oct", season: "Wet", rainfall: "Moderate", tempRange: "17–27°C",
    highlights: ["Palearctic migratory birds begin arriving in wetlands", "Occasional afternoon showers, clear mornings", "Fewer visitors on the trails"],
    bestFor: ["Birding", "Quiet trekking", "Cultural encounters"],
    destinations: [{ name: "Murchison Falls", to: "/destinations/murchison-falls" }, { name: "Sipi Falls", to: "/destinations/sipi-falls" }],
    crowdNote: "Low-to-shoulder season — strong value across the board.",
  },
  {
    month: "November", short: "Nov", season: "Wet", rainfall: "High", tempRange: "17–27°C",
    highlights: ["Short rains peak, then begin easing", "Migratory birds well established in wetlands", "Lush, dramatic scenery for photography"],
    bestFor: ["Birding", "Photography", "Off-peak trekking"],
    destinations: [{ name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" }, { name: "Murchison Falls", to: "/destinations/murchison-falls" }],
    crowdNote: "Quietest month of the second half of the year.",
  },
  {
    month: "December", short: "Dec", season: "Dry", rainfall: "Low", tempRange: "17–28°C",
    highlights: ["Dry season returns in time for the holidays", "Migratory birds still present alongside residents", "Clear skies for gorilla trekking and game drives"],
    bestFor: ["Gorilla trekking", "Family safaris", "Festive-season travel"],
    destinations: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }, { name: "Murchison Falls", to: "/destinations/murchison-falls" }],
    crowdNote: "Peak holiday season — book several months ahead.",
  },
];

const SEASON_STYLE: Record<Season, string> = {
  Dry: "bg-gold/15 text-gold",
  Wet: "bg-river/15 text-river",
};

/* ---------------- Component ---------------- */

function SeasonalSafariCalendar() {
  const currentMonthIndex = new Date().getMonth();
  const [active, setActive] = useState(currentMonthIndex);
  const info = MONTHS[active];

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Seasonal Safari Calendar</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda, <em className="italic text-gold">month by month.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Two dry seasons, two wet seasons, and something worth seeing in every one of
            them. Pick a month to find out what's best.
          </p>
        </div>
      </section>

      {/* Month selector */}
      <section className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10">
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-12">
            {MONTHS.map((m, i) => (
              <button
                key={m.month}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                  active === i
                    ? "bg-forest text-ivory"
                    : "border border-charcoal/10 text-charcoal/60 hover:border-forest hover:text-forest"
                }`}
              >
                {m.short}
                {i === currentMonthIndex && (
                  <span className={`h-1 w-1 rounded-full ${active === i ? "bg-gold" : "bg-forest"}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail panel */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10 md:py-24">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-luxe md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${SEASON_STYLE[info.season]}`}>
                {info.season} Season
              </span>
              <span className="text-xs uppercase tracking-widest text-charcoal/40">
                Rainfall: {info.rainfall}
              </span>
              <span className="text-xs uppercase tracking-widest text-charcoal/40">
                {info.tempRange}
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl text-charcoal text-balance md:text-5xl">
              {info.month}
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <div className="eyebrow !text-forest">Highlights this month</div>
                <ul className="mt-4 space-y-3">
                  {info.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-charcoal/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow !text-forest">Best for</div>
                <ul className="mt-4 space-y-3">
                  {info.bestFor.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-charcoal/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-mist p-6">
              <div className="eyebrow !text-gold">Good to know</div>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{info.crowdNote}</p>
            </div>

            <div className="mt-10 border-t border-charcoal/10 pt-8">
              <div className="eyebrow !text-forest">Where to go in {info.month}</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {info.destinations.map((d) => (
                  <Link
                    key={d.to}
                    to={d.to}
                    className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
                  >
                    {d.name} <span aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready to pick your month</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's turn this into <em className="italic text-gold">your itinerary.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan my trip around these months
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
