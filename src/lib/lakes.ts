import expShoebill from "@/assets/exp-shoebill.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

export const LAKES: CategoryItem[] = [
  {
    slug: "lake-bunyonyi",
    name: "Lake Bunyonyi",
    location: "South-western Uganda",
    knownFor: "29 islands, dugout canoes",
    blurb:
      "One of Africa's deepest lakes, ringed by terraced hills and dotted with 29 islands — the classic wind-down stop after gorilla trekking.",
    img: sceneBunyonyi,
    to: "/destinations/lake-bunyonyi",
  },
  {
    slug: "lake-victoria",
    name: "Lake Victoria",
    location: "Southern Uganda",
    knownFor: "Africa's largest lake, Ssese Islands",
    blurb:
      "The source of the White Nile and Africa's largest lake by area — Entebbe's shoreline, Jinja's river-sports scene, and the laid-back Ssese Islands.",
    img: nileBridgeAerial,
  },
  {
    slug: "lake-albert",
    name: "Lake Albert",
    location: "Western Uganda, DR Congo border",
    knownFor: "Rift Valley scenery & fishing",
    blurb:
      "A dramatic Rift Valley lake beneath the Blue Mountains, feeding the Nile as it exits Murchison Falls — quieter, and increasingly a birding destination.",
    img: ctaSunset,
  },
  {
    slug: "kazinga-channel",
    name: "Kazinga Channel",
    location: "Queen Elizabeth National Park",
    knownFor: "Uganda's best boat safari",
    blurb:
      "A natural channel linking Lakes Edward and George, lined with the highest concentration of hippo in Africa and consistently excellent birding.",
    img: sceneLion,
  },
  {
    slug: "lake-mburo-wetlands",
    name: "Lake Mburo",
    location: "Western Uganda",
    knownFor: "Shoebill stork & hippo cruises",
    blurb:
      "The papyrus-fringed lake at the heart of Lake Mburo National Park, best explored by boat for close hippo sightings and a chance at the rare shoebill.",
    img: expShoebill,
    to: "/destinations/lake-mburo",
  },
  {
    slug: "crater-lakes",
    name: "The Crater Lakes",
    location: "Fort Portal, western Uganda",
    knownFor: "~50 volcanic lakes among tea gardens",
    blurb:
      "A scattered field of explosion craters around Fort Portal, wrapped in tea and coffee farmland — the natural overnight stop beside Kibale National Park.",
    img: expCoffee,
    to: "/destinations/crater-lakes",
  },
];
