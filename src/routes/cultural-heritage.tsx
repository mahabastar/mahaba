import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import batwaDance from "@/assets/batwa-dance.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/cultural-heritage")({
  head: () => ({
    meta: [
      { title: "Uganda Cultural Heritage — Kingdoms, Batwa & Karamojong" },
      {
        name: "description",
        content:
          "Uganda's four traditional kingdoms, the Batwa forest people, Karamojong pastoralists, village life, music, craft and food — and how to visit communities respectfully.",
      },
      { property: "og:title", content: "Uganda Cultural Heritage — Kingdoms, Batwa & Karamojong" },
      {
        property: "og:description",
        content:
          "Fifty ethnic groups, four kingdoms and communities from forest hunter-gatherers to cattle herders — how to meet Uganda's people on their own terms.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_CONFIG.url}/cultural-heritage` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/cultural-heritage` }],

  }),
  component: () => (
    <GuidePage
      eyebrow="Beyond the Wildlife"
      title={<>Uganda's culture is <em className="italic text-gold">as varied as its landscape</em>.</>}
      intro="Four historic kingdoms, more than fifty ethnic groups, and communities ranging from forest hunter-gatherers to semi-nomadic cattle herders. Uganda's cultural diversity rarely gets the billing its wildlife does, yet it is what most travellers end up talking about at home — the conversation in a banana garden, the drumming that started without warning, the family who insisted you stay for lunch. These are living communities, not exhibits, and meeting them well is a matter of being invited rather than arriving."
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
          body: "Uganda retains four constitutionally recognised traditional kingdoms, each with its own monarch and cultural institutions functioning alongside the modern state. Buganda, the largest and most prominent, is centred on Kampala — the Kasubi Tombs, burial site of Buganda's kings and a UNESCO World Heritage Site, sit just outside the city, their vast thatched dome held up by ironwood pillars and maintained by families whose ancestors held the same duty. Bunyoro-Kitara was once a regional empire whose salt and iron trade reached far beyond Uganda's present borders; Toro, near Fort Portal, crowned a three-year-old king in 1995 who is now among the world's youngest reigning monarchs; and Busoga, near Jinja, gathers its chiefdoms around the head of the Nile. Ask your guide about the kingdom you are driving through — the answer is rarely a history lesson and usually a family story.",
        },
        {
          title: "The Batwa — the forest's original people",
          body: "The Batwa lived inside what is now Bwindi and Mgahinga for millennia, hunting with bows, gathering honey and medicinal plants, and building shelters that vanished back into the undergrowth within a season. When both forests became national parks in 1991, Batwa communities were moved out of the only home they had known, and lost their land without title or compensation. Guided Batwa Trail walks near both parks now let elders share that forest knowledge directly — which vine yields drinking water, how a fire is coaxed from two sticks in wet air, which leaf treats a fever — and channel income back to families still rebuilding. It is a sobering, generous experience, and one of the most honest hours you can spend in south-western Uganda.",
        },
        {
          title: "The Karamojong — pastoralists of the north-east",
          body: "On the semi-arid plains around Kidepo Valley, the Karamojong maintain a cattle-herding life distinct from anywhere else in the country. Cattle here are wealth, dowry, status and history at once; a manyatta of thorn-fenced homesteads is arranged around the kraal that holds them, and young men still walk long distances with the herds in search of grazing after the rains. Visits arranged through the community near Kidepo are unusually unstaged — you will be shown sorghum grinding, beadwork and the layout of a homestead by the people who live in it, and asked as many questions as you ask.",
        },
        {
          title: "Everyday village life, food and farming",
          body: "Away from the parks, most of Uganda lives by the seasons of its gardens. Matoke — green banana, steamed in its own leaves until it turns golden — is the staple of the south and centre; millet and sorghum dominate the north and east; groundnut sauce, beans, cassava and sweet potato fill the plate almost everywhere. Mornings begin early and sociably: children in bright uniforms walking the murram roads, boda-boda motorcycles ferrying jerrycans, women turning coffee beans to dry on tarpaulins outside the house. Accept the offer of a stool and a cup of milky tea if it comes; in Uganda, being hurried is closer to rudeness than being late.",
        },
        {
          title: "Music, dance and craft",
          body: "Traditional dance and drumming remain a living part of Ugandan life rather than a museum piece — the Ndere Cultural Centre in Kampala covers a dozen ethnic traditions in a single evening, from Buganda's rapid baakisimba to the Karimojong's leaping edonga. In the villages you are more likely to meet it unplanned, at a wedding or a school celebration. Craft is equally practical: barkcloth beaten from the mutuba fig tree, a Buganda technique recognised by UNESCO; tight raffia baskets from Bugisu; beadwork and cowhorn from Karamoja. Buying directly from the maker or a women's cooperative keeps far more of the price in the household that produced it.",
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
        { name: "Ugandan Food Guide", to: "/food-guide" },
        { name: "Coffee & Tea Guide", to: "/coffee-tea-guide" },
      ]}
    />
  ),
});
