import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { MOUNTAINS } from "@/lib/mountains";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/mountains")({
  head: () => ({
    meta: [
      { title: "Uganda's Mountains — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "From equatorial glaciers on the Rwenzori to volcano summits in the Virunga range — Uganda's key mountains and multi-day treks.",
      },
      { property: "og:title", content: "Uganda's Mountains — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/mountains` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/mountains` }],
  }),
  component: () => (
    <CategoryHub
      eyebrow="High Ground"
      title={<>Glaciers on the equator, <em className="italic text-gold">volcanoes at the border</em>.</>}
      intro="Uganda's mountains are as varied as its parks — an equatorial glacier range on the Congo border, a caldera the size of a small country in the east, and volcanoes shared with two neighbouring nations."
      heroImage={sceneRwenzori}
      heroAlt="Snow-capped Rwenzori Mountains peaks in Uganda"
      items={MOUNTAINS}
      ctaTitle="Planning a multi-day trek?"
      ctaBody="Rwenzori and Mount Elgon both run 4–5 day summit routes — tell us your fitness level and timeframe and we'll recommend a route."
    />
  ),
});
