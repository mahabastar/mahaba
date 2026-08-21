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
import expLodge from "@/assets/exp-lodge.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";

import boatCruiseMurchison from "@/assets/gallery/boat-cruise-7.jpg";
import batwaDanceCulture from "@/assets/gallery/batwa-dance-2.jpg";
import advRwenzoriHikers from "@/assets/gallery/adventure-rwenzori-hikers.jpg";

import g_gorilla_silverback from "@/assets/gallery/gorilla-silverback.jpg";
import g_source_of_the_nile_1 from "@/assets/gallery/jinja-nile-bridge.jpg";
import g_tree_lion from "@/assets/gallery/tree-lion.jpg";
import g_shoebill_1 from "@/assets/gallery/shoebill-1.jpg";
import g_chimp_trekking_1 from "@/assets/gallery/chimp-trekking-1.jpg";
import g_pearl_of_africa from "@/assets/gallery/pearl-of-africa.jpg";

import ctaSunset from "@/assets/cta-sunset.jpg";

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

  component: Home,
});

/* =========================================================
   REVEAL ON SCROLL
========================================================= */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return {
    ref,
    visible,
  };
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal grain"
    >
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
          style={{
            background: "var(--gradient-hero)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <div className="max-w-3xl reveal">
          <div className="mb-6 flex items-center gap-3 text-ivory/80">
            <span className="h-px w-10 bg-gold" />

            <span className="eyebrow !text-gold">
              The Pearl of Africa
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] text-ivory text-balance">
            Discover the{" "}
            <em className="italic text-gold">
              Pearl
            </em>
            <br />
            of Africa
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85 md:text-xl">
            Mountain gorillas in mist-hung forest. The Nile leaving Lake
            Victoria on its 6,650-kilometre journey north. Glaciers on the
            equator, and villages where the welcome is genuine. Uganda holds
            all of it inside a country the size of Britain — and we were born
            here to show it to you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/uganda-explorer"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-medium tracking-wide text-ivory shadow-md transition-all duration-500 hover:scale-105"
            >
              Explore Uganda

              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/build-my-safari"
              className="inline-flex items-center gap-3 rounded-full border border-ivory/40 px-7 py-4 text-sm font-medium tracking-wide text-ivory backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
            >
              Plan my Uganda safari
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ivory/15 pt-8 text-ivory/80 md:grid-cols-4">
          {[
            ["10", "National Parks"],
            ["1,000+", "Bird Species"],
            ["~½", "of World's Gorillas"],
            ["1", "Source of the Nile"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-gold md:text-4xl">
                {n}
              </div>

              <div className="mt-1 text-xs uppercase tracking-widest text-ivory/60">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#discover"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 flex h-11 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-ivory/40"
        aria-label="Scroll to discover Uganda"
      />
    </section>
  );
}

/* =========================================================
   DISCOVER
========================================================= */

const scenes = [
  {
    n: "01",
    title: "Welcome to Uganda",
    sub: "Where nature still sets the pace, and the welcome is personal.",
    img: sceneBunyonyi,
  },
  {
    n: "02",
    title: "Home of Mountain Gorillas",
    sub: "Roughly half the world's remaining population lives in these hills.",
    img: heroGorilla,
  },
  {
    n: "03",
    title: "Africa's Primate Capital",
    sub: "Thirteen species share one forest — and the noise at dawn proves it.",
    img: expChimp,
  },
  {
    n: "04",
    title: "Where the Nile Begins",
    sub: "The world's longest river starts its journey here, at Jinja.",
    img: sceneFalls,
  },
  {
    n: "05",
    title: "Tree-Climbing Lions",
    sub: "In Ishasha, whole prides doze in the fig branches.",
    img: sceneLion,
  },
  {
    n: "06",
    title: "A Birder's Paradise",
    sub: "Over 1,000 species, including the improbable shoebill.",
    img: sceneCrane,
  },
  {
    n: "07",
    title: "Snow on the Equator",
    sub: "The Rwenzori — the Mountains of the Moon, glaciers and all.",
    img: sceneRwenzori,
  },
  {
    n: "08",
    title: "Warm Smiles. Rich Cultures.",
    sub: "More than fifty languages, and one shared instinct for hospitality.",
    img: sceneCulture,
  },
  {
    n: "09",
    title: "Golden Hour on the Plains",
    sub: "Elephant herds crossing a sky that turns copper in minutes.",
    img: sceneElephants,
  },
  {
    n: "10",
    title: "Your Journey Starts Here",
    sub: "Tell us what you want to feel. We'll build the rest.",
    img: ctaSunset,
  },
];

function Discover() {
  return (
    <section
      id="discover"
      className="relative bg-ivory"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHeader
          eyebrow="Uganda in ten scenes"
          title={
            <>
              A country{" "}
