// Host-level canonicalisation: any request arriving on the old
// legacy wildugandatreks.net/.org domains (or the bare apex) is 301'd to the
// canonical https://www.trekwilduganda.com origin, preserving the full
// path, query string and hash-free URL so existing inbound links and
// search-engine equity carry over.

const CANONICAL_HOST = "www.trekwilduganda.com";

/** Hosts that must be permanently redirected to CANONICAL_HOST. */
const LEGACY_HOSTS = new Set([
  "wildugandatreks.net",
  "www.wildugandatreks.net",
  "wildugandatreks.org",
  "www.wildugandatreks.org",
  "trekwilduganda.com",
]);

/**
 * Returns a 301 Response when the request arrived on a legacy host,
 * otherwise undefined (request continues to normal SSR handling).
 * Preview/localhost/*.lovable.app hosts are never redirected.
 */
export function getDomainRedirect(request: Request): Response | undefined {
  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    return undefined;
  }

  const host = (request.headers.get("x-forwarded-host") ?? url.host).toLowerCase();
  const hostname = host.split(":")[0];

  if (!LEGACY_HOSTS.has(hostname)) return undefined;

  const target = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`);

  return new Response(null, {
    status: 301,
    headers: {
      location: target.toString(),
      "cache-control": "public, max-age=3600",
    },
  });
}
