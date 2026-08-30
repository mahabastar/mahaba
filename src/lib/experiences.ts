import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import elephantSavanna from "@/assets/elephant-savanna.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";

export type Experience = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  heroImg: string;
  intro: string;
  sections: { title: string; body: string }[];
  highlights: { title: string; desc: string }[];
  comparison?: {
    labelA: string;
    labelB: string;
    rows: { label: string; a: string; b: string }[];
  };
  destinations: { name: string; to: string }[];
  journey?: { name: string; slug: string };
  faqs: { q: string; a: string }[];
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "gorilla-vs-chimp-trekking",
    title: "Gorilla Trekking vs Chimp Trekking",
    tagline: "Two forests, two very different encounters — and no reason you can't do both.",
    excerpt:
      "How mountain gorilla trekking and chimpanzee trekking actually compare — cost, difficulty, age limits, and which one to choose first.",
    heroImg: heroGorilla,
    intro:
      "Both are life-list wildlife encounters. Both happen in Uganda's forests, on foot, with a permit and a ranger guide. But a gorilla trek and a chimp trek are genuinely different experiences — different pace, different cost, different feeling — and most first-time visitors ask us which one to choose. Here's the honest comparison.",
    comparison: {
      labelA: "Mountain Gorillas",
      labelB: "Chimpanzees",
      rows: [
        {
          label: "Where",
          a: "Bwindi or Mgahinga",
          b: "Kibale, or Kyambura Gorge",
        },
        {
          label: "Permit cost (2026)",
          a: "USD 800 (USD 600 low season)",
          b: "USD 250 (Kibale)",
        },
        {
          label: "Minimum age",
          a: "15 years, strictly enforced",
          b: "Around 12 years",
        },
        {
          label: "Time with them",
          a: "1 hour",
          b: "1 hour (full day for habituation)",
        },
        {
          label: "Trek difficulty",
          a: "Moderate to strenuous",
          b: "Easy to moderate",
        },
        {
          label: "The encounter",
          a: "Calm, still, often at ground level",
          b: "Energetic, noisy, moves through the canopy",
        },
        {
          label: "Group size",
          a: "Max 8 people per family",
          b: "Slightly larger groups permitted",
        },
      ],
    },
    sections: [
      {
        title: "The case for gorillas",
        body:
          "There's a stillness to a gorilla encounter that's hard to describe until you've had it. Families rest, forage and groom at a slow, deliberate pace, and an hour spent quietly nearby feels less like wildlife-watching and more like being tolerated by something that could flatten you and has simply decided not to. It's the higher price and the harder trek — and almost everyone who's done it says it was worth every dollar.",
      },
      {
        title: "The case for chimps",
        body:
          "Chimps are faster, louder, and considerably more mischievous — expect canopy chases, dominance displays, and the occasional branch dropped deliberately on the group below. It's a shorter, more affordable trek with an easier minimum age, and it's genuinely thrilling in a completely different register: less reverence, more chaos.",
      },
      {
        title: "Why not both",
        body:
          "The two experiences don't compete for the same days on an itinerary — Bwindi and Kibale sit close enough together that most travellers do both on a single trip, sometimes on consecutive days. If you only have time or budget for one, gorillas are the once-in-a-lifetime splurge; chimps are the easier, still-extraordinary add-on.",
      },
    ],
    highlights: [
      {
        title: "Different forests, close together",
        desc:
          "Bwindi and Kibale sit within a comfortable drive or short flight of each other.",
      },
      {
        title: "Different budgets",
        desc: "A chimp permit costs roughly a third of a gorilla permit.",
      },
      {
        title: "Different physical demands",
        desc:
          "Chimp trekking suits a wider range of fitness levels and a lower minimum age.",
      },
      {
        title: "Different energy entirely",
        desc:
          "One is reverent and still; the other is fast, loud, and full of drama.",
      },
    ],
    destinations: [
      {
        name: "Gorilla Trekking, Bwindi",
        to: "/destinations/gorilla-trekking",
      },
      {
        name: "Chimpanzee Trekking",
        to: "/destinations/chimpanzee-trekking",
      },
    ],
    journey: {
      name: "Primates Adventure",
      slug: "primates-adventure",
    },
    faqs: [
      {
        q: "Can I really do both on one trip?",
        a:
          "Yes — it's one of our most-booked combinations. Bwindi and Kibale are close enough to combine comfortably in a single itinerary, and our Primates Adventure journey is built around exactly this.",
      },
      {
        q: "Which has a higher success rate of finding the animals?",
        a:
          "Both are very high — trackers monitor habituated families and communities daily. Gorilla trekking success rates are typically slightly higher, since gorilla groups move less than chimp communities.",
      },
      {
        q: "Is the chimp trek less physically demanding?",
        a:
          "Generally yes, though it depends on the day — chimps move faster and further than gorillas, so a chimp trek can occasionally be more physically demanding despite the shorter official time limit.",
      },
      {
        q: "Do I need separate permits?",
        a:
          "Yes, gorilla and chimp permits are issued separately by the Uganda Wildlife Authority, and we arrange both as part of your itinerary.",
      },
    ],
  },

  {
    slug: "family-safaris",
    title: "Family Safaris",
    tagline:
      "Uganda works for families — just not in exactly the way you'd plan a gorilla-only trip.",
    excerpt:
      "Age limits, kid-friendly activities, and how to build a Uganda safari that works for the whole family.",
    heroImg: sceneCulture,
    intro:
      "The honest starting point: mountain gorilla trekking has a strict minimum age of 15, with no exceptions in Rwanda and only a rare case-by-case exception in Uganda for a mature 14-year-old. That rules gorillas out for most families with younger children — but it doesn't rule out Uganda. There's a genuinely excellent family safari here once you build around that constraint instead of against it.",
    sections: [
      {
        title: "The age question, answered honestly",
        body:
          "Gorilla trekking: 15+, strictly enforced, for the gorillas' health as much as your child's safety. Chimp trekking is more flexible — Kibale and Kyambura Gorge generally welcome trekkers from around 12. Ngamba Island's chimpanzee sanctuary near Entebbe is the one primate experience in Uganda with no minimum age at all, making it a genuine highlight for younger children.",
      },
      {
        title: "What works brilliantly for younger kids",
        body:
          "Murchison Falls combines game drives and a Nile boat cruise — both easy, engaging, and require no hiking. Lake Bunyonyi offers canoeing and swimming (it's one of the few bilharzia-free lakes in the region) at an unhurried pace. Entebbe's Ngamba Island and Botanical Gardens make for an easy, low-stakes first or last day.",
      },
      {
        title: "The practical side of family travel",
        body:
          "We build family itineraries around private vehicles and guides rather than shared group transport, so pacing stays flexible — nobody's rushed through breakfast because a group needs to leave. Many lodges offer family rooms or interconnected units, and most itineraries deliberately mix active mornings with slow, unstructured afternoons.",
      },
    ],
    highlights: [
      {
        title: "Ngamba Island, no age limit",
        desc:
          "The only chimpanzee encounter in Uganda open to children under 12.",
      },
      {
        title: "Murchison Falls game drives & cruise",
        desc:
          "No hiking required — ideal for younger children and a near-guaranteed wildlife payoff.",
      },
      {
        title: "Lake Bunyonyi canoeing",
        desc:
          "One of the few swimmable lakes in the region, at an easy, unhurried pace.",
      },
      {
        title: "Chimp trekking from age 12",
        desc:
          "A genuine primate encounter for families with older children not yet 15.",
      },
      {
        title: "Private vehicles as standard",
        desc:
          "Flexible pacing, no group schedule to keep up with.",
      },
      {
        title: "Gorilla trekking for the 15+ in the family",
        desc:
          "Older teens and adults can still trek while younger siblings enjoy Murchison or Bunyonyi.",
      },
    ],
    destinations: [
      {
        name: "Murchison Falls",
        to: "/destinations/murchison-falls",
      },
      {
        name: "Lake Bunyonyi",
        to: "/destinations/lake-bunyonyi",
      },
      {
        name: "Entebbe",
        to: "/destinations/entebbe",
      },
      {
        name: "Chimpanzee Trekking",
        to: "/destinations/chimpanzee-trekking",
      },
    ],
    faqs: [
      {
        q: "Can my whole family go gorilla trekking?",
        a:
          "Only family members aged 15 and over. Uganda allows a rare case-by-case exception for a mature 14-year-old approaching their 15th birthday, decided directly by the Uganda Wildlife Authority — but this isn't guaranteed and requires advance paperwork.",
      },
      {
        q: "What's the minimum age for chimp trekking?",
        a:
          "Generally around 12, though this varies by location — we'll confirm current rules for the specific forest when we plan your trip.",
      },
      {
        q: "Is there anything for children under 12?",
        a:
          "Yes — Ngamba Island's chimpanzee sanctuary near Entebbe has no minimum age, and Murchison Falls' game drives and boat cruise require no hiking or age restriction.",
      },
      {
        q: "Do you arrange split itineraries — some family members trekking, others not?",
        a:
          "Regularly. A common pattern is older family members gorilla trekking while younger children and a second guide spend the morning at the lodge or on a gentler nearby activity.",
      },
    ],
  },

  {
    slug: "honeymoon-safaris",
    title: "Honeymoon Safaris",
    tagline:
      "A shared wilderness, at a pace set entirely by the two of you.",
    excerpt:
      "Private guides, romantic lodges, and a gorilla encounter you'll both remember for the rest of your lives — Uganda for honeymooners.",
    heroImg: ctaSunset,
    intro:
      "A honeymoon safari isn't a scaled-down version of a normal trip — it runs on its own logic. Private vehicles instead of shared group transport. Lodges chosen for their privacy as much as their views. And, for many couples, a single shared moment — standing together a few metres from a wild mountain gorilla family — that becomes the story you tell for the next fifty years.",
    sections: [
      {
        title: "Private, by default",
        body:
          "Every honeymoon itinerary we build uses a private vehicle and guide rather than a shared group vehicle — no waiting on other travellers' schedules, no negotiating a shared itinerary. It costs more than a group safari; it also means the whole trip moves at exactly the pace the two of you want.",
      },
      {
        title: "Where to go",
        body:
          "Bwindi's gorilla trekking gives most couples their single most-talked-about shared memory. Lake Bunyonyi is the natural counterweight — no game drives, no early alarms, just a private canoe, a terraced hillside, and long evenings with nothing scheduled. Jinja's Nile-side lodges add a genuinely thrilling day of white water for couples who want at least one adrenaline memory alongside the romance.",
      },
      {
        title: "The details that make it feel considered",
        body:
          "Sundowner decks over the savanna,
