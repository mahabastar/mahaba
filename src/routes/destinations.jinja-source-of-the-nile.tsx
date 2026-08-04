import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import sourceOfTheNileMain from "@/assets/gallery/source-of-the-nile-main.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import g_source_of_the_nile_1 from "@/assets/gallery/source-of-the-nile-1.jpg";
import g_source_of_the_nile_2 from "@/assets/gallery/source-of-the-nile-2.jpg";
import g_white_water_rafting_1 from "@/assets/gallery/white-water-rafting-1.jpg";
import g_white_water_rafting_2 from "@/assets/gallery/white-water-rafting-2.jpg";
import g_nile_bridge from "@/assets/gallery/nile-bridge.jpg";
import g_source_of_the_nile_3 from "@/assets/gallery/source-of-the-nile-3.jpg";
import g_source_of_the_nile_8 from "@/assets/gallery/source-of-the-nile-8.jpg";
import g_white_water_rafting_3 from "@/assets/gallery/white-water-rafting-3.jpg";
import g_nile_bungee_jump from "@/assets/gallery/nile-bungee-jump.jpg";

const FAQS = [
  {
    q: "How difficult is white water rafting on the Nile?",
    a: "The main commercial stretch runs Grade 3 to Grade 5, with operators scouting conditions daily and offering routes suited to first-timers as well as experienced rafters. No prior rafting experience is required — guides handle safety briefings and instruction on the day.",
  },
  {
    q: "Is Nile rafting safe?",
    a: "Yes. Jinja's rafting operators run to international safety standards, with safety kayakers accompanying every trip and decades of combined operating experience on this stretch of river. Flipping is part of the fun on the bigger rapids, and guides are trained to recover swimmers quickly.",
  },
  {
    q: "What if I don't want to raft the big rapids?",
    a: "Jinja offers flat-water kayaking, tubing, stand-up paddleboarding and gentle boat cruises to the source of the Nile for a calmer alternative — all on the same river, at a fraction of the intensity.",
  },
  {
    q: "What else is there to do in Jinja?",
    a: "Beyond rafting: a 44-metre bungee jump over the Nile, quad biking, horseback riding, and a boat trip out to the exact spot where the Nile leaves Lake Victoria — the historic 'source' identified by the explorer John Hanning Speke in 1862.",
  },
  {
    q: "How far is Jinja from Kampala?",
    a: "About 80km, roughly 1.5–2 hours by road — making it an easy add-on at the start or end of a longer Uganda itinerary rather than a destination requiring a flight.",
  },
];

export const Route = createFileRoute("/destinations/jinja-source-of-the-nile")({
  head: () =>
    buildDestinationHead({
      slug: "jinja-source-of-the-nile",
      name: "Jinja — Source of the Nile",
      title: "Jinja & White Water Rafting on the Nile, Uganda | Trek Wild Uganda",
      description:
        "Raft Grade 3–5 rapids on the White Nile, visit the historic source of the Nile, and explore East Africa's adventure capital with Trek Wild Uganda.",
      ogImage: sourceOfTheNileMain,
      region: "Eastern Uganda",
      keywords: [
        "Jinja Uganda",
        "source of the Nile",
        "Nile white water rafting",
        "Uganda adventure travel",
        "Jinja bungee jumping",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="jinja-source-of-the-nile"
      eyebrow="Jinja, Eastern Uganda"
      name="Jinja — Source of the Nile"
      tagline={<>Where the Nile <em className="italic text-gold">begins.</em></>}
      intro="The point where Lake Victoria tips into the world's longest river, and — a little further downstream — East Africa's undisputed adventure capital. Grade 5 white water, a 44-metre bungee, and a river journey that has drawn explorers here for over 160 years."
      heroImage={sourceOfTheNileMain}
      heroAlt="Aerial view of the Nile bridge at Jinja, Source of the Nile, Uganda"
      facts={[
        { label: "Location", value: "Jinja, ~80km from Kampala" },
        { label: "Duration", value: "Half-day to 2 days" },
        { label: "Rapids", value: "Grade 3–5 white water" },
        { label: "Difficulty", value: "Beginner-friendly to advanced" },
      ]}
      sections={[
        {
          title: "The river's first breath",
          body: "In 1862, the explorer John Hanning Speke stood on the shore at Jinja and identified this spot as the source of the Nile — the point where Lake Victoria's waters begin their 6,650-kilometre journey to the Mediterranean. A short boat ride still takes visitors out to the exact place today.",
        },
        {
          title: "East Africa's adventure capital",
          body: "Fed by the huge, steady outflow of Lake Victoria, the Nile at Jinja delivers some of the most consistent, powerful white water on Earth — a roughly 20-kilometre run of Grade 3 to Grade 5 rapids, rideable year-round regardless of season. Add a 44-metre bungee jump, kayaking and quad biking, and it's easy to see why this town reinvented itself as East Africa's adrenaline hub.",
        },
        {
          title: "A gentler side of the river",
          body: "Not every visitor wants Grade 5 water, and Jinja doesn't insist on it — flat-water kayaking, tubing, stand-up paddleboarding and a slow sunset cruise all run on the same river, at a completely different pace.",
        },
      ]}
      galleryImages={[
        { src: sourceOfTheNileMain, alt: "Rapids at the Source of the Nile, Jinja" },
        { src: g_source_of_the_nile_1, alt: "The Source of the Nile sign at Jinja" },
        { src: g_white_water_rafting_1, alt: "Rafting crew celebrating on the Nile at Jinja" },
        { src: g_white_water_rafting_2, alt: "Raft dropping through a Grade 5 rapid below Jinja" },
        { src: g_white_water_rafting_3, alt: "Kayakers on the White Nile rapids" },
        { src: g_nile_bungee_jump, alt: "Bungee jump over the Nile at Jinja" },
        { src: g_source_of_the_nile_8, alt: "Moments at the Source of the Nile" },
        { src: g_source_of_the_nile_2, alt: "Where Lake Victoria becomes the Nile" },
        { src: g_nile_bridge, alt: "The Nile River near Jinja from the air" },
        { src: g_source_of_the_nile_3, alt: "Boat trip to the Source of the Nile" },
      ]}
      highlights={[
        { title: "Grade 3–5 white water", desc: "Roughly 20km of rapids on the White Nile, running consistently year-round." },
        { title: "44-metre bungee jump", desc: "A plunge over the Nile itself, at East Africa's only source-side bungee platform." },
        { title: "Source of the Nile boat trip", desc: "A calm cruise out to the exact spot where Lake Victoria becomes a river." },
        { title: "Options for every nerve level", desc: "From Grade 5 rapids to flat-water tubing, on the same stretch of river." },
        { title: "Easy to combine", desc: "80km from Kampala — a natural first or last stop on a longer Uganda itinerary." },
        { title: "Riverside evenings", desc: "Firepits, riverside restaurants and a genuinely international backpacker-meets-luxury atmosphere." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive in Jinja", desc: "A scenic drive east from Kampala or Entebbe, arriving in time for a boat cruise to the source of the Nile and a relaxed riverside evening." },
        { day: "Day 02", title: "White water rafting", desc: "A full day on the river — a safety briefing, then a run through Grade 3 to Grade 5 rapids, with a riverside lunch along the way." },
        { day: "Day 03", title: "Bungee, kayak, or move on", desc: "An optional bungee jump or kayaking session before continuing on to Murchison Falls, Sipi Falls, or back toward Entebbe." },
      ]}
      bestTime="Rafting runs year-round thanks to the steady, lake-fed flow of the Nile. The dry seasons of June–September and December–February bring the most settled weather for combining a rafting trip with other travel."
      gettingThere="Fly into Entebbe International Airport, then drive roughly 2–2.5 hours east to Jinja (about 80km from Kampala). No flight or long transfer required, making it an easy first or last stop on a Uganda itinerary."
      related={[
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Sipi Falls", to: "/destinations/sipi-falls", img: expSipi },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
      ]}
      faqs={FAQS}
    />
  ),
});
