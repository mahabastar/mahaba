import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { EXPERIENCES } from "@/lib/experiences";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/experiences/")({
  head: () => ({
    meta: [
      { title: "Uganda Safari Experiences — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Uganda safaris built around how you actually want to travel — family, honeymoon, adventure, and how to choose between gorilla and chimp trekking.",
      },
      { property: "og:title", content: "Uganda Safari Experiences — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/experiences` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/experiences` }],
  }),
  component: ExperiencesIndex,
});

function ExperiencesIndex() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Experiences</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            However you want <em className="italic text-gold">to travel.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            The same country, built around a different kind of trip — family, honeymoon,
            adventure, or a straight answer on gorillas versus chimps.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {EXPERIENCES.map((e) => (
              <Link
                key={e.slug}
                to="/experiences/$slug"
                params={{ slug: e.slug }}
                className="group relative block aspect-[16/10] overflow-hidden rounded-3xl hover-lift"
              >
                <img
                  src={e.heroImg}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="font-display text-2xl text-ivory md:text-3xl">{e.title}</div>
                  <p className="mt-2 max-w-md text-sm text-ivory/70">{e.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}