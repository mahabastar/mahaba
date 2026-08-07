import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import sceneCulture from "@/assets/scene-culture.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/responsible-tourism")({
  head: () => ({
    meta: [
      { title: "Responsible Tourism in Uganda — Conservation & Community" },
      {
        name: "description",
        content:
          "How Uganda's revenue-sharing model turned gorilla tourism into conservation that works — and exactly how Trek Wild Uganda supports rangers, schools and the communities bordering the parks.",
      },
      { property: "og:title", content: "Responsible Tourism in Uganda — Conservation & Community" },
      {
        property: "og:description",
        content:
          "Permit fees, revenue-sharing, local employment and community-owned cultural visits — the practical detail behind responsible travel in Uganda.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_CONFIG.url}/responsible-tourism` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/responsible-tourism` }],

  }),
  component: ResponsibleTourism,
});

/* ---------------- Data ---------------- */

const STATS = [
  { value: "20%", label: "Of Uganda Wildlife Authority's annual park revenue is shared directly with communities bordering the parks." },
  { value: "$10", label: "From every gorilla permit sold goes straight to community projects around Bwindi & Mgahinga — 95% reaches the community level." },
  { value: "35", label: "National parks, wildlife reserves and sanctuaries protected under Uganda's conservation estate." },
  { value: "1,000+", label: "Mountain gorillas now living wild — more than half the world's population found in Uganda." },
];

const PILLARS = [
  {
    title: "Wildlife Conservation",
    img: heroGorilla,
    body: "Every permit fee funds ranger salaries, anti-poaching patrols, veterinary monitoring and habitat protection. We work only with parks, conservancies and operators who put a measurable share of tourism revenue back into protecting the species you've come to see.",
  },
  {
    title: "Community Partnerships",
    img: sceneCulture,
    body: "Trackers, guides, porters and lodge staff across our itineraries are drawn overwhelmingly from villages bordering the parks. Revenue-sharing schemes fund schools, clinics, water systems and roads in the communities that live alongside — and protect — Uganda's wildlife.",
  },
  {
    title: "Cultural Respect",
    img: expCoffee,
    body: "Village walks, coffee tours and Batwa cultural encounters are arranged directly with the communities involved, on their terms, at fair rates. We treat cultural visits as an exchange, not a photo opportunity — always with consent, and never staged for a schedule.",
  },
  {
    title: "Environmental Stewardship",
    img: expLodge,
    body: "We favour lodges and camps that manage their own water, limit single-use plastic and build with minimal impact on the surrounding forest and savannah. Where a lower-impact option exists at a similar standard of comfort, that's the one we recommend first.",
  },
];

const TRAVELER_TIPS = [
  "Keep the required distance from gorillas and other wildlife — it protects them from human disease as much as it protects you.",
  "Never trek if you're feeling unwell; mountain gorillas share close to 98% of our DNA and are highly susceptible to human respiratory illness.",
  "Tip guides, rangers and porters fairly and directly — it's one of the most meaningful income transfers a visit makes.",
  "Ask before photographing people, and support community-guided cultural visits rather than informal roadside stops.",
  "Carry out what you carry in, and choose lodges that visibly manage water and plastic responsibly.",
  "Buy directly from local cooperatives — coffee, crafts and produce — where a far greater share of the price stays in the community.",
];

/* ---------------- Component ---------------- */

function ResponsibleTourism() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal grain">
        <img src={sceneCulture} alt="Community members in south-western Uganda" className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Responsible Tourism Centre</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Travel that <em className="italic text-gold">gives back.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Uganda's mountain gorillas are the only great ape population on earth whose
            numbers are rising. That did not happen by fencing people out — it happened by
            giving the families who live beside the forest a stake in keeping it standing.
            Your trip is part of that arrangement.
          </p>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-3xl border border-charcoal/10 bg-white p-6 text-center md:p-8">
                <div className="font-display text-4xl text-forest md:text-5xl">{s.value}</div>
                <p className="mt-3 text-xs leading-relaxed text-charcoal/60">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-charcoal/40">
            Figures based on Uganda Wildlife Authority's published revenue-sharing policy and conservation estate.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">How we approach it</div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-ivory text-balance md:text-5xl">
            Four commitments that shape every itinerary.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70">
            None of these add cost to your trip. They simply decide which lodge we book,
            which guide meets you, and who is paid when you walk into a village.
          </p>


          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-3xl border border-ivory/10">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover"
          loading="lazy"
        />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ivory">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler tips */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Traveling responsibly</div>
          <h2 className="mt-4 font-display text-4xl text-charcoal text-balance md:text-5xl">
            What you can do, while you're here.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            Small habits, repeated by every visitor, are what make the difference between
            tourism that erodes a place and tourism that pays for its protection.
          </p>

          <ul className="mt-10 space-y-5">
            {TRAVELER_TIPS.map((t) => (
              <li key={t} className="flex gap-4 rounded-2xl bg-mist p-5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm leading-relaxed text-charcoal/75">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Read more */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:px-10 md:py-28">
          <div className="eyebrow !text-gold">Go deeper</div>
          <h2 className="mt-4 font-display text-3xl text-ivory text-balance md:text-4xl">
            Read more in the Uganda Travel Journal
          </h2>
          <div className="mt-8">
            <Link
              to="/travel-journal/$slug"
              params={{ slug: "inside-ugandas-community-conservation-model" }}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Inside Uganda's Community Conservation Model <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Ready to travel with purpose</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's build a trip <em className="italic text-gold">that gives back.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/70">
            Tell us what matters to you — community stays, a conservation talk with the
            rangers, buying straight from a women's cooperative — and we'll write it into
            the days rather than bolt it on at the end.
          </p>

          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan a trip that gives back
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
