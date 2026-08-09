import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import elephantSavanna from "@/assets/elephant-savanna.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import familySafariAsset from "@/assets/experiences/familysafari.jpg.asset.json";
import honeymoonSafariAsset from "@/assets/experiences/honeymoonsafari.jpg.asset.json";
import flyInSafariAsset from "@/assets/experiences/flyinsafaro.jpg.asset.json";
import walkingSafariAsset from "@/assets/experiences/walkingsafari.jpg.asset.json";
import selfDriveAsset from "@/assets/experiences/selfdrivesafari.jpg.asset.json";

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
    excerpt: "How mountain gorilla trekking and chimpanzee trekking actually compare — cost, difficulty, age limits, and which one to choose first.",
    heroImg: heroGorilla,
    intro:
      "Both are life-list wildlife encounters. Both happen in Uganda's forests, on foot, with a permit and a ranger guide. But a gorilla trek and a chimp trek are genuinely different experiences — different pace, different cost, different feeling — and most first-time visitors ask us which one to choose. Here's the honest comparison.",
    comparison: {
      labelA: "Mountain Gorillas",
      labelB: "Chimpanzees",
      rows: [
        { label: "Where", a: "Bwindi or Mgahinga", b: "Kibale, or Kyambura Gorge" },
        { label: "Permit cost (2026)", a: "USD 800 (USD 600 low season)", b: "USD 250 (Kibale)" },
        { label: "Minimum age", a: "15 years, strictly enforced", b: "Around 12 years" },
        { label: "Time with them", a: "1 hour", b: "1 hour (full day for habituation)" },
        { label: "Trek difficulty", a: "Moderate to strenuous", b: "Easy to moderate" },
        { label: "The encounter", a: "Calm, still, often at ground level", b: "Energetic, noisy, moves through the canopy" },
        { label: "Group size", a: "Max 8 people per family", b: "Slightly larger groups permitted" },
      ],
    },
    sections: [
      {
        title: "The case for gorillas",
        body: "There's a stillness to a gorilla encounter that's hard to describe until you've had it. Families rest, forage and groom at a slow, deliberate pace, and an hour spent quietly nearby feels less like wildlife-watching and more like being tolerated by something that could flatten you and has simply decided not to. It's the higher price and the harder trek — and almost everyone who's done it says it was worth every dollar.",
      },
      {
        title: "The case for chimps",
        body: "Chimps are faster, louder, and considerably more mischievous — expect canopy chases, dominance displays, and the occasional branch dropped deliberately on the group below. It's a shorter, more affordable trek with an easier minimum age, and it's genuinely thrilling in a completely different register: less reverence, more chaos.",
      },
      {
        title: "Why not both",
        body: "The two experiences don't compete for the same days on an itinerary — Bwindi and Kibale sit close enough together that most travellers do both on a single trip, sometimes on consecutive days. If you only have time or budget for one, gorillas are the once-in-a-lifetime splurge; chimps are the easier, still-extraordinary add-on.",
      },
    ],
    highlights: [
      { title: "Different forests, close together", desc: "Bwindi and Kibale sit within a comfortable drive or short flight of each other." },
      { title: "Different budgets", desc: "A chimp permit costs roughly a third of a gorilla permit." },
      { title: "Different physical demands", desc: "Chimp trekking suits a wider range of fitness levels and a lower minimum age." },
      { title: "Different energy entirely", desc: "One is reverent and still; the other is fast, loud, and full of drama." },
    ],
    destinations: [
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Chimpanzee Trekking", to: "/destinations/chimpanzee-trekking" },
    ],
    journey: { name: "Primates Adventure", slug: "primates-adventure" },
    faqs: [
      { q: "Can I really do both on one trip?", a: "Yes — it's one of our most-booked combinations. Bwindi and Kibale are close enough to combine comfortably in a single itinerary, and our Primates Adventure journey is built around exactly this." },
      { q: "Which has a higher success rate of finding the animals?", a: "Both are very high — trackers monitor habituated families and communities daily. Gorilla trekking success rates are typically slightly higher, since gorilla groups move less than chimp communities." },
      { q: "Is the chimp trek less physically demanding?", a: "Generally yes, though it depends on the day — chimps move faster and further than gorillas, so a chimp trek can occasionally be more physically demanding despite the shorter official time limit." },
      { q: "Do I need separate permits?", a: "Yes, gorilla and chimp permits are issued separately by the Uganda Wildlife Authority, and we arrange both as part of your itinerary." },
    ],
  },
  {
    slug: "family-safaris",
    title: "Family Safaris",
    tagline: "Uganda works for families — just not in exactly the way you'd plan a gorilla-only trip.",
    excerpt: "Age limits, kid-friendly activities, and how to build a Uganda safari that works for the whole family.",
    heroImg: familySafariAsset.url,
    intro:
      "The honest starting point: mountain gorilla trekking has a strict minimum age of 15, with no exceptions in Rwanda and only a rare case-by-case exception in Uganda for a mature 14-year-old. That rules gorillas out for most families with younger children — but it doesn't rule out Uganda. There's a genuinely excellent family safari here once you build around that constraint instead of against it.",
    sections: [
      {
        title: "The age question, answered honestly",
        body: "Gorilla trekking: 15+, strictly enforced, for the gorillas' health as much as your child's safety. Chimp trekking is more flexible — Kibale and Kyambura Gorge generally welcome trekkers from around 12. Ngamba Island's chimpanzee sanctuary near Entebbe is the one primate experience in Uganda with no minimum age at all, making it a genuine highlight for younger children.",
      },
      {
        title: "What works brilliantly for younger kids",
        body: "Murchison Falls combines game drives and a Nile boat cruise — both easy, engaging, and require no hiking. Lake Bunyonyi offers canoeing and swimming (it's one of the few bilharzia-free lakes in the region) at an unhurried pace. Entebbe's Ngamba Island and Botanical Gardens make for an easy, low-stakes first or last day.",
      },
      {
        title: "The practical side of family travel",
        body: "We build family itineraries around private vehicles and guides rather than shared group transport, so pacing stays flexible — nobody's rushed through breakfast because a group needs to leave. Many lodges offer family rooms or interconnected units, and most itineraries deliberately mix active mornings with slow, unstructured afternoons.",
      },
    ],
    highlights: [
      { title: "Ngamba Island, no age limit", desc: "The only chimpanzee encounter in Uganda open to children under 12." },
      { title: "Murchison Falls game drives & cruise", desc: "No hiking required — ideal for younger children and a near-guaranteed wildlife payoff." },
      { title: "Lake Bunyonyi canoeing", desc: "One of the few swimmable lakes in the region, at an easy, unhurried pace." },
      { title: "Chimp trekking from age 12", desc: "A genuine primate encounter for families with older children not yet 15." },
      { title: "Private vehicles as standard", desc: "Flexible pacing, no group schedule to keep up with." },
      { title: "Gorilla trekking for the 15+ in the family", desc: "Older teens and adults can still trek while younger siblings enjoy Murchison or Bunyonyi." },
    ],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
      { name: "Entebbe", to: "/destinations/entebbe" },
      { name: "Chimpanzee Trekking", to: "/destinations/chimpanzee-trekking" },
    ],
    faqs: [
      { q: "Can my whole family go gorilla trekking?", a: "Only family members aged 15 and over. Uganda allows a rare case-by-case exception for a mature 14-year-old approaching their 15th birthday, decided directly by the Uganda Wildlife Authority — but this isn't guaranteed and requires advance paperwork." },
      { q: "What's the minimum age for chimp trekking?", a: "Generally around 12, though this varies by location — we'll confirm current rules for the specific forest when we plan your trip." },
      { q: "Is there anything for children under 12?", a: "Yes — Ngamba Island's chimpanzee sanctuary near Entebbe has no minimum age, and Murchison Falls' game drives and boat cruise require no hiking or age restriction." },
      { q: "Do you arrange split itineraries — some family members trekking, others not?", a: "Regularly. A common pattern is older family members gorilla trekking while younger children and a second guide spend the morning at the lodge or on a gentler nearby activity." },
    ],
  },
  {
    slug: "honeymoon-safaris",
    title: "Honeymoon Safaris",
    tagline: "A shared wilderness, at a pace set entirely by the two of you.",
    excerpt: "Private guides, romantic lodges, and a gorilla encounter you'll both remember for the rest of your lives — Uganda for honeymooners.",
    heroImg: honeymoonSafariAsset.url,
    intro:
      "A honeymoon safari isn't a scaled-down version of a normal trip — it runs on its own logic. Private vehicles instead of shared group transport. Lodges chosen for their privacy as much as their views. And, for many couples, a single shared moment — standing together a few metres from a wild mountain gorilla family — that becomes the story you tell for the next fifty years.",
    sections: [
      {
        title: "Private, by default",
        body: "Every honeymoon itinerary we build uses a private vehicle and guide rather than a shared group vehicle — no waiting on other travellers' schedules, no negotiating a shared itinerary. It costs more than a group safari; it also means the whole trip moves at exactly the pace the two of you want.",
      },
      {
        title: "Where to go",
        body: "Bwindi's gorilla trekking gives most couples their single most-talked-about shared memory. Lake Bunyonyi is the natural counterweight — no game drives, no early alarms, just a private canoe, a terraced hillside, and long evenings with nothing scheduled. Jinja's Nile-side lodges add a genuinely thrilling day of white water for couples who want at least one adrenaline memory alongside the romance.",
      },
      {
        title: "The details that make it feel considered",
        body: "Sundowner decks over the savanna, private dinners arranged apart from the main lodge dining area, honeymoon-suite upgrades at partner lodges — none of this is complicated to arrange, but it does need arranging in advance, which is exactly what we do.",
      },
    ],
    highlights: [
      { title: "Private vehicle & guide throughout", desc: "No shared group schedule — the trip moves at your pace." },
      { title: "A shared bucket-list moment", desc: "Gorilla trekking together in Bwindi, a memory built for two." },
      { title: "Lake Bunyonyi for total quiet", desc: "No game drives, no alarms — just water, hills, and time." },
      { title: "An adrenaline day if you want one", desc: "Jinja's white water rafting adds contrast to a slower itinerary." },
      { title: "Honeymoon lodge upgrades", desc: "Private decks, romantic dining and suite upgrades arranged with partner lodges." },
      { title: "Flexible pacing", desc: "Sleep in, linger over breakfast — nothing here runs on a group clock." },
    ],
    destinations: [
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
      { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile" },
    ],
    journey: { name: "Gorilla Escape", slug: "gorilla-escape" },
    faqs: [
      { q: "Is a private vehicle really necessary?", a: "Not strictly, but almost every honeymooning couple tells us afterward it was worth it — no shared schedule, no compromise on pace, and a noticeably more intimate feel to the whole trip." },
      { q: "How long should a honeymoon safari be?", a: "Our Gorilla Escape (3 days) works well as an add-on to a longer trip elsewhere in Africa; the 7-day Pearl of Africa route gives a fuller honeymoon in its own right." },
      { q: "Can you arrange surprises — proposals, anniversaries, celebrations?", a: "Yes, regularly — let us know what you have in mind and we'll work it into the itinerary with the lodges directly." },
      { q: "Is gorilla trekking too strenuous for a relaxed honeymoon?", a: "It's a moderate-to-strenuous hike, but most couples find the encounter itself more than worth the effort — and we always pair it with slower days either side." },
    ],
  },
  {
    slug: "adventure-safaris",
    title: "Adventure Safaris",
    tagline: "For travellers who want their pulse up, not just their camera out.",
    excerpt: "White water rafting, mountain trekking, and hot air balloons — Uganda's adventure activities, and how to combine them into one trip.",
    heroImg: nileBridgeAerial,
    intro:
      "Uganda rewards travellers who want to move, not just look. This is a country with Grade 5 white water, a genuine high-altitude mountain expedition, and enough physically demanding trekking that 'safari' starts to feel like the wrong word for parts of it. Here's how the adventure side of Uganda fits together.",
    sections: [
      {
        title: "On the water",
        body: "Jinja delivers roughly 20 kilometres of Grade 3 to Grade 5 white water on the Nile, rideable year-round thanks to Lake Victoria's steady outflow, plus a 44-metre bungee jump directly over the river for anyone who wants to add a second adrenaline hit to the same day.",
      },
      {
        title: "On foot",
        body: "The Rwenzori Mountains offer Uganda's only genuine high-altitude expedition — a 7 to 9 day trek to Margherita Peak, Africa's third-highest summit, across glaciers within sight of the equator. Gorilla and chimp trekking, while shorter, are physical undertakings in their own right — steep, muddy, and occasionally several hours long.",
      },
      {
        title: "In the air",
        body: "A dawn hot air balloon over Murchison Falls' savanna adds a completely different vantage point to a trip otherwise spent at ground level — elephant herds and the Nile's gorge seen from above, engines silent, in the coolest part of the day.",
      },
    ],
    highlights: [
      { title: "Grade 3–5 white water rafting", desc: "Roughly 20km of Nile rapids at Jinja, rideable year-round." },
      { title: "44-metre Nile bungee", desc: "A second adrenaline hit on the same day as rafting, if you want it." },
      { title: "Margherita Peak expedition", desc: "A 7–9 day glacier trek to Africa's third-highest summit." },
      { title: "Physically demanding primate treks", desc: "Gorilla and chimp trekking both involve genuine, sometimes strenuous hiking." },
      { title: "Dawn hot air balloon safari", desc: "A silent, aerial view of Murchison Falls' savanna and the Nile gorge." },
      { title: "Combine two or three in one trip", desc: "Jinja, the Rwenzori and a primate trek sit within a comfortable circuit of each other." },
    ],
    destinations: [
      { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile" },
      { name: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains" },
      { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
    ],
    journey: { name: "Ultimate Uganda", slug: "ultimate-uganda" },
    faqs: [
      { q: "How fit do I need to be?", a: "It depends which activities you choose — white water rafting requires no particular fitness beyond basic swimming ability, while a Margherita Peak summit attempt demands genuine multi-day trekking fitness. We'll help match activities to your fitness level." },
      { q: "Can I raft the Nile and go gorilla trekking on the same trip?", a: "Yes — this is one of our most popular adventure combinations, and Jinja works well as a first or last stop given its short distance from Kampala and Entebbe." },
      { q: "Is a Rwenzori summit attempt necessary, or can I still get the experience without it?", a: "Shorter, lower-altitude day hikes into the Rwenzori foothills offer genuine mountain scenery — waterfalls, forest, hot springs — without any technical climbing or multi-day commitment." },
      { q: "Is white water rafting safe?", a: "Jinja's operators run to international safety standards with safety kayakers on every trip. No prior rafting experience is required." },
    ],
  },
  {
    slug: "wildlife-safaris",
    title: "Wildlife Safaris",
    tagline: "Classic game drives across Uganda's savanna parks.",
    excerpt: "Big game, open plains, and the parks that deliver Uganda's most reliable wildlife viewing.",
    heroImg: sceneElephants,
    intro:
      "Uganda's savanna parks don't get the same billing as gorillas and chimps, but they're where most of the country's big game actually lives — elephant, buffalo, lion, and the country's largest herds, spread across landscapes that shift from the Nile's floodplains to Kidepo's remote grassland.",
    sections: [
      {
        title: "Where the game concentrates",
        body: "Murchison Falls holds Uganda's biggest herds — elephant, giraffe and buffalo along the Nile's northern bank. Queen Elizabeth adds tree-climbing lions in Ishasha and the Kazinga Channel's dense hippo population. Kidepo, for those with more time, trades density for total isolation and a resident cheetah population found nowhere else in the country.",
      },
      {
        title: "Game drives, done properly",
        body: "Dawn and dusk drives catch the most activity, timed around when predators move and the heat drives everything else toward shade or water. Private vehicles mean you can linger on a sighting rather than move on for the next stop on someone else's schedule.",
      },
      {
        title: "Combined with water and on foot",
        body: "A vehicle isn't the only way to see wildlife here — the Kazinga Channel and the Nile at Murchison both offer boat-based game viewing, often closer than a road allows, while Lake Mburo adds walking and horseback safaris into the same trip.",
      },
    ],
    highlights: [
      { title: "Murchison Falls' big herds", desc: "Uganda's largest elephant, giraffe and buffalo populations." },
      { title: "Tree-climbing lions, Ishasha", desc: "One of only two places in Africa where lions regularly climb trees." },
      { title: "Kazinga Channel boat safari", desc: "The highest hippo concentration in Africa, alongside strong birding." },
      { title: "Kidepo's cheetah", desc: "Remote, uncrowded savanna with one of Uganda's only cheetah populations." },
      { title: "Dawn & dusk game drives", desc: "Timed to when wildlife is most active, in a private vehicle." },
      { title: "Walking & boat options", desc: "Lake Mburo and the Kazinga Channel add variety beyond the vehicle." },
    ],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      { name: "Kidepo Valley", to: "/destinations/kidepo-valley" },
      { name: "Lake Mburo", to: "/destinations/lake-mburo" },
    ],
    faqs: [
      { q: "Which park has the most wildlife?", a: "Murchison Falls has Uganda's largest herds by volume. Queen Elizabeth offers the widest variety in one park, including tree-climbing lions. Kidepo trades some density for total isolation and species found nowhere else, like cheetah." },
      { q: "Do I need multiple parks for a good wildlife safari?", a: "Not necessarily — Murchison Falls or Queen Elizabeth alone deliver a full big-game experience. Combining two adds variety, particularly if you want both tree-climbing lions and the Nile." },
      { q: "Are wildlife safaris combinable with gorilla trekking?", a: "Yes — this is one of the most common Uganda itineraries, typically pairing Queen Elizabeth or Murchison Falls with a few days in Bwindi or Mgahinga." },
    ],
  },
  {
    slug: "luxury-safaris",
    title: "Luxury Safaris",
    tagline: "Uganda's quieter, more private answer to East Africa's classic safari luxury.",
    excerpt: "Premium camps, private guides and fly-in transfers — a high-end Uganda safari without the crowds of neighbouring countries.",
    heroImg: expLodge,
    intro:
      "Uganda's luxury safari scene trades scale for intimacy — smaller, more personal camps rather than the sprawling lodges of Kenya or Tanzania, set inside landscapes that still feel genuinely undiscovered. It's a different kind of high-end travel: quieter, more private, and often considerably better value.",
    sections: [
      {
        title: "Fewer camps, lower density",
        body: "Uganda's national parks see a fraction of the visitor numbers of the Serengeti or Maasai Mara, so even premium lodges here sit in genuinely quiet landscapes — private conservancies and low-density permit systems rather than convoys of vehicles at a single sighting.",
      },
      {
        title: "What luxury actually means here",
        body: "Private guides for the full trip rather than shared game drives, fly-in transfers between regions instead of long road transfers, boutique lodges with a handful of rooms rather than large-scale properties, and gorilla permits arranged well ahead to secure the sectors and dates you want.",
      },
      {
        title: "Built around your pace",
        body: "A luxury Uganda itinerary is planned around you specifically — private vehicles, flexible timing, and the option to add a private gorilla habituation experience or a dedicated photography vehicle rather than following a fixed group schedule.",
      },
    ],
    highlights: [
      { title: "Private guiding throughout", desc: "One guide, one vehicle, for the full length of your trip." },
      { title: "Fly-in transfers", desc: "Scheduled light aircraft between regions instead of long road transfers." },
      { title: "Boutique, low-density camps", desc: "A handful of rooms rather than large-scale lodges, in genuinely quiet settings." },
      { title: "Priority gorilla permits", desc: "Advance booking for the sectors and dates that suit your itinerary." },
      { title: "Flexible, unhurried pacing", desc: "No fixed group schedule — the day moves at your pace." },
      { title: "Considerably better value than East Africa's classic circuits", desc: "Comparable luxury for a fraction of the visitor density." },
    ],
    destinations: [
      { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
    ],
    faqs: [
      { q: "How does Uganda's luxury safari scene compare to Kenya or Tanzania?", a: "Fewer, smaller camps, far lower visitor density even at premium properties, and generally better value for a comparable standard of accommodation and guiding." },
      { q: "Can I do a fully private gorilla trek?", a: "Standard permits place you in a group of up to eight with other trekkers. A private, extended alternative is the Gorilla Habituation Experience in Rushaga, which runs in smaller numbers for a longer encounter." },
      { q: "Is fly-in travel necessary for a luxury trip?", a: "It's optional but popular — it cuts multi-hour road transfers to under an hour between most regions, which matters if your trip is shorter or you're combining several parks." },
    ],
  },
  {
    slug: "birding",
    title: "Birding Safaris",
    tagline: "Over 1,000 species in one country — Africa's single best birding destination.",
    excerpt: "The shoebill stork, Albertine Rift endemics, and a bird list longer than almost anywhere else on the continent.",
    heroImg: expShoebill,
    intro:
      "Uganda holds over 1,000 recorded bird species in a country roughly the size of the United Kingdom — more than Kenya and Tanzania combined, packed into an unusually short list of accessible sites. For serious birders, it's not a side activity to a safari; it's the reason to come.",
    sections: [
      {
        title: "The shoebill, Uganda's headline bird",
        body: "Tall, prehistoric-looking and famously still, the shoebill stork draws birders specifically to Mabamba Swamp near Lake Victoria and the Nile delta at Murchison Falls, both reached by a quiet guided canoe or boat through papyrus wetland.",
      },
      {
        title: "Albertine Rift endemics",
        body: "Bwindi and the Rwenzori foothills hold species found nowhere else on Earth — part of the Albertine Rift's unusually high endemism, a draw for birders who've already covered East Africa's more common circuits.",
      },
      {
        title: "A different bird list in every region",
        body: "Semuliki's Congo-basin lowland forest holds species shared with Central Africa rather than East Africa; Queen Elizabeth's savanna and channel add raptors and water birds; Kidepo's dry savanna adds species found nowhere else in Uganda.",
      },
    ],
    highlights: [
      { title: "Shoebill stork at Mabamba Swamp", desc: "A quiet canoe trip near Lake Victoria for Uganda's most sought-after bird." },
      { title: "Over 1,000 recorded species", desc: "More than any other country in Africa, in a compact geographic area." },
      { title: "Albertine Rift endemics", desc: "Species found nowhere else on Earth, concentrated in Bwindi and the Rwenzori." },
      { title: "Semuliki's Congo-basin species", desc: "A bird list shared with Central Africa, unlike anywhere else in Uganda." },
      { title: "Kazinga Channel water birds", desc: "Pelicans, kingfishers and fish eagles alongside the channel's hippo population." },
      { title: "Specialist birding guides", desc: "Guides who work birding-specific pacing rather than a standard game-drive schedule." },
    ],
    destinations: [
      { name: "Semuliki", to: "/destinations/semuliki" },
      { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      { name: "Lake Mburo", to: "/destinations/lake-mburo" },
    ],
    faqs: [
      { q: "When is the best time for birding in Uganda?", a: "Birding is strong year-round, but November–April adds Palearctic migrants to the resident species, making it the peak season for the longest possible checklist." },
      { q: "Do I need a specialist guide?", a: "For a serious birding trip, yes — we pair birding itineraries with guides who specialise in bird identification and calls, rather than a standard safari guide." },
      { q: "Is the shoebill guaranteed?", a: "No wild sighting is ever guaranteed, but Mabamba Swamp and the Murchison Falls delta offer consistently good odds given local knowledge of current nesting and feeding areas." },
    ],
  },
  {
    slug: "photography-safaris",
    title: "Photography Safaris",
    tagline: "Guides and vehicles set up for the shot, not just the sighting.",
    excerpt: "Golden-hour game drives, photography-friendly vehicles, and Uganda's most photogenic landscapes.",
    heroImg: ctaSunset,
    intro:
      "A photography safari isn't just a regular game drive with a bigger lens — it means guides who understand light and positioning, timing built around dawn and dusk rather than meal schedules, and a route chosen for scenery as much as sightings.",
    sections: [
      {
        title: "Guiding built around the shot",
        body: "Photography-focused guides position vehicles for light and angle rather than the closest approach, hold sightings longer instead of moving on, and understand when to stay quiet and wait for behaviour rather than rushing the encounter.",
      },
      {
        title: "Uganda's most photogenic landscapes",
        body: "The Nile exploding through Murchison Falls' gorge, mist rising off Bwindi's ancient canopy, tree-climbing lions silhouetted in Ishasha's fig trees, and the Rwenzori's glaciers on the equator — Uganda's landscapes do a lot of the work before a single animal enters the frame.",
      },
      {
        title: "Gorilla and chimp photography",
        body: "Low light under dense forest canopy makes primate photography genuinely technical — we brief photographers in advance on lens choice and settings, and where permit rules allow, request positioning that favours a clean shot without disturbing the family.",
      },
    ],
    highlights: [
      { title: "Photography-briefed guides", desc: "Positioning for light and angle, not just proximity." },
      { title: "Dawn & dusk-timed drives", desc: "Built around golden hour, not standard meal or transfer schedules." },
      { title: "Extended time on sightings", desc: "No rush to move on once a scene is working." },
      { title: "Uganda's most dramatic landscapes", desc: "Murchison's gorge, Bwindi's mist, the Rwenzori's glaciers." },
      { title: "Low-light primate guidance", desc: "Lens and settings advice for Bwindi and Kibale's dense forest canopy." },
      { title: "Optional private vehicle", desc: "Full control over positioning without sharing a sighting with other guests." },
    ],
    destinations: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions" },
      { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
      { name: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains" },
    ],
    faqs: [
      { q: "Do I need a private vehicle for photography?", a: "It's strongly recommended — sharing a vehicle means compromising on positioning and timing to suit other guests' preferences." },
      { q: "Can I bring professional camera equipment on gorilla treks?", a: "Yes — most photographers bring a mid-range zoom rather than heavy telephoto gear, given the close range and dense, low-light forest conditions." },
      { q: "Is there a separate photography permit for gorillas?", a: "No separate permit is required for standard photography; flash is prohibited around gorillas to protect their eyes, so low-light technique matters more than equipment." },
    ],
  },
  {
    slug: "fly-in-safaris",
    title: "Fly-in Safaris",
    tagline: "Uganda's parks, connected by scheduled light aircraft instead of long road transfers.",
    excerpt: "Cut multi-hour drives to under an hour, and see Uganda's landscapes from the air along the way.",
    heroImg: flyInSafariAsset.url,
    intro:
      "Road transfers between Uganda's parks can run anywhere from five to eleven hours. A network of scheduled light-aircraft routes connects Entebbe to airstrips near almost every major park, cutting that to under an hour — with the Rift Valley, the Nile and the Rwenzori's peaks as the view along the way.",
    sections: [
      {
        title: "Where the airstrips are",
        body: "Kihihi and Kisoro serve Bwindi and Mgahinga; Pakuba serves Murchison Falls; Kasese and Mweya serve Queen Elizabeth, Kibale and the Rwenzori region; Apoka serves Kidepo Valley in the far north-east. Most routes connect through Entebbe.",
      },
      {
        title: "Who fly-in safaris suit best",
        body: "Travellers with limited time who still want to cover two or three parks, anyone combining a remote park like Kidepo that would otherwise mean an 8–11 hour drive, and those who'd simply rather spend an extra day on the ground than in a vehicle.",
      },
      {
        title: "What you trade for the time saved",
        body: "You lose the roadside scenery and small-town stops of a driving transfer, and light aircraft come with modest baggage limits — usually around 15kg in a soft-sided bag. For most itineraries, the time saved outweighs both.",
      },
    ],
    highlights: [
      { title: "Under an hour between most parks", desc: "Compared to 5–11 hours by road, depending on the route." },
      { title: "Kidepo made practical", desc: "Uganda's most remote park becomes a realistic add-on rather than a full-day commitment each way." },
      { title: "Aerial views included", desc: "The Rift Valley, the Nile and the Rwenzori's peaks, seen from the air en route." },
      { title: "More time on the ground", desc: "Extra time for activities instead of transfers, on a shorter trip." },
      { title: "Scheduled, not chartered", desc: "Regular scheduled flights keep costs well below a private charter." },
      { title: "Combine with road transfers", desc: "Fly one leg, drive another — itineraries mix and match by route." },
    ],
    destinations: [
      { name: "Kidepo Valley", to: "/destinations/kidepo-valley" },
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
    ],
    faqs: [
      { q: "How much does a fly-in safari add to the cost?", a: "More than a road transfer, but the difference narrows considerably on longer or more remote routes like Kidepo, where the time saved is substantial." },
      { q: "What's the baggage limit?", a: "Typically around 15kg per person in a soft-sided bag, given the size of the aircraft used on these routes." },
      { q: "Can I mix flying and driving on one trip?", a: "Yes — a common pattern is flying into a remote park like Kidepo and driving the more scenic, shorter legs elsewhere." },
    ],
  },
  {
    slug: "walking-safaris",
    title: "Walking Safaris",
    tagline: "Uganda, at the pace your own feet set.",
    excerpt: "From Lake Mburo's free-roaming plains game to guided forest treks and multi-day mountain hikes.",
    heroImg: walkingSafariAsset.url,
    intro:
      "Most of Uganda's parks restrict walking because of elephant and lion populations — but where it's allowed, it's an entirely different way to experience the country, from an easy morning walk among zebra to a multi-day trek across a volcanic caldera.",
    sections: [
      {
        title: "Lake Mburo, the exception",
        body: "Without elephants or lions, Lake Mburo is the one Ugandan park where guided walking and horseback safaris among zebra, impala and eland are simply routine, not a rare special activity.",
      },
      {
        title: "Forest walks and treks",
        body: "Guided nature walks thread through Bwindi and Kibale's lower trails for birding and smaller wildlife without a full trekking permit, while multi-day treks in the Rwenzori and Mount Elgon turn walking into the main event — several days of trail through changing vegetation zones.",
      },
      {
        title: "Community and cultural walks",
        body: "Batwa Trail walks near Bwindi and Mgahinga, and Karamojong village walks near Kidepo, extend walking safaris beyond wildlife into guided cultural encounters with the communities living alongside these parks.",
      },
    ],
    highlights: [
      { title: "Lake Mburo walking & horseback safaris", desc: "The only park where walking among plains game is routine." },
      { title: "Multi-day mountain treks", desc: "Rwenzori and Mount Elgon summit routes, several days of trail on foot." },
      { title: "Guided forest nature walks", desc: "Lower-impact walks through Bwindi and Kibale's edges, without a trekking permit." },
      { title: "Batwa Trail", desc: "A guided cultural walk retracing forest life with the region's original inhabitants." },
      { title: "Sipi Falls day walks", desc: "A gentler multi-waterfall walk on Mount Elgon's lower slopes." },
      { title: "Community & village walks", desc: "Karamojong and Batwa community encounters on foot, guided by local hosts." },
    ],
    destinations: [
      { name: "Lake Mburo", to: "/destinations/lake-mburo" },
      { name: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains" },
      { name: "Sipi Falls", to: "/destinations/sipi-falls" },
    ],
    faqs: [
      { q: "Is walking safe in Uganda's parks?", a: "Where it's officially permitted — Lake Mburo, guided forest trails, and mountain treks — yes, always with an armed ranger or experienced guide. Most parks restrict free walking specifically because of elephant and lion risk." },
      { q: "Do I need special fitness for a walking safari?", a: "A Lake Mburo walk or forest nature walk needs only basic fitness. A multi-day Rwenzori or Mount Elgon trek requires genuine hiking fitness given the duration and altitude gain." },
      { q: "Can I combine walking safaris with gorilla trekking?", a: "Yes — the Batwa Trail near Bwindi is a popular pairing, done either the day before or after a gorilla trek." },
    ],
  },
  {
    slug: "self-drive-tours",
    title: "Self-Drive Tours",
    tagline: "Your own 4x4, your own pace, across Uganda's main circuit.",
    excerpt: "Independent travel with a rented 4x4 — practical on Uganda's main routes, with the right preparation.",
    heroImg: selfDriveAsset.url,
    intro:
      "Uganda's main tourist circuit — Kampala, Lake Mburo, Bwindi, Queen Elizabeth, Kibale — runs on reasonably maintained roads that make self-driving genuinely practical, for travellers who want full independence and don't mind doing their own navigating and park logistics.",
    sections: [
      {
        title: "What self-driving actually looks like here",
        body: "A rented 4x4 (essential for park roads, even where the highway is tarmac), your own pace between stops, and full control over how long you linger anywhere. It suits travellers who've self-driven in Africa before, or who specifically want that independence over a guided trip.",
      },
      {
        title: "Where it works well, and where it doesn't",
        body: "The southern and western circuit — Lake Mburo to Bwindi to Queen Elizabeth to Kibale — is well suited to self-driving. Remote parks like Kidepo, with long stretches of poor road and no reliable fuel or mechanical support, are a much harder case for a first-time self-drive in Uganda.",
      },
      {
        title: "What we still handle for you",
        body: "Gorilla and chimp permits still need advance booking regardless of how you travel, and we pre-arrange those, plus lodge bookings and a route plan, while you handle the driving. A local SIM with data for navigation is worth arranging on arrival.",
      },
    ],
    highlights: [
      { title: "Full independence", desc: "Your own vehicle, your own schedule, no group or guide pace to match." },
      { title: "Well-suited southern circuit", desc: "Lake Mburo, Bwindi, Queen Elizabeth and Kibale on reasonably maintained roads." },
      { title: "4x4 rental arranged", desc: "A properly equipped vehicle for park roads, not just highway driving." },
      { title: "Permits still handled for you", desc: "Gorilla and chimp permits pre-booked regardless of how you're travelling." },
      { title: "Route planning included", desc: "A realistic day-by-day plan matched to road conditions and driving time." },
      { title: "Not recommended for every route", desc: "We'll advise honestly on which legs suit self-driving and which don't." },
    ],
    destinations: [
      { name: "Lake Mburo", to: "/destinations/lake-mburo" },
      { name: "Bwindi Impenetrable", to: "/destinations/bwindi-impenetrable" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      { name: "Kibale", to: "/destinations/kibale-forest" },
    ],
    faqs: [
      { q: "Is self-driving in Uganda safe?", a: "On the main southern and western circuit, yes, with normal travel precautions — reasonable roads, clear routes, and reliable fuel stops. We'll advise against self-driving specific remote legs where conditions don't suit it." },
      { q: "Do I need a 4x4?", a: "Yes — park roads are unpaved and can be rutted or muddy, particularly in the wet season, regardless of how good the highway is beforehand." },
      { q: "Can you still arrange gorilla permits if I'm self-driving?", a: "Yes — permits, lodge bookings and your route plan are arranged the same way regardless of whether you're driving yourself or being guided." },
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
