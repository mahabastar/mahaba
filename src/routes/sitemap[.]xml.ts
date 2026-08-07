import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { JOURNEYS } from "@/lib/journeys";
import { EXPERIENCES } from "@/lib/experiences";
import { JOURNAL_POSTS } from "@/lib/journal-posts";

const BASE_URL = "https://www.trekwilduganda.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_PATHS = [
  "/about",
  "/ai-trip-planner",
  "/bird-guide",
  "/build-my-safari",
  "/coffee-tea-guide",
  "/contact",
  "/cultural-heritage",
  "/destinations/bwindi-impenetrable",
  "/destinations/chimpanzee-trekking",
  "/destinations/crater-lakes",
  "/destinations/entebbe",
  "/destinations/gorilla-trekking",
  "/destinations/jinja-source-of-the-nile",
  "/destinations/kibale-forest",
  "/destinations/kidepo-valley",
  "/destinations/lake-bunyonyi",
  "/destinations/lake-mburo",
  "/destinations/mgahinga-gorilla",
  "/destinations/mount-elgon",
  "/destinations/murchison-falls",
  "/destinations/queen-elizabeth-national-park",
  "/destinations/rwenzori-mountains",
  "/destinations/semuliki",
  "/destinations/sipi-falls",
  "/destinations/tree-climbing-lions",
  "/destinations/ziwa-rhino-sanctuary",
  "/experiences",
  "/faqs",
  "/food-guide",
  "/forests",
  "/gallery",
  "/gorilla-permit-guide",
  "/lakes",
  "/mountains",
  "/national-parks",
  "/packing-guide",
  "/quote-request",
  "/responsible-tourism",
  "/rivers",
  "/safari-budget-calculator",
  "/seasonal-safari-calendar",
  "/travel-journal",
  "/uganda-explorer",
  "/untold-secrets",
  "/visa-guide",
  "/weather",
  "/wild-uganda-tv",
  "/wildlife-encyclopedia",
  "/wildlife-reserves",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          ...JOURNEYS.map((j) => ({
            path: `/journeys/${j.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
          })),
          ...EXPERIENCES.map((e) => ({
            path: `/experiences/${e.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...JOURNAL_POSTS.map((p) => ({
            path: `/travel-journal/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...STATIC_PATHS.map((path) => ({
            path,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
