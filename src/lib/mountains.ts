import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import gorillaLookup from "@/assets/gorilla-lookup.jpg";
import morotoPlains from "@/assets/giraffe-savanna.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

export const MOUNTAINS: CategoryItem[] = [
  {
    slug: "rwenzori-mountains",
    name: "Rwenzori Mountains",
    location: "Western Uganda, DR Congo border",
    knownFor: "Equatorial glaciers, Africa's 3rd-highest peak",
    blurb:
      "The legendary Mountains of the Moon — glaciers and alpine bog almost on the equator, and a multi-day trek to Margherita Peak.",
    img: sceneRwenzori,
    to: "/destinations/rwenzori-mountains",
  },
  {
    slug: "mount-elgon",
    name: "Mount Elgon",
    location: "Eastern Uganda, Kenya border",
    knownFor: "One of the world's largest calderas",
    blurb:
      "An extinct shield volcano with Sipi Falls tumbling down its slopes, and a multi-day trek across its rim to Wagagai Peak.",
    img: expSipi,
    to: "/destinations/mount-elgon",
  },
  {
    slug: "virunga-volcanoes",
    name: "The Virunga Volcanoes",
    location: "South-western Uganda",
    knownFor: "Three-country volcano summit",
    blurb:
      "Mount Sabinyo, Gahinga and Muhabura rise straight off the valley floor in Mgahinga — Sabinyo's ridge trail famously touches three countries at once.",
    img: gorillaLookup,
    to: "/destinations/mgahinga-gorilla",
  },
  {
    slug: "mount-moroto",
    name: "Mount Moroto",
    location: "Karamoja, north-eastern Uganda",
    knownFor: "Remote Karamojong highlands",
    blurb:
      "A little-visited highland forest reserve above the Karamoja plains, with dramatic escarpment views and genuine off-the-circuit trekking.",
    img: morotoPlains,
  },
];
