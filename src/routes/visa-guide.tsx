import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import ctaSunset from "@/assets/cta-sunset.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/visa-guide")({
  head: () => ({
    meta: [
      { title: "Uganda Visa Guide — How to Apply | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "How to get a Uganda visa — single-entry vs the East Africa Tourist Visa, cost, processing time, and the yellow fever certificate requirement.",
      },
      { property: "og:title", content: "Uganda Visa Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/visa-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/visa-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Entry Requirements"
      title={<>Your Uganda visa, <em className="italic text-gold">sorted in advance</em>.</>}
      intro="Uganda's visa process is entirely online, straightforward, and worth completing well before you fly. Here's exactly what you need and which visa type actually suits your trip."
      heroImage={ctaSunset}
      heroAlt="Sunset over Uganda, a traveller's first view of the country"
      facts={[
        { label: "Single-entry visa", value: "USD 50" },
        { label: "East Africa Tourist Visa", value: "USD 100" },
        { label: "Processing time", value: "~3 business days" },
        { label: "Required", value: "Yellow fever certificate" },
      ]}
      sections={[
        {
          title: "How to apply",
          body: "Apply online through Uganda's official electronic visa portal — there's no need for a paper application or an in-person embassy visit. You'll upload a scan of your passport's bio page, a passport photo, and your yellow fever vaccination certificate, then pay by card. Apply at least two weeks before you travel; approval usually comes back within about three business days, but leaving a buffer avoids any last-minute stress.",
        },
        {
          title: "Single-entry vs the East Africa Tourist Visa",
          body: "If Uganda is your only stop, the standard single-entry visa at USD 50 is the cheaper, simpler option. If you're also visiting Kenya or Rwanda on the same trip, the East Africa Tourist Visa (USD 100) covers multi-entry travel across all three countries for 90 days — genuinely better value the moment your itinerary crosses a second border.",
        },
        {
          title: "The yellow fever certificate isn't optional",
          body: "Uganda requires proof of yellow fever vaccination for every traveller, regardless of which country you're arriving from. Get vaccinated at least 10 days before you fly, since that's when protection is considered to take effect, and carry the physical or digital certificate with you — it's checked both during your visa application and again on arrival.",
          checklist: [
            "Passport valid 6+ months beyond your travel dates, with blank pages",
            "Digital passport-style photo",
            "Yellow fever vaccination certificate",
            "Onward or return flight confirmation",
          ],
        },
      ]}
      faqs={[
        { q: "Can I get a Uganda visa on arrival instead of applying online?", a: "It's technically possible at some points of entry, but strongly discouraged — online applications are processed faster, and arriving without a pre-approved visa risks delays or complications at immigration. Apply online before you fly." },
        { q: "Do children need their own visa?", a: "Yes — every traveller, regardless of age, needs their own visa application and, for the yellow fever requirement, their own vaccination certificate." },
        { q: "Is the East Africa Tourist Visa worth it if I'm only visiting Uganda?", a: "No — at USD 100 versus USD 50 for the single-entry Uganda visa, it only pays off if your trip also includes Kenya or Rwanda." },
        { q: "Can I extend my visa once I'm in Uganda?", a: "Extensions are possible through the Directorate of Citizenship and Immigration Control in Kampala, though it's simpler to apply for the visa duration you actually need from the outset." },
      ]}
      related={[
        { name: "Packing Guide", to: "/packing-guide" },
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide" },
        { name: "FAQs", to: "/faqs" },
      ]}
    />
  ),
});
