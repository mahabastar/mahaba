import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { SEARCH_INDEX } from "@/lib/search-index";
import logoAsset from "@/assets/trek-wild-uganda-logo.png.asset.json";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NAV_LINKS: { label: string; hash: string }[] = [
  { label: "Discover", hash: "discover" },
  { label: "Journeys", hash: "journeys" },
  { label: "Regions", hash: "regions" },
];

const EXPLORE_LINKS: { label: string; to: string; desc: string }[] = [
  { label: "Uganda Explorer", to: "/uganda-explorer", desc: "Interactive map of every destination" },
  { label: "Untold Secrets", to: "/untold-secrets", desc: "Off-the-beaten-path Uganda most trips skip" },
  { label: "National Parks", to: "/national-parks", desc: "All 10 parks, grouped by region" },
  { label: "Wildlife Reserves", to: "/wildlife-reserves", desc: "Rhinos, cheetah & quieter reserves" },
  { label: "Lakes", to: "/lakes", desc: "Bunyonyi, Victoria, Albert & more" },
  { label: "Rivers", to: "/rivers", desc: "The Nile, Kazinga Channel & more" },
  { label: "Mountains", to: "/mountains", desc: "Rwenzori, Elgon & the Virunga volcanoes" },
  { label: "Forests", to: "/forests", desc: "Bwindi, Kibale, Mabira & Budongo" },
  { label: "Experiences", to: "/experiences", desc: "Family, honeymoon, adventure & more" },
];

const INSPIRATION_LINKS: { label: string; to: string; desc: string }[] = [
  { label: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia", desc: "Searchable guide to Uganda's species" },
  { label: "Bird Guide", to: "/bird-guide", desc: "1,000+ species, top sites & signature birds" },
  { label: "Food Guide", to: "/food-guide", desc: "Matoke, the Rolex & Lake Victoria tilapia" },
  { label: "Coffee & Tea Guide", to: "/coffee-tea-guide", desc: "Where Robusta coffee originates" },
  { label: "Cultural Heritage", to: "/cultural-heritage", desc: "Kingdoms, the Batwa & the Karamojong" },
  { label: "Travel Journal", to: "/travel-journal", desc: "Stories, culture & conservation" },
  { label: "Responsible Tourism", to: "/responsible-tourism", desc: "Conservation & community impact" },
  { label: "Wild Uganda TV", to: "/wild-uganda-tv", desc: "Destination films & traveller stories" },
];

const PLAN_LINKS: { label: string; to: string; desc: string }[] = [
  { label: "Request a Quote", to: "/quote-request", desc: "A fast, no-obligation quote" },
  { label: "Seasonal Safari Calendar", to: "/seasonal-safari-calendar", desc: "What's best, month by month" },
  { label: "Weather Guide", to: "/weather", desc: "Uganda's climate, region by region" },
  { label: "Safari Budget Calculator", to: "/safari-budget-calculator", desc: "Estimate your trip cost" },
  { label: "Visa Guide", to: "/visa-guide", desc: "How to apply, cost & requirements" },
  { label: "Packing Guide", to: "/packing-guide", desc: "What to bring, and one rule to know" },
  { label: "Gorilla Permit Guide", to: "/gorilla-permit-guide", desc: "What the USD 800 permit includes" },
  { label: "FAQs", to: "/faqs", desc: "Everything travellers ask us first" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return scrolled;
}

/**
 * Shared sticky nav used on every route (home + destination pages).
 * On the homepage, links use native #hash anchors for instant in-page scroll.
 * On other pages, links route to "/" with a hash so they land on the right section.
 */
export function SiteNav() {
  const scrolled = useScrolled();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_INDEX.slice(0, 8);
    return SEARCH_INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory focus:shadow-luxe"
      >
        Skip to main content
      </a>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 transition-all duration-700 ${
          scrolled ? "glass-dark rounded-full py-3 shadow-luxe" : "text-ivory"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 text-ivory">
          <img src={logoAsset.url} alt="Trek Wild Uganda logo" className="h-11 w-11 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50 md:h-12 md:w-12" />
          <span className="font-display text-xl leading-none">
            Trek Wild <span className="text-gold">Uganda</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ivory/85 md:flex">
          {NAV_LINKS.map((l) =>
            isHome ? (
              <a key={l.label} href={`#${l.hash}`} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to="/" hash={l.hash} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            ),
          )}

          <div className="group relative">
            <button className="flex items-center gap-1.5 hover:text-gold transition-colors">
              Explore
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-2xl border border-charcoal/10 bg-white p-2 text-charcoal shadow-luxe">
                {EXPLORE_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-forest/5"
                  >
                    <div className="text-sm font-medium text-charcoal">{l.label}</div>
                    <div className="mt-0.5 text-xs text-charcoal/50">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1.5 hover:text-gold transition-colors">
              Plan
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-2xl border border-charcoal/10 bg-white p-2 text-charcoal shadow-luxe">
                {PLAN_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-forest/5"
                  >
                    <div className="text-sm font-medium text-charcoal">{l.label}</div>
                    <div className="mt-0.5 text-xs text-charcoal/50">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1.5 hover:text-gold transition-colors">
              Inspiration
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-2xl border border-charcoal/10 bg-white p-2 text-charcoal shadow-luxe">
                {INSPIRATION_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-forest/5"
                  >
                    <div className="text-sm font-medium text-charcoal">{l.label}</div>
                    <div className="mt-0.5 text-xs text-charcoal/50">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden text-ivory/85 md:block" />
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full text-ivory/85 transition-colors hover:text-gold md:grid"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link
            to="/dashboard"
            aria-label="Traveler login"
            className="hidden h-10 w-10 place-items-center rounded-full text-ivory/85 transition-colors hover:text-gold md:grid"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            to="/build-my-safari"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory shadow-md transition-all duration-500 hover:scale-105 hover:bg-forest-deep md:inline-block"
          >
            Build My Safari
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ivory md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-charcoal grain md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-ivory">
              <img src={logoAsset.url} alt="Trek Wild Uganda logo" className="h-11 w-11 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50 md:h-12 md:w-12" />
              <span className="font-display text-xl leading-none">
                Trek Wild <span className="text-gold">Uganda</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full text-ivory"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-10">
            <div className="mb-6 flex justify-start text-ivory/85">
              <LanguageSwitcher />
            </div>
            <nav className="flex flex-col gap-1 border-b border-ivory/10 pb-6">
              {NAV_LINKS.map((l) =>
                isHome ? (
                  <a
                    key={l.label}
                    href={`#${l.hash}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-2 py-3 font-display text-2xl text-ivory hover:text-gold"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to="/"
                    hash={l.hash}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-2 py-3 font-display text-2xl text-ivory hover:text-gold"
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-6">
              <div className="px-2 text-xs uppercase tracking-widest text-ivory/40">Explore</div>
              <div className="mt-2 flex flex-col">
                {EXPLORE_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-2 py-3 text-ivory/85 hover:text-gold"
                  >
                    <div className="text-base font-medium">{l.label}</div>
                    <div className="text-xs text-ivory/40">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="px-2 text-xs uppercase tracking-widest text-ivory/40">Plan</div>
              <div className="mt-2 flex flex-col">
                {PLAN_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-2 py-3 text-ivory/85 hover:text-gold"
                  >
                    <div className="text-base font-medium">{l.label}</div>
                    <div className="text-xs text-ivory/40">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="px-2 text-xs uppercase tracking-widest text-ivory/40">Inspiration</div>
              <div className="mt-2 flex flex-col">
                {INSPIRATION_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-2 py-3 text-ivory/85 hover:text-gold"
                  >
                    <div className="text-base font-medium">{l.label}</div>
                    <div className="text-xs text-ivory/40">{l.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
              className="mt-6 flex w-full items-center gap-3 rounded-xl border border-ivory/15 px-4 py-3 text-sm text-ivory/70"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search the site
            </button>

            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full border border-ivory/20 px-6 py-4 text-sm font-medium text-ivory/85"
            >
              Traveler Login
            </Link>

            <Link
              to="/build-my-safari"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full bg-forest px-6 py-4 text-sm font-medium text-ivory shadow-md"
            >
              Build My Safari
            </Link>
          </div>
        </div>
      )}

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-charcoal/80 p-6 pt-24 backdrop-blur-sm md:pt-32"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-charcoal/10 px-5 py-4">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-charcoal/40" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search destinations, tools, stories…"
                className="w-full text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none"
              />
              <button onClick={() => setSearchOpen(false)} className="text-xs uppercase tracking-widest text-charcoal/40 hover:text-forest">
                Esc
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-charcoal/50">No matches — try another search.</div>
              ) : (
                results.map((r) => (
                  <Link
                    key={`${r.to}-${r.label}`}
                    to={r.to}
                    params={r.params}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-forest/5"
                  >
                    <span className="text-sm font-medium text-charcoal">{r.label}</span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-charcoal/40">{r.category}</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
      <div id="main-content" tabIndex={-1} />
    </>
  );
}
