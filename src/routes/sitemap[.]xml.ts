import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://www.trekwilduganda.com";

const SITEMAP_PATHS = [
  "/",

  // Main pages
  "/about",
  "/contact",
  "/experiences",
  "/uganda-explorer",
  "/national-parks",
  "/wildlife-reserves",
  "/wildlife-encyclopedia",
  "/forests",
  "/lakes",
  "/rivers",
  "/mountains",

  // Trip planning
  "/build-my-safari",
  "/quote-request",
  "/ai-trip-planner",
  "/safari-budget-calculator",
  "/visa-guide",
  "/gorilla-permit-guide",
  "/packing-guide",
  "/seasonal-safari-calendar",
  "/weather",
  "/faqs",

  // Experiences
  "/bird-guide",
  "/coffee-tea-guide",
  "/cultural-heritage",
  "/food-guide",
  "/gallery",
  "/responsible-tourism",
  "/wild-uganda-tv",
  "/untold-secrets",

  // Destinations
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

  // Journal hub
  "/travel-journal",

  // Signature journeys
  "/journeys/3-day-gorilla-trekking",
  "/journeys/5-day-gorilla-and-chimpanzee",
  "/journeys/7-day-pearl-of-africa",
  "/journeys/10-day-wildlife-and-primates",
  "/journeys/14-day-ultimate-uganda",
  "/journeys/21-day-grand-uganda",

  // Experience detail pages
  "/experiences/gorilla-trekking",
  "/experiences/wildlife-safaris",
  "/experiences/chimpanzee-trekking",
  "/experiences/bird-watching",
  "/experiences/luxury-safaris",
  "/experiences/boat-cruises",
  "/experiences/photography",
  "/experiences/cultural-experiences",
  "/experiences/coffee-and-tea",
  "/experiences/rwenzori-hiking",
  "/experiences/adventure-safaris",
  "/experiences/sipi-falls",

  // Regions
  "/regions/western-uganda",
  "/regions/northern-uganda",
  "/regions/eastern-uganda",
  "/regions/central-uganda",
  "/regions/karamoja",
] as const;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getPriority(path: string): string {
  if (path === "/") return "1.0";

  if (
    path === "/build-my-safari" ||
    path === "/uganda-explorer" ||
    path === "/experiences" ||
    path === "/national-parks"
  ) {
    return "0.9";
  }

  if (path.startsWith("/destinations/")) {
    return "0.8";
  }

  if (path.startsWith("/journeys/")) {
    return "0.8";
  }

  if (path.startsWith("/experiences/")) {
    return "0.8";
  }

  if (path.startsWith("/travel-journal/")) {
    return "0.6";
  }

  return "0.7";
}

function getChangeFrequency(path: string): string {
  if (path === "/") return "weekly";

  if (path === "/travel-journal") return "weekly";

  if (
    path === "/build-my-safari" ||
    path === "/uganda-explorer" ||
    path === "/experiences"
  ) {
    return "weekly";
  }

  if (
    path.startsWith("/travel-journal/") ||
    path.startsWith("/journeys/") ||
    path.startsWith("/experiences/") ||
    path.startsWith("/destinations/")
  ) {
    return "monthly";
  }

  return "monthly";
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = SITEMAP_PATHS.map((path) => {
          const loc = `${BASE_URL}${path}`;
          const priority = getPriority(path);
          const changefreq = getChangeFrequency(path);

          return [
            "  <url>",
            `    <loc>${escapeXml(loc)}</loc>`,
            `    <changefreq>${changefreq}</changefreq>`,
            `    <priority>${priority}</priority>`,
            "  </url>",
          ].join("\n");
        }).join("\n");

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control":
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        });
      },
    },
  },
});
