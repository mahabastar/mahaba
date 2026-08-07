import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import sceneCulture from "@/assets/scene-culture.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import founderXavier from "@/assets/founders/xavier-asaaba.png";
import founderHerbert from "@/assets/founders/herbert-muzoora.png";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trek Wild Uganda — Ugandan-Owned Safari Guides" },
      {
        name: "description",
        content:
          "Meet the Ugandan guides behind Trek Wild Uganda: 24 years of combined field experience, private vehicles on every itinerary, and a working commitment to conservation and the communities beside the parks.",
      },
      { property: "og:title", content: "About Trek Wild Uganda — Ugandan-Owned Safari Guides" },
      {
        property: "og:description",
        content:
          "Two Ugandan-born guides, 24 years in the field, and a company built on local knowledge, honest advice and revenue that stays in Uganda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    body: "We are based in Uganda, not routing you through a foreign call centre. The guides, drivers and planners who answer your questions know these parks and these roads because they work them every week — which is why the advice you get is specific rather than general.",
  },
  {
    title: "Inspire first, sell last",
    body: "We would rather you spend ten minutes in our Wildlife Encyclopedia or the Seasonal Safari Calendar than sit through a pitch. If Uganda is the right country for your next trip, that becomes obvious on its own — and if a different month or a shorter route suits you better, we will say so.",
  },
  {
    title: "Money that stays here",
    body: "Revenue-sharing with park-adjacent communities, local employment, and cultural visits and homestays booked directly with the families who host them. That is the practical detail behind the word 'responsible' — the Responsible Tourism Centre sets out exactly where it goes.",
  },
  {
    title: "Honest, not polished",
    body: "Where something is uncertain — a receding Rwenzori glacier, a park still rebuilding its wildlife numbers, a gorilla group that moved high up the ridge — we tell you before you book. A good trip is built on accurate expectations, not brochure language.",
  },
];

const FOUNDERS = [
  {
    name: "Xavier Asaaba",
    photo: founderXavier,
    photoAlt:
      "Xavier Asaaba, co-founder of Trek Wild Uganda, at the snowy summit of Margherita Peak in the Rwenzori Mountains",
    role: "Co-founder & Lead Guide",
    body: "Xavier has spent over a decade leading treks through Uganda's forests and savannahs, and has stood on the summit of Margherita Peak more times than he can comfortably count. He reads terrain and weather the way other people read a timetable — where a gorilla family is likely to have nested, when the light over Ishasha will be worth the early start, how to keep a group calm and curious when the trail turns to mud. Guests remember him for the quiet moments as much as the big ones.",
  },
  {
    name: "Herbert Muzoora",
    photo: founderHerbert,
    photoAlt:
      "Herbert Muzoora, co-founder of Trek Wild Uganda, in Trek Wild Uganda branded cap and shirt in the forest",
    role: "Co-founder & Head of Journeys",
    body: "Herbert brings twelve years of hands-on experience and an unusually sharp instinct for logistics across Uganda's more remote corners — Kidepo, Karamoja, the Semliki valley. Long before Trek Wild Uganda existed he had a reputation for turning transfer days into the part of the trip people talk about afterwards: a story at the right moment, a detour to a roadside market, a stop at a viewpoint that is not on any map. He plans every itinerary personally.",
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

      {/* Intro / story */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Our story</div>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-charcoal/80 text-pretty">
            <p>
              Trek Wild Uganda was built on one simple idea: the best journeys come from
              people who actually know the land. Not a call centre in another time zone, not
              a brochure written at a desk — guides who have spent their working lives in
              these forests, on these roads and at these viewpoints, and who go home to
              them afterwards.
            </p>
            <p>
              Between our two founders sit twenty-four years of professional guiding across
              Uganda. Years of tracking gorillas in Bwindi before the mist lifts off the
              ridge, of reading which way a herd will move at Paraa, of knowing which lodge
              kitchen will still feed you at ten at night after a long transfer from Kidepo.
              That knowledge isn't something a company can buy in; it accumulates one trip
              at a time, one wrong turn at a time.
            </p>
            <p>
              We also grew up with these places as neighbours rather than attractions. The
              forest edge at Bwindi is farmland and school runs as well as gorilla habitat.
              Ishasha is a fishing village before it is a lion sighting. Part of our job is
              to make sure you meet the country that way too — invited into it, not simply
              driven through it — and that the money you spend reaches the households whose
              cooperation keeps these parks standing.
            </p>
            <p>
              We built this site the way we would want a trip planned: real information
              before a sales pitch. A wildlife guide you can search, a seasonal calendar
              that tells you honestly which month suits you, a budget calculator that gives
              you a number before you have to ask for one. Every photograph here was taken
              by us, on our own trips. By the time you speak to us, you already know roughly
              what you want — our work is to make it run beautifully.
            </p>

          </div>
        </div>
      </section>

      {/* Meet the founders */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow !text-gold">Meet the founders</div>
            <h2 className="mt-4 font-display text-4xl text-ivory text-balance md:text-5xl">
              Xavier Asaaba &amp; Herbert Muzoora — <em className="italic text-gold">your guides to the Pearl of Africa.</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/75">
              Two Ugandan-born guides with a combined twenty-four years in the field. One
              of them will read your enquiry, and one of them will almost certainly be
              standing at Entebbe arrivals when you land.
            </p>

          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <article
                key={f.name}
                className="overflow-hidden rounded-3xl border border-ivory/12 bg-charcoal/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
                  <img
                    src={f.photo}
                    alt={f.photoAlt}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="font-display text-2xl text-ivory">{f.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-gold">{f.role}</div>
                  <p className="mt-5 text-sm leading-relaxed text-ivory/75">{f.body}</p>
                </div>
              </article>
            ))}
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
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/70">
            These are not marketing lines. They are the four decisions that most often
            change how a Uganda trip actually feels on the ground.
          </p>

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
                Most of the rangers, trackers and guides we work with grew up in villages on
                a park boundary. They read the terrain and the animals' habits from a
                lifetime spent alongside them, not from a training manual — which is why a
                tracker can tell you a gorilla family fed here two hours ago from a bent
                stem you would have walked straight past. It is also, practically, how
                tourism money reaches the households whose cooperation keeps these parks
                protected: wages, permit revenue-sharing, school fees, and craft and produce
                bought locally. Our Responsible Tourism Centre sets out the specifics.
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
            Tell us what you're hoping for.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-charcoal/60">
            Ask us anything — the right month, whether the trek is within your fitness,
            how much it really costs. A founder replies, usually within a day, and there
            is no obligation attached to the conversation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Talk to Xavier or Herbert
            </Link>
            <Link
              to="/build-my-safari"
              className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
            >
              Start planning my trip
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
