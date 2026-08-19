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
import { trackPageview, GA_MEASUREMENT_ID } from "@/lib/analytics";
import logoAsset from "@/assets/trek-wild-uganda-logo.png.asset.json";
import { SITE_CONFIG } from "@/lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center">
      <div className="max-w-lg">
        <Link
          to="/"
          className="mx-auto flex w-fit items-center gap-3 text-ivory"
        >
          <img
            src={logoAsset.url}
            alt="Trek Wild Uganda logo"
            className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50"
          />

          <span className="font-display text-xl leading-none">
            Trek Wild <span className="text-gold">Uganda</span>
          </span>
        </Link>

        <div className="mt-14 eyebrow !text-gold">404</div>

        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-ivory text-balance">
          Off the beaten <em className="italic text-gold">trail.</em>
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          This page doesn't exist, or has moved. Even the best trackers lose
          the trail sometimes.
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

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center">
      <div className="max-w-lg">
        <div className="mx-auto flex w-fit items-center gap-3 text-ivory">
          <img
            src={logoAsset.url}
            alt="Trek Wild Uganda logo"
            className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50"
          />

          <span className="font-display text-xl leading-none">
            Trek Wild <span className="text-gold">Uganda</span>
          </span>
        </div>

        <div className="mt-14 eyebrow !text-gold">
          Something went wrong
        </div>

        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-ivory text-balance">
          This page <em className="italic text-gold">didn't load.</em>
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          Something went wrong on our end. You can try again, or head back
          home.
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

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/favicon.png`,
  image: `${SITE_CONFIG.url}/favicon.png`,
  description:
    "Ugandan-owned, Ugandan-guided safari company crafting gorilla trekking, chimpanzee tracking, wildlife, birding, hiking and cultural journeys across Uganda.",
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phoneWhatsApp,
  areaServed: {
    "@type": "Country",
    name: "Uganda",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "UG",
    addressLocality: "Kampala",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phoneWhatsApp,
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    SITE_CONFIG.social.tiktok,
    SITE_CONFIG.social.youtube,
    SITE_CONFIG.social.facebook,
  ].filter(Boolean),
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  inLanguage: "en",
  publisher: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
};

const GOOGLE_SITE_VERIFICATION =
  (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined) || "";

const DEFAULT_TITLE =
  "Uganda Safaris & Gorilla Trekking | Trek Wild Uganda";

const DEFAULT_DESCRIPTION =
  "Private, locally guided Uganda safaris — mountain gorillas in Bwindi, chimpanzees in Kibale, tree-climbing lions, the source of the Nile and the Rwenzori peaks. Planned in Uganda by Ugandan guides.";

const DEFAULT_SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/GFmBvthTZXOQLte29ny3bTtPx8W2/social-images/social-1786073343154-social-image.webp";

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: DEFAULT_TITLE,
        },
        {
          name: "description",
          content: DEFAULT_DESCRIPTION,
        },
        {
          name: "author",
          content: "Trek Wild Uganda",
        },
        {
          name: "robots",
          content: "index,follow,max-image-preview:large",
        },
        {
          name: "theme-color",
          content: "#1B2B21",
        },

        ...(GOOGLE_SITE_VERIFICATION
          ? [
              {
                name: "google-site-verification",
                content: GOOGLE_SITE_VERIFICATION,
              },
            ]
          : []),

        {
          property: "og:site_name",
          content: "Trek Wild Uganda",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:title",
          content: DEFAULT_TITLE,
        },
        {
          property: "og:description",
          content: DEFAULT_DESCRIPTION,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: SITE_CONFIG.url,
        },
        {
          property: "og:image",
          content: DEFAULT_SOCIAL_IMAGE,
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: DEFAULT_TITLE,
        },
        {
          name: "twitter:description",
          content: DEFAULT_DESCRIPTION,
        },
        {
          name: "twitter:url",
          content: SITE_CONFIG.url,
        },
        {
          name: "twitter:image",
          content: DEFAULT_SOCIAL_IMAGE,
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: "/favicon.png",
          type: "image/png",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(ORGANIZATION_LD),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(WEBSITE_LD),
        },

        ...(GA_MEASUREMENT_ID
          ? [
              {
                src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
                async: true,
              },
              {
                children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});`,
              },
            ]
          : []),
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

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

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
