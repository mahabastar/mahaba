import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expCoffee from "@/assets/exp-coffee.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import g_crater_lakes_1 from "@/assets/gallery/crater-lakes-1.jpg";
import g_crater_lakes_2 from "@/assets/gallery/crater-lakes-2.jpg";
import g_where_nature_reigns from "@/assets/gallery/where-nature-reigns.jpg";
import g_lodge_kyaninga from "@/assets/gallery/lodge-kyaninga.jpg";

const FAQS = [
  {
    q: "What are Uganda's crater lakes?",
    a: "Volcanic explosion craters, many now filled with water, scattered mainly around Fort Portal in the Ndali-Kasenda field (around 50 lakes) and in the Katwe area of Queen Elizabeth National Park. They range from a few hundred metres to over a kilometre across.",
  },
  {
    q: "Can you swim in the crater lakes?",
    a: "Some, yes — Lake Nyinambuga and a handful of others near Fort Portal are considered safe and are popular for a swim, though a few crater lakes (and Katwe's salt lake) are not suitable for swimming. Your guide or lodge can confirm which is which locally.",
  },
  {
    q: "How much time do I need for the crater lakes?",
    a: "A half-day is enough to drive or hike the Ndali-Kasenda circuit and stop at two or three lakes. Many visitors instead stay a night at a crater-rim lodge and combine it with a Kibale chimp trek the next morning.",
  },
  {
    q: "Are the crater lakes worth visiting alongside Kibale?",
    a: "Yes — Fort Portal's crater field sits right beside Kibale National Park, so most itineraries combine an afternoon or overnight at the lakes with a chimpanzee trek, rather than visiting either in isolation.",
  },
];

export const Route = createFileRoute("/destinations/crater-lakes")({
  head: () =>
    buildDestinationHead({
      slug: "crater-lakes",
      name: "The Crater Lakes",
      title: "Uganda's Crater Lakes, Fort Portal — Guide & Best Lodges | Trek Wild Uganda",
      description:
        "The Ndali-Kasenda crater field near Fort Portal — around 50 volcanic lakes set among tea and coffee gardens, best paired with a Kibale chimp trek.",
      ogImage: expCoffee,
      region: "Western Uganda",
      keywords: [
        "Uganda crater lakes",
        "Fort Portal crater lakes",
        "Ndali-Kasenda",
        "Lake Nyinambuga",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="crater-lakes"
      eyebrow="Fort Portal, Ndali-Kasenda Field"
      name="The Crater Lakes"
      tagline={<>Around fifty lakes, <em className="italic text-gold">one volcanic field</em>.</>}
      intro="Scattered across the rolling tea and coffee country around Fort Portal, roughly fifty volcanic explosion craters — some barely a few hundred metres wide, others over a kilometre — sit among Uganda's most photogenic farmland, minutes from Kibale National Park."
      heroImage={expCoffee}
      heroAlt="Volcanic crater lake surrounded by tea and coffee gardens near Fort Portal"
      facts={[
        { label: "Location", value: "Fort Portal, western Uganda" },
        { label: "Crater count", value: "~50 in the Ndali-Kasenda field" },
        { label: "Ideal stay", value: "1 night (or half-day stop)" },
        { label: "Highlight", value: "Crater-rim lodges & swimming" },
      ]}
      sections={[
        {
          title: "A volcanic field, not a single lake",
          body: "Unlike a destination built around one landmark, the crater lakes are a scattered field — around fifty explosion craters within a compact area south of Fort Portal, most reached by a scenic drive or guided hike along ridge trails between them.",
        },
        {
          title: "Farmland as scenery",
          body: "What sets this region apart is the setting: tea plantations and coffee gardens wrap around the crater rims, with the Rwenzori Mountains often visible on clear days — a softer, more cultivated landscape than Uganda's savanna parks.",
        },
        {
          title: "The natural Kibale add-on",
          body: "Because the crater field borders Kibale National Park, it's rarely visited alone — most travellers spend a night at a crater-rim lodge either before or after a chimpanzee trek, using the lakes as a scenic, low-key counterpoint to a morning in the forest.",
        },
      ]}
      galleryImages={[
        { src: g_crater_lakes_1, alt: "Crater lake in the Ndali-Kasenda field" },
        { src: g_crater_lakes_2, alt: "Volcanic crater lake near Fort Portal" },
        { src: g_where_nature_reigns, alt: "Crater lake country at sunset" },
        { src: g_lodge_kyaninga, alt: "Crater-rim lodge near Fort Portal" },
      ]}
      highlights={[
        { title: "Around 50 volcanic craters", desc: "The Ndali-Kasenda field, one of the densest crater-lake clusters in East Africa." },
        { title: "Swimmable lakes", desc: "Lake Nyinambuga and several others are safe and popular for a swim." },
        { title: "Tea and coffee scenery", desc: "Crater rims wrapped in cultivated farmland, with Rwenzori views on clear days." },
        { title: "Crater-rim lodges", desc: "Some of western Uganda's most scenic overnight stops, perched directly above the water." },
        { title: "Guided ridge walks", desc: "Hiking trails link several craters for those who'd rather walk than drive between them." },
        { title: "Minutes from Kibale", desc: "The natural overnight stop before or after a chimpanzee trek." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & crater-lake drive", desc: "Settle into a crater-rim lodge, then spend the afternoon touring two or three lakes by road or on foot." },
        { day: "Day 02", title: "Ridge walk or onward to Kibale", desc: "An optional morning ridge walk between craters, before continuing into Kibale for a chimpanzee trek." },
      ]}
      bestTime="Visitable year-round given the region's moderate elevation. June–September and December–February are driest and offer the clearest mountain views; the wetter months bring lush, deep-green scenery."
      gettingThere="Roughly a 4–5 hour drive from Kampala via Mubende, or a short 20–30 minute drive from Fort Portal town itself, right beside Kibale National Park."
      related={[
        { name: "Kibale", to: "/destinations/kibale-forest", img: expChimp },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: sceneLion },
      ]}
      faqs={FAQS}
    />
  ),
});
