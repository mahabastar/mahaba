import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/gorilla-permit-guide")({
  head: () => ({
    meta: [
      { title: "Uganda Gorilla Permit Guide — Cost & Booking | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Everything the USD 800 Uganda gorilla permit includes, how booking works, the Habituation Experience alternative, and how it compares to Rwanda.",
      },
      { property: "og:title", content: "Uganda Gorilla Permit Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/gorilla-permit-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/gorilla-permit-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="The Permit, Explained"
      title={<>What your <em className="italic text-gold">gorilla permit</em> actually buys you.</>}
      intro="At USD 800, a Uganda gorilla permit is the single biggest line item on most itineraries — and also the most commonly misunderstood. Here's exactly what it includes, how booking works, and the alternatives worth knowing about."
      heroImage={gorillaSilverback}
      heroAlt="Silverback gorilla in Bwindi, the encounter a gorilla permit buys"
      facts={[
        { label: "Permit cost", value: "USD 800 per person" },
        { label: "Group size", value: "Max 8 per family" },
        { label: "Time with gorillas", value: "1 hour" },
        { label: "Habituation Experience", value: "USD 1,500 / ~4 hours" },
      ]}
      sections={[
        {
          title: "What's included, and what isn't",
          body: "The permit covers park entry, an armed ranger guide, trackers who locate the gorilla family that morning, and your one hour with them once found. It does not cover porters, accommodation, transport, or meals. Hiring a porter — usually USD 15–20 — is optional but genuinely worth it: it directly supports community income and takes the physical load off you on what can be a long, steep trek.",
        },
        {
          title: "How and when to book",
          body: "Permits are allocated by the Uganda Wildlife Authority and must be booked through a registered tour operator, not directly by individual travellers. For peak season — June through September and December through February — book as far ahead as possible; popular sectors like Rushaga can sell out four to six months in advance. Trek Wild Uganda secures permits as part of every gorilla itinerary.",
        },
        {
          title: "Uganda vs Rwanda: the cost difference",
          body: "A Rwanda gorilla permit costs USD 1,500 — nearly double Uganda's. The gorillas and the experience are broadly comparable; the difference mainly reflects Rwanda's positioning as a more premium, more accessible (shorter drive from Kigali) destination. Uganda's four trekking sectors also mean considerably more permit availability overall.",
        },
        {
          title: "Cancellation and rescheduling",
          body: "Gorilla permits are largely non-refundable close to your trek date, and rescheduling depends on availability rather than being guaranteed. Comprehensive travel insurance that specifically covers pre-paid permit costs is strongly recommended, given the size of this single expense.",
        },
        {
          title: "The Gorilla Habituation Experience",
          body: "For a longer, less crowded alternative, Rushaga sector in Bwindi offers the Habituation Experience at USD 1,500 per person — up to four hours with a gorilla family still being acclimated to human presence, in smaller groups than the standard one-hour trek. It's a genuinely different experience, not just a longer version of the same one.",
        },
      ]}
      faqs={[
        { q: "Is there a minimum age for gorilla trekking?", a: "Yes — 15 years old, strictly enforced, for the gorillas' health as much as visitor safety. There is no exception process in Uganda for younger trekkers." },
        { q: "Are there discounted permits at certain times of year?", a: "Uganda has occasionally offered discounted permits during the quieter April, May and November low season — availability and pricing change, so we confirm current rates when planning your trip." },
        { q: "What happens if we don't find the gorillas?", a: "Sighting rates in Uganda are very high given experienced trackers and radio-collared or regularly monitored families, but it's genuinely wildlife, not guaranteed. Permits are not refunded for an unsuccessful trek." },
        { q: "How fit do I need to be for gorilla trekking?", a: "Treks range from 1 to 8 hours round trip depending on where the family has moved that morning, over steep and often muddy terrain. A reasonable fitness level helps; porters are available for anyone who wants extra support." },
        { q: "Can I photograph the gorillas?", a: "Yes, but flash photography is prohibited to protect their eyes — low-light technique matters more than equipment given the dense forest canopy." },
      ]}
      related={[
        { name: "Gorilla Trekking Guide", to: "/destinations/gorilla-trekking" },
        { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
        { name: "Packing Guide", to: "/packing-guide" },
      ]}
    />
  ),
});
