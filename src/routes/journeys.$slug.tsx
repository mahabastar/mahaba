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
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${loaderData.days}-Day Uganda Journey | Trek Wild Uganda` },
          { name: "description", content: loaderData.overview },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.img },
        ]
      : [],
  }),
  component: JourneyRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="journey" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="journey" />,
});

function JourneyRoute() {
  const journey = Route.useLoaderData();
  return <JourneyPage journey={journey} />;
}
