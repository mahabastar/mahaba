import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import ctaSunset from "@/assets/cta-sunset.jpg";
import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import g_mburo_zebras from "@/assets/gallery/mburo-9.jpg";
import g_mburo_1 from "@/assets/gallery/mburo-1.jpg";
import g_mburo_moments_1 from "@/assets/gallery/mburo-moments-1.jpg";
import g_mburo_2 from "@/assets/gallery/mburo-2.jpg";
import g_mburo_moments_2 from "@/assets/gallery/mburo-moments-2.jpg";
import g_mburo_3 from "@/assets/gallery/mburo-3.jpg";
import g_mburo_moments_3 from "@/assets/gallery/mburo-moments-3.jpg";

const FAQS = [
  {
    q: "Is Lake Mburo worth visiting if I've already seen Queen Elizabeth or Murchison Falls?",
    a: "Yes, for a different reason — it's the only Ugandan park where walking and horseback safaris among plains game like zebra and impala are routine, without the security concerns larger predator populations create elsewhere.",
  },
  {
    q: "How far is Lake Mburo from Kampala?",
    a: "About 3.5–4 hours by road, making it the closest savanna park to Kampala and Entebbe — often used as a first or last stop for travellers short on time, or a scenic break en route to Bwindi.",
  },
  {
    q: "What wildlife will I see at Lake Mburo?",
    a: "Zebra, impala, eland, buffalo, warthog and hippo are common, along with over 300 recorded bird species including the rare shoebill stork on the lake's papyrus fringes. There are no elephants and only a small, elusive leopard population — no lions.",
  },
  {
    q: "Can I do a boat trip on Lake Mburo?",
    a: "Yes — a guided boat cruise on the lake is one of the park's signature activities, with close hippo and crocodile sightings and good birdlife along the shoreline.",
  },
];

export const Route = createFileRoute("/destinations/lake-mburo")({
  head: () =>
    buildDestinationHead({
      slug: "lake-mburo",
      name: "Lake Mburo National Park",
      title: "Lake Mburo National Park, Uganda — Walking Safaris & Zebra | Trek Wild Uganda",
      description:
        "Uganda's most compact savanna park, closest to Kampala — walking and horseback safaris among zebra and impala, with a signature boat cruise.",
      ogImage: g_mburo_zebras,
      region: "Western Uganda",
      keywords: [
        "Lake Mburo National Park",
        "Uganda walking safari",
        "zebra safari Uganda",
        "Ankole cattle country",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="lake-mburo"
      eyebrow="Lake Mburo National Park"
      name="Lake Mburo"
      tagline={<>Small park, <em className="italic text-gold">close enough for a stopover</em>.</>}
      intro="Uganda's most compact savanna park sits just a few hours from Kampala, in the rolling grassland of Ankole cattle country. Without elephants or lions to complicate things, Lake Mburo is the one park in Uganda where walking and horseback safaris among zebra and impala are simply routine — a different pace entirely from the country's bigger parks."
      heroImage={g_mburo_zebras}
      heroAlt="Zebras and buffalo at a waterhole in Lake Mburo National Park"
      facts={[
        { label: "Location", value: "Western Uganda (Ankole)" },
        { label: "Park size", value: "370 km²" },
        { label: "Ideal stay", value: "1 night" },
        { label: "Highlight", value: "Walking & horseback safaris" },
      ]}
      sections={[
        {
          title: "The one park you can walk through freely",
          body: "Most Ugandan parks restrict walking safaris because of elephant and lion populations. Lake Mburo has neither, which means guided walks and horseback rides among zebra, impala and eland are a normal part of a visit here, not a rare add-on.",
        },
        {
          title: "Closest savanna to Kampala",
          body: "At around 3.5–4 hours from the capital, Lake Mburo is frequently used as a first taste of savanna Uganda on the way south to Bwindi, or a last stop before flying home — small enough to properly explore in a single night.",
        },
        {
          title: "The lake itself",
          body: "The park takes its name from the lake at its centre, one of five in the immediate area, fringed with papyrus swamp that shelters hippo, crocodile and — for the patient — the rare shoebill stork. A guided boat cruise is the best way to see all three.",
        },
      ]}
      galleryImages={[
        { src: g_mburo_zebras, alt: "Zebras and buffalo at a Lake Mburo waterhole" },
        { src: g_mburo_1, alt: "Zebras in Lake Mburo National Park" },
        { src: g_mburo_moments_1, alt: "Moments at Lake Mburo" },
        { src: g_mburo_2, alt: "Impala on the Mburo plains" },
        { src: g_mburo_moments_2, alt: "Game drive at Lake Mburo" },
        { src: g_mburo_3, alt: "Lake Mburo's acacia woodland" },
        { src: g_mburo_moments_3, alt: "Wildlife at Lake Mburo" },
      ]}
      highlights={[
        { title: "Walking safaris", desc: "Uganda's only park where guided walks among plains game are a routine activity." },
        { title: "Horseback safaris", desc: "See zebra and impala at eye level on a guided horse ride through the grassland." },
        { title: "Closest savanna park to Kampala", desc: "Around 3.5–4 hours by road — an easy first or last stop on any itinerary." },
        { title: "Boat cruise on Lake Mburo", desc: "Close hippo and crocodile sightings, with a chance of the rare shoebill stork." },
        { title: "Ankole cattle country", desc: "Rolling grassland grazed by Uganda's iconic long-horned Ankole cattle." },
        { title: "Compact enough for one night", desc: "A full safari experience without the multi-night commitment of Uganda's larger parks." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & game drive", desc: "Drive in from Kampala, settle into your lodge, and head out for an afternoon game drive." },
        { day: "Day 02", title: "Walking safari & boat cruise", desc: "An early guided walk among zebra and impala, followed by a lake cruise before continuing your journey south." },
      ]}
      bestTime="Dry months from June–September and December–February offer the easiest walking conditions and best game visibility. The park is malaria-country year-round, so precautions are worth taking regardless of season."
      gettingThere="A straightforward 3.5–4 hour drive from Kampala or Entebbe on the road toward Mbarara, making it a natural stopover en route to Bwindi Impenetrable or Lake Bunyonyi."
      related={[
        { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable", img: gorillaSilverback },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
