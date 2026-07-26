import heroGorilla from "@/assets/hero-gorilla.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";

export type Category = "Destinations" | "Culture" | "Conservation" | "Travel Advice";

export type JournalPost = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  img: string;
  readMins: number;
  destination?: { name: string; to: string };
  body: string[];
  pullQuote?: string;
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "the-silverbacks-silence",
    title: "The Silverback's Silence",
    category: "Destinations",
    excerpt:
      "An hour in Bwindi's undergrowth, at eye level with a family that has no reason to trust us, and every reason not to.",
    img: heroGorilla,
    readMins: 6,
    destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
    pullQuote: "He didn't look away. He simply decided we weren't worth the trouble.",
    body: [
      "The forest closes in about twenty minutes after the trailhead. By then the path has stopped being a path — it's a suggestion, cut fresh that morning by a tracker's machete through vines thick enough to hold a person's weight. Bwindi means 'impenetrable' in the local Rukiga dialect, and the name is not a marketing flourish. It is a warning, kindly given.",
      "Our guide raised a fist. Somewhere ahead, a branch cracked — not from wind, but from mass. Then the undergrowth simply parted, and there he was: a silverback, close enough that we could hear him breathing, close enough to see the grey dusting his shoulders like frost. He was enormous in the way that large animals are never quite enormous in photographs — the photographs lie by omission, leaving out the sound of him, the weight of him in the air.",
      "What surprised me wasn't his size. It was his indifference. He glanced at our group — eight strangers in muddy gaiters, cameras half-raised — and made a decision so quickly it barely registered as a decision at all. We were not a threat. We were barely a curiosity. He turned back to the stem of wild celery he'd been stripping with his fingers, and that was that.",
      "For the next hour we simply watched. A juvenile tumbled through the undergrowth in a game only it understood. A mother groomed an infant with the unhurried patience of someone who has nowhere else to be. Nobody spoke above a whisper; nobody needed to. There's a particular kind of silence that settles over a group of people who have all, simultaneously, realised they are the least important thing in the room.",
      "Then, as abruptly as it began, our hour was up. The trackers use GPS trip timers as strict as any airport gate. We backed away slowly, the way we'd been briefed to, and the forest swallowed the clearing behind us as though it had never been there. Nobody talked much on the walk back down. There wasn't much that needed saying.",
    ],
  },
  {
    slug: "a-morning-at-sipi-falls",
    title: "A Morning at Sipi Falls",
    category: "Destinations",
    excerpt:
      "Three waterfalls, one ridge, and the particular quiet of eastern Uganda before the heat of the day sets in.",
    img: expSipi,
    readMins: 4,
    destination: { name: "Sipi Falls", to: "/destinations/sipi-falls" },
    body: [
      "Sipi wakes up slowly. Mist sits in the coffee terraces below Mount Elgon until well past seven, and the three waterfalls that give the village its name are, for an hour or so, entirely private — no other hikers, no boda-bodas on the ridge road, just the low roar of falling water carrying up through the fog.",
      "The main falls drop 100 metres in a single unbroken column, and the trail to its base is steep enough to earn the coffee waiting at the top. Along the way, farmers are already out among the arabica bushes, picking the ripest red cherries by hand — Sipi's altitude and volcanic soil make it one of Uganda's most respected coffee-growing regions, though most of what's grown here leaves the country long before most drinkers ever hear the name.",
      "By mid-morning the ridge fills with a different kind of activity: local guides leading small groups between the three falls, a rope-assisted scramble behind the second cascade for anyone who doesn't mind getting wet, and the particular Ugandan hospitality of being invited, entirely unprompted, to sit and share a cup of coffee roasted an hour earlier over an open fire.",
      "There's no single 'main event' at Sipi the way there is with gorilla trekking or a Nile cruise — it's a slower kind of morning, built from small things done well. That, more than the waterfalls themselves, is usually what people remember.",
    ],
  },
  {
    slug: "coffee-from-bean-to-fire",
    title: "Coffee, from Bean to Fire",
    category: "Culture",
    excerpt:
      "Following a single handful of arabica cherries from a Sipi hillside to the cup — and the community that depends on it.",
    img: expCoffee,
    readMins: 5,
    destination: { name: "Sipi Falls", to: "/destinations/sipi-falls" },
    pullQuote: "Nothing here is automated. Every step still happens by hand, by eye, by taste.",
    body: [
      "Uganda has been growing coffee for longer than most drinkers assume — long enough that wild coffee forests still exist in parts of the west, predating the commercial plantations entirely. But it's the terraced slopes of Mount Elgon, around Sipi, where the arabica story is easiest to see start to finish, in a single morning, on foot.",
      "It starts with picking — only the ripest cherries, deep red, chosen by hand from bushes that a farming family may have tended for three generations. From there the cherries are pulped to remove the outer skin, fermented for a day or two to loosen the sticky mucilage beneath, washed, and laid out to dry on raised beds in the sun. Nothing here is automated. Every step still happens by hand, by eye, by taste.",
      "The last stage is the one visitors usually get to join: roasting over an open flame in a blackened pan, the beans stirred constantly to keep them from scorching, the smell turning from grassy to nutty to something close to chocolate in the space of about fifteen minutes. Ground with a wooden mortar, brewed in a battered kettle, it tastes noticeably different from anything that's travelled — brighter, a little wilder, closer to the fruit it started as.",
      "For the families who grow it, coffee is less a commodity than a savings account with roots — a crop that pays school fees and buys land, one harvest at a time. Buying a bag directly from a cooperative near Sipi, rather than a supermarket shelf back home, means a far larger share of that money actually stays on the mountain where it was grown.",
    ],
  },
  {
    slug: "chasing-the-shoebill",
    title: "Chasing the Shoebill",
    category: "Destinations",
    excerpt:
      "Why one of the world's strangest-looking birds is worth an early canoe launch into Murchison's papyrus swamps.",
    img: expShoebill,
    readMins: 4,
    destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" },
    body: [
      "There is no elegant way to describe a shoebill. It stands over a metre tall, grey and prehistoric, with a bill shaped — genuinely — like a Dutch clog, hooked at the tip into something between a beak and a weapon. Birders travel across continents for it. Everyone else usually needs the photo explained twice.",
      "Finding one means an early start: a narrow canoe, paddled rather than motored, threading through the papyrus swamp fringing the Nile's delta before the day's heat sends the birds into deeper cover. Shoebills hunt by standing motionlessly for hours at a stretch, waiting for a lungfish or baby crocodile to surface within striking distance, and that same stillness makes them maddeningly easy to paddle straight past.",
      "When you do find one, it rarely startles. Shoebills seem entirely unbothered by an approaching canoe, tracking it with a slow, faintly unimpressed swivel of the head that has earned them a reputation as one of the most photogenic — and least expressive — birds on the continent.",
      "Fewer than 1,300 mature shoebills are thought to remain across their entire range, most of them across the wetlands of the Nile basin and central Africa, which makes Murchison's population a genuinely significant one rather than a roadside curiosity. It's a quiet morning that tends to stay with people — not for drama, but for the strangeness of something so still.",
    ],
  },
  {
    slug: "ugandas-two-dry-seasons-explained",
    title: "Uganda's Two Dry Seasons, Explained",
    category: "Travel Advice",
    excerpt:
      "Unlike much of East Africa, Uganda has two wet seasons and two dry seasons a year. Here's what that actually means for planning a trip.",
    img: sceneRwenzori,
    readMins: 5,
    body: [
      "First-time visitors researching 'best time to visit Uganda' often get confused by conflicting answers, and the reason is simple: Uganda's straddling of the equator gives it two distinct dry seasons and two distinct wet seasons every year, rather than the single dry/wet split more familiar from southern or eastern African itineraries.",
      "The long dry season runs roughly June through August, and the short dry season from December through February — both bring firmer trails, easier gorilla trekking, and better game-drive visibility, which is why they're also the busiest and most expensive months to book. The long rains fall March through May, and the short rains September through November, both of which soften trails and thin out other travellers, sometimes considerably.",
      "What surprises people most is how liveable the 'wet' seasons actually are. Uganda's rain rarely settles in for the day — it's typically an intense afternoon shower followed by clear skies, rather than the grey, all-day drizzle some visitors picture. Gorilla trekking and most game drives continue through the rains with a bit more mud and a lot more room to yourself.",
      "The practical upshot: if flexibility and lower rates matter more than dry trails, April, May and November are worth serious consideration — several parks and gorilla permits even carry a discounted low-season rate during these months. If comfort and easier hiking conditions matter more, book the dry months early; they sell out months in advance.",
    ],
  },
  {
    slug: "inside-ugandas-community-conservation-model",
    title: "Inside Uganda's Community Conservation Model",
    category: "Conservation",
    excerpt:
      "How permit revenue, ranger jobs and revenue-sharing agreements turned neighbouring communities into some of the parks' fiercest protectors.",
    img: sceneCulture,
    readMins: 6,
    body: [
      "It's easy to think of a national park boundary as a simple line on a map — wildlife inside, people outside. In Uganda, that line has always been more porous, and more contested, than the postcards suggest. Families farmed land that later became protected forest. Elephants still raid crops just beyond park edges. Conservation here has never been just a wildlife question; it has always also been a neighbours question.",
      "The model that's evolved in response is built on a fairly direct principle: if a family living beside a national park earns more from the wildlife inside it staying alive than they would from poaching it, conservation and community interest start pointing the same direction. A share of park entrance and permit revenue — including a meaningful percentage of every gorilla permit sold — is legally required to flow back into the communities bordering the parks, funding schools, clinics, and roads.",
      "That revenue-sharing sits alongside direct employment: many rangers, trackers and guides working in and around Bwindi, Murchison and Queen Elizabeth today grew up in villages on the park boundary, and know the terrain — and the wildlife's habits — from a lifetime spent nearby, not from a training manual alone.",
      "It isn't a finished project. Human-wildlife conflict, particularly crop-raiding by elephants and baboons near park edges, remains a genuine source of tension, and revenue-sharing agreements only work when they're honoured consistently. But the shift over the past three decades — from conservation done to communities, toward conservation done with them — is a large part of why mountain gorilla numbers have actually grown even as human population pressure around the parks has intensified. It's imperfect, but it's working.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}

export const CATEGORIES: Category[] = ["Destinations", "Culture", "Conservation", "Travel Advice"];
