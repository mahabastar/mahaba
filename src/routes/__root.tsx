import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { trackPageview } from "@/lib/analytics";
import logoAsset from "@/assets/wild-uganda-treks-logo.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center">
      <div className="max-w-lg">
        <Link to="/" className="mx-auto flex w-fit items-center gap-3 text-ivory">
          <img src={logoAsset.url} alt="Wild Uganda Treks logo" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold/50" />
          <span className="font-display text-xl leading-none">
            Wild Uganda <span className="text-gold">Treks</span>
          </span>
        </Link>

        <div className="mt-14 eyebrow !text-gold">404</div>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-ivory text-balance">
          Off the beaten <em className="italic text-gold">trail.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          This page doesn't exist, or has moved. Even the best trackers lose the trail sometimes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
          >
            Back to safety
          </Link>
          <Link
            to="/uganda-explorer"
            className="rounded-full border border-forest/70 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Explore Uganda instead
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center">
      <div className="max-w-lg">
        <div className="mx-auto flex w-fit items-center gap-3 text-ivory">
          <img src={logoAsset.url} alt="Wild Uganda Treks logo" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold/50" />
          <span className="font-display text-xl leading-none">
            Wild Uganda <span className="text-gold">Treks</span>
          </span>
        </div>

        <div className="mt-14 eyebrow !text-gold">Something went wrong</div>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-ivory text-balance">
          This page <em className="italic text-gold">didn't load.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          Something went wrong on our end. You can try again, or head back home.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full border border-forest/70 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wild Uganda Treks — Discover the Pearl of Africa" },
      {
        name: "description",
        content:
          "Wild Uganda Treks crafts luxury safaris across the Pearl of Africa — gorilla trekking, chimpanzee tracking, wildlife, birding, hiking, culture and honeymoons.",
      },
      { name: "author", content: "Wild Uganda Treks" },
      { property: "og:site_name", content: "Wild Uganda Treks" },
      { property: "og:title", content: "Wild Uganda Treks — Discover the Pearl of Africa" },
      {
        property: "og:description",
        content:
          "Luxury Uganda safaris — gorillas, chimpanzees, wildlife, birding, culture and hiking. Crafted itineraries across the Pearl of Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
