import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_rwenzori_snow from "@/assets/gallery/rwenzori-snow.jpg";
import g_rwenzori_1 from "@/assets/gallery/rwenzori-1.jpg";
import g_rwenzori_hikers from "@/assets/gallery/rwenzori-hikers.jpg";
import g_rwenzori_2 from "@/assets/gallery/rwenzori-2.jpg";
import g_rwenzori_3 from "@/assets/gallery/rwenzori-3.jpg";
import g_rwenzori_4 from "@/assets/gallery/rwenzori-4.jpg";
import g_rwenzori_6 from "@/assets/gallery/rwenzori-6.jpg";

const FAQS = [
  {
    q: "How long does it take to summit Margherita Peak?",
    a: "Most operators run 7–9 day expeditions to Margherita Peak (5,109m), Africa's third-highest summit, with a couple of extra days improving acclimatisation and your odds of a clear-weather summit attempt. Shorter 2–5 day low-altitude treks are also available for those who want the scenery without the technical climb.",
  },
  {
    q: "Do I need mountaineering experience?",
    a: "The final push to Margherita Peak involves glacier travel, fixed ropes and some scrambling — you don't need prior mountaineering experience, but a good level of fitness is essential. Lower routes and shorter treks require no technical skill at all.",
  },
  {
    q: "Are the glaciers still there?",
    a: "Yes, though reduced. Climate change has shrunk the Rwenzori's glaciers significantly over the past century, and they continue to recede. They're still visible near the highest peaks today, but this is very much a 'see it while you can' landscape.",
  },
  {
    q: "What does a Rwenzori trek cost?",
    a: "Full Margherita Peak expeditions typically run from around USD 1,300–1,900 per person depending on route, group size and duration, plus a separate Uganda Wildlife Authority park entrance fee of USD 35 per day. Shorter, lower-altitude treks cost considerably less.",
  },
  {
    q: "When is the best time to trek the Rwenzori?",
    a: "June to August and December to February bring the driest, clearest conditions. The Rwenzori's high year-round rainfall means trails are muddy in any season — good gaiters and rain gear matter whenever you go.",
  },
];

export const Route = createFileRoute("/destinations/rwenzori-mountains")({
  head: () =>
    buildDestinationHead({
      slug: "rwenzori-mountains",
      name: "Rwenzori Mountains",
      title: "Rwenzori Mountains Trekking, Uganda — Margherita Peak & Day Hikes | Trek Wild Uganda",
      description:
        "Trek Africa's 'Mountains of the Moon' — from gentle foothill day hikes to the full 7–9 day expedition to Margherita Peak. Costs, routes and guided tours from Trek Wild Uganda.",
      ogImage: sceneRwenzori,
      region: "Western Uganda",
      keywords: [
        "Rwenzori Mountains",
        "Margherita Peak",
        "Mountains of the Moon",
        "Uganda trekking",
        "Rwenzori National Park",
        "Trek Wild Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="rwenzori-mountains"
      eyebrow="Rwenzori Mountains National Park"
      name="Rwenzori Mountains"
      tagline={<>Africa's <em className="italic text-gold">Mountains of the Moon</em>.</>}
      intro="A UNESCO World Heritage range on the Uganda–DR Congo border, glaciated within sight of the equator. From a gentle foothill day hike to a full glacier-crossing expedition to Africa's third-highest peak, the Rwenzori offers a version of Uganda most visitors never see."
      heroImage={sceneRwenzori}
      heroAlt="Trekkers crossing a glacier in the Rwenzori Mountains, Uganda"
      facts={[
        { label: "Location", value: "Western Uganda, DRC border" },
        { label: "Highest peak", value: "Margherita, 5,109m" },
        { label: "Full trek", value: "7–9 days" },
        { label: "Difficulty", value: "Moderate (day hikes) to Strenuous" },
      ]}
      sections={[
        {
          title: "A true mountain range on the equator",
          body: "Unlike the free-standing volcanic cones of Kilimanjaro or Mount Kenya, the Rwenzori is a genuine mountain range — six glaciated massifs straddling the Uganda–Congo border, named the 'Mountains of the Moon' by the second-century geographer Ptolemy. Margherita Peak, on Mount Stanley, is Africa's third-highest summit at 5,109 metres.",
        },
        {
          title: "From foothill walk to full expedition",
          body: "Not every visit means a summit bid. Short day hikes into the lower forest zones reach waterfalls, hot springs and viewpoints without any technical climbing, while the full 7–9 day Central Circuit or Kilembe Trail expeditions cross glaciers, bogs and five distinct vegetation zones on the way to Margherita's summit.",
        },
        {
          title: "A landscape worth hurrying for",
          body: "The Rwenzori's glaciers have shrunk dramatically over the past century and continue to recede with a warming climate. What remains is still extraordinary — snow and ice within sight of the equator — but this is a landscape whose signature feature genuinely may not last, which makes trekking it now feel less like a bucket-list item and more like a small act of witness.",
        },
      ]}
      galleryImages={[
        { src: g_rwenzori_6, alt: "Hiking the Rwenzori Mountains" },
        { src: g_rwenzori_snow, alt: "Snow on the Rwenzori ridges" },
        { src: g_rwenzori_1, alt: "Rwenzori Mountains trekking route" },
        { src: g_rwenzori_hikers, alt: "Hikers in the Rwenzori" },
        { src: g_rwenzori_2, alt: "Rwenzori high camp country" },
        { src: g_rwenzori_3, alt: "Moments in the Rwenzori" },
        { src: g_rwenzori_4, alt: "Rwenzori Mountains National Park" },
      ]}
      highlights={[
        { title: "Africa's third-highest peak", desc: "Margherita Peak, 5,109m, reached via glacier travel and fixed ropes on the final approach." },
        { title: "Five vegetation zones", desc: "Montane forest, bamboo, heather-giant lobelia moorland, alpine and glacial zones in a single trek." },
        { title: "Foothill day hikes", desc: "Waterfalls, hot springs and viewpoints reachable without any technical climbing or multi-day commitment." },
        { title: "Genuinely uncrowded", desc: "A fraction of the visitor numbers of Kilimanjaro or Mount Kenya, on comparably dramatic terrain." },
        { title: "UNESCO World Heritage status", desc: "Recognised for its unique afro-alpine ecosystems and glaciated peaks." },
        { title: "Local Bakonzo guides and porters", desc: "Every trek supports the mountain communities whose knowledge makes the route possible." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Fort Portal → Rwenzori foothills", desc: "Arrive at the trailhead region, meet your guides and porters, and settle in ahead of tomorrow's ascent into the forest zone." },
        { day: "Day 02–03", title: "Into the mountains", desc: "Trek up through montane forest and bamboo into the heather zone, climbing steadily through the range's distinct vegetation bands." },
        { day: "Day 04+", title: "Summit push or turnaround", desc: "Full expeditions continue toward Margherita's glacier and summit; shorter itineraries turn back from a high viewpoint for a lighter, equally scenic trek." },
      ]}
      bestTime="June–August and December–February bring the clearest, driest conditions for both summit attempts and shorter day hikes. Expect rain and mud in any season — this is one of the wettest ranges in Africa."
      gettingThere="Fly into Entebbe International Airport, then drive roughly 5–6 hours west to the Kasese or Kilembe trailheads, or connect via a short domestic flight to Kasese airstrip followed by a short transfer."
      related={[
        { name: "Chimpanzee Trekking, Kibale", to: "/destinations/kibale-forest", img: expChimp },
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
