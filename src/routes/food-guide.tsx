import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import sceneCulture from "@/assets/scene-culture.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/food-guide")({
  head: () => ({
    meta: [
      { title: "Ugandan Food Guide — What to Eat | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "What to eat in Uganda — matoke, Rolex street food, Luwombo, Lake Victoria tilapia, and how Uganda's food reflects its cultural mix.",
      },
      { property: "og:title", content: "Ugandan Food Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/food-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/food-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="Eating Your Way Through Uganda"
      title={<>Uganda's food, <em className="italic text-gold">explained</em>.</>}
      intro="Ugandan food doesn't get the international attention of some of its neighbours, but it's hearty, varied, and shaped by everything from Buganda tradition to British and Indian influence — and easy to eat well on safari."
      heroImage={sceneCulture}
      heroAlt="Ugandan food market and local ingredients"
      facts={[
        { label: "Staple", value: "Matoke (steamed banana)" },
        { label: "Street food icon", value: "The Rolex" },
        { label: "Best seafood", value: "Lake Victoria tilapia" },
        { label: "Vegetarian-friendly", value: "Yes, widely" },
      ]}
      sections={[
        {
          title: "The staples",
          body: "Most Ugandan meals build around a starchy base — matoke (steamed and mashed green banana, Uganda's most iconic staple), posho (a firm maize porridge similar to ugali), sweet potato, or cassava — paired with a sauce or stew of beans, groundnuts, or meat.",
          checklist: [
            "Matoke — steamed, mashed green banana, Uganda's defining staple",
            "Posho — a firm maize porridge, often served alongside matoke",
            "Sweet potato and cassava — common alternative starches",
            "Groundnut sauce (g-nut) — a rich, peanut-based stew served over any starch",
          ],
        },
        {
          title: "Signature dishes worth seeking out",
          body: "A handful of dishes are genuinely worth planning around rather than just encountering on a lodge buffet.",
          checklist: [
            "Luwombo — meat, fish or vegetables slow-steamed inside banana leaves, a Buganda royal-court dish",
            "Rolex — a fried egg and vegetable omelette rolled inside a chapati; Uganda's definitive street food",
            "Katogo — a filling breakfast dish of matoke stewed with beef or beans",
            "Grilled Lake Victoria tilapia — fresh, simply prepared, widely available near Jinja and Entebbe",
            "Muchomo — grilled skewered meat, common at roadside stops and evening markets",
          ],
        },
        {
          title: "Where and how to try it",
          body: "Kampala's street-food scene, especially the Rolex, is worth a stop in its own right — best eaten fresh from a roadside stand rather than a hotel version. Most safari lodges serve a blend of international and Ugandan dishes, so asking specifically for a local dish is usually welcomed rather than unusual. Fort Portal and the western highlands are also the place to combine a meal with a coffee farm visit.",
        },
        {
          title: "Vegetarian and dietary notes",
          body: "Uganda is genuinely easy for vegetarians — beans, groundnut sauce, and vegetable stews are everyday staples rather than a special accommodation. Let your lodge or guide know about specific allergies or restrictions in advance, particularly outside Kampala where menu flexibility can be more limited.",
        },
      ]}
      faqs={[
        { q: "Is street food like the Rolex safe to eat?", a: "Generally yes from a busy, popular stand where turnover is high and food is cooked fresh in front of you — the same common-sense rules that apply to street food anywhere." },
        { q: "Is Uganda good for vegetarians?", a: "Yes — beans, groundnut sauce and vegetable stews are everyday Ugandan staples, not a special request." },
        { q: "What's the difference between matoke and posho?", a: "Matoke is steamed and mashed green banana with a subtle, slightly savoury flavour; posho is a firmer maize porridge closer to polenta. Both are common starch bases and often served together." },
        { q: "Can I visit a local market?", a: "Yes — we can arrange a guided visit to a local market as part of your itinerary, a good way to see ingredients and daily life beyond the lodge circuit." },
      ]}
      related={[
        { name: "Coffee & Tea Guide", to: "/coffee-tea-guide" },
        { name: "Cultural Heritage", to: "/cultural-heritage" },
        { name: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile" },
      ]}
    />
  ),
});
