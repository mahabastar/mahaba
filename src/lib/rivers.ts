import sceneFalls from "@/assets/scene-falls.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import buffaloWaterhole from "@/assets/buffalo-waterhole.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

export const RIVERS: CategoryItem[] = [
  {
    slug: "the-nile",
    name: "The Nile",
    location: "Jinja to Murchison Falls",
    knownFor: "White-water rafting & the source of the Nile",
    blurb:
      "From its source at Lake Victoria in Jinja to its dramatic exit through Murchison Falls, the world's longest river is Uganda's single defining landmark.",
    img: nileBridgeAerial,
    to: "/destinations/jinja-source-of-the-nile",
  },
  {
    slug: "victoria-nile-murchison",
    name: "Victoria Nile at Murchison",
    location: "Murchison Falls National Park",
    knownFor: "The Nile forced through a 7-metre gorge",
    blurb:
      "The same river, transformed — the entire Victoria Nile compressed through a gap barely wider than a doorway before exploding into the pool below.",
    img: sceneFalls,
    to: "/destinations/murchison-falls",
  },
  {
    slug: "kazinga-channel-river",
    name: "Kazinga Channel",
    location: "Queen Elizabeth National Park",
    knownFor: "Highest hippo density in Africa",
    blurb:
      "A natural 40km channel linking Lakes Edward and George, and the setting for Uganda's most reliable boat safari.",
    img: buffaloWaterhole,
  },
  {
    slug: "semliki-river",
    name: "Semliki River",
    location: "Western Uganda, DR Congo border",
    knownFor: "Rift Valley border river",
    blurb:
      "Tracing the boundary between Uganda and DR Congo as it feeds Lake Albert, the Semliki River frames the lowland forest of Semuliki National Park.",
    img: semulikiHotSprings,
    to: "/destinations/semuliki",
  },
];
