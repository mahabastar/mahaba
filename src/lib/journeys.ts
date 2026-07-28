import heroGorilla from "@/assets/hero-gorilla.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";

export type JourneyDay = {
  day: number | string;
  title: string;
  copy: string;
  destination?: { name: string; to: string };
};

export type Journey = {
  slug: string;
  title: string;
  days: string;
  tagline: string;
  copy: string;
  img: string;
  overview: string;
  highlights: string[];
  itinerary: JourneyDay[];
  destinations: { name: string; to: string }[];
};

export const JOURNEYS: Journey[] = [
  {
    slug: "gorilla-escape",
    title: "Gorilla Escape",
    days: "3",
    tagline: "A weekend with silverbacks in Bwindi's misty canopy.",
    copy: "A weekend with silverbacks in Bwindi's misty canopy.",
    img: heroGorilla,
    overview:
      "The shortest way into Uganda's signature experience. A tight, well-paced long weekend built around a single gorilla trekking permit, with just enough time either side to arrive properly and leave unhurried.",
    highlights: ["One gorilla trekking permit in Bwindi", "A community or lake add-on to close the trip", "Ideal for a long-weekend safari"],
    destinations: [
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
    itinerary: [
      { day: 1, title: "Arrive & transfer to Bwindi", copy: "Land at Entebbe and connect on to the Bwindi region, either by light aircraft or a scenic road transfer through the Kigezi highlands. Evening briefing at your lodge, with the forest visible from the terrace." },
      { day: 2, title: "Gorilla trekking day", copy: "An early breakfast, a ranger briefing, and then into the forest to track a habituated gorilla family — anywhere from one to several hours of hiking, followed by an hour in their company.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: 3, title: "Lake Bunyonyi & departure", copy: "A short transfer to Lake Bunyonyi for a slow final morning — a dugout canoe on still water, lunch on a terraced hillside — before connecting back to Entebbe.", destination: { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" } },
    ],
  },
  {
    slug: "primates-adventure",
    title: "Primates Adventure",
    days: "5",
    tagline: "Gorillas, chimps and golden monkeys in one unforgettable arc.",
    copy: "Gorillas, chimps and golden monkeys in one unforgettable arc.",
    img: expChimp,
    overview:
      "Uganda's three great primate treks in a single, tightly-run five days: mountain gorillas in Bwindi, chimpanzees in the same forest system, and golden monkeys in the bamboo of the Virunga foothills.",
    highlights: ["Gorilla trekking permit in Bwindi", "Chimpanzee tracking", "Golden monkey trek in the Virunga foothills"],
    destinations: [
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
    ],
    itinerary: [
      { day: 1, title: "Arrive & transfer to Bwindi", copy: "Fly or drive in to the Bwindi region, settling into your forest-edge lodge in time for an early night ahead of tomorrow's trek." },
      { day: 2, title: "Gorilla trekking day", copy: "A full day tracking a habituated mountain gorilla family through Bwindi's undergrowth, followed by an hour in their company.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: 3, title: "Chimpanzee tracking", copy: "A second forest morning, this time following a troop of chimpanzees through the canopy — noisier, faster-moving, and every bit as absorbing as the gorillas." },
      { day: 4, title: "Transfer south & tree-climbing lions", copy: "A scenic drive south through Queen Elizabeth National Park's Ishasha sector, keeping watch for lions draped over the branches of the fig trees.", destination: { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" } },
      { day: 5, title: "Golden monkey trek & departure", copy: "A final forest walk into the bamboo zone near the Virunga foothills in search of golden monkeys, before transferring back for your onward flight." },
    ],
  },
  {
    slug: "pearl-of-africa",
    title: "Pearl of Africa",
    days: "7",
    tagline: "The classic — parks, primates, culture, and the Nile.",
    copy: "The classic — parks, primates, culture, and the Nile.",
    img: sceneFalls,
    overview:
      "Our most-booked itinerary, and the one we'd recommend to a first-time visitor who wants the full range of what Uganda does best in a single week — savannah, forest, water and culture, linked by short scheduled flights between parks to keep road time to a minimum.",
    highlights: ["Murchison Falls game drives & Nile boat cruise", "Gorilla trekking in Bwindi", "Tree-climbing lions in Ishasha", "A slow finish on Lake Bunyonyi"],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
    itinerary: [
      { day: 1, title: "Arrive & fly to Murchison Falls", copy: "Land at Entebbe and connect by light aircraft straight up to Murchison Falls, arriving in time for an afternoon game drive on the savannah north of the Nile." },
      { day: 2, title: "Murchison Falls, in full", copy: "A dawn game drive followed by a boat cruise to the base of the falls, watching the entire Nile forced through a gorge just seven metres wide.", destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" } },
      { day: 3, title: "Fly south to Bwindi", copy: "A scenic light-aircraft transfer south to the Bwindi region, with the afternoon free to settle in ahead of tomorrow's trek." },
      { day: 4, title: "Gorilla trekking day", copy: "A full day tracking a habituated gorilla family through the forest, followed by an hour in their company.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: 5, title: "Transfer to Ishasha", copy: "A drive north into Queen Elizabeth National Park's Ishasha sector, game-viewing en route and watching for lions in the fig trees.", destination: { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" } },
      { day: 6, title: "Lake Bunyonyi", copy: "A short transfer to Lake Bunyonyi for a slower day — a dugout canoe, terraced hillside walks, and an evening with nothing scheduled.", destination: { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" } },
      { day: 7, title: "Departure", copy: "A final relaxed morning before transferring back to Entebbe for your onward flight." },
    ],
  },
  {
    slug: "wildlife-and-primates",
    title: "Wildlife & Primates",
    days: "10",
    tagline: "Deeper into the wild, at a considered, unhurried pace.",
    copy: "Deeper into the wild, at a considered, unhurried pace.",
    img: sceneElephants,
    overview:
      "The Pearl of Africa route, unhurried — extra nights at each park, a second gorilla trek for those who want it, and enough slack in the schedule that a slow morning never feels like a missed one.",
    highlights: ["Two nights at Murchison Falls", "Extended stay in Bwindi, with time for a second trek", "Ishasha game drives at a relaxed pace", "A proper rest on Lake Bunyonyi"],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
    itinerary: [
      { day: 1, title: "Arrive & fly to Murchison Falls", copy: "Connect straight up to Murchison Falls on arrival, with an afternoon game drive to start things off." },
      { day: "2–3", title: "Murchison Falls, unhurried", copy: "Two full days between game drives, a Nile boat cruise to the base of the falls, and a top-of-the-falls walk on foot.", destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" } },
      { day: 4, title: "Fly south to Bwindi", copy: "A scenic transfer south, with the afternoon free to settle into your forest-edge lodge." },
      { day: "5–6", title: "Two treks in Bwindi", copy: "A gorilla trekking day, followed by a second day free to trek again, walk a forest trail, or spend the morning with a local community group.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: "7–8", title: "Ishasha, at a relaxed pace", copy: "A drive north into Queen Elizabeth National Park with two nights to properly work the Ishasha sector's game drives and tree-climbing lion sightings.", destination: { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" } },
      { day: "9", title: "Lake Bunyonyi", copy: "A transfer to Lake Bunyonyi for a full day with nothing scheduled — a canoe, a terraced-hillside walk, an early night.", destination: { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" } },
      { day: 10, title: "Departure", copy: "A slow final morning before the transfer back to Entebbe." },
    ],
  },
  {
    slug: "ultimate-uganda",
    title: "Ultimate Uganda",
    days: "14",
    tagline: "The full symphony: from the Rwenzori to Kidepo's savannas.",
    copy: "The full symphony: from the Rwenzori to Kidepo's savannas.",
    img: sceneRwenzori,
    overview:
      "Two weeks that reach further than our standard routes — north to the remote, little-visited savanna of Kidepo Valley, and up into the foothills of the Rwenzori for a taste of Africa's most improbable mountain range, alongside the primate and Nile highlights of the classic route.",
    highlights: ["Source of the Nile at Jinja", "Murchison Falls", "Remote Kidepo Valley in Uganda's far north-east", "A Rwenzori foothills day hike & tea country", "Gorilla trekking, tree-climbing lions & Lake Bunyonyi"],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
    itinerary: [
      { day: "1–2", title: "Jinja & the source of the Nile", copy: "Arrive at Entebbe and head east to Jinja, where the Nile begins its journey — a gentle boat cruise to the source, or white water for those who want it." },
      { day: "3–4", title: "Murchison Falls", copy: "North to Murchison Falls for game drives on the savannah and a boat cruise to the base of the falls.", destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" } },
      { day: "5–6", title: "Kidepo Valley", copy: "A flight into Uganda's far north-east, one of the continent's most remote parks — open savanna, dramatic mountain backdrops, and a fraction of the visitors of anywhere else on this trip." },
      { day: 7, title: "South to Kibale & Fort Portal", copy: "A transfer south into the Fort Portal crater region, chimpanzee-forest country, with the Rwenzori's snow-capped ridgeline visible on a clear day." },
      { day: 8, title: "Chimp tracking & tea country", copy: "A morning chimpanzee trek followed by an afternoon among the rolling tea estates that define this part of western Uganda." },
      { day: 9, title: "Rwenzori foothills", copy: "A day hike into the lower slopes of the Rwenzori range — Africa's 'Mountains of the Moon' — through montane forest without committing to a full multi-day glacier expedition." },
      { day: 10, title: "Transfer to Bwindi", copy: "South again, into the Bwindi region, with the evening free ahead of tomorrow's trek." },
      { day: 11, title: "Gorilla trekking day", copy: "A full day tracking a habituated gorilla family through Bwindi's forest.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: 12, title: "Ishasha", copy: "A drive north into Queen Elizabeth National Park's Ishasha sector for tree-climbing lions and open-plains game viewing.", destination: { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" } },
      { day: 13, title: "Lake Bunyonyi", copy: "A final slow day on Lake Bunyonyi — a dugout canoe, terraced hills, and no schedule at all.", destination: { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" } },
      { day: 14, title: "Departure", copy: "Transfer back to Entebbe for your onward flight." },
    ],
  },
  {
    slug: "grand-explorer",
    title: "Grand Explorer",
    days: "21",
    tagline: "Three weeks to feel Uganda become a part of who you are.",
    copy: "Three weeks to feel Uganda become a part of who you are.",
    img: sceneBunyonyi,
    overview:
      "Our longest and most complete route — everything in Ultimate Uganda, plus Sipi Falls and the eastern coffee highlands, a second gorilla trek, and enough breathing room throughout that three weeks never once feels rushed.",
    highlights: ["Source of the Nile at Jinja", "Murchison Falls", "Remote Kidepo Valley", "Rwenzori foothills & tea country", "Two gorilla treks in Bwindi", "Tree-climbing lions in Ishasha", "Sipi Falls & coffee country", "A proper rest on Lake Bunyonyi"],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      { name: "Sipi Falls", to: "/destinations/sipi-falls" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
    ],
    itinerary: [
      { day: "1–2", title: "Jinja & the source of the Nile", copy: "Ease into Uganda at Jinja, on the Nile's edge — a boat cruise to its source, and white water for those who want it." },
      { day: "3–4", title: "Sipi Falls & coffee country", copy: "East to the slopes of Mount Elgon for three waterfalls, coffee terraces, and a morning roasting beans over an open fire.", destination: { name: "Sipi Falls", to: "/destinations/sipi-falls" } },
      { day: "5–6", title: "Murchison Falls", copy: "Game drives on the savannah north of the Nile and a boat cruise to the base of the falls.", destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" } },
      { day: "7–8", title: "Kidepo Valley", copy: "A flight into Uganda's remote far north-east — open savanna and dramatic mountain backdrops, largely to yourselves." },
      { day: 9, title: "South to Kibale & Fort Portal", copy: "A transfer into crater-lake and chimpanzee-forest country, the Rwenzori's ridgeline visible on a clear day." },
      { day: 10, title: "Chimp tracking & tea country", copy: "A morning chimpanzee trek, an afternoon among the tea estates of western Uganda." },
      { day: "11–12", title: "Rwenzori foothills", copy: "Two days in the lower slopes of the Rwenzori — Africa's 'Mountains of the Moon' — with time to properly explore the montane forest trails." },
      { day: 13, title: "Transfer to Bwindi", copy: "South into the Bwindi region, with the evening free ahead of two treks." },
      { day: "14–15", title: "Two gorilla treks", copy: "A gorilla trekking day, then a second the following day with a different family — a rare chance to properly compare two encounters.", destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" } },
      { day: "16–17", title: "Ishasha, unhurried", copy: "Two full days in Queen Elizabeth National Park's Ishasha sector for tree-climbing lions and open-plains game drives.", destination: { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" } },
      { day: "18–20", title: "Lake Bunyonyi", copy: "Three unscheduled days on Lake Bunyonyi to close the trip properly — canoeing, terraced-hillside walks, and long, slow evenings.", destination: { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" } },
      { day: 21, title: "Departure", copy: "A final morning before the transfer back to Entebbe for your onward flight." },
    ],
  },
];

export function getJourney(slug: string): Journey | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
