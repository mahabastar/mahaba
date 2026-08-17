import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/safari-package")({
  head: () =>
    buildPageMeta({
      title: "Uganda Safari Packages | Trek Wild Uganda",
      description:
        "Compare Uganda safari packages — gorilla trekking, chimp tracking, wildlife and cultural tours — planned and guided locally by Trek Wild Uganda.",
      path: "/safari-packages",
    }),
  component: SafariPackages,
});

const PACKAGES = [
  {
    slug: "gorilla-trekking",
    name: "Gorilla Trekking Package",
    summary:
      "Track mountain gorillas in Bwindi Impenetrable Forest with a private guide and permit handled for you.",
  },
  {
    slug: "chimp-tracking",
    name: "Chimpanzee Tracking Package",
    summary:
      "Follow wild chimpanzees through Kibale Forest, home to one of Africa's highest primate densities.",
  },
  {
    slug: "wildlife-safari",
    name: "Classic Wildlife Safari",
    summary:
      "Game drives across Queen Elizabeth and Murchison Falls, including tree-climbing lions and boat cruises on the Nile.",
  },
] as const;

function SafariPackages() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Uganda Safari Packages</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda safari packages, <em className="italic text-gold">built around you.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Every Trek Wild Uganda package is planned and guided locally in
            Kampala — gorillas, chimps, wildlife and culture, tailored to
            your dates and budget.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10 md:py-24">
          {PACKAGES.map((pkg) => (
            <article key={pkg.slug} className="mb-12 border-b border-charcoal/10 pb-12 last:border-none">
              <h2 className="font-display text-3xl text-charcoal">{pkg.name}</h2>
              <p className="mt-3 max-w-2xl text-charcoal/70">{pkg.summary}</p>
              <Link
                to="/build-my-safari"
                className="mt-4 inline-block text-sm font-medium text-forest hover:text-gold"
              >
                Build a {pkg.name.toLowerCase()} itinerary →
              </Link>
            </article>
          ))}

          <div className="mt-16 rounded-3xl bg-charcoal p-8 text-center text-ivory md:p-12">
            <h2 className="font-display text-2xl text-ivory">
              Not sure what a Uganda safari costs?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ivory/70">
              Use our safari cost calculator to estimate your budget before
              you request a custom itinerary.
            </p>
            <Link
              to="/safari-budget-calculator"
              className="mt-6 inline-block rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Estimate your safari cost
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
