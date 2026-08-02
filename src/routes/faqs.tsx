import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import sceneCulture from "@/assets/scene-culture.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Uganda Safari FAQs — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Answers to the questions travellers ask most before a Uganda safari — visas, safety, money, gorilla trekking, best time to visit, and more.",
      },
      { property: "og:title", content: "Uganda Safari FAQs — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/faqs` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/faqs` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Before You Go"
      title={<>Everything travellers <em className="italic text-gold">ask us first</em>.</>}
      intro="The questions that come up most before a Uganda trip — grouped here in one place. For a deeper dive on any topic, each links through to its own dedicated guide."
      heroImage={sceneCulture}
      heroAlt="Travellers and guides preparing for a Uganda safari"
      facts={[
        { label: "Is Uganda safe?", value: "Yes" },
        { label: "Visa needed?", value: "Yes, for all nationalities" },
        { label: "Vaccination required", value: "Yellow fever" },
        { label: "Currency", value: "Ugandan Shilling" },
      ]}
      sections={[
        {
          title: "Safety, health & entry",
          body: "Uganda is a stable, welcoming destination for travellers, with tourism infrastructure built specifically around safe access to its parks and gorilla trekking sectors. Every visitor needs a visa and a yellow fever certificate — see the full Visa Guide for the application process.",
        },
        {
          title: "Money, tipping & connectivity",
          body: "US dollars (notes printed 2006 or later) and the Ugandan Shilling are both widely used; card payments are common in Kampala and larger lodges but less reliable in remote parks, so carrying cash is essential. Mobile data coverage is decent in towns and around most lodges, though remote parks like Kidepo have patchy signal.",
        },
      ]}
      faqs={[
        { q: "Is Uganda safe to visit?", a: "Yes. Uganda's national parks are well-managed and security is a priority around all major tourist routes. As with any destination, normal travel precautions apply, and we brief every guest on specifics for their itinerary." },
        { q: "Do I need a visa for Uganda?", a: "Yes, every visitor does. Apply online in advance — see our full Visa Guide for the single-entry versus East Africa Tourist Visa comparison." },
        { q: "Do I need any vaccinations?", a: "A yellow fever vaccination certificate is mandatory for entry. Malaria prophylaxis is strongly recommended and should be discussed with your doctor before travel." },
        { q: "What's the best time to visit Uganda?", a: "The dry seasons (June–September and December–February) offer the easiest trekking conditions, though Uganda is a year-round destination — see our Seasonal Safari Calendar for a month-by-month breakdown." },
        { q: "How much does a Uganda safari cost?", a: "It varies widely by trip length, number of gorilla permits, and accommodation style. Try our Safari Budget Calculator for a personalised estimate." },
        { q: "How much does a gorilla trekking permit cost?", a: "USD 800 per person for a standard one-hour trek. See our Gorilla Permit Guide for exactly what's included and how booking works." },
        { q: "What currency should I bring?", a: "US dollars (notes printed 2006 or later) for tips and larger payments, alongside some Ugandan Shillings for small everyday purchases." },
        { q: "Do I need to tip guides and rangers?", a: "Tipping is expected and forms a meaningful part of local income — we provide specific guidance on typical amounts as part of your itinerary." },
        { q: "Is the water safe to drink?", a: "Stick to bottled or filtered water throughout your trip; it's provided at all lodges and included in vehicle transfers." },
        { q: "Will I have phone and internet signal?", a: "Coverage is decent in towns and at most lodges, including many in national parks, but can be patchy or unavailable in remote areas like Kidepo Valley." },
        { q: "What should I pack?", a: "Neutral-coloured layers, sturdy hiking boots, and rain protection are the essentials — see our full Packing Guide, including one clothing rule that surprises most first-time visitors." },
        { q: "Can I combine Uganda with Rwanda or Kenya?", a: "Yes — the East Africa Tourist Visa (USD 100) covers multi-entry travel across Uganda, Kenya and Rwanda for 90 days, making a combined itinerary straightforward." },
        { q: "How do I get around Uganda?", a: "Most itineraries use a private vehicle and driver-guide throughout. Fly-in options connect major parks in under an hour where road transfers would otherwise take most of a day." },
        { q: "Is Uganda good for families?", a: "Yes, with some planning around gorilla trekking's 15+ age minimum — see our Family Safaris guide for what works well at different ages." },
      ]}
      related={[
        { name: "Visa Guide", to: "/visa-guide" },
        { name: "Packing Guide", to: "/packing-guide" },
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide" },
        { name: "Weather Guide", to: "/weather" },
        { name: "Safari Budget Calculator", to: "/safari-budget-calculator" },
      ]}
    />
  ),
});
