import rhinoZiwa from "@/assets/rhino-ziwa.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import cheetahMound from "@/assets/cheetah-mound.jpg";
import qenpZebraBuffalo from "@/assets/qenp-zebra-buffalo.jpg";

import type { CategoryItem } from "@/components/CategoryHub";

export const WILDLIFE_RESERVES: CategoryItem[] = [
  {
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    location: "Nakasongola, central Uganda",
    knownFor: "Southern white rhino tracking",
    blurb:
      "The only place to see rhinos in Uganda — a community-run sanctuary reintroducing southern white rhinos on foot, guided trekking included.",
    img: rhinoZiwa,
    to: "/destinations/ziwa-rhino-sanctuary",
  },
  {
    slug: "toro-semliki-wildlife-reserve",
    name: "Toro-Semliki Wildlife Reserve",
    location: "Western Uganda, near Semuliki",
    knownFor: "Oldest hominid fossil site in Uganda",
    blurb:
      "A quiet savanna reserve bordering Semuliki National Park, with Uganda kob, hippo, and some of the country's earliest human fossil discoveries.",
    img: semulikiHotSprings,
  },
  {
    slug: "pian-upe-wildlife-reserve",
    name: "Pian Upe Wildlife Reserve",
    location: "Karamoja, north-eastern Uganda",
    knownFor: "Cheetah & roan antelope",
    blurb:
      "Uganda's second-largest protected area — vast, little-visited Karamoja savanna holding the country's best odds of a wild cheetah sighting.",
    img: cheetahMound,
  },
  {
    slug: "kabwoya-wildlife-reserve",
    name: "Kabwoya Wildlife Reserve",
    location: "Lake Albert, western Uganda",
    knownFor: "Lakeshore game drives & hot springs",
    blurb:
      "A compact reserve on Lake Albert's escarpment, combining game drives with sweeping Rift Valley views and nearby geothermal springs.",
    img: qenpZebraBuffalo,
  },
];
