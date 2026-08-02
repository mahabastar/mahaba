import { SITE_CONFIG } from "@/lib/site-config";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { JOURNAL_POSTS, getJournalPost } from "@/lib/journal-posts";

export const Route = createFileRoute("/travel-journal/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/travel-journal/${params.slug}`;
    const ogImage = loaderData ? `${SITE_CONFIG.url}${loaderData.img}` : undefined;
    return {
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Trek Wild Uganda Journal` },
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
  component: JournalArticle,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="journal story" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="journal story" />,
});

function JournalArticle() {
  const post = Route.useLoaderData();

  const related = JOURNAL_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFallback = related.length > 0 ? related : JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal">
        <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/travel-journal" className="hover:text-gold">Journal</Link>
            <span className="mx-2">/</span>
            <span className="text-ivory/50">{post.category}</span>
          </nav>
          <div className="eyebrow !text-gold">{post.category} · {post.readMins} min read</div>
          <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,4rem)] text-ivory text-balance">{post.title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:px-10 md:py-24">
          {post.body.map((para: string, i: number) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-charcoal/80 text-pretty">
              {para}
            </p>
          ))}

          {post.pullQuote && (
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-charcoal text-balance">
              &ldquo;{post.pullQuote}&rdquo;
            </blockquote>
          )}

          {post.destination && (
            <div className="mt-12 rounded-3xl bg-forest/5 p-8 md:p-10">
              <div className="eyebrow !text-forest">Featured in this story</div>
              <div className="mt-2 font-display text-2xl text-charcoal">{post.destination.name}</div>
              <Link
                to={post.destination.to}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                Explore this destination <span aria-hidden>→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {relatedFallback.length > 0 && (
        <section className="bg-charcoal grain">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="eyebrow !text-gold">Keep reading</div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedFallback.map((p) => (
                <Link
                  key={p.slug}
                  to="/travel-journal/$slug"
                  params={{ slug: p.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="text-[0.65rem] uppercase tracking-widest text-gold">{p.category}</div>
                    <div className="mt-1 font-display text-lg text-ivory">{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
