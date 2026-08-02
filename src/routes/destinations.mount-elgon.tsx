import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expSipi from "@/assets/exp-sipi.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_mount_elgon_1 from "@/assets/gallery/mount-elgon-1.jpg";
import g_mount_elgon_2 from "@/assets/gallery/mount-elgon-2.jpg";
import g_mount_elgon_3 from "@/assets/gallery/mount-elgon-3.jpg";
import g_mount_elgon_4 from "@/assets/gallery/mount-elgon-4.jpg";
import g_mount_elgon_5 from "@/assets/gallery/mount-elgon-5.jpg";
import g_mount_elgon_6 from "@/assets/gallery/mount-elgon-6.jpg";

const FAQS = [
  {
    q: "How is Mount Elgon different from Sipi Falls?",
    a: "Sipi Falls sits on Mount Elgon's lower slopes and is easily visited on a day trip or overnight stay. The national park itself extends much further up the mountain, encompassing one of the world's largest calderas and multi-day summit hikes to Wagagai Peak.",
  },
  {
    q: "How long does it take to summit Mount Elgon?",
    a: "Reaching Wagagai Peak (4,321m) typically takes 4–5 days round trip via the main trailheads, through montane forest, bamboo zone, moorland and alpine heath. Shorter 2–3 day routes to lower viewpoints are also available.",
  },
  {
    q: "Do I need to be an experienced climber?",
    a: "No technical climbing skills are required — the trails are steep hiking, not mountaineering — but a solid level of fitness matters given the multi-day duration and altitude gain to over 4,000 metres.",
  },
  {
    q: "What's the caldera Mount Elgon is known for?",
    a: "Mount Elgon is an extinct shield volcano with one of the largest intact calderas in the world, roughly 40 kilometres across. Its rim and interior form the terrain most multi-day treks traverse.",
  },
  {
    q: "When is the best time to hike Mount Elgon?",
    a: "June–August and December–February are driest, with clearer trails and views. The wetter months bring lush scenery and dramatic waterfalls but muddier, more demanding hiking conditions.",
  },
];

export const Route = createFileRoute("/destinations/mount-elgon")({
  head: () =>
    buildDestinationHead({
      slug: "mount-elgon",
      name: "Mount Elgon National Park",
      title: "Mount Elgon National Park, Uganda — Caldera Hikes & Highland Coffee | Trek Wild Uganda",
      description:
        "An extinct volcano with one of the world's largest calderas — multi-day hikes, Sipi Falls, and coffee-growing highlands on Uganda's eastern border.",
      ogImage: expSipi,
      region: "Eastern Uganda",
      keywords: [
        "Mount Elgon National Park",
        "Mount Elgon hiking",
        "Wagagai Peak",
        "Sipi Falls",
        "Uganda coffee tour",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="mount-elgon"
      eyebrow="Mount Elgon National Park"
      name="Mount Elgon"
      tagline={<>An extinct volcano, <em className="italic text-gold">one of the world's largest calderas</em>.</>}
      intro="Straddling the Kenyan border in Uganda's east, Mount Elgon is an ancient shield volcano built up over millions of years — wide enough that its caldera, roughly 40 kilometres across, ranks among the largest intact calderas on Earth. Sipi Falls tumbles down its lower slopes; multi-day treks climb toward Wagagai Peak at its rim."
      heroImage={expSipi}
      heroAlt="Sipi Falls cascading down Mount Elgon's lower slopes"
      facts={[
        { label: "Location", value: "Eastern Uganda, Kenya border" },
        { label: "Park size", value: "1,279 km²" },
        { label: "Ideal stay", value: "2–5 nights (day trip to multi-day trek)" },
        { label: "Highlight", value: "Caldera hike to Wagagai Peak" },
      ]}
      sections={[
        {
          title: "One mountain, several ways to experience it",
          body: "Mount Elgon works equally well as a single-night stop at Sipi Falls on its lower slopes, or as a serious multi-day trekking objective toward Wagagai Peak — the choice depends entirely on how much time you have.",
        },
        {
          title: "A caldera you can walk into",
          body: "Unlike a typical peak-and-descend climb, Mount Elgon's summit routes cross through montane forest, bamboo, moorland and alpine heath before reaching the rim of a caldera wide enough to contain much smaller volcanoes entirely. Hot springs and dramatic cliffs punctuate the interior.",
        },
        {
          title: "Coffee country",
          body: "The mountain's fertile lower slopes around Sipi and Mbale are some of Uganda's most productive Arabica coffee-growing land, with small-scale farms and washing stations open to visitors alongside the falls and trailheads.",
        },
      ]}
      galleryImages={[
        { src: g_mount_elgon_1, alt: "Mount Elgon's caldera country" },
        { src: g_mount_elgon_2, alt: "Trekking on Mount Elgon" },
        { src: g_mount_elgon_3, alt: "Mount Elgon slopes" },
        { src: g_mount_elgon_4, alt: "Moments on Mount Elgon" },
        { src: g_mount_elgon_5, alt: "Mount Elgon National Park" },
        { src: g_mount_elgon_6, alt: "High ground on Mount Elgon" },
      ]}
      highlights={[
        { title: "One of the world's largest calderas", desc: "A roughly 40km-wide volcanic caldera formed over millions of years." },
        { title: "Wagagai Peak summit trek", desc: "A 4–5 day multi-day hike through five distinct vegetation zones." },
        { title: "Sipi Falls", desc: "Three waterfalls and coffee terraces easily reached without a multi-day commitment." },
        { title: "Highland Arabica coffee", desc: "Farm and washing-station visits on some of Uganda's most productive coffee land." },
        { title: "Bagisu cultural heritage", desc: "The mountain's slopes are home to the Bagisu, known for the Imbalu circumcision ceremony." },
        { title: "Far fewer trekkers than East Africa's other volcanoes", desc: "A quieter multi-day trekking alternative to Kilimanjaro or Mount Kenya." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & Sipi Falls", desc: "Drive from Mbale or Jinja and spend the afternoon exploring Sipi's three waterfalls and coffee terraces." },
        { day: "Day 02", title: "Begin the caldera trek", desc: "Set out from the trailhead through montane forest and bamboo zone toward the first camp." },
        { day: "Day 03–04", title: "Moorland to the rim", desc: "Continue through alpine moorland toward Wagagai Peak, with the caldera opening up below." },
        { day: "Day 05", title: "Descend & depart", desc: "A final descent back to the trailhead, with time to visit a coffee washing station before departure." },
      ]}
      bestTime="June–August and December–February are driest, with the clearest trails and views for multi-day treks. The wetter months bring lush scenery and fuller waterfalls at Sipi, with muddier hiking conditions higher up."
      gettingThere="Roughly a 4–5 hour drive from Kampala to Sipi, or 3 hours from Jinja. Most multi-day treks depart from trailheads near Kapchorwa or Budadiri, reached via Mbale."
      related={[
        { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi },
        { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
