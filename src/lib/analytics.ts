/**
 * Google Analytics 4 integration.
 *
 * Requires VITE_GA_MEASUREMENT_ID (see .env.example) — your GA4
 * "Measurement ID", found in GA4: Admin -> Data Streams -> your
 * web stream -> Measurement ID (starts with "G-"). Without it set,
 * analytics stays fully disabled — no script loads, nothing is sent,
 * and no error is thrown.
 *
 * Note for later: GA4 sets cookies and collects visitor data. If you
 * have or expect EU/UK visitors, you likely need a cookie-consent
 * banner and a privacy policy that discloses this before the script
 * loads, to comply with GDPR/PECR. That consent layer isn't included
 * here — this file only wires up the tracking itself.
 *
 * This is a single-page app, so GA4's automatic pageview (fired once
 * when gtag.js first loads) isn't enough — it would miss every
 * client-side route change. The root layout's config call sets
 * send_page_view: false, and trackPageview() below is called manually
 * on every route change instead (see __root.tsx).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

/** Call on every client-side route change to record an SPA pageview. */
export function trackPageview(path: string) {
  if (!analyticsEnabled || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Call to record a conversion-relevant action (quote sent, WhatsApp opened, etc.). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!analyticsEnabled || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
