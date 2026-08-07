import kidepoCheetahCard from "@/assets/gallery/kidepo-cheetah-card.jpg";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/site-config";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import bunyonyiAerial from "@/assets/gallery/bunyonyi-aerial.jpg";
import mgahingaMoment from "@/assets/gallery/mgahinga-moments-1.jpg";
import rwenzoriSnow from "@/assets/gallery/rwenzori-snow.jpg";
import qenpPhoto from "@/assets/gallery/qenp-1.jpg";
import treeLion from "@/assets/gallery/tree-lion.jpg";
import craterLakes from "@/assets/gallery/crater-lakes-1.jpg";
import mburoZebras from "@/assets/gallery/mburo-9.jpg";
import rhinoZiwa from "@/assets/gallery/rhino-ziwa.jpg";
import mountElgon from "@/assets/gallery/mount-elgon-1.jpg";
import coffeeTea from "@/assets/gallery/coffee-tea-1.jpg";
import batwaDance from "@/assets/gallery/batwa-dance-2.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import karamojongCulture from "@/assets/gallery/karamojong-culture.jpg";

type Spot = { name: string; to: string; img: string; blurb: string };
type Region = {
  name: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  hero: string;
  heroAlt: string;
  when: string;
  spots: Spot[];
};

const REGIONS: Record<string, Region> = {
  "western-uganda": {
    name: "Western Uganda",
    eyebrow: "The Albertine Rift",
    tagline: "Gorillas, chimps, glaciers and crater lakes.",
    intro:
      "The green half of the country. Rainforest along the Congo border shelters mountain gorillas and chimpanzees, the Rwenzori carries glaciers on the equator, and the savanna of Queen Elizabeth drops away into crater lakes and the Kazinga Channel.",
    hero: heroGorilla,
    heroAlt: "Mountain gorilla in the forests of western Uganda",
    when: "June–September and December–February are driest, which makes forest trails firmer for trekking. Green-season months bring lower rates and better birding.",
    spots: [
      { name: "Bwindi Impenetrable Forest", to: "/destinations/bwindi-impenetrable", img: heroGorilla, blurb: "Roughly half the world's mountain gorillas, in ancient montane rainforest." },
      { name: "Mgahinga Gorilla National Park", to: "/destinations/mgahinga-gorilla", img: mgahingaMoment, blurb: "Volcano slopes, golden monkeys and a quieter gorilla trek." },
      { name: "Kibale Forest", to: "/destinations/kibale-forest", img: expChimp, blurb: "The highest primate density in Africa, led by wild chimpanzees." },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: qenpPhoto, blurb: "The Kazinga Channel, Kasenyi plains and Kyambura Gorge." },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions", img: treeLion, blurb: "Lions draped over fig branches in the park's southern sector." },
      { name: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains", img: rwenzoriSnow, blurb: "Glaciated peaks on the equator — Africa's third-highest summit." },
      { name: "Crater Lakes", to: "/destinations/crater-lakes", img: craterLakes, blurb: "A field of volcanic lakes between Fort Portal and Kibale." },
      { name: "Semuliki National Park", to: "/destinations/semuliki", img: semulikiHotSprings, blurb: "Boiling springs and Congo-basin birdlife found nowhere else in Uganda." },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: bunyonyiAerial, blurb: "Terraced hills, still water, and nothing at all on the schedule." },
      { name: "Lake Mburo National Park", to: "/destinations/lake-mburo", img: mburoZebras, blurb: "Zebra, impala and walking safaris on the road west from Kampala." },
    ],
  },
  "central-uganda": {
    name: "Central Uganda",
    eyebrow: "Lake Victoria & the heartland",
    tagline: "Where every Uganda journey begins.",
    intro:
      "The arrival region: Entebbe on the shore of Lake Victoria, Kampala's markets and music, papyrus swamps holding shoebills, and the country's only rhinos on the road north.",
    hero: expLodge,
    heroAlt: "Lakeside lodge in central Uganda",
    when: "Year-round. Mabamba's shoebill boat trips are best at first light, any month.",
    spots: [
      { name: "Entebbe", to: "/destinations/entebbe", img: expLodge, blurb: "Lakeside gateway city, botanical gardens and a chimpanzee island offshore." },
      { name: "Ziwa Rhino Sanctuary", to: "/destinations/ziwa-rhino-sanctuary", img: rhinoZiwa, blurb: "The only place to track rhinos in Uganda, on foot." },
      { name: "Shoebill & Mabamba Birding", to: "/bird-guide", img: expShoebill, blurb: "Papyrus channels holding one of Africa's most sought-after birds." },
      { name: "Cultural Heritage", to: "/cultural-heritage", img: sceneCulture, blurb: "Kingdoms, craft and the living traditions of the heartland." },
    ],
  },
  "eastern-uganda": {
    name: "Eastern Uganda",
    eyebrow: "Elgon, Sipi & the Nile",
    tagline: "White water, waterfalls and coffee terraces.",
    intro:
      "Uganda's adventure corner. The Nile leaves Lake Victoria at Jinja and turns into grade 3–5 white water; further north, Sipi's three waterfalls spill off the shoulder of Mount Elgon through Arabica coffee farms.",
    hero: expSipi,
    heroAlt: "Sipi Falls on the slopes of Mount Elgon",
    when: "June–August and December–February for rafting and hiking; the trails on Elgon are considerably easier when dry.",
    spots: [
      { name: "Jinja & the Source of the Nile", to: "/destinations/jinja-source-of-the-nile", img: nileBridgeAerial, blurb: "Rafting, kayaking and the point where the Nile begins." },
      { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi, blurb: "Three waterfalls, coffee terraces, and views over the Karamoja plains." },
      { name: "Mount Elgon", to: "/destinations/mount-elgon", img: mountElgon, blurb: "The world's largest volcanic caldera, hiked over four to seven days." },
      { name: "Coffee & Tea Origins", to: "/coffee-tea-guide", img: coffeeTea, blurb: "Washing stations and smallholder farms on Elgon's slopes." },
    ],
  },
  "northern-uganda": {
    name: "Northern Uganda",
    eyebrow: "Murchison & the far north",
    tagline: "The Nile at full force, and savanna without crowds.",
    intro:
      "North of the Victoria Nile the country opens out. Murchison Falls squeezes the entire river through a seven-metre gorge, and beyond it lie the borassus palms and big herds of Uganda's least-visited plains.",
    hero: sceneFalls,
    heroAlt: "Murchison Falls on the Victoria Nile",
    when: "December–February for concentrated game around the river; the boat cruise to the base of the falls runs year-round.",
    spots: [
      { name: "Murchison Falls National Park", to: "/destinations/murchison-falls", img: sceneFalls, blurb: "Game drives on the delta, and a boat cruise to the foot of the falls." },
      { name: "Ziwa Rhino Sanctuary", to: "/destinations/ziwa-rhino-sanctuary", img: rhinoZiwa, blurb: "A rhino tracking stopover on the drive north from Kampala." },
      { name: "Kidepo Valley National Park", to: "/destinations/kidepo-valley", img: kidepoCheetahCard, blurb: "Uganda's remotest park — cheetah, ostrich and complete isolation." },
      { name: "National Parks Overview", to: "/national-parks", img: sceneElephants, blurb: "How the northern parks compare, and how to combine them." },
    ],
  },
  karamoja: {
    name: "Karamoja",
    eyebrow: "The north-eastern frontier",
    tagline: "Warrior culture and Uganda's wildest horizon.",
    intro:
      "Semi-arid, sparsely travelled and culturally unlike anywhere else in the country. Karamoja is cattle-keeping country framed by isolated mountains, with Kidepo Valley at its northern edge.",
    hero: ctaSunset,
    heroAlt: "Sunset over the plains of Karamoja",
    when: "September–March. Access roads deteriorate quickly during the heaviest rains.",
    spots: [
      { name: "Kidepo Valley National Park", to: "/destinations/kidepo-valley", img: kidepoCheetahCard, blurb: "Mountain-ringed savanna with wildlife you'll usually have to yourself." },
      { name: "Karamojong Culture", to: "/cultural-heritage", img: karamojongCulture, blurb: "Manyattas, cattle traditions and one of Uganda's most distinct cultures." },
      { name: "Mount Moroto & Elgon Highlands", to: "/mountains", img: sceneRwenzori, blurb: "Dry-country peaks rising straight out of the plains." },
      { name: "Responsible Travel Here", to: "/responsible-tourism", img: batwaDance, blurb: "How visits are arranged so revenue reaches the communities involved." },
    ],
  },
};

export const Route = createFileRoute("/regions/$region")({
  loader: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) throw notFound();
    return { region: params.region };
  },
  head: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) {
      return { meta: [{ title: "Region not found — Trek Wild Uganda" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${region.name} — Safari Destinations & Highlights | Trek Wild Uganda`;
    const description = `${region.tagline} ${region.intro}`.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: `${region.name} — Trek Wild Uganda` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `${SITE_CONFIG.url}/regions/${params.region}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/regions/${params.region}` }],
    };
  },
  notFoundComponent: RegionNotFound,
  component: RegionPage,
});

function RegionNotFound() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />
      <section className="mx-auto max-w-[900px] px-6 pb-24 pt-40 text-center md:px-10">
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">That region doesn&rsquo;t exist</h1>
        <p className="mt-4 text-charcoal/70">Try the Uganda Explorer for every destination we cover.</p>
        <Link
          to="/uganda-explorer"
          className="mt-8 inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory hover:bg-forest-deep"
        >
          Open Uganda Explorer
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}

function RegionPage() {
  const { region: slug } = Route.useParams();
  const region = REGIONS[slug];
  if (!region) return <RegionNotFound />;

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[60svh] w-full overflow-hidden bg-charcoal">
        <img
          src={region.hero}
          alt={region.heroAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="relative mx-auto flex min-h-[60svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <div className="eyebrow !text-gold">{region.eyebrow}</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            {region.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/80">{region.tagline}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-24">
          <p className="text-lg leading-relaxed text-charcoal/80 text-pretty">{region.intro}</p>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <div className="eyebrow !text-forest">Where to go</div>
          <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">
            Destinations in {region.name}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {region.spots.map((s) => (
              <Link
                key={s.name}
                to={s.to}
                className="group relative block overflow-hidden rounded-3xl hover-lift"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-display text-xl text-ivory md:text-2xl">{s.name}</div>
                  <p className="mt-1 text-sm text-ivory/75">{s.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When to go */}
      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-24">
          <div className="eyebrow !text-gold">When to go</div>
          <p className="mt-5 text-lg leading-relaxed text-ivory/80 text-pretty">{region.when}</p>
          <Link
            to="/seasonal-safari-calendar"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold hover:text-ivory"
          >
            Seasonal calendar <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Other regions */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="eyebrow !text-forest">Other regions</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {Object.entries(REGIONS)
              .filter(([key]) => key !== slug)
              .map(([key, r]) => (
                <Link
                  key={key}
                  to="/regions/$region"
                  params={{ region: key }}
                  className="rounded-full border border-charcoal/15 px-5 py-3 text-sm text-charcoal/70 transition-colors hover:border-forest hover:text-forest"
                >
                  {r.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-28">
          <h2 className="font-display text-4xl text-ivory text-balance md:text-5xl">
            Build a trip around <em className="italic text-gold">{region.name}</em>.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/build-my-safari"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan my {region.name} trip
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ivory/40 px-7 py-4 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Ask a local guide
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
