import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expBalloon from "@/assets/exp-balloon.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/weather")({
  head: () => ({
    meta: [
      { title: "Uganda Weather Guide — Climate by Region | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Uganda's climate explained by region — from the Rwenzori's glaciers to Kidepo's dry savanna heat — and how to dress for the swings between them.",
      },
      { property: "og:title", content: "Uganda Weather Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/weather` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/weather` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Climate & Conditions"
      title={<>Uganda's weather isn't one climate — <em className="italic text-gold">it's five</em>.</>}
      intro="Straddling the equator gives Uganda a reputation for consistent warmth, but altitude changes that story completely — the same week can mean glacier-cold mornings in the Rwenzori and 30°C savanna heat in Kidepo. For month-by-month planning, see the Seasonal Safari Calendar; this page covers what the weather actually feels like in each region."
      heroImage={expBalloon}
      heroAlt="Clear skies over Uganda's landscape"
      facts={[
        { label: "Climate type", value: "Equatorial" },
        { label: "Wet seasons", value: "Mar–May & Sep–Nov" },
        { label: "Dry seasons", value: "Jun–Sep & Dec–Feb" },
        { label: "National temp range", value: "15–29°C" },
      ]}
      sections={[
        {
          title: "Equatorial, but not uniform",
          body: "Uganda sits directly on the equator, which means day length barely changes year-round and there's no true winter or summer. What does change is rainfall — the country follows a two-wet, two-dry season pattern typical of equatorial East Africa, with March–May and September–November the wetter stretches, and June–September and December–February the drier ones. Altitude, far more than season, is what actually determines how warm or cold you'll feel.",
        },
        {
          title: "The Rwenzori and highland cold",
          body: "The Rwenzori Mountains hold genuine glaciers almost on the equator — temperatures at altitude can drop close to freezing overnight, a fact that surprises most first-time visitors to Africa. Bwindi and Mgahinga, at lower but still significant elevation, run noticeably cool and misty in the early morning, warming through the day; a proper layer for dawn gorilla treks is essential even in the dry season.",
        },
        {
          title: "Savanna heat in the north and west",
          body: "Murchison Falls, Queen Elizabeth and especially Kidepo Valley sit at lower elevation and run considerably hotter — daytime temperatures regularly reach the high 20s to low 30s°C, with Kidepo's semi-arid Karamoja region the driest and hottest corner of the country. Game drives here are timed around the cooler dawn and dusk hours as much for wildlife activity as for comfort.",
        },
        {
          title: "Lake Victoria basin and the centre",
          body: "Entebbe, Kampala and the Lake Victoria shoreline sit at a moderate elevation with a milder, more humid climate than either the highlands or the northern savanna — generally the most comfortable, predictable weather in the country, and a gentle place to start or end a trip.",
        },
      ]}
      faqs={[
        { q: "When is Uganda's rainy season?", a: "Uganda has two wet seasons — March to May (the longer, heavier one) and September to November (shorter and lighter) — separated by two drier stretches from June to September and December to February." },
        { q: "Does it rain all day during the wet season?", a: "Rarely — rain typically arrives as a heavy afternoon downpour lasting an hour or two, with clear mornings and evenings still common. Trekking and game drives continue through the wet season, just with muddier trails." },
        { q: "How cold does it get in the Rwenzori Mountains?", a: "At higher camps and near the glaciers, overnight temperatures can drop close to freezing — a genuine cold-weather kit is necessary for a multi-day Rwenzori trek, unlike almost anywhere else in Uganda." },
        { q: "What's the hottest part of Uganda?", a: "Kidepo Valley and the surrounding Karamoja region in the north-east, which is Uganda's driest and hottest corner, with daytime temperatures regularly exceeding 30°C." },
      ]}
      related={[
        { name: "Seasonal Safari Calendar", to: "/seasonal-safari-calendar" },
        { name: "Packing Guide", to: "/packing-guide" },
      ]}
    />
  ),
});
