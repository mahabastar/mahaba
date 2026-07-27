import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneElephants from "@/assets/uploads/elephant-road.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import expChimp from "@/assets/uploads/chimp-kibale.jpg";
import sceneCrane from "@/assets/shoebill-real.jpg";
import expLodge from "@/assets/uploads/safari-lodge-pool.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/uploads/crater-lake-sunset.jpg";

const FAQS = [
  {
    q: "What's the difference between this page and Tree-Climbing Lions, Ishasha?",
    a: "Ishasha is one sector within Queen Elizabeth National Park, known specifically for its fig-tree lions. This page covers the wider park experience — the Kazinga Channel boat cruise, Kasenyi Plains game drives and Kyambura Gorge chimp trekking — all in the park's northern and central sectors. Most itineraries combine both.",
  },
  {
    q: "What will I see on the Kazinga Channel cruise?",
    a: "The channel holds one of the largest hippo concentrations in Africa — around 1,600 individuals — alongside Nile crocodiles, elephants and buffalo at the shoreline, and over 100 species of water bird. The two-hour cruise is widely rated the single best wildlife experience in the park.",
  },
  {
    q: "Can I track chimpanzees here as well as at Kibale?",
    a: "Yes — Kyambura Gorge, a dramatic 100-metre-deep forested canyon nicknamed the 'Valley of the Apes', holds a habituated chimpanzee community. It's a shorter, more affordable trek than Kibale, though with a lower success rate given the smaller community.",
  },
  {
    q: "How many days do I need?",
    a: "A minimum of 3–4 days covers a game drive, the Kazinga cruise and one further activity. To add Ishasha's tree-climbing lions and Kyambura Gorge, allow 5–7 days.",
  },
  {
    q: "When is the best time to visit?",
    a: "June–September and December–February bring the driest conditions, when wildlife concentrates most reliably around the Kazinga Channel's shoreline.",
  },
];

export const Route = createFileRoute("/destinations/queen-elizabeth-national-park")({
  head: () =>
    buildDestinationHead({
      slug: "queen-elizabeth-national-park",
      name: "Queen Elizabeth National Park",
      title: "Queen Elizabeth National Park, Uganda — Kazinga Channel & Kasenyi Plains | Wild Uganda Treks",
      description:
        "Cruise the Kazinga Channel past thousands of hippos, track chimps in Kyambura Gorge and game-drive the Kasenyi Plains. Guided tours from Wild Uganda Treks.",
      ogImage: sceneElephants,
      region: "South-western Uganda",
      keywords: [
        "Queen Elizabeth National Park",
        "Kazinga Channel boat cruise",
        "Kyambura Gorge",
        "Kasenyi Plains",
        "Uganda safari",
        "Wild Uganda Treks",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="queen-elizabeth-national-park"
      eyebrow="Queen Elizabeth National Park"
      name="Queen Elizabeth NP"
      tagline={<>Where the <em className="italic text-gold">hippos outnumber the visitors</em>.</>}
      intro="Uganda's most biodiverse park, split by a 40-kilometre channel connecting two lakes and holding one of Africa's densest concentrations of large mammals. Savanna game drives, a chimpanzee-filled gorge, and a boat cruise regularly rated the best single wildlife experience in the country."
      heroImage={sceneElephants}
      heroAlt="Savanna wildlife in Queen Elizabeth National Park"
      facts={[
        { label: "Location", value: "South-western Uganda" },
        { label: "Boat cruise", value: "~2 hours, USD 30" },
        { label: "Duration", value: "3–7 days" },
        { label: "Difficulty", value: "Easy" },
      ]}
      sections={[
        {
          title: "A channel that divides a park in two",
          body: "The Kazinga Channel, connecting Lake George and Lake Edward, splits Queen Elizabeth into two distinct halves. North of the channel holds the Kasenyi Plains' open savanna game drives; south holds the Kyambura Gorge and, further on, the Ishasha sector's tree-climbing lions.",
        },
        {
          title: "The boat cruise everyone talks about",
          body: "A slow, two-hour cruise along the Kazinga Channel passes shoreline crowded with hippos — around 1,600 of them, one of the largest concentrations anywhere in Africa — alongside basking Nile crocodiles, elephants coming down to drink, and well over 100 species of water bird.",
        },
        {
          title: "The Valley of the Apes",
          body: "Kyambura Gorge is a startling sight from above — a 100-metre-deep slash of rainforest cut into open savanna, holding a habituated chimpanzee community. Descending into the gorge to trek them feels like entering an entirely different ecosystem in the space of a few hundred metres.",
        },
      ]}
      galleryImages={[
        { src: sceneElephants, alt: "Elephants on the Kasenyi Plains" },
        { src: sceneLion, alt: "Tree-climbing lions of Ishasha, part of Queen Elizabeth NP" },
        { src: expChimp, alt: "Chimpanzee in Kyambura Gorge" },
        { src: sceneCrane, alt: "Water birds along the Kazinga Channel" },
        { src: expLodge, alt: "Lodge overlooking the Kazinga Channel" },
      ]}
      highlights={[
        { title: "Kazinga Channel boat cruise", desc: "Two hours past one of Africa's largest hippo concentrations — widely rated the park's best activity." },
        { title: "Kasenyi Plains game drives", desc: "Open savanna, lions, elephants and Uganda kob at dawn and dusk." },
        { title: "Kyambura Gorge chimp trekking", desc: "A dramatic forested canyon in the middle of open savanna, home to habituated chimpanzees." },
        { title: "Over 600 bird species", desc: "One of Africa's richest birding parks, from shoebills in the wetlands to raptors on the plains." },
        { title: "Combines easily with Ishasha", desc: "The tree-climbing lion sector sits within the same park, a short drive south." },
        { title: "Crater lake scenery", desc: "Volcanic crater lakes dot the park's western edge, some ringed by walking trails." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & Kasenyi game drive", desc: "Fly or drive in, settling into your lodge in time for an afternoon game drive on the Kasenyi Plains." },
        { day: "Day 02", title: "Kazinga Channel cruise", desc: "A morning or afternoon boat cruise along the channel, followed by a relaxed evening at your lodge." },
        { day: "Day 03", title: "Kyambura Gorge", desc: "A morning descent into the Valley of the Apes to track chimpanzees, before continuing on to Ishasha or your next destination." },
      ]}
      bestTime="June–September and December–February bring the driest conditions and the most reliable wildlife concentrations along the Kazinga Channel."
      gettingThere="Fly into Entebbe International Airport, then drive roughly 6–8 hours south-west, or connect via a 1.5-hour scheduled flight to Kasese or Mweya airstrip."
      related={[
        { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
