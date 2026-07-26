import { createFileRoute } from "@tanstack/react-router";

import { CategoryHub } from "@/components/CategoryHub";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import { UNTOLD_SECRETS } from "@/lib/untold-secrets";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/untold-secrets")({
  head: () => ({
    meta: [
      { title: "Uganda's Untold Secrets — Off-the-Beaten-Path Places" },
      {
        name: "description",
        content:
          "Kidepo Valley, Semuliki, Mount Elgon, the crater lakes and more — the Uganda destinations most itineraries skip entirely, and how to reach them.",
      },
      { property: "og:title", content: "Uganda's Untold Secrets — Off-the-Beaten-Path Places" },
      {
        property: "og:description",
        content:
          "The remote parks, volcanic lakes and quiet forests that most Uganda itineraries leave out.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_CONFIG.url}/untold-secrets` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/untold-secrets` }],
  }),
  component: () => (
    <CategoryHub
      eyebrow="Untold Secrets"
      title={<>The Uganda that most itineraries <em className="italic text-gold">quietly skip</em>.</>}
      intro="Beyond the gorillas and the Nile there is a second Uganda — remote northern savannah, a marooned pocket of Congo rainforest, glaciers on the equator, and crater lakes almost nobody photographs. These are the places we send travellers on their second visit, and the ones worth building a first trip around."
      heroImage={sceneRwenzori}
      heroAlt="Mist over the Rwenzori Mountains in western Uganda"
      items={UNTOLD_SECRETS}
      ctaTitle="Want a route built around the quiet places?"
      ctaBody="Most of these connect naturally to the classic circuit with a flight or an extra day or two. Tell us how long you have and we'll map it."
    />
  ),
});
