import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import expBalloon from "@/assets/exp-balloon.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

export const FORESTS: CategoryItem[] = [
  {
    slug: "bwindi-forest",
    name: "Bwindi Impenetrable Forest",
    location: "South-western Uganda",
    knownFor: "Mountain gorilla trekking",
    blurb:
      "An ancient rainforest older than the last Ice Age, home to roughly half of the world's remaining mountain gorillas.",
    img: gorillaSilverback,
    to: "/destinations/bwindi-impenetrable",
  },
  {
    slug: "kibale-forest",
    name: "Kibale Forest",
    location: "Western Uganda",
    knownFor: "Highest primate density in Africa",
    blurb:
      "Over 1,500 wild chimpanzees and twelve other primate species make Kibale the continent's premier chimpanzee-trekking destination.",
    img: expChimp,
    to: "/destinations/kibale-forest",
  },
  {
    slug: "mabira-forest",
    name: "Mabira Forest",
    location: "Central Uganda, near Jinja",
    knownFor: "Zip-lining & birding day trips",
    blurb:
      "Uganda's largest surviving central forest reserve, close enough to Kampala and Jinja for a half-day zip-line canopy tour or birding walk.",
    img: expBalloon,
  },
  {
    slug: "budongo-forest",
    name: "Budongo Forest",
    location: "Near Murchison Falls",
    knownFor: "Chimpanzee habituation experience",
    blurb:
      "East Africa's largest natural mahogany forest, and home to one of Uganda's most established chimpanzee habituation programmes en route to Murchison Falls.",
    img: sceneCulture,
  },
  {
    slug: "semuliki-forest",
    name: "Semuliki Forest",
    location: "Western Uganda, DR Congo border",
    knownFor: "Congo-basin lowland rainforest",
    blurb:
      "A low-altitude extension of the Congo Basin rainforest found nowhere else in Uganda, with birdlife shared more with Central Africa than East Africa.",
    img: semulikiHotSprings,
    to: "/destinations/semuliki",
  },
];
