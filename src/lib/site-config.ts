/**
 * Single source of truth for Trek Wild Uganda' contact details.
 *
 * Previously these were hardcoded independently in ~6 different files
 * (WhatsAppButton, SiteFooter, contact, build-my-safari,
 * safari-budget-calculator, index). Update them here and every page
 * picks up the change.
 */
export const SITE_CONFIG = {
  name: "Trek Wild Uganda",
  url: "https://www.trekwilduganda.com",
  email: "trekwilduganda@gmail.com",
  // Digits only, no "+" or spaces — required format for wa.me links.
  whatsappNumber: "256774959383",
  // Display-formatted phone numbers.
  phoneWhatsApp: "+256 774 959383",
  phoneLandline: "+256 755 393233",
  social: {
    instagram: "https://instagram.com/wildugandatreks",
    tiktok: "https://tiktok.com/@wildugandatreks",
    facebook: "https://facebook.com/wildugandatreks",
  },
  // Fallback social-share image, used when a page doesn't supply its own.
  defaultOgImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/GFmBvthTZXOQLte29ny3bTtPx8W2/social-images/social-1786073343154-social-image.webp",
} as const;

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link with a pre-filled subject and/or body. */
export function buildEmailHref(options: { subject?: string; body?: string } = {}): string {
  const params = new URLSearchParams();
  if (options.subject) params.set("subject", options.subject);
  if (options.body) params.set("body", options.body);
  const query = params.toString();
  return `mailto:${SITE_CONFIG.email}${query ? `?${query}` : ""}`;
}

/**
 * Builds a consistent head() object (meta + canonical link) for a route.
 * Use this in every src/routes/*.tsx file instead of hand-writing the
 * same og:/twitter: block each time — keeps titles, descriptions, and
 * canonicals in sync and avoids copy-paste typos across pages.
 *
 * Example:
 *   export const Route = createFileRoute("/safari-packages")({
 *     head: () => buildPageMeta({
 *       title: "Uganda Safari Packages | Trek Wild Uganda",
 *       description: "...",
 *       path: "/safari-packages",
 *     }),
 *     component: SafariPackages,
 *   });
 */
export function buildPageMeta(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE_CONFIG.url}${options.path}`;
  const image = options.image ?? SITE_CONFIG.defaultOgImage;

  return {
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
