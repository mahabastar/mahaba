import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expSipi from "@/assets/exp-sipi.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_sipi_falls_1 from "@/assets/gallery/sipi-falls-1.jpg";
import g_sipi_moments_1 from "@/assets/gallery/sipi-moments-1.jpg";
import g_sipi_falls_2 from "@/assets/gallery/sipi-falls-2.jpg";
import g_sipi_hike from "@/assets/gallery/sipi-hike.jpg";
import g_sipi_morning_1 from "@/assets/gallery/sipi-morning-1.jpg";
import g_sipi_moments_2 from "@/assets/gallery/sipi-moments-2.jpg";

const FAQS = [
  {
    q: "Where are Sipi Falls?",
    a: "Sipi Falls sit on the western slopes of Mount Elgon in eastern Uganda, near the town of Kapchorwa — three cascading waterfalls that drop from the volcano's escarpment toward the Karamoja plains.",
  },
  {
    q: "How difficult is the Sipi Falls three-falls hike?",
    a: "A moderate 4–5 hour loop through coffee gardens, forest and villages, linking all three waterfalls. Suitable for most fitness levels with a local guide.",
  },
  {
    q: "Can I try Arabica coffee at Sipi Falls?",
    a: "Yes. The volcanic slopes of Mount Elgon produce some of the world's finest Arabica. Half-day farm experiences let you hand-pick, pulp, roast and brew your own coffee with a local farmer.",
  },
  {
    q: "What is the best time to visit Sipi Falls?",
    a: "December to March and June to August are the driest months — best for hiking and photography. Green-season showers (April–May, September–November) make the falls thunder at their fullest.",
  },
  {
    q: "How do I combine Sipi Falls with the rest of a Uganda safari?",
    a: "Sipi is 6 hours east of Kampala via Jinja, and connects beautifully with white-water rafting on the Nile or a flight north to Kidepo Valley National Park.",
  },
];

export const Route = createFileRoute("/destinations/sipi-falls")({
  head: () =>
    buildDestinationHead({
      slug: "sipi-falls",
      name: "Sipi Falls & Mount Elgon",
      title: "Sipi Falls & Mount Elgon, Uganda — Hikes, Coffee & Tours | Trek Wild Uganda",
      description:
        "Hike between three cascading waterfalls on Mount Elgon, roast Arabica coffee with local farmers and watch the sun set over Karamoja — luxury Sipi Falls tours by Trek Wild Uganda.",
      ogImage: expSipi,
      region: "Eastern Uganda",
      keywords: [
        "Sipi Falls",
        "Mount Elgon Uganda",
        "Uganda waterfalls",
        "Uganda coffee tour",
        "Uganda hiking",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="sipi-falls"
      eyebrow="Mount Elgon, Eastern Uganda"
      name="Sipi Falls"
      tagline={<>Three <em className="italic text-gold">waterfalls</em>, one horizon.</>}
      intro="On the western slopes of Mount Elgon, three waterfalls tumble in a graceful staircase from the cliffs. The air smells of Arabica coffee and rain-fresh eucalyptus, and the view stretches all the way to Karamoja. Sipi Falls is Uganda's most poetic mountain escape."
      heroImage={expSipi}
      heroAlt="The three cascading waterfalls of Sipi on the slopes of Mount Elgon"
      facts={[
        { label: "Location", value: "Kapchorwa, Mt Elgon" },
        { label: "Waterfalls", value: "3 cascades" },
        { label: "Ideal stay", value: "2 nights" },
        { label: "Also known for", value: "Arabica coffee" },
      ]}
      sections={[
        {
          title: "A staircase of waterfalls",
          body: "Three separate falls plunge from Mount Elgon's western escarpment — the most famous drops nearly 100 metres in a single ribbon of white water. A gentle full-day hike links all three, weaving through coffee gardens, banana plantations and Sabiny villages.",
        },
        {
          title: "Some of the world's best coffee",
          body: "The volcanic slopes of Mount Elgon produce Arabica coffee of extraordinary character. Spend an afternoon with a local farmer, hand-picking cherries, pulping, roasting over an open flame and finally sipping a cup from beans you've followed through every stage.",
        },
        {
          title: "Mount Elgon's quiet giant",
          body: "Mount Elgon is Africa's oldest and largest solitary volcano — 4,321 metres of cool moorland, caldera and cave. Sipi is its most accessible face, and the perfect base for shorter mountain hikes or a full multi-day summit trek.",
        },
      ]}
      galleryImages={[
        { src: g_sipi_falls_1, alt: "Sipi Falls in full flow" },
        { src: g_sipi_moments_1, alt: "Moments at Sipi Falls" },
        { src: g_sipi_falls_2, alt: "The main drop at Sipi Falls" },
        { src: g_sipi_hike, alt: "Hiking the Sipi Falls trail" },
        { src: g_sipi_morning_1, alt: "Morning above Sipi Falls" },
        { src: g_sipi_moments_2, alt: "Sipi Falls escarpment" },
      ]}
      highlights={[
        { title: "Three-falls hike", desc: "A magical 4–5 hour loop linking all three cascades through forest and farmland." },
        { title: "Farm-to-cup coffee", desc: "Roast your own coffee with a local farmer on the volcanic slopes of Mount Elgon." },
        { title: "Abseil the main falls", desc: "For the brave — descend 100 metres beside the roar of the main cascade." },
        { title: "Karamoja views", desc: "From your lodge terrace, watch the sun set over the endless northern plains." },
        { title: "Community walks", desc: "Meet the Sabiny people whose farms and villages surround the falls." },
        { title: "Cool mountain air", desc: "A refreshing altitude break — perfect after warm days on safari." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Jinja → Sipi", desc: "Drive east through tea estates and up the Mount Elgon escarpment. Arrive in time for sunset over Karamoja." },
        { day: "Day 02", title: "Three-falls hike", desc: "A full day walking between the three waterfalls, stopping at a coffee farm for a hands-on roasting experience." },
        { day: "Day 03", title: "Optional abseil or Elgon hike", desc: "Choose between abseiling the main fall, a longer hike into Mount Elgon National Park, or a slow morning with a book on the terrace." },
        { day: "Day 04", title: "Return to Jinja or fly to Kidepo", desc: "Return via Jinja for white-water rafting on the Nile, or connect north to Kidepo Valley for a wilder chapter." },
      ]}
      bestTime="December to March and June to August are the driest months, best for hiking and photography. Green-season showers (April–May, September–November) make the falls thunder at their fullest."
      gettingThere="A scenic 6-hour drive east from Kampala via Jinja and Mbale, or a short scheduled flight to Soroti airstrip. Combine easily with white-water rafting on the Nile in Jinja."
      related={[
        { name: "Gorilla Trekking", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile", img: ctaSunset },
      ]}
      faqs={FAQS}
    />
  ),
});
