import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import batwaDance from "@/assets/batwa-dance.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/cultural-heritage")({
  head: () => ({
    meta: [
      { title: "Uganda's Cultural Heritage — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Uganda's traditional kingdoms, the Batwa forest people, Karamojong pastoralists, and how to visit respectfully.",
      },
      { property: "og:title", content: "Uganda's Cultural Heritage — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/cultural-heritage` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/cultural-heritage` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Beyond the Wildlife"
      title={<>Uganda's culture is <em className="italic text-gold">as varied as its landscape</em>.</>}
      intro="Four historic kingdoms, over fifty ethnic groups, and communities ranging from ancient forest dwellers to semi-nomadic cattle herders — Uganda's cultural diversity rarely gets the same billing as its wildlife, but it's just as central to understanding the country."
      heroImage={batwaDance}
      heroAlt="Batwa community cultural performance in south-western Uganda"
      facts={[
        { label: "Traditional kingdoms", value: "4 (Buganda, Bunyoro, Toro, Busoga)" },
        { label: "Ethnic groups", value: "50+" },
        { label: "Forest people", value: "The Batwa" },
        { label: "Pastoralist culture", value: "The Karamojong" },
      ]}
      sections={[
        {
          title: "Uganda's traditional kingdoms",
          body: "Uganda retains four constitutionally recognised traditional kingdoms, each with its own monarch and cultural institutions functioning alongside the modern state. Buganda, the largest and most prominent, is centred on Kampala — the Kasubi Tombs, burial site of Buganda's kings and a UNESCO World Heritage Site, sit just outside the city. Bunyoro-Kitara, once a major regional empire, Toro near Fort Portal, and Busoga near Jinja each carry their own distinct history and royal traditions.",
        },
        {
          title: "The Batwa — the forest's original people",
          body: "The Batwa lived inside what's now Bwindi and Mgahinga for generations before both became protected national parks in the early 1990s, displacing Batwa communities from the forest they'd called home. Guided Batwa Trail walks near both parks now let former forest-dwellers share hunting, foraging and building knowledge directly with visitors — a meaningful source of income built specifically around the displacement tourism itself created.",
        },
        {
          title: "The Karamojong — pastoralists of the north-east",
          body: "In the semi-arid plains around Kidepo Valley, the Karamojong maintain a semi-nomadic cattle-herding culture distinct from anywhere else in Uganda — cattle define wealth, social status and tradition here in ways that have persisted through decades of change elsewhere in the country. Village visits near Kidepo offer a rare, largely unstaged look at a genuinely different way of life.",
        },
        {
          title: "Music, dance and craft",
          body: "Traditional dance and drumming remain a living part of Ugandan culture rather than a museum piece — the Ndere Cultural Centre in Kampala stages regular performances covering multiple ethnic traditions in one evening, while craft markets around the country sell basketry, barkcloth and beadwork directly from the makers.",
        },
      ]}
      faqs={[
        { q: "How should I approach visiting communities respectfully?", a: "Always through a guided, consented visit rather than an informal stop — we arrange cultural encounters directly with the communities involved, on their terms and at fair rates, treating the visit as an exchange rather than a photo opportunity." },
        { q: "Is it okay to photograph people?", a: "Always ask first. Most communities are happy to be photographed as part of a guided cultural visit, but a private moment or an unposed roadside encounter is a different matter — ask, and respect a no." },
        { q: "Can I visit the Kasubi Tombs?", a: "Yes — it's an easy stop just outside Kampala, worth combining with a city day at the start or end of your trip." },
        { q: "Do cultural visits work well alongside a wildlife-focused itinerary?", a: "Very well — the Batwa Trail pairs naturally with a Bwindi gorilla trek, and a Karamojong village visit fits easily alongside time in Kidepo Valley." },
      ]}
      related={[
        { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
        { name: "Kidepo Valley", to: "/destinations/kidepo-valley" },
        { name: "Responsible Tourism", to: "/responsible-tourism" },
      ]}
    />
  ),
});
