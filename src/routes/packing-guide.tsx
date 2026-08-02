import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import rwenzoriHikers from "@/assets/nile-bridge-aerial.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/packing-guide")({
  head: () => ({
    meta: [
      { title: "Uganda Packing Guide — What to Bring | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "What to pack for a Uganda safari — clothing, gorilla trekking gear, health essentials, and one clothing rule that surprises most first-time visitors.",
      },
      { property: "og:title", content: "Uganda Packing Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/packing-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/packing-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Before You Fly"
      title={<>What to pack for <em className="italic text-gold">Uganda</em>.</>}
      intro="Uganda's climate is milder than most safari destinations, but gorilla trekking and altitude swings mean a bit more thought than a standard summer packing list."
      heroImage={rwenzoriHikers}
      heroAlt="Trekkers dressed for Uganda's forest and mountain terrain"
      facts={[
        { label: "Climate", value: "Equatorial, mild year-round" },
        { label: "Power", value: "240V, Type G plug" },
        { label: "Currency", value: "Ugandan Shilling (UGX)" },
        { label: "Key rule", value: "No camouflage clothing" },
      ]}
      sections={[
        {
          title: "The one rule that surprises everyone",
          body: "Wearing camouflage-patterned clothing is illegal for civilians in Uganda — it's reserved for military and security personnel. This catches out more travellers than any other packing detail, since camo is common safari wear elsewhere in Africa. Leave it at home; neutral khaki, olive and brown work just as well and won't cause issues at customs.",
        },
        {
          title: "Clothing for the forest and the savanna",
          body: "Layering matters more than any single item — mornings can be genuinely cool, especially at altitude in Bwindi or the Rwenzori foothills, while midday savanna heat calls for breathable fabrics. For gorilla and chimp trekking specifically, long sleeves and trousers tucked into socks are a real necessity, not a suggestion — they're your main defence against safari ants and thorny undergrowth.",
          checklist: [
            "Neutral-coloured long-sleeve shirts (khaki, olive, brown — no camouflage)",
            "Convertible or lightweight hiking trousers",
            "A warm layer (fleece or light jacket) for cool mornings and altitude",
            "A packable rain jacket",
            "Wide-brim hat and sunglasses",
            "Sturdy, broken-in waterproof hiking boots",
            "Gardening or thin work gloves, for gripping vegetation on gorilla treks",
            "Gaiters, or long socks to tuck trousers into against safari ants",
          ],
        },
        {
          title: "Health and safety essentials",
          body: "Malaria prophylaxis is standard practice for Uganda and should be arranged with a doctor before you travel, alongside your yellow fever vaccination. Insect repellent matters as much in the evenings at your lodge as it does on a forest trek.",
          checklist: [
            "Malaria prophylaxis, prescribed before travel",
            "Insect repellent containing DEET",
            "A copy of your yellow fever certificate",
            "Basic first-aid kit and any personal medications",
            "Hand sanitiser and rehydration salts",
            "Reef-safe sunscreen",
          ],
        },
        {
          title: "Electronics and money",
          body: "Uganda uses UK-style Type G plugs at 240V, so pack an adapter rather than assume your lodge will have a spare. Many safari lodges are off-grid or run generators on a schedule, so a power bank is genuinely useful, not just a nice-to-have. For cash, US dollars printed after 2006 are widely preferred and sometimes the only notes accepted for tips.",
          checklist: [
            "Universal or UK-style (Type G) plug adapter",
            "Portable power bank",
            "Headlamp or torch for early starts",
            "USD cash, small denominations, notes printed 2006 or later",
            "A dry bag or ziplock bags for river crossings and rain",
          ],
        },
      ]}
      faqs={[
        { q: "Do I really need to avoid camouflage clothing?", a: "Yes — it's a genuine legal restriction for civilians in Uganda, not just a style preference. Neutral khaki or olive tones achieve the same look without any issue." },
        { q: "What footwear is best for gorilla trekking?", a: "Waterproof, ankle-supporting hiking boots that are already broken in — Bwindi's trails are steep and often muddy, and new boots plus a multi-hour trek is a bad combination." },
        { q: "Should I bring a daypack?", a: "Yes — a 20–30 litre daypack for water, rain gear and camera equipment on trekking days, separate from your main luggage." },
        { q: "Is tipping in USD or Ugandan Shillings better?", a: "USD cash, in small denominations printed 2006 or later, is the most widely accepted and preferred currency for tipping guides, rangers and porters." },
      ]}
      related={[
        { name: "Visa Guide", to: "/visa-guide" },
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide" },
        { name: "Weather Guide", to: "/weather" },
      ]}
    />
  ),
});
