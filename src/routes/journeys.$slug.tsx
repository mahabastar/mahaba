import { SITE_CONFIG } from "@/lib/site-config";
import { createFileRoute, notFound } from "@tanstack/react-router";

import { JourneyPage } from "@/components/JourneyPage";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { getJourney } from "@/lib/journeys";

export const Route = createFileRoute("/journeys/$slug")({
  loader: ({ params }) => {
    const journey = getJourney(params.slug);
    if (!journey) throw notFound();
    return journey;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/journeys/${params.slug}`;
    const ogImage = loaderData ? `${SITE_CONFIG.url}${loaderData.img}` : undefined;
    return {
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${loaderData.days}-Day Uganda Journey | Trek Wild Uganda` },
          { name: "description", content: loaderData.overview },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: ogImage! },
          { property: "og:url", content: url },
          { property: "og:type", content: "article" },
          { property: "og:site_name", content: SITE_CONFIG.name },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.title },
          { name: "twitter:description", content: loaderData.tagline },
          { name: "twitter:image", content: ogImage! },
        ]
      : [],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: JourneyRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="journey" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="journey" />,
});

function JourneyRoute() {
  const journey = Route.useLoaderData();
  return <JourneyPage journey={journey} />;
}
