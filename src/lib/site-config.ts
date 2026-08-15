
/**
 * Single source of truth for Trek Wild Uganda contact details.
 *
 * Keep contact and social profile links centralized so every page uses
 * the same verified business details.
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
    // Instagram is intentionally not promoted for now.
    // Kept for backwards compatibility with existing components.
    instagram: "https://instagram.com/wildugandatreks",

    tiktok: "https://www.tiktok.com/@trek_wild_uganda",

    // Keep the existing property until the verified Trek Wild Uganda
    // Facebook Page URL is supplied.
    facebook: "https://facebook.com/wildugandatreks",

    youtube: "https://www.youtube.com/@trekwilduganda",
  },
} as const;

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link with a pre-filled subject and/or body. */
export function buildEmailHref(
  options: { subject?: string; body?: string } = {},
): string {
  const params = new URLSearchParams();

  if (options.subject) params.set("subject", options.subject);
  if (options.body) params.set("body", options.body);

  const query = params.toString();

  return `mailto:${SITE_CONFIG.email}${query ? `?${query}` : ""}`;
}