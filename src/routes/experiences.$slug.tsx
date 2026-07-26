import { createFileRoute, notFound } from "@tanstack/react-router";

import { ExperiencePage } from "@/components/ExperiencePage";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { getExperience } from "@/lib/experiences";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = getExperience(params.slug);
    if (!experience) throw notFound();
    return experience;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Wild Uganda Treks` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.heroImg },
        ]
      : [],
  }),
  component: ExperienceRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="experience" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="experience" />,
});

function ExperienceRoute() {
  const experience = Route.useLoaderData();
  return <ExperiencePage experience={experience} />;
}
