import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import sceneCulture from "@/assets/scene-culture.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import expLodge from "@/assets/uploads/elephant-road.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Wild Uganda Treks" },
      {
        name: "description",
        content:
          "Wild Uganda Treks is a Uganda-based safari operator built around local expertise, private guiding, and a genuine commitment to conservation and community.",
      },
      { property: "og:title", content: "About Wild Uganda Treks" },
      { property: "og:url", content: `${SITE_CONFIG.url}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/about` }],
  }),
  component: About,
});

const STATS = [
  { value: "11", label: "Destinations covered in detail, from Bwindi to Kidepo" },
  { value: "6", label: "Signature journeys, from a 3-day escape to a 21-day circuit" },
  { value: "100%", label: "Itineraries built on private vehicles, not shared group transport" },
];

const VALUES = [
  {
    title: "Local first",
    body: "We're based in Uganda, not routing you through a foreign call centre. Guides, drivers and planners here know these parks and roads because they work them, not because they read about them.",
  },
  {
    title: "Inspire first, sell last",
    body: "We'd rather you spend ten minutes on our Wildlife Encyclopedia or Seasonal Calendar than on a hard sell. If Uganda is right for you, that becomes obvious on its own.",
  },
  {
    title: "Money that stays here",
    body: "Revenue-sharing, local employment, and direct-from-community bookings for cultural visits and homestays — the practical detail behind the word 'responsible.' See our Responsible Tourism Centre for the specifics.",
  },
  {
    title: "Honest, not polished",
    body: "Where something's uncertain — a receding glacier, a park still recovering its wildlife — we'll say so. A good trip is built on accurate expectations, not brochure language.",
  },
];

function About() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[65svh] w-full overflow-hidden bg-charcoal">
        <img src={sceneCulture} alt="Community members in south-western Uganda" className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="relative mx-auto flex min-h-[65svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <div className="eyebrow !text-gold">About Us</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            A Uganda-based team, <em className="italic text-gold">built around Uganda.</em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Who we are</div>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-charcoal/80 text-pretty">
            <p>
              Wild Uganda Treks is a Uganda-based safari operator. We plan and run trips
              across the country's national parks, forests and lakes — gorilla and
              chimpanzee trekking, savanna game drives, white water on the Nile, and the
              slower, quieter destinations in between.
            </p>
            <p>
              We built this site the way we'd want a trip planned: with real information
              before a sales pitch. A wildlife guide you can search, a calendar that tells
              you honestly which month suits you, a calculator that gives you a number
              before you have to ask for one. The goal is that by the time you talk to us,
              you already know roughly what you want — we just help make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-5xl text-gold md:text-6xl">{s.value}</div>
                <p className="mx-auto mt-4 max-w-xs text-sm text-ivory/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">What guides us</div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-charcoal text-balance md:text-5xl">
            Four things we don't compromise on.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-charcoal/10 pt-6">
                <h3 className="font-display text-xl text-charcoal">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our guides */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="eyebrow !text-gold">Our guides</div>
              <h2 className="mt-4 font-display text-3xl text-ivory text-balance md:text-4xl">
                Drawn from the communities bordering the parks.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ivory/75 md:text-base">
                Many of the rangers, trackers and guides we work with grew up in villages on
                a park boundary — they know the terrain and the wildlife's habits from a
                lifetime spent nearby, not a training manual alone. It's also, practically,
                how tourism revenue reaches the people whose cooperation keeps these parks
                protected. More on how that works on our Responsible Tourism Centre.
              </p>
              <Link
                to="/responsible-tourism"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold hover:text-ivory"
              >
                Responsible Tourism Centre <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroGorilla} alt="Gorilla trekking guide in Bwindi" className="aspect-[3/4] w-full rounded-2xl object-cover"
          loading="lazy"
        />
              <img src={expLodge} alt="Safari lodge" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover"
          loading="lazy"
        />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-forest">Let's talk</div>
          <h2 className="mt-6 font-display text-4xl text-charcoal text-balance md:text-6xl">
            Questions before you commit?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-charcoal/60">
            Reach out directly, or start with a personalised plan.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Contact Us
            </Link>
            <Link
              to="/build-my-safari"
              className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
            >
              Build My Safari
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
