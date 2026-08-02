import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneFalls from "@/assets/scene-falls.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import g_murchison_falls_1 from "@/assets/gallery/murchison-falls-1.jpg";
import g_murchison_moments_1 from "@/assets/gallery/murchison-moments-1.jpg";
import g_murchison_falls_2 from "@/assets/gallery/murchison-falls-2.jpg";
import g_murchison_moments_2 from "@/assets/gallery/murchison-moments-2.jpg";
import g_paara_1 from "@/assets/gallery/paara-1.jpg";
import g_murchison_moments_3 from "@/assets/gallery/murchison-moments-3.jpg";
import g_murchison_moments_new_9 from "@/assets/gallery/murchison-moments-new-9.jpg";
import g_murchison_moments_new_10 from "@/assets/gallery/murchison-moments-new-10.jpg";

const FAQS = [
  {
    q: "Where is Murchison Falls National Park?",
    a: "Murchison Falls is Uganda's largest national park, in the north-west of the country where the Victoria Nile squeezes through a seven-metre gorge before plunging into the plains below.",
  },
  {
    q: "What wildlife can I see at Murchison Falls?",
    a: "Elephants, giraffes, lions, leopards, buffalo, Uganda kob, Jackson's hartebeest and hippos, plus more than 450 bird species including the prehistoric shoebill stork on the Nile delta.",
  },
  {
    q: "When is the best time to visit Murchison Falls?",
    a: "December to February and June to September are the driest and best for game viewing. The wet season (March–May, October–November) is greener, quieter and excellent for photography and birding.",
  },
  {
    q: "How long should I spend at Murchison Falls?",
    a: "Three nights is ideal — enough time for a launch cruise to the base of the falls, a hike to the top, and full game drives across the northern Buligi plains.",
  },
  {
    q: "How do I get to Murchison Falls from Entebbe?",
    a: "Either a 1-hour scheduled flight to Pakuba or Bugungu airstrips, or a scenic 5–6 hour drive north via Masindi and the Ziwa Rhino Sanctuary.",
  },
];

export const Route = createFileRoute("/destinations/murchison-falls")({
  head: () =>
    buildDestinationHead({
      slug: "murchison-falls",
      name: "Murchison Falls National Park",
      title: "Murchison Falls National Park, Uganda — Safaris & Nile Cruises | Trek Wild Uganda",
      description:
        "Luxury safaris to Murchison Falls National Park — Uganda's largest wilderness, home to the world's most powerful waterfall, big herds and the prehistoric shoebill stork.",
      ogImage: sceneFalls,
      region: "Northern Uganda",
      keywords: [
        "Murchison Falls",
        "Murchison Falls National Park",
        "Uganda safari",
        "Nile safari Uganda",
        "shoebill stork",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="murchison-falls"
      eyebrow="Northern Uganda"
      name="Murchison Falls"
      tagline={<>Where the Nile <em className="italic text-gold">roars</em>.</>}
      intro="The world's longest river squeezes through a seven-metre gorge and thunders 43 metres into the plains below. Around it: Uganda's largest national park — 3,800 square kilometres of golden savanna, borassus palms, herds of elephant and giraffe, and skies filled with fish eagles."
      heroImage={sceneFalls}
      heroAlt="Murchison Falls thundering through a narrow gorge on the Nile"
      facts={[
        { label: "Location", value: "North-western Uganda" },
        { label: "Park size", value: "3,840 km²" },
        { label: "Ideal stay", value: "3 nights" },
        { label: "Highlight", value: "Top of the falls hike" },
      ]}
      sections={[
        {
          title: "The most powerful waterfall on earth",
          body: "The Victoria Nile — Africa's longest river — is squeezed through a rock cleft barely seven metres wide before crashing down in a plume of spray and thunder. Stand at the top and you can feel the ground vibrate. It is one of the great natural spectacles of the continent.",
        },
        {
          title: "Uganda's greatest savanna",
          body: "Below the falls, the river slows into a wide, gentle channel that pours into Lake Albert. Along its banks graze the largest herds of elephant, buffalo, giraffe and antelope in Uganda — a classic African wildlife theatre framed by borassus palms and papyrus swamps.",
        },
        {
          title: "River, land and sky",
          body: "Every Murchison journey combines three ways of experiencing the park: game drives across the northern Buligi plains, a launch cruise upstream to the base of the falls, and a hike to the top with the roar in your bones.",
        },
      ]}
      galleryImages={[
        { src: g_murchison_moments_new_9, alt: "Moments at Murchison Falls" },
        { src: g_murchison_moments_new_10, alt: "The falls from the Nile below" },
        { src: g_murchison_falls_1, alt: "The Nile forced through Murchison Falls" },
        { src: g_murchison_moments_1, alt: "Moments at Murchison Falls" },
        { src: g_murchison_falls_2, alt: "Murchison Falls from the viewpoint" },
        { src: g_murchison_moments_2, alt: "On the Nile below the falls" },
        { src: g_paara_1, alt: "Game drive on the Paara plains" },
        { src: g_murchison_moments_3, alt: "Murchison Falls National Park" },
      ]}
      highlights={[
        { title: "Top-of-the-falls hike", desc: "A short trail brings you to the thundering lip of the world's most powerful waterfall." },
        { title: "Launch cruise", desc: "Boat upstream past hippo pods and elephants to the base of the falls." },
        { title: "Big herds", desc: "Uganda's densest concentrations of giraffe, elephant and buffalo roam the northern plains." },
        { title: "Shoebill delta", desc: "Search the Nile delta for the prehistoric shoebill stork — a birder's ultimate prize." },
        { title: "Lion & leopard", desc: "The Buligi circuit is famous for regular sightings of both big cats at dawn and dusk." },
        { title: "Sundowners on the Nile", desc: "End every day with a chilled drink and a burning sky above the river." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Kampala → Murchison", desc: "Drive north via Ziwa Rhino Sanctuary for a rhino tracking walk on foot before continuing to your Nile-side lodge." },
        { day: "Day 02", title: "Falls hike & cruise", desc: "Morning launch cruise upstream to the base of the falls, then hike to the top for the full thunder from above." },
        { day: "Day 03", title: "Buligi game drives", desc: "Early game drive across the northern plains for giraffe, elephant, lion and Jackson's hartebeest. Delta cruise for shoebills." },
        { day: "Day 04", title: "Return south", desc: "Slow drive back to Kampala or connect on to Kibale for chimpanzee tracking." },
      ]}
      bestTime="December to February and June to September are the driest months, when wildlife concentrates along the river. The wet season (March–May, October–November) turns the park a vivid green — spectacular for photography and birding."
      gettingThere="Fly from Entebbe to Pakuba or Bugungu airstrips (1 hour), or drive 5–6 hours north via Masindi. Murchison Falls pairs beautifully with Ziwa Rhino Sanctuary and Kidepo Valley."
      related={[
        { name: "Gorilla Trekking", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile", img: ctaSunset },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
