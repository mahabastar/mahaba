// Head builder for destination pages: rich meta + JSON-LD (TouristAttraction,
// BreadcrumbList, FAQPage) and a self-referencing canonical.

import { SITE_CONFIG } from "@/lib/site-config";

export type DestinationFaq = { q: string; a: string };

export interface BuildDestinationHeadOptions {
  slug: string;
  name: string;
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
  region?: string;
  faqs?: DestinationFaq[];
}

const SITE_NAME = "Trek Wild Uganda";
const COUNTRY = "Uganda";

export function buildDestinationHead(o: BuildDestinationHeadOptions) {
  const path = `/destinations/${o.slug}`;
  const absoluteUrl = `${SITE_CONFIG.url}${path}`;
  const absoluteOgImage = o.ogImage
    ? o.ogImage.startsWith("http")
      ? o.ogImage
      : `${SITE_CONFIG.url}${o.ogImage}`
    : undefined;
  const ogType = "article";

  const meta: Array<Record<string, string>> = [
    { title: o.title },
    { name: "description", content: o.description },
    ...(o.keywords?.length
      ? [{ name: "keywords", content: o.keywords.join(", ") }]
      : []),
    { name: "robots", content: "index,follow,max-image-preview:large" },

    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: o.title },
    { property: "og:description", content: o.description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: absoluteUrl },
    ...(absoluteOgImage ? [{ property: "og:image", content: absoluteOgImage }] : []),

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: o.title },
    { name: "twitter:description", content: o.description },
    ...(absoluteOgImage ? [{ name: "twitter:image", content: absoluteOgImage }] : []),
  ];

  const touristAttraction = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: o.name,
    description: o.description,
    ...(absoluteOgImage ? { image: absoluteOgImage } : {}),
    url: absoluteUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: COUNTRY,
      ...(o.region ? { addressRegion: o.region } : {}),
    },
    touristType: [
      "Luxury safari travellers",
      "Wildlife and nature travellers",
      "Adventure travellers",
    ],
    isAccessibleForFree: false,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_CONFIG.url,
      areaServed: COUNTRY,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "National Parks", item: `${SITE_CONFIG.url}/national-parks` },
      { "@type": "ListItem", position: 3, name: o.name, item: absoluteUrl },
    ],
  };

  const scripts: Array<{ type: string; children: string }> = [
    { type: "application/ld+json", children: JSON.stringify(touristAttraction) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
  ];

  if (o.faqs?.length) {
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: o.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(faqPage),
    });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: absoluteUrl }],
    scripts,
  };
}
