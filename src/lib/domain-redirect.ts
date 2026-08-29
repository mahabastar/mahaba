/**
 * Canonical domain redirect
 *
 * Production canonical:
 *   https://trekwilduganda.com
 *
 * The application must have one canonical origin.
 * Vercel should also be configured so that the canonical domain does not
 * receive another redirect from the application.
 *
 * Legacy domains are permanently redirected while preserving:
 * - pathname
 * - query string
 *
 * URL fragments are intentionally not included because browsers do not send
 * them to the server.
 */

const CANONICAL_HOST = "trekwilduganda.com";

const LEGACY_HOSTS = new Set([
  "wildugandatreks.net",
  "www.wildugandatreks.net",
  "wildugandatreks.org",
  "www.wildugandatreks.org",
  "www.trekwilduganda.com",
]);

function getRequestHostname(request: Request): string | undefined {
  try {
    const url = new URL(request.url);

    /*
     * Vercel/proxies may provide the original host through
     * x-forwarded-host. Prefer it when available.
     */
    const forwardedHost = request.headers.get("x-forwarded-host");

    const host = (forwardedHost || url.host)
      .trim()
      .toLowerCase();

    return host.split(":")[0] || undefined;
  } catch {
    return undefined;
  }
}

/**
 * Return a permanent redirect for legacy hosts.
 *
 * The canonical host itself is never redirected here.
 * This is intentional: Vercel should handle HTTPS enforcement and
 * canonical-domain configuration where possible.
 */
export function getDomainRedirect(
  request: Request,
): Response | undefined {
  const hostname = getRequestHostname(request);

  if (!hostname || !LEGACY_HOSTS.has(hostname)) {
    return undefined;
  }

  let requestUrl: URL;

  try {
    requestUrl = new URL(request.url);
  } catch {
    return undefined;
  }

  const target = new URL(
    `${requestUrl.pathname}${requestUrl.search}`,
    `https://${CANONICAL_HOST}`,
  );

  return new Response(null, {
    status: 301,
    headers: {
      Location: target.toString(),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
