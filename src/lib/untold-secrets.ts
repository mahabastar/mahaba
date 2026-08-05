import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import kidepoCheetah from "@/assets/gallery/kidepo-cheetah.jpg";
import mburoHorsebackZebra from "@/assets/gallery/lake-mburo-horseback-zebra.jpg";
import rhinoZiwa from "@/assets/gallery/ziwa-sanctuary-sign.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

/** Lesser-visited places most Uganda itineraries skip entirely. */
export const UNTOLD_SECRETS: CategoryItem[] = [
  {
    slug: "kidepo-valley",
    name: "Kidepo Valley",
    location: "Far north-east Uganda",
    knownFor: "Africa's most remote savannah",
    blurb:
      "Open plains framed by the Morungole mountains, ostrich and cheetah found nowhere else in Uganda, and a fraction of the visitors of any other park.",
    img: kidepoCheetah,
    to: "/destinations/kidepo-valley",
  },
  {
    slug: "semuliki",
    name: "Semuliki & the Sempaya Hot Springs",
    location: "Western Uganda, DR Congo border",
    knownFor: "Congo-basin rainforest & geysers",
    blurb:
      "A lowland slice of the Congo Basin marooned in Uganda, where a geyser boils high enough to cook an egg and the birdlife belongs to Central Africa.",
    img: semulikiHotSprings,
    to: "/destinations/semuliki",
  },
  {
    slug: "mount-elgon",
    name: "Mount Elgon",
    location: "Eastern Uganda",
    knownFor: "The world's largest volcanic caldera",
    blurb:
      "A dormant giant with a caldera wider than any on Earth, summit trails without permits or crowds, and the Sipi waterfalls on its lower slopes.",
    img: expSipi,
    to: "/destinations/mount-elgon",
  },
  {
    slug: "crater-lakes",
    name: "The Fort Portal Crater Lakes",
    location: "Western Uganda",
    knownFor: "Emerald volcanic lakes",
    blurb:
      "Dozens of collapsed volcanic craters filled with still green water, ringed by tea estates and best explored slowly on foot between chimp treks.",
    img: sceneBunyonyi,
    to: "/destinations/crater-lakes",
  },
  {
    slug: "lake-mburo",
    name: "Lake Mburo",
    location: "Between Kampala and the south-west",
    knownFor: "Walking & horseback safaris",
    blurb:
      "Uganda's only park where walking among zebra, impala and eland is routine — and the one most travellers drive straight past on the way to Bwindi.",
    img: mburoHorsebackZebra,
    to: "/destinations/lake-mburo",
  },
  {
    slug: "mgahinga-gorilla",
    name: "Mgahinga Gorilla National Park",
    location: "Virunga foothills, south-west",
    knownFor: "Golden monkeys & the Batwa Trail",
    blurb:
      "Uganda's smallest park, in the shadow of three volcanoes — golden monkey trekking, a quieter gorilla family, and a guided walk with the forest's original inhabitants.",
    img: sceneCulture,
    to: "/destinations/mgahinga-gorilla",
  },
  {
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    location: "En route to Murchison Falls",
    knownFor: "Tracking rhino on foot",
    blurb:
      "The only place in Uganda to see wild rhino, and one of very few anywhere in Africa where you track them on foot rather than from a vehicle.",
    img: rhinoZiwa,
    to: "/destinations/ziwa-rhino-sanctuary",
  },
  {
    slug: "rwenzori-mountains",
    name: "The Rwenzori Mountains",
    location: "Uganda–DR Congo border",
    knownFor: "Equatorial glaciers",
    blurb:
      "The Mountains of the Moon: giant lobelia, bog and ice within sight of the equator, walked by a few hundred trekkers a year rather than tens of thousands.",
    img: sceneRwenzori,
    to: "/destinations/rwenzori-mountains",
  },
];
