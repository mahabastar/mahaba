import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  SITE_CONFIG,
  buildWhatsAppHref,
  getSiteUrl,
  getVerifiedSocialProfiles,
} from "@/lib/site-config";
import { JOURNAL_POSTS } from "@/lib/journal-posts";
import { JOURNEYS } from "@/lib/journeys";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import sceneCrane from "@/assets/scene-crane.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import expBalloon from "@/assets/exp-balloon.jpg";
import boatCruiseMurchison from "@/assets/gallery/boat-cruise-7.jpg";
import batwaDanceCulture from "@/assets/gallery/batwa-dance-2.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import advRwenzoriHikers from "@/assets/gallery/adventure-rwenzori-hikers.jpg";
import g_gorilla_silverback from "@/assets/gallery/gorilla-silverback.jpg";
import g_source_of_the_nile_1 from "@/assets/gallery/jinja-nile-bridge.jpg";
import g_tree_lion from "@/assets/gallery/tree-lion.jpg";
import g_shoebill_1 from "@/assets/gallery/shoebill-1.jpg";
import g_chimp_trekking_1 from "@/assets/gallery/chimp-trekking-1.jpg";
import g_pearl_of_africa from "@/assets/gallery/pearl-of-africa.jpg";

export const Route = createFileRoute("/")({
    head: () => {
    const title =
      "Uganda Safari Packages & Gorilla Trekking | Trek Wild Uganda";

    const description =
      "Explore Uganda safari packages with local guides, gorilla trekking in Bwindi, chimpanzee trekking in Kibale, wildlife safaris and customized Uganda trips.";

    const canonicalUrl = getSiteUrl("/");

    const socialImage =
      "https://storage.googleapis.com/gpt-engineer-file-uploads/GFmBvthTZXOQLte29ny3bTtPx8W2/social-images/social-1786073343154-social-image.webp";

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "robots",
          content: "index,follow,max-image-preview:large",
        },

        {
          property: "og:site_name",
          content: SITE_CONFIG.name,
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: canonicalUrl,
        },
        {
          property: "og:image",
          content: socialImage,
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: socialImage,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "@id": `${SITE_CONFIG.url}/#organization`,
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            logo: getSiteUrl("/favicon.png"),
            image: socialImage,
            description:
              "Ugandan-owned, locally guided safari company offering gorilla trekking, chimpanzee tracking, wildlife safaris, birding, hiking and cultural journeys across Uganda.",
            telephone: SITE_CONFIG.phoneWhatsApp,
            email: SITE_CONFIG.email,
            areaServed: {
              "@type": "Country",
              name: "Uganda",
            },
            sameAs: getVerifiedSocialProfiles(),
          }),
        },
      ],
    };
  },
      {
        name: "description",
        content:
          "Explore Uganda safari packages with local guides, gorilla trekking in Bwindi, chimpanzee trekking in Kibale, wildlife safaris and customized Uganda trips.",
      },
      { property: "og:title", content: "Uganda Safaris & Gorilla Trekking | Trek Wild Uganda" },
      {
        property: "og:description",
        content:
          "Private, locally guided Uganda safaris — mountain gorillas in Bwindi, chimpanzees in Kibale, tree-climbing lions, the source of the Nile and the Rwenzori peaks. Planned in Kampala by [...]
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content:
          "Private, locally guided Uganda safaris — mountain gorillas in Bwindi, chimpanzees in Kibale, tree-climbing lions, the source of the Nile and the Rwenzori peaks. Planned in Kampala by [...]
      },
      { property: "og:url", content: `${SITE_CONFIG.url}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/` }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          telephone: `+${SITE_CONFIG.whatsappNumber}`,
          email: SITE_CONFIG.email,
          areaServed: "Uganda",
          sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.tiktok],
        }),
      },
    ],
  }),
  component: Home,
});

/* ---------------- Reveal-on-scroll hook ---------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal grain">
      <div className="absolute inset-0">
        <img
          src={heroGorilla}
          alt="Silverback mountain gorilla in Bwindi rainforest at dawn"
          width={1920}
          height={1280}
          className="h-full w-full object-cover ken-burns"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <div className="max-w-3xl reveal">
          <div className="mb-6 flex items-center gap-3 text-ivory/80">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow !text-gold">The Pearl of Africa</span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] text-ivory text-balance">
            Discover the <em className="italic text-gold">Pearl</em>
            <br /> of Africa
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85 md:text-xl">
            Mountain gorillas in mist-hung forest. The Nile leaving Lake Victoria on its
            6,650-kilometre journey north. Glaciers on the equator, and villages where the
            welcome is genuine. Uganda holds all of it inside a country the size of Britain —
            and we were born here to show it to you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/uganda-explorer"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-medium tracking-wide text-ivory shadow-md transition-all duration-500 hover:scale-105 h[...]
            >
              Explore Uganda
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/build-my-safari"
              className="inline-flex items-center gap-3 rounded-full border border-forest/70 px-7 py-4 text-sm font-medium tracking-wide text-ivory backdrop-blur-md transition-colors hover:border[...]
            >
              Plan my Uganda safari
            </Link>
          </div>
        </div>

        {/* meta strip */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ivory/15 pt-8 text-ivory/80 md:grid-cols-4">
          {[
            ["10", "National Parks"],
            ["1,000+", "Bird Species"],
            ["~½", "of World's Gorillas"],
            ["1", "Source of the Nile"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-gold md:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ivory/60">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#discover"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 flex h-11 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-ivory/40"
        aria-label="Scroll"
      />
    </section>
  );
}

/* ---------------- Scroll storytelling ---------------- */
const scenes = [
  { n: "01", title: "Welcome to Uganda", sub: "Where nature still sets the pace, and the welcome is personal.", img: sceneBunyonyi },
  { n: "02", title: "Home of Mountain Gorillas", sub: "Roughly half the world's remaining population lives in these hills.", img: heroGorilla },
  { n: "03", title: "Africa's Primate Capital", sub: "Thirteen species share one forest — and the noise at dawn proves it.", img: expChimp },
  { n: "04", title: "Where the Nile Begins", sub: "The world's longest river starts its journey here, at Jinja.", img: sceneFalls },
  { n: "05", title: "Tree-Climbing Lions", sub: "In Ishasha, whole prides doze in the fig branches.", img: sceneLion },
  { n: "06", title: "A Birder's Paradise", sub: "Over 1,000 species, including the improbable shoebill.", img: sceneCrane },
  { n: "07", title: "Snow on the Equator", sub: "The Rwenzori — the Mountains of the Moon, glaciers and all.", img: sceneRwenzori },
  { n: "08", title: "Warm Smiles. Rich Cultures.", sub: "More than fifty languages, and one shared instinct for hospitality.", img: sceneCulture },
  { n: "09", title: "Golden Hour on the Plains", sub: "Elephant herds crossing a sky that turns copper in minutes.", img: sceneElephants },
  { n: "10", title: "Your Journey Starts Here", sub: "Tell us what you want to feel. We'll build the rest.", img: ctaSunset },
];


function Discover() {
  return (
    <section id="discover" className="relative bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          eyebrow="Uganda in ten scenes"
          title={<>A country <em className="italic text-forest">rewritten</em> by every horizon.</>}
          copy="Ten scenes that explain why travellers keep calling Uganda the best-kept secret in East Africa. Scroll slowly — each one is a place you can actually stand in."
        />


        <div className="mt-20 space-y-24 md:space-y-40">
          {scenes.map((s, i) => (
            <SceneBlock key={s.n} scene={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SceneBlock({ scene, index }: { scene: typeof scenes[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const flip = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="group relative overflow-hidden rounded-3xl bg-charcoal/5 shadow-luxe">
          <img
            src={scene.img}
            alt={scene.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[2000ms] ease-luxe group-hover:scale-105"
          />
          <div className="absolute left-6 top-6 rounded-full glass-dark px-4 py-1.5 text-xs tracking-widest text-ivory">
            Scene {scene.n}
          </div>
        </div>
      </div>
      <div className={`md:col-span-5 ${flip ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
        <div className="eyebrow mb-4">Chapter {scene.n}</div>
        <h3 className="font-display text-4xl leading-tight text-charcoal text-balance md:text-6xl">
          {scene.title}
        </h3>
        <p className="mt-6 text-lg text-charcoal/70">{scene.sub}</p>
      </div>
    </div>
  );
}

/* ---------------- Section header helper ---------------- */
function SectionHeader({
  eyebrow,
  title,
  copy,
  invert = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div className={`eyebrow ${invert ? "!text-gold" : ""}`}>{eyebrow}</div>
      <h2
        className={`mt-5 font-display text-4xl text-balance md:text-6xl ${
          invert ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 text-lg md:text-xl ${invert ? "text-ivory/75" : "text-charcoal/70"}`}>
          {copy}
        </p>
      )}
    </div>
  );
}

/* ---------------- Why Uganda ---------------- */
const whyCards = [
  { title: "Mountain Gorillas", desc: "Bwindi is one of only two places on earth where mountain gorillas survive. One hour, a few metres apart, and a habituation programme that has helped their n[...]
  { title: "Source of the Nile", desc: "Stand at Jinja where the world's longest river leaves Lake Victoria — the point European explorers spent decades searching for.", img: g_source_of_the_ni[...]
  { title: "Tree-Climbing Lions", desc: "In the Ishasha sector of Queen Elizabeth, lions rest in fig trees — behaviour recorded in only a handful of places in Africa.", img: g_tree_lion, to: "/[...]
  { title: "1,000+ Bird Species", desc: "More than half of Africa's birds in one country, from the prehistoric shoebill to the grey crowned crane on the national flag.", img: g_shoebill_1, to: "/[...]
  { title: "Primate Diversity", desc: "Thirteen primate species in Kibale alone, and Africa's densest chimpanzee population living within earshot of the trail.", img: g_chimp_trekking_1, to: "/de[...]
  { title: "The Pearl of Africa", desc: "Churchill's phrase, written in 1908. A century on, travellers still reach for it after their first week here.", img: g_pearl_of_africa, to: "/uganda-explo[...]
];

function WhyUganda() {
  return (
    <section id="why" className="relative bg-charcoal grain text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          invert
          eyebrow="Why Uganda"
          title={<>Six reasons the world has been <em className="italic text-gold">quietly</em> falling in love.</>}
          copy="No single park does everything. Uganda is the rare country where forest, savanna, mountain, river and culture sit within a day's drive of one another."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative block h-[440px] overflow-hidden rounded-3xl hover-lift"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="font-display text-3xl text-ivory">{c.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-ivory/75">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  Discover
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Numbers ---------------- */
function Numbers() {
  const stats = [
    ["10", "National Parks"],
    ["12", "Wildlife Reserves"],
    ["1,000+", "Bird Species"],
    ["~50%", "of World's Mountain Gorillas"],
    ["1", "Source of the Nile"],
    ["4M+", "Acres of Protected Wilderness"],
  ];
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-forest)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-2xl text-ivory">
          <div className="eyebrow !text-gold-soft">Uganda in numbers</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-balance">
            A small country of <em className="italic text-gold">enormous</em> wild.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {stats.map(([n, l]) => (
            <div key={l} className="border-t border-ivory/20 pt-6">
              <div className="font-display text-5xl text-gold md:text-7xl">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-ivory/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */
const experiences: { t: string; img: string; tall?: boolean; to: string; params?: { slug: string } }[] = [
  { t: "Gorilla Trekking", img: heroGorilla, tall: true, to: "/destinations/gorilla-trekking" },
  { t: "Wildlife Safaris", img: sceneElephants, to: "/national-parks" },
  { t: "Chimpanzee Tracking", img: expChimp, to: "/destinations/chimpanzee-trekking" },
  { t: "Bird Watching", img: sceneCrane, tall: true, to: "/bird-guide" },
  { t: "Luxury Safaris", img: expLodge, to: "/experiences/$slug", params: { slug: "luxury-safaris" } },
  { t: "Boat Cruises", img: boatCruiseMurchison, to: "/destinations/murchison-falls" },
  { t: "Photography", img: sceneLion, tall: true, to: "/gallery" },
  { t: "Cultural Experiences", img: batwaDanceCulture, to: "/cultural-heritage" },
  { t: "Coffee & Tea Origins", img: expCoffee, to: "/coffee-tea-guide" },
  { t: "Hiking Rwenzori", img: sceneRwenzori, tall: true, to: "/destinations/rwenzori-mountains" },
  { t: "Adventure Activities", img: advRwenzoriHikers, to: "/experiences/$slug", params: { slug: "adventure-safaris" } },
  { t: "Sipi Falls", img: expSipi, to: "/destinations/sipi-falls" },

];

function Experiences() {
  return (
    <section id="experiences" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Explore by experience"
            title={<>Choose the <em className="italic text-forest">feeling</em> you want to remember.</>}
            copy="Most travellers combine two or three of these in a single trip. Tell us which ones matter most and we'll shape the route around them."
          />

          <Link to="/experiences" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-forest hover:text-gold">
            All experiences <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-16 grid auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {experiences.map((e) => (
            <Link
              key={e.t}
              to={e.to}
              params={e.params as never}

              className={`group relative block overflow-hidden rounded-2xl hover-lift ${
                e.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={e.img}
                alt={e.t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="font-display text-xl text-ivory md:text-2xl">{e.t}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Regions map ---------------- */
const regions = [
  { name: "Western Uganda", slug: "western-uganda", desc: "Gorillas in Bwindi, chimpanzees in Kibale, Rwenzori glaciers and a chain of crater lakes above the tea.", x: 22, y: 55 },
  { name: "Northern Uganda", slug: "northern-uganda", desc: "Murchison Falls forcing the Nile through a seven-metre gap, and Kidepo's vast, barely-visited savanna.", x: 50, y: 22 },
  { name: "Eastern Uganda", slug: "eastern-uganda", desc: "Sipi Falls and Arabica farms on Mount Elgon, and the white water of the young Nile at Jinja.", x: 78, y: 45 },
  { name: "Central Uganda", slug: "central-uganda", desc: "Kampala's markets and music, lakeside Entebbe, the Ssese Islands and shoebills at Mabamba Swamp.", x: 52, y: 60 },
  { name: "Karamoja", slug: "karamoja", desc: "Uganda's pastoralist frontier — Karamojong homesteads, escarpment ranges and genuine remoteness.", x: 76, y: 25 },

];

function Regions() {
  const [active, setActive] = useState(0);
  return (
    <section id="regions" className="relative bg-charcoal grain text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          invert
          eyebrow="Explore by region"
          title={<>Five landscapes, each a <em className="italic text-gold">world</em> of its own.</>}
          copy="Uganda is compact enough that two regions fit comfortably into ten days — and varied enough that they will feel like two different countries."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-square rounded-3xl border border-ivory/10 bg-forest-deep/40 p-6">
            <svg viewBox="0 0 100 100" className="h-full w-full text-forest">
              {/* stylised Uganda silhouette (abstract) */}
              <path
                d="M20 30 Q28 18 42 20 Q60 15 72 26 Q86 34 82 52 Q88 66 78 76 Q66 88 50 84 Q32 88 22 76 Q12 62 18 48 Q14 38 20 30 Z"
                fill="currentColor"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeOpacity="0.6"
                strokeWidth="0.4"
              />
              {regions.map((r, i) => (
                <g key={r.name} onMouseEnter={() => setActive(i)} className="cursor-pointer">
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={active === i ? 2.2 : 1.4}
                    className="fill-gold transition-all duration-500"
                  />
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={active === i ? 5 : 3}
                    className="fill-gold/30 transition-all duration-500"
                  />
                </g>
              ))}
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {regions.map((r, i) => (
              <Link
                key={r.name}
                to="/regions/$region"
                params={{ region: r.slug }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex items-baseline justify-between gap-6 border-b border-ivory/15 py-5 text-left transition-all ${
                  active === i ? "text-ivory" : "text-ivory/50 hover:text-ivory/80"
                }`}
              >
                <div>
                  <div className="font-display text-3xl md:text-4xl">{r.name}</div>
                  <div className="mt-2 max-w-sm text-sm text-ivory/60">{r.desc}</div>
                </div>
                <span className={`text-gold transition-transform ${active === i ? "translate-x-1" : ""}`}>→</span>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Bucket list masonry ---------------- */
const bucket: { t: string; img: string; span?: string; to: string }[] = [
  { t: "Gorilla Trekking", img: heroGorilla, span: "row-span-2", to: "/destinations/gorilla-trekking" },
  { t: "Chimpanzees", img: expChimp, to: "/destinations/chimpanzee-trekking" },
  { t: "Murchison Falls", img: sceneFalls, span: "col-span-2", to: "/destinations/murchison-falls" },
  { t: "Sipi Falls", img: expSipi, to: "/destinations/sipi-falls" },
  { t: "White Water Rafting", img: sceneFalls, to: "/destinations/jinja-source-of-the-nile" },
  { t: "Lake Bunyonyi", img: sceneBunyonyi, span: "col-span-2 row-span-2", to: "/destinations/lake-bunyonyi" },
  { t: "Tree-Climbing Lions", img: sceneLion, to: "/destinations/tree-climbing-lions" },
  { t: "Shoebill Tracking", img: expShoebill, to: "/bird-guide" },
  { t: "Tea & Coffee Plantations", img: expCoffee, to: "/coffee-tea-guide" },
  { t: "Batwa Experience", img: batwaDanceCulture, to: "/cultural-heritage" },
  { t: "Homestay Experience", img: sceneCulture, to: "/responsible-tourism" },
  { t: "Boat Cruises", img: boatCruiseMurchison, span: "col-span-2", to: "/destinations/queen-elizabeth-national-park" },
  { t: "Sunset Game Drives", img: ctaSunset, to: "/national-parks" },
];

function Bucket() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          eyebrow="Uganda bucket list"
          title={<>The moments you'll <em className="italic text-forest">tell stories</em> about, forever.</>}
          copy="The experiences guests mention most in the months after they fly home — not because they are rare on a list, but because of how they felt on the day."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {bucket.map((b) => {
            const className = `group relative block overflow-hidden rounded-2xl ${b.span ?? ""}`;
            const inner = (
              <>
                <img
                  src={b.img}
                  alt={b.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-3 flex items-center gap-2 font-display text-lg text-ivory md:text-xl">
                  {b.t}
                  <span className="text-gold text-sm" aria-hidden>→</span>
                </div>
              </>
            );
            return (
              <Link key={b.t} to={b.to} className={className}>{inner}</Link>
            );

          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Signature journeys ---------------- */

function Journeys() {
  return (
    <section id="journeys" className="bg-earth text-ivory grain">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          invert
          eyebrow="Signature journeys"
          title={<>Not itineraries. <em className="italic text-gold">Stories</em> waiting to be lived.</>}
          copy="Six routes we run often enough to know intimately — from a three-day gorilla escape to a twenty-one-day circuit of the whole country. Each one is a starting point, adjusted to y[...]
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JOURNEYS.map((j) => (
            <article key={j.slug} className="group flex flex-col overflow-hidden rounded-3xl bg-ivory/5 backdrop-blur-sm ring-1 ring-ivory/10 hover-lift">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={j.img}
                  alt={j.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110"
                />
                <div className="absolute right-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-charcoal">
                  {j.days} Days
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-3xl text-ivory">{j.title}</h3>
                <p className="mt-3 flex-1 text-sm text-ivory/70">{j.copy}</p>
                <Link to="/journeys/$slug" params={{ slug: j.slug }} className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold">
                  Plan this journey <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Conservation ---------------- */
function Conservation() {
  const pillars = [
    ["Wildlife", "Ranger support and anti-poaching patrols in the parks we work in, and gorilla permit fees that fund habitat protection directly."],
    ["Communities", "Fair wages, long-term partnerships and bookings made directly with the villages and cooperatives we visit."],
    ["Education", "School fees and materials for children from the communities bordering Bwindi, Kibale and Queen Elizabeth."],
    ["Women-Led", "Craft, coffee and catering sourced from women-led cooperatives — the most reliable route from tourism income to household income."],
    ["Tree Planting", "Native indigenous seedlings planted with community nurseries on the forest edge, where buffer zones matter most."],
    ["Responsible Travel", "Small groups, quiet vehicles, strict wildlife distances, and briefings that treat local etiquette as seriously as safety."],
  ];
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="eyebrow">Conservation</div>
            <h2 className="mt-5 font-display text-4xl text-charcoal text-balance md:text-6xl">
              Every journey <em className="italic text-forest">gives back</em> to the country that gives you so much.
            </h2>
            <p className="mt-6 text-lg text-charcoal/70">
              Uganda's gorillas recovered because the families living beside the forest were
              given a reason to protect it. That principle shapes how we work: revenue that
              stays local, guides and rangers from the villages on the park boundary, and
              partnerships we keep in the quiet season as well as the busy one. Travel here,
              and you become part of that arithmetic.
            </p>
          </div>

        </div>
        <div className="md:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-charcoal/10 bg-white p-7 hover-lift">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 3c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12Z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl text-charcoal">{t}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const stories = [
  {
    quote:
      "Meeting the gorillas felt sacred. Trek Wild Uganda made every moment effortless and profoundly personal.",
    name: "Sofia R.",
    from: "Spain",
    trip: "7-Day Pearl of Africa",
  },
  {
    quote:
      "The most thoughtfully guided trip we've ever taken. Uganda surprised us on every horizon.",
    name: "James & Anna",
    from: "United Kingdom",
    trip: "14-Day Ultimate Uganda",
  },
  {
    quote:
      "Every lodge, every guide, every sunset — chosen with such care. We'll be back.",
    name: "Kenji T.",
    from: "Japan",
    trip: "10-Day Wildlife & Primates",
  },
];

function Stories() {
  return (
    <section id="stories" className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          invert
          eyebrow="Traveller stories"
          title={<>Words from people who came <em className="italic text-gold">curious</em> and left changed.</>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.name} className="flex flex-col rounded-3xl border border-ivory/10 bg-ivory/[0.03] p-8 backdrop-blur-sm">
              <div className="text-gold" aria-hidden>
                {"★★★★★"}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-2xl leading-snug text-ivory text-pretty">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-ivory/10 pt-5 text-sm">
                <div className="font-medium text-ivory">{s.name}</div>
                <div className="text-ivory/60">{s.from} · {s.trip}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planning hub ---------------- */
function Planning() {
  const items: { label: string; to?: string; ask?: boolean }[] = [
    { label: "Visa Guide", to: "/visa-guide" },
    { label: "Best Time to Visit", to: "/seasonal-safari-calendar" },
    { label: "Packing Guide", to: "/packing-guide" },
    { label: "Weather", to: "/weather" },
    { label: "Safari Costs", to: "/safari-budget-calculator" },
    { label: "Gorilla Permits", to: "/gorilla-permit-guide" },
    { label: "Travel Tips", to: "/travel-journal" },
    { label: "Currency", ask: true },
    { label: "Safety", ask: true },
    { label: "FAQs", to: "/faqs" },

  ];
  return (
    <section id="plan" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          eyebrow="Travel planning hub"
          title={<>Everything you'll need, <em className="italic text-forest">nothing you won't</em>.</>}
          copy="Visas, vaccinations, permits, packing, weather and honest cost ranges — written by the people who will be meeting you at Entebbe."
        />

        <Link
          to="/build-my-safari"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
        >
          Build My Safari — get a personalised plan
        </Link>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-5">
          {items.map((i, idx) => {
            const inner = (
              <>
                <div className="font-display text-4xl text-forest/25">{String(idx + 1).padStart(2, "0")}</div>
                <div className="mt-8">
                  <div className="font-display text-xl text-charcoal">{i.label}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    {i.ask ? "Ask us →" : "Read guide →"}
                  </div>
                </div>
              </>
            );
            const className = "group flex flex-col justify-between rounded-2xl border border-charcoal/10 bg-white p-6 text-left hover-lift";
            return i.ask ? (
              <a
                key={i.label}
                href={buildWhatsAppHref(`Hi! I have a question about ${i.label.toLowerCase()} for my Uganda trip.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={i.label} to={i.to!} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Latest stories (magazine) ---------------- */
function LatestStories() {
  const posts = JOURNAL_POSTS.slice(0, 4);
  return (
    <section className="bg-forest-deep text-ivory grain">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            invert
            eyebrow="Latest stories"
            title={<>The <em className="italic text-gold">Journal</em>.</>}
          />
          <Link to="/travel-journal" className="text-sm uppercase tracking-widest text-gold">All stories →</Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to="/travel-journal/$slug"
              params={{ slug: p.slug }}
              className={`group relative block overflow-hidden rounded-3xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105 ${
                  i === 0 ? "h-[520px]" : "h-[250px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <div className="eyebrow !text-gold-soft">{p.category}</div>
                <div className={`mt-2 font-display text-ivory ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>
                  {p.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */
function Newsletter() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16" style={{ background: "var(--gradient-gold)" }}>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="eyebrow !text-charcoal/70">Newsletter</div>
              <h2 className="mt-4 font-display text-4xl text-charcoal text-balance md:text-5xl">
                Letters from the Pearl of Africa.
              </h2>
              <p className="mt-4 max-w-md text-charcoal/75">
                Field notes from the trail, gorilla family news, honest advice on when to
                travel, and the occasional photograph we couldn't keep to ourselves — one
                thoughtful letter a month, and nothing else.
              </p>

            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-charcoal/20 bg-ivory px-6 py-4 text-sm text-charcoal outline-none focus:border-charcoal"
              />
              <button className="rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-ivory transition-transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <img
          src={ctaSunset}
          alt="Sunset over Kazinga Channel"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <div className="max-w-2xl">
              <div className="eyebrow !text-gold">Your Uganda Story</div>
              <h2 className="mt-5 font-display text-5xl text-ivory text-balance md:text-8xl">
                Your Uganda story <em className="italic text-gold">starts here.</em>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ivory/85">
                Tell us what you hope to feel — the hush before a gorilla appears, the roar
                of Murchison, an evening in a village kitchen — and we'll build the days
                around it. Private, unhurried, and planned by people who live here.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/build-my-safari" className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep">
                  Start planning my journey
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-ivory backdrop-blur-md hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20 3.5A11.6 11.6 0 0 0 3.5 20L2 22l2.1-1.5A11.6 11.6 0 1 0 20 3.5Zm-8 18.2a9.6 9.6 0 0 1-4.9-1.3l-.3-.2-2.4.6.6-2.4-.2-.3A9.6 9.6 0 1 1 12 21.7Zm5.3-6.9c-.3-.2-1.7-.[...]
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
function Home() {
  return (
    <main className="bg-ivory text-charcoal">
      <SiteNav />
      <Hero />
      <Discover />
      <WhyUganda />
      <Numbers />
      <Experiences />
      <Regions />
      <Bucket />
      <Journeys />
      <Conservation />
      <Stories />
      <Planning />
      <LatestStories />
      <Newsletter />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

export default Home;
