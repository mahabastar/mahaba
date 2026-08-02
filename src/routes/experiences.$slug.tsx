import { SITE_CONFIG } from "@/lib/site-config";
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
  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/experiences/${params.slug}`;
    const ogImage = loaderData ? `${SITE_CONFIG.url}${loaderData.heroImg}` : undefined;
    return {
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Trek Wild Uganda` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: ogImage! },
          { property: "og:url", content: url },
          { property: "og:type", content: "article" },
          { property: "og:site_name", content: SITE_CONFIG.name },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.title },
          { name: "twitter:description", content: loaderData.excerpt },
          { name: "twitter:image", content: ogImage! },
        ]
      : [],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ExperienceRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="experience" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="experience" />,
});

function ExperienceRoute() {
  const experience = Route.useLoaderData();
  return <ExperiencePage experience={experience} />;
}
