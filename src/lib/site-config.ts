/**
 * Single source of truth for Trek Wild Uganda business identity,
 * contact details, canonical URL, and verified social profiles.
 *
 * IMPORTANT:
 * Keep factual business information here only.
 * SEO keywords belong in page-specific metadata and content.
 */

export const SITE_CONFIG = {
  /**
   * Primary brand name.
   */
  name: "Trek Wild Uganda",

  /**
   * Single canonical website origin.
   *
   * All canonical URLs, sitemap URLs, Open Graph URLs and structured
   * data should ultimately resolve to this origin.
   */
  url: "https://www.trekwilduganda.com",

  /**
   * Primary business email.
   */
  email: "trekwilduganda@gmail.com",

  /**
   * WhatsApp number in international digits-only format.
   *
   * Required for wa.me URLs.
   */
  whatsappNumber: "256774959383",

  /**
   * Display-formatted contact numbers.
   */
  phoneWhatsApp: "+256 774 959383",
  phoneLandline: "+256 755 393233",

  /**
   * Verified/promoted social profiles.
   *
   * Only profiles that are confirmed to represent Trek Wild Uganda
   * should be exposed through Organization structured data.
   */
  social: {
    /**
     * Instagram is currently not promoted or verified.
     *
     * Kept as null rather than publishing an unverified URL in
     * structured data.
     */
    instagram: null,

    /**
     * Official Trek Wild Uganda TikTok profile.
     */
    tiktok: "https://www.tiktok.com/@trek_wild_uganda",

    /**
     * Facebook profile currently requires verification.
     *
     * Keep null until the official Trek Wild Uganda Facebook Page
     * URL has been confirmed.
     */
    facebook: null,

    /**
     * Official Trek Wild Uganda YouTube channel.
     */
    youtube: "https://www.youtube.com/@trekwilduganda",
  },
} as const;

/**
 * Returns the canonical website origin without a trailing slash.
 *
 * This prevents accidental double slashes when constructing URLs.
 */
export function getSiteUrl(path = ""): string {
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  return `${SITE_CONFIG.url}${normalizedPath}`;
}

/**
 * Builds a wa.me link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

/**
 * Builds a mailto: link with an optional subject and body.
 */
export function buildEmailHref(
  options: {
    subject?: string;
    body?: string;
  } = {},
): string {
  const params = new URLSearchParams();

  if (options.subject) {
    params.set("subject", options.subject);
  }

  if (options.body) {
    params.set("body", options.body);
  }

  const query = params.toString();

  return `mailto:${SITE_CONFIG.email}${query ? `?${query}` : ""}`;
}

/**
 * Returns only social profiles that are actually configured.
 *
 * Useful when generating Schema.org sameAs arrays.
 */
export function getVerifiedSocialProfiles(): string[] {
  return Object.values(SITE_CONFIG.social).filter(
    (url): url is string => Boolean(url),
  );
}
