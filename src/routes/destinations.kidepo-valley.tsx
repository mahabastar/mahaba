import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneElephants from "@/assets/scene-elephants.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_kidepo_moments_1 from "@/assets/gallery/kidepo-moments-1.jpg";
import g_kidepo_moments_2 from "@/assets/gallery/kidepo-moments-2.jpg";
import g_kidepo_moments_3 from "@/assets/gallery/kidepo-moments-3.jpg";
import g_kidepo_moments_4 from "@/assets/gallery/kidepo-moments-4.jpg";
import g_kidepo_moments_5 from "@/assets/gallery/kidepo-moments-5.jpg";
import g_kidepo_moments_6 from "@/assets/gallery/kidepo-moments-6.jpg";
import g_kidepo_moments_13 from "@/assets/gallery/kidepo-moments-13.jpg";

const FAQS = [
  {
    q: "What makes Kidepo different from Uganda's other parks?",
    a: "Kidepo is the only park in Uganda with wild ostriches, and one of only two with cheetah. Its remoteness — tucked into the far north-east, bordering South Sudan and Kenya — means a fraction of the visitors of Murchison or Queen Elizabeth, on landscapes many guides consider Africa's most dramatic.",
  },
  {
    q: "Is Kidepo safe to visit?",
    a: "Yes. The Karamoja region's past reputation for cattle-raiding is exactly that — past. The area has been stable and welcoming to visitors for years, with a growing community-based tourism sector around the town of Moroto.",
  },
  {
    q: "How do I get to Kidepo?",
    a: "Most visitors fly — roughly 1.5–2 hours from Entebbe on a scheduled light aircraft to Kidepo's Apoka airstrip. Driving is possible but takes 8–11 hours from Kampala, usually broken up with a stop at Ziwa Rhino Sanctuary or in Gulu.",
  },
  {
    q: "What's the entry fee?",
    a: "A Uganda Wildlife Authority park entrance fee of USD 40 per person, per 24 hours, covers game drives; other activities such as guided nature walks are booked separately.",
  },
  {
    q: "When is the best time to visit?",
    a: "The dry months, roughly September through March, concentrate wildlife around the Narus Valley's remaining water sources and offer the clearest game viewing. The wetter months bring lusher scenery and better birding, with far fewer visitors.",
  },
];

export const Route = createFileRoute("/destinations/kidepo-valley")({
  head: () =>
    buildDestinationHead({
      slug: "kidepo-valley",
      name: "Kidepo Valley National Park",
      title: "Kidepo Valley National Park, Uganda — Uganda's Wildest Frontier | Trek Wild Uganda",
      description:
        "Uganda's most remote and dramatic national park — cheetah, ostrich and vast untouched savanna in the far north-east. Fly-in safaris and guided tours from Trek Wild Uganda.",
      ogImage: sceneElephants,
      region: "North-eastern Uganda",
      keywords: [
        "Kidepo Valley National Park",
        "Uganda cheetah safari",
        "Karamoja Uganda",
        "remote Uganda safari",
        "Narus Valley",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="kidepo-valley"
      eyebrow="Kidepo Valley National Park"
      name="Kidepo Valley"
      tagline={<>Uganda's <em className="italic text-gold">last true wilderness</em>.</>}
      intro="Tucked into Uganda's remote north-eastern corner, bordering South Sudan and Kenya, Kidepo is everything Uganda's better-known parks aren't: vast, empty, and almost entirely undiscovered. It's also the only place in the country to see wild ostriches, and one of only two with cheetah."
      heroImage={sceneElephants}
      heroAlt="Savanna wildlife in Uganda's remote north-east"
      facts={[
        { label: "Location", value: "Karamoja, north-eastern Uganda" },
        { label: "Park entry", value: "USD 40 per person / 24hrs" },
        { label: "Getting there", value: "~1.5hr flight from Entebbe" },
        { label: "Difficulty", value: "Easy (game drives)" },
      ]}
      sections={[
        {
          title: "Uganda's most dramatic wilderness",
          body: "Rugged mountain ranges frame two river valleys — Kidepo and Narus — where wildlife concentrates around the dry season's remaining water. This is open, sweeping savanna scenery unlike anywhere else in Uganda, and guides who've worked across the continent regularly rank it among Africa's most beautiful parks.",
        },
        {
          title: "Wildlife found nowhere else in Uganda",
          body: "Kidepo is the only Ugandan park with wild ostriches, and shares with just one other park a resident cheetah population. Buffalo herds run into the thousands, elephant numbers have rebounded from around 200 in the 1990s to closer to 1,000 today, and Rothschild's giraffe — down to just three individuals decades ago — now number in the dozens here.",
        },
        {
          title: "Remote by design, not by accident",
          body: "Getting to Kidepo has always meant a real commitment — a long drive or a scheduled flight — and that's exactly why it stays this quiet. Days here often mean not seeing another vehicle. For travellers who've done the classic circuit and want somewhere genuinely undiscovered, this is it.",
        },
      ]}
      galleryImages={[
        { src: g_kidepo_moments_13, alt: "Kidepo Valley National Park" },
        { src: g_kidepo_moments_1, alt: "Kidepo Valley's open savanna" },
        { src: g_kidepo_moments_2, alt: "Game drive in the Narus Valley" },
        { src: g_kidepo_moments_3, alt: "Wildlife of Kidepo Valley" },
        { src: g_kidepo_moments_4, alt: "Kidepo's remote wilderness" },
        { src: g_kidepo_moments_5, alt: "Moments in Kidepo Valley" },
        { src: g_kidepo_moments_6, alt: "Kidepo Valley National Park" },
      ]}
      highlights={[
        { title: "Uganda's only wild ostriches", desc: "Found nowhere else in the country's protected areas." },
        { title: "Rare cheetah sightings", desc: "One of just two parks in Uganda with a resident cheetah population." },
        { title: "Total isolation", desc: "Among Africa's least-visited major parks — genuine, uncrowded wilderness." },
        { title: "Narus Valley game drives", desc: "Lions, buffalo herds and elephants concentrate here through the dry season." },
        { title: "Recovering giraffe population", desc: "Rothschild's giraffe numbers have rebounded from near-extinction here." },
        { title: "Karamojong culture", desc: "A chance to visit one of Uganda's most distinct and least-touristed cultural regions." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Fly to Kidepo", desc: "A scheduled light-aircraft transfer from Entebbe direct to Kidepo's Apoka airstrip, with an afternoon game drive on arrival." },
        { day: "Day 02", title: "Narus Valley game drives", desc: "A full day exploring the park's prime wildlife area, with dawn and dusk drives for the best sightings." },
        { day: "Day 03", title: "Karamojong village visit & departure", desc: "A morning cultural visit to a nearby Karamojong community before flying back south." },
      ]}
      bestTime="September through March offers the clearest game viewing as wildlife concentrates around the Narus Valley's remaining water. April–August is greener and quieter, with excellent birding."
      gettingThere="Fly into Entebbe International Airport, then connect via scheduled light aircraft (roughly 1.5–2 hours) to Kidepo's Apoka airstrip. Driving from Kampala takes 8–11 hours and is usually broken up with a stop at Ziwa Rhino Sanctuary."
      related={[
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
      ]}
      faqs={FAQS}
    />
  ),
});
