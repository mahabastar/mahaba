import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneLion from "@/assets/scene-lion.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import g_tree_lion from "@/assets/gallery/tree-lion.jpg";
import g_tree_lions from "@/assets/gallery/tree-lions.jpg";
import g_lion_cubs_tree from "@/assets/gallery/lion-cubs-tree.jpg";
import g_lion_resting from "@/assets/gallery/lion-resting.jpg";
import g_lioness_portrait from "@/assets/gallery/lioness-portrait.jpg";
import g_leopard_tree from "@/assets/gallery/leopard-tree.jpg";

const FAQS = [
  {
    q: "Where are the tree-climbing lions in Uganda?",
    a: "They live in the Ishasha sector — the southern part of Queen Elizabeth National Park in western Uganda. It is one of only two places in the world where lions habitually climb trees.",
  },
  {
    q: "Why do the lions of Ishasha climb trees?",
    a: "Scientists still debate it. The leading theories are escape from biting tsetse flies on the ground, cooler breezes above the plains, and a learned cultural behaviour passed between prides.",
  },
  {
    q: "What is the best time to see tree-climbing lions?",
    a: "Late morning through early afternoon, when the heat drives lions up into the shade of the fig trees. Sightings are possible year-round but dry-season months (June–September, January–February) are most reliable.",
  },
  {
    q: "Can I combine Ishasha with gorilla trekking?",
    a: "Yes — Ishasha is only a 3-hour drive from Bwindi Impenetrable Forest, making it the most natural pairing with gorilla trekking on any Uganda safari.",
  },
  {
    q: "Is Queen Elizabeth National Park safe?",
    a: "Yes. It is one of Uganda's flagship national parks with a strong ranger presence, well-managed lodges and paved main access. All Trek Wild Uganda safaris include private guiding and 24/7 support.",
  },
];

export const Route = createFileRoute("/destinations/tree-climbing-lions")({
  head: () =>
    buildDestinationHead({
      slug: "tree-climbing-lions",
      name: "Tree-Climbing Lions of Ishasha",
      title: "Tree-Climbing Lions of Ishasha, Queen Elizabeth NP | Trek Wild Uganda",
      description:
        "Track the world-famous tree-climbing lions of Ishasha in Uganda's Queen Elizabeth National Park — expert-guided luxury safaris with Trek Wild Uganda.",
      ogImage: sceneLion,
      region: "Western Uganda",
      keywords: [
        "tree-climbing lions",
        "Ishasha Uganda",
        "Queen Elizabeth National Park",
        "Uganda safari",
        "lion safari Uganda",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="tree-climbing-lions"
      eyebrow="Ishasha, Queen Elizabeth NP"
      name="Tree-Climbing Lions"
      tagline={<>Lions in the <em className="italic text-gold">fig trees</em>.</>}
      intro="On the southern plains of Queen Elizabeth National Park, lions climb. Draped across the low limbs of ancient fig trees, they watch the herds below with unhurried curiosity. It is one of nature's rarest performances — witnessed almost nowhere else on earth."
      heroImage={sceneLion}
      heroAlt="Lions resting in a fig tree in Ishasha, Queen Elizabeth National Park"
      facts={[
        { label: "Location", value: "Ishasha, Queen Elizabeth NP" },
        { label: "Best sightings", value: "Late morning" },
        { label: "Ideal stay", value: "2 nights" },
        { label: "Difficulty", value: "Easy game drive" },
      ]}
      sections={[
        {
          title: "A phenomenon almost nowhere else",
          body: "Only two lion populations in the world habitually climb trees — those of Ishasha and Lake Manyara in Tanzania. Biologists still debate why: escape from tsetse flies, cooler breezes above the plains, or simply a passed-down cultural habit. Whatever the reason, the sight of a full-maned lion asleep on a fig branch is unforgettable.",
        },
        {
          title: "The wild south of Queen Elizabeth",
          body: "Ishasha is the quieter, wilder southern sector of Queen Elizabeth National Park. Its open savannah is dotted with candelabra euphorbia and fig trees, and grazed by topi, Uganda kob, buffalo and elephant — the very reason the lions have chosen these branches as their throne.",
        },
        {
          title: "The Kazinga connection",
          body: "Most Ishasha journeys begin or end with a boat cruise on the Kazinga Channel — a slow drift past bathing elephants, hippo pods and dazzling waterbirds. It is Uganda's classic safari afternoon.",
        },
      ]}
      galleryImages={[
        { src: g_tree_lion, alt: "Tree-climbing lion in Ishasha" },
        { src: g_tree_lions, alt: "Lions resting in a fig tree, Ishasha" },
        { src: g_lion_cubs_tree, alt: "Lion cubs in the branches" },
        { src: g_lion_resting, alt: "Lion resting on the Ishasha plains" },
        { src: g_lioness_portrait, alt: "Lioness portrait, Queen Elizabeth" },
        { src: g_leopard_tree, alt: "Leopard in a tree, Ishasha sector" },
      ]}
      highlights={[
        { title: "Rare wildlife spectacle", desc: "One of only two places on earth to see lions habitually climb trees." },
        { title: "Uncrowded plains", desc: "Ishasha remains one of Uganda's quietest, most exclusive safari sectors." },
        { title: "Kazinga Channel cruise", desc: "A slow boat safari past hundreds of elephants, hippos and pelicans." },
        { title: "Big-cat photography", desc: "Long unhurried sightings — perfect for photographers of every level." },
        { title: "Extend to Bwindi", desc: "Just a 3-hour drive from Bwindi — combine with gorilla trekking seamlessly." },
        { title: "Sunset game drives", desc: "Golden light spills across the plains as prides begin to stir." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive Queen Elizabeth", desc: "Drive or fly into Mweya airstrip. Afternoon cruise on the Kazinga Channel among elephants and hippos." },
        { day: "Day 02", title: "Ishasha lions", desc: "Full day of game drives across the Ishasha sector, searching the fig trees for lions and photographing the vast southern plains." },
        { day: "Day 03", title: "Kyambura Gorge", desc: "Optional chimpanzee tracking in the 'Valley of Apes' before a slow lunch and sunset drive." },
        { day: "Day 04", title: "On to Bwindi or Kibale", desc: "Extend south for gorilla trekking or north to Kibale's chimpanzees — Ishasha connects both effortlessly." },
      ]}
      bestTime="June–September and January–February — dry season, when the grasses are low and wildlife concentrates around water. Green-season months (March–May, November) are lush and quiet, ideal for photographers."
      gettingThere="Fly to Mweya or Kasese airstrip (1 hour from Entebbe), or drive 6–7 hours west from Kampala through the Rift Valley. Ishasha pairs beautifully with Bwindi (3 hours south) and Kibale Forest (3 hours north)."
      related={[
        { name: "Gorilla Trekking", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
        { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi },
      ]}
      faqs={FAQS}
    />
  ),
});
