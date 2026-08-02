import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import expChimp from "@/assets/exp-chimp.jpg";
import { FORESTS } from "@/lib/forests";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/forests")({
  head: () => ({
    meta: [
      { title: "Uganda's Forests — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Bwindi, Kibale, Mabira and Budongo — Uganda's key forests for gorilla and chimpanzee trekking, canopy tours, and birding.",
      },
      { property: "og:title", content: "Uganda's Forests — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/forests` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/forests` }],
  }),
  component: () => (
    <CategoryHub
      eyebrow="Ancient Canopy"
      title={<>Where the primates <em className="italic text-gold">actually live</em>.</>}
      intro="Uganda's forests hold more primate diversity than almost anywhere on Earth — gorillas in the south-west, the continent's densest chimpanzee population in Kibale, and quieter escapes just outside Kampala."
      heroImage={expChimp}
      heroAlt="Chimpanzee in the forest canopy in Uganda"
      items={FORESTS}
      ctaTitle="Gorillas, chimps, or both?"
      ctaBody="Bwindi and Kibale can be combined on one western circuit — tell us how many days you have and we'll map the route."
    />
  ),
});
