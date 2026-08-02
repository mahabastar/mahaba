import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import g_chimp_trekking_1 from "@/assets/gallery/chimp-trekking-1.jpg";
import g_chimp_trekking_2 from "@/assets/gallery/chimp-trekking-2.jpg";
import g_chimp_trekking_3 from "@/assets/gallery/chimp-trekking-3.jpg";
import g_chimpanzee_1 from "@/assets/gallery/chimpanzee-1.jpg";
import g_chimp_roadside from "@/assets/gallery/chimp-roadside.jpg";
import g_ngamba_chimps_1 from "@/assets/gallery/ngamba-chimps-1.jpg";

const FAQS = [
  {
    q: "Where can I go chimpanzee trekking in Uganda?",
    a: "Three main places: Kibale National Park, which holds the highest chimpanzee density in Africa; Kyambura Gorge in Queen Elizabeth National Park, nicknamed the 'Valley of Apes'; and Budongo Forest near Murchison Falls, one of the country's most established habituation sites.",
  },
  {
    q: "How much does a chimpanzee permit cost?",
    a: "A standard Kibale chimpanzee trekking permit costs USD 250 per person for a one-hour visit. The longer Chimpanzee Habituation Experience, which follows researchers for a half-day as a wild community is habituated to human presence, costs USD 250 as well but runs 4+ hours.",
  },
  {
    q: "How does chimpanzee trekking compare to gorilla trekking?",
    a: "Chimpanzees are more active and vocal than gorillas, so a trek can mean covering more ground as the group moves through the canopy. Permits are also far cheaper (USD 250 vs USD 800) and easier to obtain, making chimp trekking a popular complement to — or standalone alternative to — a gorilla trek.",
  },
  {
    q: "Which location should I choose?",
    a: "Kibale offers the highest odds of a sighting and the widest range of primates. Kyambura Gorge suits travellers already based in Queen Elizabeth National Park who want to add primates without a detour. Budongo pairs naturally with Murchison Falls and offers the longer Habituation Experience.",
  },
];

export const Route = createFileRoute("/destinations/chimpanzee-trekking")({
  head: () =>
    buildDestinationHead({
      slug: "chimpanzee-trekking",
      name: "Chimpanzee Trekking",
      title: "Chimpanzee Trekking in Uganda — Kibale, Kyambura & Budongo | Trek Wild Uganda",
      description:
        "Track wild chimpanzees in Kibale, Kyambura Gorge or Budongo Forest — permits, cost, and how chimp trekking compares to gorilla trekking in Uganda.",
      ogImage: expChimp,
      region: "Western Uganda",
      keywords: [
        "Uganda chimpanzee trekking",
        "Kibale chimpanzee permit",
        "Kyambura Gorge",
        "Budongo Forest chimpanzees",
        "Chimpanzee Habituation Experience",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="chimpanzee-trekking"
      eyebrow="Kibale, Kyambura Gorge & Budongo"
      name="Chimpanzee Trekking"
      tagline={<>Uganda's <em className="italic text-gold">other</em> great ape.</>}
      intro="Louder, faster and more expressive than their gorilla cousins, Uganda's chimpanzees can be tracked in three very different forests — from Kibale's record-breaking density to a gorge nicknamed the Valley of Apes."
      heroImage={expChimp}
      heroAlt="Wild chimpanzee in the forest canopy of Kibale National Park"
      facts={[
        { label: "Best location", value: "Kibale National Park" },
        { label: "Duration", value: "1 hour with the community" },
        { label: "Permit", value: "USD 250 per person" },
        { label: "Difficulty", value: "Easy to Moderate" },
      ]}
      sections={[
        {
          title: "Three forests, three experiences",
          body: "Kibale holds Africa's highest chimpanzee density and the best odds of a sighting. Kyambura Gorge, a steep-sided rift valley cutting through Queen Elizabeth National Park's savanna, offers a more dramatic setting and a chance to combine chimps with game drives. Budongo Forest near Murchison Falls runs one of Uganda's longest-established habituation programmes.",
        },
        {
          title: "A more active encounter than gorilla trekking",
          body: "Chimpanzees move fast, forage noisily, and rarely stay still — trackers often follow calls and canopy movement rather than a fixed location. It makes for a livelier, sometimes more physically demanding hour than the calmer pace of gorilla trekking.",
        },
        {
          title: "The Habituation Experience",
          body: "For a deeper encounter, Kibale and Budongo both offer a half-day Chimpanzee Habituation Experience — following researchers and rangers as they work with a community still being acclimated to human presence, rather than a fully habituated group.",
        },
      ]}
      galleryImages={[
        { src: g_chimp_trekking_1, alt: "Chimpanzee trekking in Kibale Forest" },
        { src: g_chimp_trekking_2, alt: "Chimpanzee high in the forest canopy" },
        { src: g_chimp_trekking_3, alt: "Moments from a chimpanzee trek" },
        { src: g_chimpanzee_1, alt: "Chimpanzee portrait in Kibale" },
        { src: g_chimp_roadside, alt: "Chimpanzee in a roadside tree" },
        { src: g_ngamba_chimps_1, alt: "Rescued chimpanzees at Ngamba Island" },
      ]}
      highlights={[
        { title: "Africa's highest chimp density", desc: "Kibale holds over 1,500 wild chimpanzees, the best sighting odds on the continent." },
        { title: "Kyambura Gorge — the Valley of Apes", desc: "A dramatic rift gorge inside Queen Elizabeth National Park, chimps included." },
        { title: "Chimpanzee Habituation Experience", desc: "A half-day following researchers as a wild community learns to tolerate humans." },
        { title: "Twelve other primate species", desc: "Kibale alone also holds red colobus, grey-cheeked mangabey and l'Hoest's monkey." },
        { title: "Cheaper, easier permits than gorillas", desc: "USD 250 versus USD 800, with far more daily permits available." },
        { title: "Combine with Budongo & Murchison Falls", desc: "A natural add-on for anyone already routing through northern Uganda." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive at your chosen forest", desc: "Settle in at a lodge bordering Kibale, Kyambura or Budongo, depending on your route." },
        { day: "Day 02", title: "Chimpanzee trek", desc: "An early briefing, then a guided trek through the forest to find and spend an hour with a chimpanzee community." },
      ]}
      bestTime="Chimpanzee trekking runs year-round. The dry months of June–September and December–February offer firmer trails, while the wetter months bring quieter forests and fewer trekkers."
      gettingThere="Kibale is roughly a 5–6 hour drive from Kampala via Fort Portal. Kyambura Gorge sits inside Queen Elizabeth National Park, and Budongo Forest is en route to Murchison Falls, around 4–5 hours from Kampala."
      related={[
        { name: "Kibale", to: "/destinations/kibale-forest", img: expChimp },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
