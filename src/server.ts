import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { getDomainRedirect } from "./lib/domain-redirect";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (module) => (module.default ?? module) as ServerEntry,
    );
  }

  return serverEntryPromise;
}

/**
 * TanStack Start / h3 can sometimes convert an unhandled SSR HTTPError
 * into a generic JSON 500 response instead of allowing it to reach the
 * outer try/catch.
 *
 * Convert that specific failure into our normal HTML error page so users,
 * crawlers and monitoring systems don't receive an internal JSON payload.
 */
async function normalizeServerError(
  response: Response,
): Promise<Response> {
  if (response.status < 500) {
    return response;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return response;
  }

  const body = await response.clone().text();

  if (!isH3SwallowedErrorBody(body)) {
    return response;
  }

  const capturedError = consumeLastCapturedError();

  console.error(
    capturedError ??
      new Error(`Unhandled SSR HTTPError response: ${body}`),
  );

  return createHtmlErrorResponse();
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as {
      unhandled?: unknown;
      message?: unknown;
    };

    return (
      payload.unhandled === true &&
      payload.message === "HTTPError"
    );
  } catch {
    return false;
  }
}

function createHtmlErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: unknown,
  ): Promise<Response> {
    /*
     * Domain redirects happen before SSR.
     *
     * This prevents legacy hosts from rendering the application first
     * and then redirecting after the page has already been processed.
     */
    const redirect = getDomainRedirect(request);

    if (redirect) {
      return redirect;
    }

    try {
      const handler = await getServerEntry();

      const response = await handler.fetch(
        request,
        env,
        ctx,
      );

      return normalizeServerError(response);
    } catch (error) {
      console.error("Fatal SSR error:", error);

      return createHtmlErrorResponse();
    }
  },
};
