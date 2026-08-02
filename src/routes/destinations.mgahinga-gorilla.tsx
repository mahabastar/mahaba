import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import g_virunga_volcanoes from "@/assets/gallery/virunga-volcanoes.jpg";
import g_virunga_volcanoes_2 from "@/assets/gallery/virunga-volcanoes-2.jpg";
import g_golden_monkey_1 from "@/assets/gallery/golden-monkey-1.jpg";
import g_golden_monkey_2 from "@/assets/gallery/golden-monkey-2.jpg";
import g_mgahinga_moments_1 from "@/assets/gallery/mgahinga-moments-1.jpg";
import g_mgahinga_moments_2 from "@/assets/gallery/mgahinga-moments-2.jpg";
import g_mgahinga_moments_3 from "@/assets/gallery/mgahinga-moments-3.jpg";
import g_mgahinga_moments_4 from "@/assets/gallery/mgahinga-moments-4.jpg";
import g_mgahinga_moments_5 from "@/assets/gallery/mgahinga-moments-5.jpg";
import g_mgahinga_moments_6 from "@/assets/gallery/mgahinga-moments-6.jpg";
import g_mgahinga_moments_7 from "@/assets/gallery/mgahinga-moments-7.jpg";
import g_mgahinga_moments_8 from "@/assets/gallery/mgahinga-moments-8.jpg";

const FAQS = [
  {
    q: "Should I trek gorillas in Mgahinga or Bwindi?",
    a: "Mgahinga has a single habituated gorilla family, so it's best chosen when it fits your route — typically as an add-on to climbing one of the three volcanoes, or when Bwindi's permits for your dates are sold out. Bwindi offers far more permit availability across four sectors.",
  },
  {
    q: "Can I climb a volcano and trek gorillas on the same trip?",
    a: "Yes, and it's one of Mgahinga's signature draws — Mount Sabinyo's three-country summit hike (Uganda, Rwanda, DR Congo) or Mount Muhabura's steep day climb pair naturally with a gorilla or golden monkey trek on a different day.",
  },
  {
    q: "What are golden monkeys and can I see them here?",
    a: "Golden monkeys are an endangered primate found only in the Virunga volcanoes' bamboo zone. Mgahinga offers dedicated golden monkey trekking, a lower-cost, less strenuous alternative or complement to gorilla trekking.",
  },
  {
    q: "How do I get to Mgahinga?",
    a: "It's roughly a 9–10 hour drive from Kampala, or most visitors combine it with Bwindi and Lake Bunyonyi on a south-western circuit, driving the 2–3 hours between them rather than visiting Mgahinga in isolation.",
  },
];

export const Route = createFileRoute("/destinations/mgahinga-gorilla")({
  head: () =>
    buildDestinationHead({
      slug: "mgahinga-gorilla",
      name: "Mgahinga Gorilla National Park",
      title: "Mgahinga Gorilla National Park, Uganda — Volcanoes & Golden Monkeys | Trek Wild Uganda",
      description:
        "Uganda's smallest national park — three Virunga volcanoes, golden monkey trekking, and a single habituated gorilla family, in the far south-west.",
      ogImage: sceneRwenzori,
      region: "South-western Uganda",
      keywords: [
        "Mgahinga Gorilla National Park",
        "Virunga volcanoes Uganda",
        "golden monkey trekking",
        "Mount Sabinyo",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="mgahinga-gorilla"
      eyebrow="Mgahinga Gorilla National Park"
      name="Mgahinga Gorilla"
      tagline={<>Three volcanoes, <em className="italic text-gold">one valley</em>.</>}
      intro="Uganda's smallest national park packs in an outsized landscape: three extinct Virunga volcanoes rising straight off the valley floor, bamboo forest thick with endangered golden monkeys, and a single, quieter gorilla family — all within a few hours' walk of each other, on the shared border with Rwanda and DR Congo."
      heroImage={sceneRwenzori}
      heroAlt="Volcanic peaks rising over Mgahinga's forested valley"
      facts={[
        { label: "Location", value: "South-western Uganda (Virunga)" },
        { label: "Park size", value: "34 km² (Uganda's smallest)" },
        { label: "Ideal stay", value: "1–2 nights" },
        { label: "Highlight", value: "Volcano climb + primate trekking" },
      ]}
      sections={[
        {
          title: "The Virunga volcanoes",
          body: "Mount Sabinyo, Mount Gahinga and Mount Muhabura anchor the park, part of the same volcanic chain that runs through Rwanda and DR Congo. Sabinyo's ridge-line summit famously touches all three countries at once; Muhabura is a steeper but shorter climb with sweeping views over the valley.",
        },
        {
          title: "A quieter kind of gorilla trekking",
          body: "With just one habituated family, Mgahinga sees a fraction of Bwindi's trekking traffic. It's the natural choice for travellers combining a volcano climb with a gorilla trek in the same trip, or those who couldn't secure Bwindi permits for their dates.",
        },
        {
          title: "Golden monkeys of the bamboo zone",
          body: "The park's high-altitude bamboo forest is one of the last strongholds of the endangered golden monkey, found only in the Virunga range. Trekking them is faster and less strenuous than gorilla trekking, and pairs well as a second activity in the same visit.",
        },
      ]}
      galleryImages={[
        { src: g_mgahinga_moments_1, alt: "Moments from Mgahinga gorilla trekking" },
        { src: g_mgahinga_moments_2, alt: "Trekking group in Mgahinga" },
        { src: g_mgahinga_moments_3, alt: "Gorilla trekking in Mgahinga" },
        { src: g_mgahinga_moments_4, alt: "On the Mgahinga gorilla trail" },
        { src: g_mgahinga_moments_5, alt: "Mgahinga gorilla trekking moments" },
        { src: g_mgahinga_moments_6, alt: "Mountain gorilla in Mgahinga" },
        { src: g_mgahinga_moments_7, alt: "Trekkers in Mgahinga Gorilla National Park" },
        { src: g_mgahinga_moments_8, alt: "Moments at Mgahinga" },
        { src: g_virunga_volcanoes, alt: "The Virunga volcanoes above Mgahinga" },
        { src: g_virunga_volcanoes_2, alt: "Volcano slopes on the Mgahinga border" },
        { src: g_golden_monkey_1, alt: "Golden monkey, Mgahinga" },
        { src: g_golden_monkey_2, alt: "Golden monkey in the bamboo" },
      ]}
      highlights={[
        { title: "Three-country volcano summit", desc: "Mount Sabinyo's ridge trail touches Uganda, Rwanda and DR Congo at its peak." },
        { title: "Golden monkey trekking", desc: "A rarer, endangered primate found only in the Virunga volcanoes' bamboo zone." },
        { title: "A single, quieter gorilla family", desc: "Far fewer trekkers than Bwindi, ideal alongside a volcano climb." },
        { title: "Batwa Trail", desc: "A guided walk retracing the forest life of Mgahinga's original inhabitants." },
        { title: "Mount Muhabura day climb", desc: "A steep but achievable single-day summit with panoramic Virunga views." },
        { title: "Natural pairing with Bwindi", desc: "A 2–3 hour drive links Mgahinga to Bwindi and Lake Bunyonyi on one south-western circuit." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & golden monkey trek", desc: "Settle in and head out for a half-day golden monkey trek in the bamboo zone." },
        { day: "Day 02", title: "Gorilla trek or volcano climb", desc: "Choose between tracking Mgahinga's habituated gorilla family or summiting Mount Sabinyo or Muhabura." },
      ]}
      bestTime="June–September and December–February are driest and best for both trekking and volcano climbs. Trails are steeper and muddier in the rainy months, but golden monkey trekking remains reliable year-round."
      gettingThere="Roughly a 9–10 hour drive from Kampala. Most visitors instead combine it with Bwindi and Lake Bunyonyi, driving the 2–3 hours between parks as part of a south-western Uganda circuit."
      related={[
        { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable", img: gorillaSilverback },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
