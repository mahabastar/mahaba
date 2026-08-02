import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import rhinoZiwa from "@/assets/rhino-ziwa.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_rhino_ziwa from "@/assets/gallery/rhino-ziwa.jpg";
import g_mammals_1 from "@/assets/gallery/mammals-1.jpg";
import g_shoebill_2 from "@/assets/gallery/shoebill-2.jpg";
import g_ziwa_moments_1 from "@/assets/gallery/ziwa-moments-1.jpg";
import g_ziwa_moments_2 from "@/assets/gallery/ziwa-moments-2.jpg";
import g_ziwa_moments_3 from "@/assets/gallery/ziwa-moments-3.jpg";
import g_ziwa_moments_4 from "@/assets/gallery/ziwa-moments-4.jpg";
import g_ziwa_moments_5 from "@/assets/gallery/ziwa-moments-5.jpg";

const FAQS = [
  {
    q: "Why is Ziwa the only place to see rhinos in Uganda?",
    a: "Uganda's last wild rhinos were poached out by the late 1980s. Ziwa is a community-run sanctuary reintroducing southern white rhinos in a protected, monitored environment, with the long-term goal of eventually releasing offspring back into Uganda's national parks.",
  },
  {
    q: "How does rhino tracking at Ziwa work?",
    a: "Guided tracking is done on foot with an armed ranger, following radio-collared rhinos to within a safe, guided distance — closer and quieter than a vehicle-based game drive, and usually taking 1–2 hours round trip.",
  },
  {
    q: "How many rhinos live at Ziwa now?",
    a: "The sanctuary started with a handful of rhinos in the mid-2000s and has grown through natural breeding to a population in the dozens today, one of conservation's clearer reintroduction success stories in East Africa.",
  },
  {
    q: "Can Ziwa be visited as a day trip?",
    a: "Yes — it sits directly on the main road between Kampala and Murchison Falls, making it a natural stopover rather than a dedicated overnight destination for most itineraries.",
  },
];

export const Route = createFileRoute("/destinations/ziwa-rhino-sanctuary")({
  head: () =>
    buildDestinationHead({
      slug: "ziwa-rhino-sanctuary",
      name: "Ziwa Rhino Sanctuary",
      title: "Ziwa Rhino Sanctuary, Uganda — Rhino Tracking on Foot | Trek Wild Uganda",
      description:
        "The only place to see rhinos in Uganda — guided walking treks to southern white rhinos at a community-run sanctuary between Kampala and Murchison Falls.",
      ogImage: rhinoZiwa,
      region: "Central Uganda",
      keywords: [
        "Ziwa Rhino Sanctuary",
        "Uganda rhino tracking",
        "southern white rhino Uganda",
        "Nakasongola",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="ziwa-rhino-sanctuary"
      eyebrow="Nakasongola, Central Uganda"
      name="Ziwa Rhino Sanctuary"
      tagline={<>Uganda's rhinos, <em className="italic text-gold">brought back on foot</em>.</>}
      intro="Uganda's wild rhinos were poached to extinction by the late 1980s. Ziwa is the reason that's no longer the whole story — a community-run sanctuary where southern white rhinos, reintroduced and now breeding, can be tracked on foot within a few metres."
      heroImage={rhinoZiwa}
      heroAlt="Southern white rhino at Ziwa Rhino Sanctuary, Uganda"
      facts={[
        { label: "Location", value: "Nakasongola, central Uganda" },
        { label: "Activity", value: "Guided rhino tracking on foot" },
        { label: "Duration", value: "1–2 hours round trip" },
        { label: "Ideal stay", value: "Day trip or 1 night" },
      ]}
      sections={[
        {
          title: "Bringing rhinos back from zero",
          body: "By the late 1980s, poaching and civil unrest had wiped out Uganda's wild rhino population entirely. Ziwa, established in the mid-2000s by Rhino Fund Uganda, began with a handful of donated southern white rhinos in a protected sanctuary — a starting point for eventual reintroduction into the country's national parks.",
        },
        {
          title: "Tracking on foot, not by vehicle",
          body: "Unlike most Uganda wildlife encounters, rhino tracking here happens on foot, following radio-collared animals with an armed ranger to a safe, guided distance. It's quieter and more intimate than a game drive, and considerably closer than most safari wildlife allows.",
        },
        {
          title: "A stopover with its own story",
          body: "Sitting directly on the main Kampala–Gulu highway, Ziwa is the natural break on the drive north to Murchison Falls — but the breeding success here, now numbering in the dozens from that original handful, makes it worth the stop on its own merits.",
        },
      ]}
      galleryImages={[
        { src: g_ziwa_moments_1, alt: "Moments from Ziwa Rhino Sanctuary" },
        { src: g_ziwa_moments_2, alt: "Rhino tracking on foot at Ziwa" },
        { src: g_ziwa_moments_3, alt: "White rhino at Ziwa Rhino Sanctuary" },
        { src: g_ziwa_moments_4, alt: "Rangers and rhinos at Ziwa" },
        { src: g_ziwa_moments_5, alt: "Ziwa Rhino Sanctuary grasslands" },
        { src: g_rhino_ziwa, alt: "White rhino grazing at Ziwa" },
        { src: g_mammals_1, alt: "Wildlife at Ziwa Rhino Sanctuary" },
        { src: g_shoebill_2, alt: "Shoebill in the Ziwa wetlands" },
      ]}
      highlights={[
        { title: "The only rhinos in Uganda", desc: "Southern white rhinos, reintroduced after the species was poached to local extinction." },
        { title: "Guided tracking on foot", desc: "A quieter, closer encounter than a vehicle-based game drive." },
        { title: "A genuine conservation success", desc: "Grown from a handful of donated rhinos to a breeding population in the dozens." },
        { title: "Community-run sanctuary", desc: "Managed by Rhino Fund Uganda with strong local employment and education programmes." },
        { title: "On the road to Murchison Falls", desc: "A natural stopover, not a detour, for anyone driving north." },
        { title: "Birdlife on the side", desc: "The sanctuary's wetlands support a healthy variety of savanna and water birds." },
      ]}
      itinerary={[
        { day: "Stopover", title: "Rhino tracking en route", desc: "Break the drive from Kampala to Murchison Falls with a 1–2 hour guided rhino tracking walk before continuing north." },
      ]}
      bestTime="Visitable year-round. Early morning tracking offers the coolest temperatures and the best chance of finding rhinos active and grazing."
      gettingThere="Roughly a 3-hour drive north from Kampala on the main highway toward Gulu — directly on the route to Murchison Falls National Park, about 2 hours further north."
      related={[
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
