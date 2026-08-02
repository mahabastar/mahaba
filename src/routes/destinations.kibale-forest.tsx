import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expChimp from "@/assets/exp-chimp.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_chimp_trekking_1 from "@/assets/gallery/chimp-trekking-1.jpg";
import g_chimpanzee_1 from "@/assets/gallery/chimpanzee-1.jpg";
import g_monkey_vehicle from "@/assets/gallery/monkey-vehicle.jpg";
import g_monkey_roadside from "@/assets/gallery/monkey-roadside.jpg";
import g_coffee_tea_1 from "@/assets/gallery/coffee-tea-1.jpg";

const FAQS = [
  {
    q: "How much does a Kibale chimpanzee trekking permit cost?",
    a: "A standard chimpanzee trekking permit costs USD 250 per person and includes an hour with a habituated chimp community. A longer Chimpanzee Habituation Experience, spending a full day with researchers and rangers, costs USD 300 per person and is limited to a handful of guests. Trek Wild Uganda arranges permits as part of every itinerary.",
  },
  {
    q: "How does chimp trekking compare to gorilla trekking?",
    a: "Chimp trekking is shorter, less physically demanding, and considerably more affordable than gorilla trekking. Chimpanzees are also more mobile and vocal than gorillas, so encounters tend to be noisier and more energetic — swinging through the canopy rather than resting on the ground.",
  },
  {
    q: "What else is there to do around Kibale?",
    a: "Kibale sits near Fort Portal, in Uganda's crater-lake and tea-growing country. Most itineraries pair chimp trekking with a walk through the Bigodi Wetland, a visit to a working tea estate, or a day looking toward the Rwenzori foothills.",
  },
  {
    q: "When is the best time to trek chimpanzees in Kibale?",
    a: "Chimp trekking runs year-round. The dry seasons of June–September and December–February offer firmer forest trails, while April, May and November bring quieter trails and, in some years, discounted low-season permit rates.",
  },
  {
    q: "How do I get to Kibale National Park?",
    a: "Kibale is roughly 5–6 hours by road from Kampala or Entebbe, or about 45 minutes by scheduled light aircraft to Kasese airstrip, followed by a short transfer.",
  },
];

export const Route = createFileRoute("/destinations/kibale-forest")({
  head: () =>
    buildDestinationHead({
      slug: "kibale-forest",
      name: "Chimpanzee Trekking in Kibale Forest",
      title: "Chimpanzee Trekking in Kibale Forest, Uganda — Permits & Tours | Trek Wild Uganda",
      description:
        "Track wild chimpanzees in Kibale National Park, the primate capital of East Africa. Permits, best time to go, and expert-guided tours from Trek Wild Uganda.",
      ogImage: expChimp,
      region: "Western Uganda",
      keywords: [
        "Kibale National Park",
        "Uganda chimpanzee trekking",
        "chimp permit Uganda",
        "Fort Portal Uganda",
        "primate safari Uganda",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="kibale-forest"
      eyebrow="Kibale National Park"
      name="Chimpanzee Trekking"
      tagline={<>Uganda's <em className="italic text-gold">primate capital</em>.</>}
      intro="Walk into East Africa's densest primate forest and follow the calls of a wild chimpanzee community through the canopy. Kibale holds over a thousand chimpanzees and twelve other primate species — a forest that rarely goes quiet."
      heroImage={expChimp}
      heroAlt="Chimpanzee in the canopy of Kibale Forest, Uganda"
      facts={[
        { label: "Location", value: "Fort Portal, Western Uganda" },
        { label: "Duration", value: "1 hour with chimps" },
        { label: "Permit", value: "USD 250 per person" },
        { label: "Difficulty", value: "Easy to Moderate" },
      ]}
      sections={[
        {
          title: "The primate capital of Africa",
          body: "Kibale National Park protects one of the last major stands of tropical rainforest in Uganda, and with it, the highest concentration of primates anywhere on the continent — more than 1,500 chimpanzees across several habituated communities, alongside red colobus, black-and-white colobus, grey-cheeked mangabeys and L'Hoest's monkeys.",
        },
        {
          title: "Following the calls",
          body: "Treks begin with a ranger briefing at the park headquarters, then move into the forest on foot in search of a habituated community. Chimpanzees are considerably more mobile than gorillas — expect a faster pace, more noise, and the occasional dramatic canopy chase — before an hour spent simply watching them be chimpanzees.",
        },
        {
          title: "Beyond the trek",
          body: "Most visitors pair a Kibale trek with a walk through the nearby Bigodi Wetland Sanctuary, known for its birdlife and monkeys, or an afternoon among the tea estates that blanket the hills toward Fort Portal — with the Rwenzori's snow line visible on a clear day.",
        },
      ]}
      galleryImages={[
        { src: g_chimp_trekking_1, alt: "Chimpanzee in Kibale Forest" },
        { src: g_chimpanzee_1, alt: "Chimpanzee portrait, Kibale" },
        { src: g_monkey_vehicle, alt: "Monkey on a safari vehicle, Kibale" },
        { src: g_monkey_roadside, alt: "Primate spotted from the forest road" },
        { src: g_coffee_tea_1, alt: "Tea and coffee country near Fort Portal" },
      ]}
      highlights={[
        { title: "Highest primate density in Africa", desc: "Thirteen primate species in one forest, led by over 1,500 wild chimpanzees." },
        { title: "Shorter, gentler trek", desc: "A faster, more affordable primate encounter than gorilla trekking, well suited to families." },
        { title: "Chimpanzee Habituation Experience", desc: "A full-day option for serious wildlife enthusiasts, spending dawn to dusk with researchers." },
        { title: "Bigodi Wetland walk", desc: "A community-run sanctuary nearby, rich in birdlife and monkeys." },
        { title: "Fort Portal's tea country", desc: "Rolling tea estates and crater lakes, with the Rwenzori as a backdrop." },
        { title: "Easily combined", desc: "A natural addition to a Bwindi gorilla trek or Queen Elizabeth game drive." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & transfer to Kibale", desc: "Fly or drive in from Entebbe to the Fort Portal region, settling into your lodge on the forest edge." },
        { day: "Day 02", title: "Chimpanzee trekking", desc: "An early briefing, then into the forest on foot to find a habituated chimpanzee community for your hour with them." },
        { day: "Day 03", title: "Bigodi Wetland or tea estate", desc: "A gentler morning — a guided wetland walk for birds and monkeys, or a visit to a working tea estate — before departing or continuing on." },
      ]}
      bestTime="Chimp trekking runs year-round. June–September and December–February bring firmer trails; April, May and November are quieter, with occasional discounted low-season permit rates."
      gettingThere="Fly into Entebbe International Airport. Kibale is a 5–6 hour drive west, or roughly 45 minutes by scheduled light aircraft to Kasese airstrip, followed by a short transfer."
      related={[
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "The Crater Lakes", to: "/destinations/crater-lakes", img: expCoffee },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
