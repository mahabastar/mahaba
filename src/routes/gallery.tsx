import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import semulikiHotSprings from "@/assets/uploads/semuliki-hot-springs.jpg";
import elephantSavanna from "@/assets/uploads/elephant-savanna.jpg";
import nileBridgeAerial from "@/assets/uploads/nile-bridge-aerial.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import gorillaLookup from "@/assets/uploads/gorilla-lookup.jpg";
import gorillaBaby from "@/assets/uploads/gorilla-baby-eating.jpg";
import elephantRoad from "@/assets/uploads/elephant-road.jpg";
import chimpKibale from "@/assets/uploads/chimp-kibale.jpg";
import batwaFire from "@/assets/uploads/batwa-firemaking.jpg";
import buffaloWaterhole from "@/assets/uploads/buffalo-waterhole.jpg";
import lionessCloseup from "@/assets/uploads/lioness-closeup.jpg";
import leopardTree from "@/assets/uploads/leopard-tree.jpg";
import giraffeSavanna from "@/assets/uploads/giraffe-savanna.jpg";
import qenpZebraBuffalo from "@/assets/uploads/qenp-zebra-buffalo.jpg";
import rwenzoriSummit from "@/assets/uploads/rwenzori-summit.jpg";
import mburoZebras from "@/assets/uploads/mburo-zebras.jpg";
import murchisonFalls from "@/assets/uploads/murchison-falls.jpg";
import safariLodgePool from "@/assets/uploads/safari-lodge-pool.jpg";
import craterLakeSunset from "@/assets/uploads/crater-lake-sunset.jpg";
import chimpFamily from "@/assets/uploads/chimp-family.jpg";
import elephantPortrait from "@/assets/uploads/elephant-portrait.jpg";
import baboonsRoadside from "@/assets/uploads/baboons-roadside.jpg";
import pythonAntelope from "@/assets/uploads/python-antelope.jpg";
import lionessStanding from "@/assets/uploads/lioness-standing.jpg";
import cheetahMound from "@/assets/uploads/cheetah-mound.jpg";
import rhinoZiwa from "@/assets/uploads/rhino-ziwa.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wild Uganda Treks" },
      {
        name: "description",
        content: "Photographs from across Uganda — wildlife, landscapes and culture, captured on the ground.",
      },
      { property: "og:title", content: "Gallery — Wild Uganda Treks" },
      { property: "og:url", content: `${SITE_CONFIG.url}/gallery` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/gallery` }],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: heroGorilla, alt: "Silverback mountain gorilla in Bwindi", caption: "A silverback in Bwindi, unbothered by an audience." },
  { src: elephantRoad, alt: "Bull elephant on a murram track at golden hour", caption: "Right of way — a bull elephant on the park track." },
  { src: lionessCloseup, alt: "Lioness snarling in long grass", caption: "A lioness, mid-yawn and unimpressed." },
  { src: leopardTree, alt: "Leopard standing on a tree branch", caption: "A leopard holding the high ground." },
  { src: chimpKibale, alt: "Chimpanzee sitting in the canopy of Kibale Forest", caption: "A chimp in the Kibale canopy, looking down on the trek." },
  { src: sceneLion, alt: "Lions resting in a fig tree, Ishasha", caption: "An Ishasha morning — lions draped over a fig branch." },
  { src: buffaloWaterhole, alt: "Buffalo herd drinking at a waterhole", caption: "The whole herd, at the only waterhole that matters." },
  { src: giraffeSavanna, alt: "Rothschild's giraffe beside a termite mound", caption: "A Rothschild's giraffe browsing the ridge." },
  { src: qenpZebraBuffalo, alt: "Zebra and buffalo together in Queen Elizabeth National Park", caption: "Zebra and buffalo sharing the road, Queen Elizabeth NP." },
  { src: mburoZebras, alt: "Zebras drinking at Lake Mburo", caption: "Zebra at the water's edge, Lake Mburo." },
  { src: rwenzoriSummit, alt: "Climbers roped up on the Rwenzori glaciers", caption: "Roped up on the snow — the Rwenzori summit push." },
  { src: sceneRwenzori, alt: "Trekking group in the Rwenzori Mountains", caption: "Snow on the equator: crossing the Rwenzori glaciers." },
  { src: batwaFire, alt: "Batwa elders making fire in the forest", caption: "Batwa elders coaxing a fire out of dry leaves." },
  { src: sceneCulture, alt: "Batwa community dance", caption: "A Batwa welcome dance in the hills of the south-west." },
  { src: gorillaLookup, alt: "Mountain gorilla looking upward", caption: "A gorilla, mid-thought." },
  { src: gorillaBaby, alt: "Baby mountain gorilla feeding", caption: "Breakfast, taken very seriously." },
  { src: expShoebill, alt: "Shoebill stork in a papyrus swamp", caption: "A shoebill, mid-swamp and entirely unimpressed." },
  { src: semulikiHotSprings, alt: "Sempaya hot springs, Semuliki National Park", caption: "The boiling springs of Sempaya, Semuliki National Park." },
  { src: elephantSavanna, alt: "African elephant in the savanna", caption: "An elephant at last light." },
  { src: nileBridgeAerial, alt: "A bridge spanning the Nile", caption: "The Nile, seen from above." },
  { src: murchisonFalls, alt: "Murchison Falls thundering through the gorge", caption: "The Nile forced through a 7-metre gap — Murchison Falls." },
  { src: safariLodgePool, alt: "Thatched safari lodge beside a pool", caption: "Thatch, timber and a pool at the end of a game drive." },
  { src: craterLakeSunset, alt: "Crater lake at sunset in western Uganda", caption: "A crater lake catching the last of the light." },
  { src: chimpFamily, alt: "Family group of chimpanzees on the forest floor", caption: "A chimp family, holding court on the forest floor." },
  { src: elephantPortrait, alt: "Elephant facing the camera in long grass", caption: "Eye to eye, in the long grass." },
  { src: baboonsRoadside, alt: "Olive baboons sitting beside a park track", caption: "Olive baboons, running the tollbooth." },
  { src: pythonAntelope, alt: "African rock python constricting an antelope", caption: "A rock python and its kill — the safari nobody plans for." },
  { src: lionessStanding, alt: "Lioness standing alert in open grassland", caption: "A lioness scanning the plain, Queen Elizabeth NP." },
  { src: cheetahMound, alt: "Cheetah sitting on a termite mound", caption: "A cheetah using a termite mound as a lookout." },
  { src: rhinoZiwa, alt: "White rhino grazing at Ziwa Rhino Sanctuary", caption: "A white rhino grazing at Ziwa — Uganda's only wild rhinos." },
];

function Gallery() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Gallery</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda, <em className="italic text-gold">as we've seen it.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            A running collection of photographs from the field — no stock imagery, just
            what was actually there.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {PHOTOS.map((p) => (
              <div key={p.src} className="group relative overflow-hidden rounded-2xl break-inside-avoid">
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 text-sm text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                  {p.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="eyebrow !text-gold">Seen enough to start planning</div>
          <h2 className="mt-6 font-display text-4xl text-ivory text-balance md:text-6xl">
            Let's put you <em className="italic text-gold">in the picture.</em>
          </h2>
          <div className="mt-10">
            <Link
              to="/build-my-safari"
              className="inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
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
