import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_gorilla_silverback from "@/assets/gallery/gorilla-silverback.jpg";
import g_gorilla_lookup from "@/assets/gallery/gorilla-lookup.jpg";
import g_gorilla_baby from "@/assets/gallery/gorilla-baby.jpg";
import g_gorilla_backlit from "@/assets/gallery/gorilla-backlit.jpg";
import g_gorilla_tracking_1 from "@/assets/gallery/gorilla-tracking-1.jpg";
import g_gorilla_tracking_2 from "@/assets/gallery/gorilla-tracking-2.jpg";
import g_gorilla_tracking_3 from "@/assets/gallery/gorilla-tracking-3.jpg";
import g_virunga_volcanoes from "@/assets/gallery/virunga-volcanoes.jpg";
import g_golden_monkey_1 from "@/assets/gallery/golden-monkey-1.jpg";

const FAQS = [
  {
    q: "How much does a Uganda gorilla trekking permit cost?",
    a: "A Uganda Wildlife Authority gorilla permit costs USD 800 per person and includes one hour with a habituated gorilla family, ranger guides and park entry. Trek Wild Uganda secures permits on your behalf as part of every itinerary.",
  },
  {
    q: "When is the best time to go gorilla trekking in Bwindi?",
    a: "The dry seasons of June to September and December to February offer firmer trails and easier trekking. Gorilla trekking runs year-round, and the wet-season months of March–May and October–November mean fewer travellers and beautifully lush forest.",
  },
  {
    q: "How difficult is the gorilla trek?",
    a: "Treks range from 1 to 8 hours through steep, muddy rainforest. Fitness helps, but local porters carry your pack and rangers match each guest to a gorilla family suited to their ability.",
  },
  {
    q: "Is Uganda safe for gorilla trekking?",
    a: "Yes. Bwindi and Mgahinga are two of Africa's safest, best-managed national parks. Every trek is led by armed Uganda Wildlife Authority rangers, and Trek Wild Uganda handles logistics, transfers and lodges throughout.",
  },
  {
    q: "How many people are in a gorilla trekking group?",
    a: "Groups are limited to a maximum of eight guests per gorilla family, with strict distancing rules to protect the gorillas from disease and stress.",
  },
];

export const Route = createFileRoute("/destinations/gorilla-trekking")({
  head: () =>
    buildDestinationHead({
      slug: "gorilla-trekking",
      name: "Gorilla Trekking in Bwindi",
      title: "Gorilla Trekking in Bwindi, Uganda — Permits, Cost & Tours | Trek Wild Uganda",
      description:
        "Trek Uganda's Bwindi Impenetrable Forest to meet endangered mountain gorillas face-to-face. Permits, best time to go, itineraries and expert-guided luxury tours from Trek Wild Uganda.",
      ogImage: heroGorilla,
      region: "South-western Uganda",
      keywords: [
        "Uganda gorilla trekking",
        "Bwindi Impenetrable Forest",
        "mountain gorilla safari",
        "gorilla permit Uganda",
        "Uganda safari",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="gorilla-trekking"
      eyebrow="Bwindi Impenetrable Forest"
      name="Gorilla Trekking"
      tagline={<>An hour with the <em className="italic text-gold">silverbacks</em>.</>}
      intro="You leave the lodge before the mist has lifted, follow a tracker who has known this forest since childhood, and climb until the trail stops being a trail. Then he raises a hand, and three metres away a silverback lifts his head from a stem of wild celery and looks straight at you. There is no fence, no vehicle, no glass. It is the rarest wildlife encounter left on earth — and Uganda protects nearly half of the world's remaining mountain gorillas."
      heroImage={heroGorilla}
      heroAlt="Silverback mountain gorilla resting in the undergrowth of Bwindi rainforest"
      facts={[
        { label: "Location", value: "Bwindi & Mgahinga" },
        { label: "Duration", value: "1 hour with gorillas" },
        { label: "Permit", value: "USD 800 per person" },
        { label: "Difficulty", value: "Moderate to Strenuous" },
      ]}
      sections={[
        {
          title: "A forest older than memory",
          body: "Bwindi Impenetrable Forest is one of Africa's oldest ecosystems — some 25,000 years of unbroken canopy that survived the Ice Age when forests around it did not. Ferns, orchids and hardwoods layer into a green so complete it changes the colour of the light. More than 400 mountain gorillas live here, roughly half the world's remaining population, in a species whose numbers are now climbing rather than falling: the only great ape on earth of which that is true.",
        },
        {
          title: "The hour that changes you",
          body: "You gather at dawn for a briefing, are matched to a family by fitness, and walk in behind rangers already in radio contact with the trackers who found the group at first light. The walk can take one hour or six. Then the clock starts, and everything narrows: an infant somersaulting off a branch, a mother eating with her back turned, a silverback breathing so audibly you feel it. Almost no one speaks. Almost everyone remembers it as the hour that reset their sense of scale.",
        },
        {
          title: "Trekked with intention",
          body: "Every USD 800 permit funds ranger patrols, veterinary care and the revenue-sharing scheme that returns a fifth of park income to the villages on the forest boundary — the arrangement that turned local farmers from adversaries into the gorillas' most effective protection. Group sizes are capped at eight guests, distancing rules are enforced, and we book porters, guides and community lodges from the surrounding villages, so the money stays where the forest is.",
        },
        {
          title: "The people you'll meet along the way",
          body: "Your tracker is likely a Bakiga man from a farm within sight of the park gate; your porter, a woman from a cooperative that shares the day's earnings across the group. The Batwa, evicted from this forest in 1991, now run guided walks that explain how they lived inside it — how to find water in a vine, fire in wet air, medicine in a leaf. Set aside a morning for it. The gorillas are why you came; these conversations are often what you find yourself describing at home.",
        },
      ]}

      galleryImages={[
        { src: g_gorilla_silverback, alt: "Silverback gorilla in Bwindi" },
        { src: g_gorilla_lookup, alt: "Mountain gorilla pausing mid-forage" },
        { src: g_gorilla_baby, alt: "Infant gorilla feeding in the undergrowth" },
        { src: g_gorilla_backlit, alt: "Gorilla backlit in the forest canopy" },
        { src: g_gorilla_tracking_1, alt: "Moments from gorilla tracking" },
        { src: g_gorilla_tracking_2, alt: "Face to face on a gorilla trek" },
        { src: g_gorilla_tracking_3, alt: "Trackers on the gorilla trail" },
        { src: g_virunga_volcanoes, alt: "The Virunga volcanoes above the gorilla forests" },
        { src: g_golden_monkey_1, alt: "Golden monkey in the Virunga bamboo" },
      ]}
      highlights={[
        { title: "Face-to-face encounter", desc: "One hour, three metres, no barriers — the most personal wildlife moment on the planet." },
        { title: "Small, private groups", desc: "Only eight guests per gorilla family, guided by expert rangers from the community." },
        { title: "Community porters", desc: "Optional local porters carry your pack — meaningful support for surrounding villages." },
        { title: "Ancient rainforest", desc: "Trek through 25,000-year-old forest alive with birds, orchids and forest elephants." },
        { title: "Conservation impact", desc: "Every permit directly funds anti-poaching patrols and gorilla healthcare." },
        { title: "Boutique lodges", desc: "Sleep in intimate forest lodges built and staffed by neighbouring communities." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Kampala → Bwindi", desc: "A scenic drive south through the equator, tea estates and terraced hills to your forest lodge on the edge of Bwindi." },
        { day: "Day 02", title: "Gorilla trek", desc: "An early briefing at the park headquarters, then a guided trek to a habituated gorilla family for your unforgettable hour." },
        { day: "Day 03", title: "Batwa & community day", desc: "Spend the morning with the Batwa forest people, or hike to a waterfall through banana plantations before a slow evening at the lodge." },
        { day: "Day 04", title: "Return via Lake Bunyonyi", desc: "Pause at Uganda's most beautiful lake for lunch on the water before continuing north or on to Rwanda." },
      ]}
      bestTime="June to September and December to February — the dry seasons — bring firmer trails and easier trekking. Gorilla trekking is possible year-round; the wet months of March–May and October–November mean fewer travellers and lush, cinematic light."
      gettingThere="Fly into Entebbe International Airport. Bwindi is a scenic 8–9 hour drive south, or a 1-hour scheduled flight to Kihihi or Kisoro airstrips followed by a 1–2 hour transfer to your lodge."
      related={[
        { name: "Chimpanzee Trekking", to: "/destinations/chimpanzee-trekking", img: expChimp },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
