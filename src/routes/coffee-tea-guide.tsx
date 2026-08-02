import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expCoffee from "@/assets/exp-coffee.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/coffee-tea-guide")({
  head: () => ({
    meta: [
      { title: "Uganda Coffee & Tea Guide — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Uganda is where Robusta coffee originates — farm visits on Mount Elgon and around Fort Portal, plus the tea estates of the western highlands.",
      },
      { property: "og:title", content: "Uganda Coffee & Tea Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/coffee-tea-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/coffee-tea-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Coffee & Tea Country"
      title={<>The plant that started here, <em className="italic text-gold">grown all over again</em>.</>}
      intro="Robusta coffee is native to Uganda's forests — not just grown here, but originally from here, with a cultural role that predates export coffee entirely. Add the greener, quieter tea estates of the west, and Uganda's coffee and tea story is worth a stop in its own right."
      heroImage={expCoffee}
      heroAlt="Coffee terraces in Uganda's western highlands"
      facts={[
        { label: "Robusta coffee", value: "Native to Uganda" },
        { label: "Arabica region", value: "Mount Elgon & Rwenzori slopes" },
        { label: "Tea country", value: "Fort Portal, Kanungu highlands" },
        { label: "Best paired with", value: "The Crater Lakes" },
      ]}
      sections={[
        {
          title: "Uganda's coffee is a native story, not just an export crop",
          body: "Robusta coffee grows wild in Uganda's forests and has done for centuries, long before it became a global export commodity. In traditional Buganda culture, coffee beans — chewed rather than brewed — played a ceremonial role in friendship and oath-taking rituals, a use that predates the coffee industry entirely and sets Uganda apart from origin stories built purely around Arabica and export farming.",
        },
        {
          title: "Where the two coffee types are grown",
          body: "Robusta thrives at lower altitude across central and western Uganda, while the country's Arabica is grown at higher elevation on volcanic soil — chiefly on Mount Elgon's slopes around Sipi Falls (Bugisu Arabica) and in the Rwenzori foothills.",
          checklist: [
            "Sipi Falls, Mount Elgon — Bugisu Arabica, with farm and washing-station visits",
            "Fort Portal & the crater lakes — mixed smallholder coffee gardens amid the tea",
            "Rwenzori foothills — high-altitude Arabica on volcanic soil",
          ],
        },
        {
          title: "Tea country in the west",
          body: "Uganda's tea estates cluster in the cooler, wetter western highlands around Fort Portal and Kanungu — rolling, brilliant-green plantations that make for some of the country's most photogenic drives, often glimpsed en route between Kibale and Bwindi rather than visited as a standalone stop.",
        },
        {
          title: "Farm visits, tastings and buying direct",
          body: "Most coffee farm visits include a walk through the gardens, a demonstration of the full process from cherry to cup, and a tasting — usually arranged directly with small cooperatives, so a meaningfully larger share of what you pay reaches the farmers than a supermarket bag ever would.",
        },
      ]}
      faqs={[
        { q: "Can I visit a working coffee farm?", a: "Yes — Sipi Falls on Mount Elgon and the Fort Portal crater lakes area both offer guided farm and washing-station visits, usually combined with a tasting." },
        { q: "What's the difference between Uganda's Robusta and Arabica?", a: "Robusta is native to Uganda's lower-altitude forests and has deep cultural roots; Arabica is grown at higher elevation on volcanic soil, chiefly around Mount Elgon and the Rwenzori foothills, and tends toward a milder flavour profile." },
        { q: "Can I buy coffee to take home?", a: "Yes — most farm visits and cooperatives sell roasted or green beans directly, and it's one of the most genuine souvenirs available." },
        { q: "Is a coffee tour worth adding to a wildlife-focused itinerary?", a: "It pairs naturally with Kibale or the crater lakes near Fort Portal, since you're passing directly through coffee country either way." },
      ]}
      related={[
        { name: "The Crater Lakes", to: "/destinations/crater-lakes" },
        { name: "Mount Elgon", to: "/destinations/mount-elgon" },
        { name: "Sipi Falls", to: "/destinations/sipi-falls" },
      ]}
    />
  ),
});
