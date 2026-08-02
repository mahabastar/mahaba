/**
 * Single source of truth for Wild Uganda Treks' contact details.
 *
 * Previously these were hardcoded independently in ~6 different files
 * (WhatsAppButton, SiteFooter, contact, build-my-safari,
 * safari-budget-calculator, index). Update them here and every page
 * picks up the change.
 */

export const SITE_CONFIG = {
  name: "Wild Uganda Treks",
  url: "https://www.trekwilduganda.com",
  email: "wildugandatreks@gmail.com",
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
