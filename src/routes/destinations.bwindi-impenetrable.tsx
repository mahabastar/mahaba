import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import g_gorilla_silverback from "@/assets/gallery/gorilla-silverback.jpg";
import g_gorilla_baby from "@/assets/gallery/gorilla-baby.jpg";
import g_gorilla_tracking_1 from "@/assets/gallery/gorilla-tracking-1.jpg";
import g_gorilla_tracking_2 from "@/assets/gallery/gorilla-tracking-2.jpg";
import g_gorilla_lookup from "@/assets/gallery/gorilla-lookup.jpg";
import g_gorilla_tracking_3 from "@/assets/gallery/gorilla-tracking-3.jpg";

const FAQS = [
  {
    q: "How is Bwindi different from Mgahinga for gorilla trekking?",
    a: "Bwindi holds about half the world's mountain gorillas across four separate trekking sectors, so it offers far more permit availability and a wider spread of habituated families. Mgahinga has just one habituated family and is better paired with a Virunga volcano climb.",
  },
  {
    q: "How difficult is gorilla trekking in Bwindi?",
    a: "It varies by sector and by where the gorillas have moved that morning — treks can run anywhere from 1 to 8 hours round trip, over steep, often muddy rainforest terrain (Bwindi means 'impenetrable' for a reason). A reasonable fitness level and hiking poles are recommended; porters are available and worth hiring.",
  },
  {
    q: "How much is a gorilla permit and what does it include?",
    a: "A Uganda gorilla permit costs USD 800 per person and covers one hour with a habituated gorilla family, an armed ranger guide, and trackers. It doesn't include park entry fees, accommodation, or transport.",
  },
  {
    q: "When should I book my gorilla permit?",
    a: "As early as possible — permits are limited (8 per habituated family, per day) and popular sectors sell out months ahead, especially in the June–September and December–February peak season.",
  },
  {
    q: "Which Bwindi sector should I choose?",
    a: "Buhoma is the most established with the easiest access and gentlest terrain; Ruhija sits at the highest altitude with cooler weather; Rushaga has the most habituated families and the option of a longer Gorilla Habituation Experience; Nkuringo has the most demanding trails but arguably the best views.",
  },
];

export const Route = createFileRoute("/destinations/bwindi-impenetrable")({
  head: () =>
    buildDestinationHead({
      slug: "bwindi-impenetrable",
      name: "Bwindi Impenetrable National Park",
      title: "Bwindi Impenetrable National Park, Uganda — Gorilla Trekking Guide | Trek Wild Uganda",
      description:
        "Home to half the world's mountain gorillas — Bwindi's four trekking sectors, permit costs, and how to plan a trip into Uganda's oldest rainforest.",
      ogImage: gorillaSilverback,
      region: "South-western Uganda",
      keywords: [
        "Bwindi Impenetrable National Park",
        "Bwindi gorilla trekking",
        "Uganda gorilla permit",
        "Buhoma",
        "Rushaga",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="bwindi-impenetrable"
      eyebrow="Bwindi Impenetrable National Park"
      name="Bwindi Impenetrable"
      tagline={<>Half the world's gorillas, <em className="italic text-gold">one ancient forest</em>.</>}
      intro="A UNESCO World Heritage rainforest older than the last Ice Age — tangled with vines, buttressed hardwoods and a canopy so dense that daylight arrives in fragments. Around half of all the mountain gorillas left on Earth live in these 321 square kilometres, alongside the Bakiga farmers and Batwa families whose lives have been shaped by the forest for generations. Four separate trekking sectors mean more permits, more habituated families, and more ways into the same extraordinary hour."
      heroImage={gorillaSilverback}
      heroAlt="A mountain gorilla silverback foraging in Bwindi's undergrowth"
      facts={[
        { label: "Location", value: "South-western Uganda" },
        { label: "Gorilla permit", value: "USD 800 per person" },
        { label: "Ideal stay", value: "2 nights" },
        { label: "Highlight", value: "Face-to-face gorilla trekking" },
      ]}
      sections={[
        {
          title: "Four sectors, one forest",
          body: "Bwindi isn't a single trekking base but four: Buhoma in the north, Ruhija to the east, and Rushaga and Nkuringo in the south. Each has its own habituated gorilla families, its own terrain, and its own character — Buhoma the most established and gentlest underfoot, Ruhija the highest and coolest, Rushaga the widest choice of families and home of the longer habituation experience, Nkuringo the steepest and, many say, the most beautiful. Which sector you sleep in decides how your morning begins, so it matters as much as when you go.",
        },
        {
          title: "The forest itself",
          body: "'Impenetrable' isn't marketing. Bwindi is among the most biodiverse places in Africa — over 400 plant species, 350 birds, forest elephants moving unseen through the understorey. The air is cool and wet and smells of leaf litter and wild celery; the noise is constant and layered, cicadas over turacos over the distant crack of a branch. The canopy is thick enough that rangers locate each gorilla family every morning by radio and tracker knowledge rather than sightlines, long before the first trekkers lace their boots.",
        },
        {
          title: "The people of the forest edge",
          body: "Bwindi is ringed by densely farmed hills — banana gardens, sorghum, tea — worked by Bakiga families whose homes stop exactly where the park boundary begins. The Batwa, who lived inside this forest for millennia as hunter-gatherers, were moved out when it became a national park in 1991; today their guided walks near Buhoma and Nkuringo are among the most honest cultural hours in Uganda, and the income goes straight to the households involved. Twenty percent of park entry revenue is shared with these communities, funding classrooms, clinics and clean water, which is precisely why the forest still stands.",
        },
        {
          title: "More than gorillas",
          body: "The lower trails offer birding rivalled by few parks on the continent, including 23 Albertine Rift endemics found nowhere else in Uganda, and walks to the Munyaga River waterfalls that most visitors skip entirely. Give Bwindi a spare afternoon and it will fill it — a village walk through the banana gardens, a coffee or basket-weaving cooperative, or simply the mist rolling back up the valley as the light goes.",
        },
      ]}

      galleryImages={[
        { src: g_gorilla_silverback, alt: "Silverback gorilla foraging in Bwindi's undergrowth" },
        { src: g_gorilla_baby, alt: "A young gorilla feeding in the forest" },
        { src: g_gorilla_tracking_1, alt: "Trackers on the gorilla trail in Bwindi" },
        { src: g_gorilla_tracking_2, alt: "Face to face with a Bwindi gorilla family" },
        { src: g_gorilla_lookup, alt: "Mountain gorilla pausing mid-forage, Bwindi" },
        { src: g_gorilla_tracking_3, alt: "A gorilla family resting in the Bwindi undergrowth" },
      ]}
      highlights={[
        { title: "Half the world's mountain gorillas", desc: "The single largest population of mountain gorillas anywhere, across four trekking sectors." },
        { title: "Gorilla Habituation Experience", desc: "In Rushaga, spend up to 4 hours with a family still being habituated, instead of the standard one hour." },
        { title: "Batwa cultural encounters", desc: "Guided walks with the forest's original inhabitants, displaced when Bwindi became a protected park." },
        { title: "World-class birding", desc: "350 species recorded, including 23 found nowhere else in Uganda." },
        { title: "Ancient, untouched rainforest", desc: "One of the few African forests to have survived the last Ice Age intact." },
        { title: "Choice of four distinct sectors", desc: "Buhoma, Ruhija, Rushaga and Nkuringo each offer a different pace, altitude and view." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Drive or fly to Bwindi", desc: "A scenic drive through the Kigezi highlands, or a short scheduled flight, arriving in time for an evening briefing." },
        { day: "Day 02", title: "Gorilla trekking", desc: "An early ranger briefing at 7:30am, then into the forest to find your assigned family — anywhere from 1 to 8 hours round trip." },
        { day: "Day 03", title: "Batwa walk or onward travel", desc: "An optional morning cultural walk with a Batwa guide before continuing to Lake Bunyonyi or Queen Elizabeth National Park." },
      ]}
      bestTime="June–September and December–February are driest and most popular for trekking, though gorillas can be tracked year-round. The wetter months are quieter and greener, with the trade-off of muddier trails."
      gettingThere="Fly into Entebbe, then either a scheduled light-aircraft transfer (around 1.5 hours) to an airstrip near your chosen sector, or a scenic 8–9 hour drive through the Kigezi highlands, often broken up with a stop at Lake Mburo National Park."
      related={[
        { name: "Gorilla Trekking Guide", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
