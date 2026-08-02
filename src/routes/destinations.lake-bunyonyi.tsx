import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import g_bunyonyi_1 from "@/assets/gallery/bunyonyi-1.jpg";
import g_bunyonyi_2 from "@/assets/gallery/bunyonyi-2.jpg";
import g_bunyonyi_canoe from "@/assets/gallery/bunyonyi-canoe.jpg";
import g_bunyonyi_3 from "@/assets/gallery/bunyonyi-3.jpg";
import g_bunyonyi_4 from "@/assets/gallery/bunyonyi-4.jpg";
import g_bunyonyi_5 from "@/assets/gallery/bunyonyi-5.jpg";

const FAQS = [
  {
    q: "Where is Lake Bunyonyi?",
    a: "Lake Bunyonyi lies in south-western Uganda near the town of Kabale, at nearly 2,000 metres above sea level. It is Africa's second-deepest lake and one of the highest in the continent.",
  },
  {
    q: "Is it safe to swim in Lake Bunyonyi?",
    a: "Yes — Lake Bunyonyi is one of very few African lakes with no hippos, crocodiles or bilharzia, making it safe and popular for swimming, canoeing and kayaking.",
  },
  {
    q: "How many islands are on Lake Bunyonyi?",
    a: "There are 29 islands scattered across the lake, each with its own story — from Punishment Island to Bushara, Bwama and Akampene.",
  },
  {
    q: "How does Lake Bunyonyi pair with gorilla trekking?",
    a: "Perfectly. Bunyonyi is only a 2-hour drive from Bwindi Impenetrable Forest and is the ideal place to decompress the day after your gorilla trek before flying home from Kigali or Entebbe.",
  },
  {
    q: "How do I get to Lake Bunyonyi?",
    a: "Fly to Kigali (Rwanda) and drive 3 hours across the border, or drive 8 hours from Kampala via Mbarara. Trek Wild Uganda arranges all transfers.",
  },
];

export const Route = createFileRoute("/destinations/lake-bunyonyi")({
  head: () =>
    buildDestinationHead({
      slug: "lake-bunyonyi",
      name: "Lake Bunyonyi",
      title: "Lake Bunyonyi, Uganda — Island Stays & Canoe Safaris | Trek Wild Uganda",
      description:
        "Africa's second-deepest lake — 29 emerald islands, terraced hills and hippo-free swimming. Plan a luxury Lake Bunyonyi escape with Trek Wild Uganda.",
      ogImage: sceneBunyonyi,
      region: "South-western Uganda",
      keywords: [
        "Lake Bunyonyi",
        "Uganda lakes",
        "Bunyonyi islands",
        "Uganda safari",
        "post-gorilla trek Uganda",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="lake-bunyonyi"
      eyebrow="South-western Uganda"
      name="Lake Bunyonyi"
      tagline={<>The lake of <em className="italic text-gold">little birds</em>.</>}
      intro="At almost 2,000 metres above sea level, Lake Bunyonyi lies like polished glass between terraced hills and 29 emerald islands. It is Africa's second-deepest lake, free of hippos and crocodiles, and Uganda's most magical place to simply exhale."
      heroImage={sceneBunyonyi}
      heroAlt="Aerial view of Lake Bunyonyi with its 29 islands and terraced hillsides"
      facts={[
        { label: "Location", value: "Kabale, SW Uganda" },
        { label: "Altitude", value: "1,962 metres" },
        { label: "Islands", value: "29" },
        { label: "Ideal stay", value: "2–3 nights" },
      ]}
      sections={[
        {
          title: "A landscape shaped like a hymn",
          body: "Lake Bunyonyi means 'place of many little birds'. Its 29 islands are draped over deep, quiet water, and the surrounding hills are terraced in a thousand shades of green — sorghum, sweet potato, eucalyptus, banana. It is one of the most photogenic landscapes on the continent.",
        },
        {
          title: "The perfect antidote to the trek",
          body: "Most travellers arrive at Bunyonyi the day after gorilla trekking in Bwindi. Swap the intensity of the forest for a canoe glide across silent water, a slow lunch on a private island, or an afternoon reading in a hammock over the lake.",
        },
        {
          title: "Islands with a story",
          body: "Each island has its own history — Punishment Island, Bushara, Bwama, Akampene. Guided canoe trips weave between them with local Bakiga paddlers who tell the story of each, from missionary schools to legends of the deep.",
        },
      ]}
      galleryImages={[
        { src: g_bunyonyi_1, alt: "Lake Bunyonyi at dawn" },
        { src: g_bunyonyi_2, alt: "Islands on Lake Bunyonyi" },
        { src: g_bunyonyi_canoe, alt: "Dugout canoe on Lake Bunyonyi" },
        { src: g_bunyonyi_3, alt: "Terraced hills above Lake Bunyonyi" },
        { src: g_bunyonyi_4, alt: "Lakeside calm at Bunyonyi" },
        { src: g_bunyonyi_5, alt: "Evening on Lake Bunyonyi" },
      ]}
      highlights={[
        { title: "Dugout canoe safaris", desc: "Paddle between the islands with local Bakiga guides — no engines, no rush." },
        { title: "Swim in safety", desc: "One of the few African lakes with no hippos, crocs or bilharzia." },
        { title: "Terraced-hill hikes", desc: "Walk through farmland and villages to panoramic ridge-top viewpoints." },
        { title: "Batwa & Bakiga culture", desc: "Meet the original forest people and the highland farmers who share the shore." },
        { title: "Island lodges", desc: "Sleep on your own private island under a blanket of highland stars." },
        { title: "Perfect post-gorilla stop", desc: "Just 2 hours from Bwindi — the ideal decompression before flying home." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Bwindi → Bunyonyi", desc: "A scenic 2-hour transfer from Bwindi. Afternoon canoe out to your island lodge and dinner over the water." },
        { day: "Day 02", title: "Islands & villages", desc: "A slow morning circumnavigation of the islands with a Bakiga paddler, followed by a hillside walk through farms and villages." },
        { day: "Day 03", title: "Ridge-top hike", desc: "Hike up to a panoramic viewpoint for the classic Bunyonyi vista, then swim, kayak or simply rest on the terrace." },
        { day: "Day 04", title: "Return to Kampala or Kigali", desc: "Drive north to Kampala or connect through the border to Kigali airport — just 3 hours away." },
      ]}
      bestTime="June to September and December to February bring dry, clear skies and calm water — ideal for canoeing and photography. Green-season months are lush, misty and beautifully quiet."
      gettingThere="A 2-hour drive from Bwindi Impenetrable Forest, or 8 hours from Kampala via Mbarara. The closest international airport is often Kigali (Rwanda), just 3 hours away by road."
      related={[
        { name: "Gorilla Trekking", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi },
      ]}
      faqs={FAQS}
    />
  ),
});
