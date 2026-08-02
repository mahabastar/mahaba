import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expChimp from "@/assets/exp-chimp.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_entebbe_1 from "@/assets/gallery/entebbe-1.jpg";
import g_entebbe_moments_1 from "@/assets/gallery/entebbe-moments-1.jpg";
import g_entebbe_2 from "@/assets/gallery/entebbe-2.jpg";
import g_entebbe_moments_2 from "@/assets/gallery/entebbe-moments-2.jpg";
import g_ngamba_chimps_2 from "@/assets/gallery/ngamba-chimps-2.jpg";
import g_entebbe_3 from "@/assets/gallery/entebbe-3.jpg";

const FAQS = [
  {
    q: "Is Entebbe worth extra time, or just a stopover?",
    a: "Both work. Entebbe is where nearly every Uganda itinerary starts and ends, since it's home to the international airport — but it also has enough on its own to fill a full day or two, particularly the Ngamba Island chimpanzee sanctuary and the Botanical Gardens.",
  },
  {
    q: "What is Ngamba Island?",
    a: "A sanctuary on Lake Victoria caring for over 50 orphaned chimpanzees rescued from the illegal pet and bushmeat trade. Visitors reach it by a 45–90 minute boat ride from Entebbe and can watch a feeding session from a viewing platform.",
  },
  {
    q: "What are the Botanical Gardens like?",
    a: "Laid out in 1898 on the shore of Lake Victoria, the gardens hold rainforest, bamboo and palm zones, colobus monkeys in the canopy, and a stretch of forest reportedly used as a filming location for early Tarzan movies.",
  },
  {
    q: "Can I swim in Lake Victoria at Entebbe?",
    a: "It's not recommended, due to bilharzia risk and the presence of hippos and crocodiles in places. Boat trips, sunset cruises and lakeside beach bars are the better way to enjoy the lake here.",
  },
  {
    q: "How far is Entebbe from Kampala?",
    a: "About 37 kilometres, roughly 45 minutes to an hour by road depending on traffic.",
  },
];

export const Route = createFileRoute("/destinations/entebbe")({
  head: () =>
    buildDestinationHead({
      slug: "entebbe",
      name: "Entebbe",
      title: "Entebbe, Uganda — Gateway to Your Safari | Trek Wild Uganda",
      description:
        "Uganda's lakeside gateway city — Ngamba Island chimpanzee sanctuary, historic Botanical Gardens, and the start and end of nearly every Uganda safari.",
      ogImage: expChimp,
      region: "Central Uganda",
      keywords: [
        "Entebbe Uganda",
        "Ngamba Island chimpanzee sanctuary",
        "Entebbe Botanical Gardens",
        "Lake Victoria Uganda",
        "Uganda safari gateway",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="entebbe"
      eyebrow="Entebbe, Lake Victoria"
      name="Entebbe"
      tagline={<>Where every Uganda story <em className="italic text-gold">begins and ends</em>.</>}
      intro="Home to Uganda's international airport and the shore of Africa's largest lake, Entebbe is more than a stopover. A short boat ride reaches an island sanctuary for orphaned chimpanzees; a short walk reaches gardens laid out in 1898 that once stood in for a Hollywood jungle."
      heroImage={expChimp}
      heroAlt="Chimpanzee, representative of Entebbe's Ngamba Island sanctuary"
      facts={[
        { label: "Location", value: "Lake Victoria, ~37km from Kampala" },
        { label: "Ngamba Island", value: "45–90 min boat ride" },
        { label: "Duration", value: "Half-day to 2 days" },
        { label: "Difficulty", value: "Easy" },
      ]}
      sections={[
        {
          title: "The gateway that's worth a look itself",
          body: "Nearly every Uganda itinerary begins and ends here, since Entebbe International Airport is the country's main point of entry. Most visitors pass straight through — but a day either side of a safari is enough to see a genuinely worthwhile slice of Uganda without adding a flight or a long drive.",
        },
        {
          title: "An island of second chances",
          body: "Ngamba Island, a short boat ride into Lake Victoria, is home to more than 50 orphaned chimpanzees rescued from the illegal pet and bushmeat trade across East Africa. A viewing platform lets visitors watch a feeding session up close, in a semi-wild forest setting rather than an enclosure.",
        },
        {
          title: "Gardens with a film history",
          body: "The Entebbe Botanical Gardens, laid out on the lakeshore in 1898, hold pockets of rainforest so wild-looking that they were reportedly used as a filming location for early Tarzan movies. Colobus monkeys move through the canopy, and the birdlife alone justifies a slow morning walk.",
        },
      ]}
      galleryImages={[
        { src: g_entebbe_1, alt: "Lake Victoria shoreline at Entebbe" },
        { src: g_entebbe_moments_1, alt: "Moments in Entebbe" },
        { src: g_entebbe_2, alt: "Entebbe Botanical Gardens" },
        { src: g_entebbe_moments_2, alt: "On the lake at Entebbe" },
        { src: g_ngamba_chimps_2, alt: "Chimpanzee at Ngamba Island sanctuary" },
        { src: g_entebbe_3, alt: "Lakeside Entebbe" },
      ]}
      highlights={[
        { title: "Ngamba Island chimpanzee sanctuary", desc: "Over 50 rescued chimpanzees, viewable from a platform during feeding sessions." },
        { title: "Entebbe Botanical Gardens", desc: "Laid out in 1898, with rainforest, bamboo and palm zones on the lakeshore." },
        { title: "Lake Victoria boat trips", desc: "Sunset cruises and fishing excursions on Africa's largest lake." },
        { title: "A natural bookend", desc: "The obvious place to decompress before your flight home, or ease in on arrival." },
        { title: "Mabamba Wetlands nearby", desc: "A short drive away, one of Uganda's most reliable spots for shoebill stork sightings." },
        { title: "Uganda Wildlife Education Centre", desc: "A conservation-focused rescue centre for lions, rhinos and other native species." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & Botanical Gardens", desc: "Land at Entebbe, settle into your lakeside lodge, and spend the afternoon walking the Botanical Gardens." },
        { day: "Day 02", title: "Ngamba Island", desc: "A morning boat ride to Ngamba Island for a chimpanzee feeding session, returning to Entebbe by early afternoon." },
      ]}
      bestTime="Entebbe is a year-round destination — its lakeside climate is milder than much of Uganda, and it works equally well at the start or end of a trip in any season."
      gettingThere="Entebbe International Airport is Uganda's main gateway — most visitors arrive here directly. Kampala is roughly 45 minutes to an hour away by road."
      related={[
        { name: "Chimpanzee Trekking, Kibale", to: "/destinations/kibale-forest", img: expChimp },
        { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile", img: sceneFalls },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
      ]}
      faqs={FAQS}
    />
  ),
});
