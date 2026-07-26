import { JOURNAL_POSTS } from "@/lib/journal-posts";
import { JOURNEYS } from "@/lib/journeys";
import { EXPERIENCES } from "@/lib/experiences";

export type SearchItem = {
  label: string;
  category: string;
  to: string;
  params?: Record<string, string>;
};

const DESTINATIONS: SearchItem[] = [
  { label: "Gorilla Trekking, Bwindi", category: "Destination", to: "/destinations/gorilla-trekking" },
  { label: "Chimpanzee Trekking", category: "Destination", to: "/destinations/chimpanzee-trekking" },
  { label: "Tree-Climbing Lions, Ishasha", category: "Destination", to: "/destinations/tree-climbing-lions" },
  { label: "Queen Elizabeth National Park", category: "Destination", to: "/destinations/queen-elizabeth-national-park" },
  { label: "Murchison Falls", category: "Destination", to: "/destinations/murchison-falls" },
  { label: "Kidepo Valley National Park", category: "Destination", to: "/destinations/kidepo-valley" },
  { label: "Rwenzori Mountains", category: "Destination", to: "/destinations/rwenzori-mountains" },
  { label: "Jinja, Source of the Nile", category: "Destination", to: "/destinations/jinja-source-of-the-nile" },
  { label: "Sipi Falls", category: "Destination", to: "/destinations/sipi-falls" },
  { label: "Lake Bunyonyi", category: "Destination", to: "/destinations/lake-bunyonyi" },
  { label: "Entebbe", category: "Destination", to: "/destinations/entebbe" },
  { label: "Bwindi Impenetrable National Park", category: "Destination", to: "/destinations/bwindi-impenetrable" },
  { label: "Mgahinga Gorilla National Park", category: "Destination", to: "/destinations/mgahinga-gorilla" },
  { label: "Semuliki National Park", category: "Destination", to: "/destinations/semuliki" },
  { label: "Mount Elgon National Park", category: "Destination", to: "/destinations/mount-elgon" },
  { label: "Lake Mburo National Park", category: "Destination", to: "/destinations/lake-mburo" },
  { label: "Kibale National Park", category: "Destination", to: "/destinations/kibale-forest" },
  { label: "The Crater Lakes, Fort Portal", category: "Destination", to: "/destinations/crater-lakes" },
  { label: "Ziwa Rhino Sanctuary", category: "Destination", to: "/destinations/ziwa-rhino-sanctuary" },
];

const TOOLS: SearchItem[] = [
  { label: "Uganda Explorer", category: "Tool", to: "/uganda-explorer" },
  { label: "National Parks", category: "Tool", to: "/national-parks" },
  { label: "Wildlife Reserves", category: "Tool", to: "/wildlife-reserves" },
  { label: "Lakes", category: "Tool", to: "/lakes" },
  { label: "Rivers", category: "Tool", to: "/rivers" },
  { label: "Mountains", category: "Tool", to: "/mountains" },
  { label: "Forests", category: "Tool", to: "/forests" },
  { label: "Experiences", category: "Tool", to: "/experiences" },
  { label: "Wildlife Encyclopedia", category: "Tool", to: "/wildlife-encyclopedia" },
  { label: "Bird Guide", category: "Tool", to: "/bird-guide" },
  { label: "Ugandan Food Guide", category: "Tool", to: "/food-guide" },
  { label: "Coffee & Tea Guide", category: "Tool", to: "/coffee-tea-guide" },
  { label: "Cultural Heritage", category: "Tool", to: "/cultural-heritage" },
  { label: "Seasonal Safari Calendar", category: "Tool", to: "/seasonal-safari-calendar" },
  { label: "Weather Guide", category: "Tool", to: "/weather" },
  { label: "Safari Budget Calculator", category: "Tool", to: "/safari-budget-calculator" },
  { label: "Visa Guide", category: "Tool", to: "/visa-guide" },
  { label: "Packing Guide", category: "Tool", to: "/packing-guide" },
  { label: "Gorilla Permit Guide", category: "Tool", to: "/gorilla-permit-guide" },
  { label: "FAQs", category: "Tool", to: "/faqs" },
  { label: "Request a Quote", category: "Tool", to: "/quote-request" },
  { label: "Build My Safari", category: "Tool", to: "/build-my-safari" },
  { label: "Responsible Tourism Centre", category: "Tool", to: "/responsible-tourism" },
  { label: "Wild Uganda TV", category: "Tool", to: "/wild-uganda-tv" },
  { label: "Gallery", category: "Tool", to: "/gallery" },
  { label: "About Us", category: "Tool", to: "/about" },
  { label: "Contact Us", category: "Tool", to: "/contact" },
];

const JOURNAL: SearchItem[] = JOURNAL_POSTS.map((p) => ({
  label: p.title,
  category: "Journal",
  to: "/travel-journal/$slug",
  params: { slug: p.slug },
}));

const JOURNEY_ITEMS: SearchItem[] = JOURNEYS.map((j) => ({
  label: `${j.title} (${j.days} days)`,
  category: "Journey",
  to: "/journeys/$slug",
  params: { slug: j.slug },
}));

const EXPERIENCE_ITEMS: SearchItem[] = EXPERIENCES.map((e) => ({
  label: e.title,
  category: "Experience",
  to: "/experiences/$slug",
  params: { slug: e.slug },
}));

export const SEARCH_INDEX: SearchItem[] = [...DESTINATIONS, ...TOOLS, ...JOURNEY_ITEMS, ...EXPERIENCE_ITEMS, ...JOURNAL];
