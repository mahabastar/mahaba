import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import g_semuliki_springs from "@/assets/gallery/semuliki-springs.jpg";
import g_shoebill_1 from "@/assets/gallery/shoebill-1.jpg";
import g_birding from "@/assets/gallery/birding.jpg";

const FAQS = [
  {
    q: "What makes Semuliki different from Uganda's other forest parks?",
    a: "Semuliki is a low-altitude extension of the Congo Basin rainforest — the only place in Uganda with this type of lowland forest ecosystem. It shares more bird and plant species with Central Africa than with the rest of the country, including several found nowhere else in East Africa.",
  },
  {
    q: "What are the Sempaya hot springs?",
    a: "A pair of boiling geothermal springs — the 'male' spring reaches around 100°C and can boil an egg in minutes, while the nearby 'female' spring forms a wider pool. Both sit in a clearing reached by an easy guided walk from the park headquarters.",
  },
  {
    q: "Is Semuliki good for birding?",
    a: "Yes — over 400 species have been recorded, more than 60 of them found nowhere else in Uganda, drawing serious birders specifically for Congo-basin species like the yellow-throated nicator and several hornbill species.",
  },
  {
    q: "How do I get to Semuliki?",
    a: "It's roughly a 5–6 hour drive from Kampala via Fort Portal, and is usually combined with Kibale, Queen Elizabeth or Rwenzori Mountains National Park on a western Uganda circuit rather than visited on its own.",
  },
];

export const Route = createFileRoute("/destinations/semuliki")({
  head: () =>
    buildDestinationHead({
      slug: "semuliki",
      name: "Semuliki National Park",
      title: "Semuliki National Park, Uganda — Hot Springs & Congo-Basin Birding | Trek Wild Uganda",
      description:
        "Uganda's slice of the Congo Basin rainforest — boiling Sempaya hot springs and birding found nowhere else in East Africa, on the DR Congo border.",
      ogImage: semulikiHotSprings,
      region: "Western Uganda",
      keywords: [
        "Semuliki National Park",
        "Sempaya hot springs",
        "Uganda birding",
        "Congo basin rainforest Uganda",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="semuliki"
      eyebrow="Semuliki National Park"
      name="Semuliki"
      tagline={<>A piece of the <em className="italic text-gold">Congo</em>, inside Uganda.</>}
      intro="Tucked into the floor of the Albertine Rift on the DR Congo border, Semuliki protects a low-lying extension of the Congo Basin rainforest found nowhere else in Uganda — boiling geothermal springs, birdlife shared with Central Africa, and some of the country's least-visited trails."
      heroImage={semulikiHotSprings}
      heroAlt="Steam rising from the Sempaya hot springs in Semuliki National Park"
      facts={[
        { label: "Location", value: "Western Uganda, DR Congo border" },
        { label: "Park size", value: "220 km²" },
        { label: "Ideal stay", value: "1 night" },
        { label: "Highlight", value: "Sempaya hot springs walk" },
      ]}
      sections={[
        {
          title: "The Sempaya hot springs",
          body: "A short, easy guided walk from the park headquarters leads to two geothermal springs bubbling out of the forest floor — the 'male' spring hot enough to cook an egg, the 'female' forming a wider steaming pool. It's Semuliki's single most-visited attraction and reachable in a couple of hours round trip.",
        },
        {
          title: "A rainforest unlike the rest of Uganda",
          body: "Semuliki sits at a lower altitude and shares its ecology with the Ituri Forest across the border in DR Congo rather than with Uganda's other highland parks. That distinction shows up in the checklist: over 400 bird species, more than 60 found nowhere else in the country.",
        },
        {
          title: "Uganda's quietest major park",
          body: "Semuliki receives a fraction of the visitors of Kibale or Queen Elizabeth nearby, which makes it an easy, low-key add-on for travellers already touring western Uganda and want one more genuinely different landscape and community.",
        },
      ]}
      galleryImages={[
        { src: g_semuliki_springs, alt: "The Sempaya hot springs in Semuliki" },
        { src: g_shoebill_1, alt: "Shoebill in the Semliki wetlands" },
        { src: g_birding, alt: "Birding in western Uganda" },
      ]}
      highlights={[
        { title: "Sempaya hot springs", desc: "Boiling geothermal springs reachable on an easy guided forest walk." },
        { title: "Congo-basin birdlife", desc: "Over 400 species, 60+ found nowhere else in Uganda." },
        { title: "A different kind of rainforest", desc: "Low-altitude ecology shared with DR Congo's Ituri Forest, unlike Uganda's highland parks." },
        { title: "Sempaya nature walks", desc: "Guided trails through swamp forest and dense lowland canopy." },
        { title: "Uganda's quietest major park", desc: "A genuinely uncrowded add-on to a western Uganda circuit." },
        { title: "Local Batwa & Bakonzo communities", desc: "Cultural encounters distinct from those elsewhere in western Uganda." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & Sempaya hot springs walk", desc: "Drive in via Fort Portal and take the guided walk to the Sempaya hot springs in the afternoon." },
        { day: "Day 02", title: "Birding walk & onward travel", desc: "An early birding walk through the forest before continuing to Kibale or Queen Elizabeth National Park." },
      ]}
      bestTime="December–February and June–September are driest and most comfortable for walking. Birding is good year-round, with resident species present regardless of season."
      gettingThere="Roughly a 5–6 hour drive from Kampala via Fort Portal. Most visitors combine it with Kibale, Queen Elizabeth, or Rwenzori Mountains National Park on a western Uganda circuit."
      related={[
        { name: "Kibale", to: "/destinations/kibale-forest", img: expChimp },
        { name: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains", img: sceneRwenzori },
      ]}
      faqs={FAQS}
    />
  ),
});
