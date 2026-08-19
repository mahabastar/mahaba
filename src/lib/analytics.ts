/**
 * Google Analytics 4 integration.
 *
 * Analytics is enabled only when VITE_GA_MEASUREMENT_ID is explicitly
 * configured in the environment.
 *
 * Example:
 * VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * If the variable is not configured:
 * - no GA4 script should load
 * - no visitor data should be sent
 * - tracking functions safely do nothing
 *
 * IMPORTANT:
 * GA4 may set cookies and collect visitor information. If the site
 * receives visitors from jurisdictions requiring consent, such as the
 * EU/UK, a consent mechanism should be implemented before analytics
 * is loaded.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Read the GA4 Measurement ID from the Vite environment.
 *
 * Do NOT hard-code the production Measurement ID here.
 *
 * This prevents analytics from being silently enabled when the
 * environment variable has not been configured.
 */
export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || "";

/**
 * Whether analytics is configured.
 */
export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

/**
 * Record a page view for a client-side route change.
 *
 * The application is an SPA, so relying only on GA4's initial
 * automatic page view would miss subsequent client-side navigation.
 */
export function trackPageview(path: string): void {
  if (
    !analyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title:
      typeof document !== "undefined" ? document.title : undefined,
  });
}

/**
 * Record a custom analytics event.
 *
 * Example:
 *
 * trackEvent("whatsapp_click", {
 *   page_path: window.location.pathname,
 * });
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (
    !analyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", name, params ?? {});
}
