import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { RIVERS } from "@/lib/rivers";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/rivers")({
  head: () => ({
    meta: [
      { title: "Uganda's Rivers — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "The Nile at its source and at Murchison Falls, the Kazinga Channel, and the Semliki River — Uganda's defining waterways.",
      },
      { property: "og:title", content: "Uganda's Rivers — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/rivers` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/rivers` }],
  }),
  component: () => (
    <CategoryHub
      eyebrow="The Nile & Beyond"
      title={<>One river, <em className="italic text-gold">four completely different faces</em>.</>}
      intro="The Nile begins gently in Jinja and ends violently through a 7-metre gorge at Murchison Falls — and it's just one of the waterways that define how Uganda's parks connect to each other."
      heroImage={nileBridgeAerial}
      heroAlt="Aerial view of the Nile River in Uganda"
      items={RIVERS}
      ctaTitle="Rafting, cruising, or just watching the water go by?"
      ctaBody="Whether it's white-water rafting in Jinja or a sunset cruise on the Nile at Murchison, tell us what you're after."
    />
  ),
});
