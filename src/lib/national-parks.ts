import mburoHorseback from "@/assets/gallery/lake-mburo-horseback.jpg";
import gorillaBacklit from "@/assets/gorilla-lookup.jpg";
import gorillaLookup from "@/assets/gorilla-lookup.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import elephantSavanna from "@/assets/elephant-savanna.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";

export type ParkRegion =
  | "South-western Uganda"
  | "Western Uganda"
  | "North-western Uganda"
  | "North-eastern Uganda"
  | "Eastern Uganda";

export type NationalPark = {
  slug: string;
  name: string;
  region: ParkRegion;
  size: string;
  knownFor: string;
  blurb: string;
  img: string;
  /** Link to the park's own detail page, once one exists. */
  to?: string;
};

export const PARK_REGIONS: ParkRegion[] = [
  "South-western Uganda",
  "Western Uganda",
  "North-western Uganda",
  "Eastern Uganda",
  "North-eastern Uganda",
];

export const NATIONAL_PARKS: NationalPark[] = [
  {
    slug: "bwindi-impenetrable",
    name: "Bwindi Impenetrable",
    region: "South-western Uganda",
    size: "321 km²",
    knownFor: "Mountain gorilla trekking",
    blurb:
      "A UNESCO World Heritage rainforest older than the Ice Age, home to roughly half of the world's remaining mountain gorillas.",
    img: gorillaBacklit,
    to: "/destinations/bwindi-impenetrable",
  },
  {
    slug: "mgahinga-gorilla",
    name: "Mgahinga Gorilla",
    region: "South-western Uganda",
    size: "34 km²",
    knownFor: "Volcanoes & golden monkeys",
    blurb:
      "Uganda's smallest park — three Virunga volcanoes you can climb, plus gorilla and golden monkey trekking in the same valley.",
    img: gorillaLookup,
    to: "/destinations/mgahinga-gorilla",
  },
  {
    slug: "queen-elizabeth-national-park",
    name: "Queen Elizabeth",
    region: "Western Uganda",
    size: "1,978 km²",
    knownFor: "Tree-climbing lions & Kazinga Channel",
    blurb:
      "Savanna, crater lakes and the Kazinga Channel in one park — with the famous tree-climbing lions of the Ishasha sector.",
    img: sceneLion,
    to: "/destinations/queen-elizabeth-national-park",
  },
  {
    slug: "kibale",
    name: "Kibale",
    region: "Western Uganda",
    size: "795 km²",
    knownFor: "Chimpanzee trekking",
    blurb:
      "The highest primate density in Africa — over 1,500 wild chimpanzees, plus twelve other primate species in ancient forest.",
    img: expChimp,
    to: "/destinations/kibale-forest",
  },
  {
    slug: "semuliki",
    name: "Semuliki",
    region: "Western Uganda",
    size: "220 km²",
    knownFor: "Hot springs & Congo-basin birds",
    blurb:
      "A low-lying extension of the Congo rainforest in the Rift Valley — boiling Sempaya hot springs and birding found nowhere else in East Africa.",
    img: semulikiHotSprings,
    to: "/destinations/semuliki",
  },
  {
    slug: "rwenzori-mountains",
    name: "Rwenzori Mountains",
    region: "Western Uganda",
    size: "996 km²",
    knownFor: "Equatorial glaciers",
    blurb:
      "The legendary Mountains of the Moon — Africa's third-highest summit, with glaciers and alpine bog almost on the equator.",
    img: sceneRwenzori,
    to: "/destinations/rwenzori-mountains",
  },
  {
    slug: "lake-mburo",
    name: "Lake Mburo",
    region: "Western Uganda",
    size: "370 km²",
    knownFor: "Zebra & walking safaris",
    blurb:
      "Uganda's most compact savanna park, close enough for a stopover — the only one where a walking or horseback safari among zebra and impala is routine.",
    img: mburoHorseback,
    to: "/destinations/lake-mburo",
  },
  {
    slug: "murchison-falls",
    name: "Murchison Falls",
    region: "North-western Uganda",
    size: "3,840 km²",
    knownFor: "The Nile through a 7-metre gorge",
    blurb:
      "Uganda's largest park — the Victoria Nile forced through solid rock, framed by the country's biggest herds of elephant and giraffe.",
    img: sceneFalls,
    to: "/destinations/murchison-falls",
  },
  {
    slug: "mount-elgon",
    name: "Mount Elgon",
    region: "Eastern Uganda",
    size: "1,279 km²",
    knownFor: "One of the world's largest calderas",
    blurb:
      "An extinct shield volcano with Sipi Falls tumbling down its lower slopes, ringed by coffee gardens and multi-day caldera hikes.",
    img: expSipi,
    to: "/destinations/mount-elgon",
  },
  {
    slug: "kidepo-valley",
    name: "Kidepo Valley",
    region: "North-eastern Uganda",
    size: "1,442 km²",
    knownFor: "Total isolation & cheetah",
    blurb:
      "Uganda's remotest park, ringed by the Karamoja mountains — cheetah, ostrich and herds you'll often have entirely to yourself.",
    img: elephantSavanna,
    to: "/destinations/kidepo-valley",
  },
];
