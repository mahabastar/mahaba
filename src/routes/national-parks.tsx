import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { NATIONAL_PARKS, PARK_REGIONS, type NationalPark } from "@/lib/national-parks";
import { SITE_CONFIG, buildWhatsAppHref } from "@/lib/site-config";

import heroGorilla from "@/assets/hero-gorilla.jpg";

const REGION_NOTE: Record<string, string> = {
  "South-western Uganda": "The primate circuit — gorillas, golden monkeys, and volcano country near the Rwanda and DR Congo borders.",
  "Western Uganda": "Uganda's game-viewing heartland — savanna, chimpanzees, crater lakes and the Rwenzori glaciers, usually combined on one loop.",
  "North-western Uganda": "A single, unmissable park built around the Nile's most dramatic stretch.",
  "Eastern Uganda": "Highland country on the Kenyan border — waterfalls, coffee, and a volcano big enough to hike for days.",
  "North-eastern Uganda": "Uganda's wild frontier — remote, semi-arid, and furthest from anywhere else on this list.",
};

export const Route = createFileRoute("/national-parks")({
  head: () => ({
    meta: [
      { title: "Uganda's 10 National Parks — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "All ten of Uganda's national parks in one place, grouped by region — gorillas in Bwindi, tree-climbing lions in Queen Elizabeth, the Nile at Murchison Falls, and more.",
      },
      { property: "og:title", content: "Uganda's 10 National Parks — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/national-parks` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/national-parks` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "National Parks of Uganda",
          itemListElement: NATIONAL_PARKS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${p.name} National Park`,
            url: p.to ? `${SITE_CONFIG.url}${p.to}` : `${SITE_CONFIG.url}/national-parks#${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: NationalParksHub,
});

function ParkCard({ park }: { park: NationalPark }) {
  const inner = (
    <>
      <img
        src={park.img}
        alt={`${park.name} National Park, Uganda`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />

      <div className="absolute left-4 top-4 rounded-full bg-charcoal/60 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-ivory/85 backdrop-blur-sm">
        {park.size}
      </div>
      {!park.to && (
        <div className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
          Guide coming soon
        </div>
      )}

      <div className="absolute inset-x-5 bottom-5">
        <div className="font-display text-2xl text-ivory">{park.name}</div>
        <p className="mt-1 text-sm font-medium text-gold">{park.knownFor}</p>
        <p className="mt-2 max-w-md text-sm text-ivory/70">{park.blurb}</p>
        {park.to ? (
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-ivory/85">
            Explore the park
            <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : (
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-ivory/85">
            Ask us about it directly
            <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  const className = "group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal hover-lift sm:aspect-[16/11]";

  if (park.to) {
    return (
      <Link key={park.slug} to={park.to} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      key={park.slug}
      id={park.slug}
      href={buildWhatsAppHref(`Hi! Could you tell me more about ${park.name} National Park for my Uganda trip?`)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}

function NationalParksHub() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal grain">
        <img src={heroGorilla} alt="Misty forest canopy in a Uganda national park" className="absolute inset-0 h-full w-full object-cover ken-burns opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 text-center md:px-10 md:pb-20">
          <div className="eyebrow !text-gold">Ten Parks, One Country</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda's national parks, <em className="italic text-gold">side by side.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/75">
            Ten parks, five distinct regions, no two alike — from gorilla forest in the south-west
            to the Nile's most violent stretch in the north. Grouped the way Ugandans actually
            travel between them.
          </p>
        </div>
      </section>

      {/* Regions */}
      {PARK_REGIONS.map((region) => {
        const parks = NATIONAL_PARKS.filter((p) => p.region === region);
        return (
          <section key={region} className="bg-ivory">
            <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
              <div className="max-w-2xl">
                <div className="eyebrow">{region}</div>
                <p className="mt-3 text-charcoal/60">{REGION_NOTE[region]}</p>
              </div>
              <div
                className={`mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 ${
                  parks.length >= 3 ? "lg:grid-cols-3" : ""
                }`}
              >
                {parks.map((park) => (
                  <ParkCard key={park.slug} park={park} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Quick-facts table */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <div className="eyebrow">At a Glance</div>
            <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
              All ten, <em className="italic text-forest">side by side.</em>
            </h2>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-charcoal/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 text-xs uppercase tracking-widest text-charcoal/50">
                  <th className="px-5 py-4 font-medium">Park</th>
                  <th className="px-5 py-4 font-medium">Region</th>
                  <th className="px-5 py-4 font-medium">Size</th>
                  <th className="px-5 py-4 font-medium">Known for</th>
                </tr>
              </thead>
              <tbody>
                {NATIONAL_PARKS.map((park) => (
                  <tr key={park.slug} className="border-b border-charcoal/5 last:border-0">
                    <td className="px-5 py-4 font-medium text-charcoal">
                      {park.to ? (
                        <Link to={park.to} className="hover:text-forest">
                          {park.name}
                        </Link>
                      ) : (
                        <a href={`#${park.slug}`} className="hover:text-forest">
                          {park.name}
                        </a>
                      )}
                    </td>
                    <td className="px-5 py-4 text-charcoal/70">{park.region}</td>
                    <td className="px-5 py-4 text-charcoal/70">{park.size}</td>
                    <td className="px-5 py-4 text-charcoal/70">{park.knownFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[1000px] px-6 py-20 text-center md:px-10 md:py-24">
          <h2 className="font-display text-3xl text-ivory md:text-4xl">
            Not sure which parks fit your trip?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ivory/70">
            Tell us how many days you have and what you want to see — we'll match you to the
            right combination.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/build-my-safari"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Help me choose my parks
            </Link>
            <a
              href={buildWhatsAppHref("Hi! I'd like help choosing which Uganda national parks to visit.")}
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
