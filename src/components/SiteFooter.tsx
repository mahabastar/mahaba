import { Link } from "@tanstack/react-router";

import { SITE_CONFIG, buildWhatsAppHref } from "@/lib/site-config";
import logoAsset from "@/assets/trek-wild-uganda-logo.png.asset.json";

type FooterItem = { label: string; to?: string; ask?: boolean };

const askHref = (label: string) =>
  buildWhatsAppHref(`Hi! I have a question about ${label.toLowerCase()} for my Uganda trip.`);

const COLS: { h: string; items: FooterItem[] }[] = [
  {
    h: "Destinations",
    items: [
      { label: "Gorilla Trekking", to: "/destinations/gorilla-trekking" },
      { label: "Chimpanzee Trekking, Kibale", to: "/destinations/kibale-forest" },
      { label: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions" },
      { label: "Queen Elizabeth NP", to: "/destinations/queen-elizabeth-national-park" },
      { label: "Murchison Falls", to: "/destinations/murchison-falls" },
      { label: "Kidepo Valley", to: "/destinations/kidepo-valley" },
      { label: "Rwenzori Mountains", to: "/destinations/rwenzori-mountains" },
      { label: "Jinja, Source of the Nile", to: "/destinations/jinja-source-of-the-nile" },
      { label: "Sipi Falls", to: "/destinations/sipi-falls" },
      { label: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi" },
      { label: "Entebbe", to: "/destinations/entebbe" },
    ],
  },
  {
    h: "Experiences",
    items: [
      { label: "Gorilla Trekking", to: "/destinations/gorilla-trekking" },
      { label: "Chimpanzees", to: "/destinations/gorilla-trekking" },
      { label: "Birding", to: "/wildlife-encyclopedia" },
      { label: "Cultural Tours", to: "/responsible-tourism" },
      { label: "Photography", to: "/travel-journal" },
    ],
  },
  {
    h: "Travel Guide",
    items: [
      { label: "Uganda Explorer", to: "/uganda-explorer" },
      { label: "Untold Secrets", to: "/untold-secrets" },
      { label: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia" },
      { label: "Seasonal Safari Calendar", to: "/seasonal-safari-calendar" },
      { label: "Safari Budget Calculator", to: "/safari-budget-calculator" },
      { label: "Visa & Entry", to: "/visa-guide" },
      { label: "Packing", to: "/packing-guide" },
      { label: "Safety", ask: true },
      { label: "FAQs", to: "/faqs" },
    ],
  },
  {
    h: "Company",
    items: [
      { label: "Build My Safari", to: "/build-my-safari" },
      { label: "Experiences", to: "/experiences" },
      { label: "Uganda Travel Journal", to: "/travel-journal" },
      { label: "Responsible Tourism", to: "/responsible-tourism" },
      { label: "Wild Uganda TV", to: "/wild-uganda-tv" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Gallery", to: "/gallery" },
      { label: "Privacy", ask: true },
      { label: "Terms", ask: true },
    ],
  },
];

/**
 * Shared elegant footer used on every route — newsletter/contact/social/quick
 * links, per the brand bible (section 16). Previously the homepage had this
 * full footer while destination pages only had a 1-line copyright bar.
 */
export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Health & safety advisory — visible site-wide */}
      <div className="border-b border-ivory/10 bg-forest-deep/60">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:gap-6 md:px-10">
          <div className="shrink-0 text-[0.65rem] uppercase tracking-widest text-gold">
            Travel Health Notice · Ebola
          </div>
          <p className="text-xs leading-relaxed text-ivory/70">
            Uganda is safe for travel. There is no Ebola outbreak affecting tourist areas, and
            the national parks, gorilla trekking sectors and travel routes we use are fully
            open and operating normally. Uganda has a long, well-proven record of containing
            isolated outbreaks quickly, with screening at Entebbe International Airport and at
            park entry points. We monitor Ministry of Health and WHO updates daily and will
            always tell you directly if anything on your itinerary is affected —{" "}
            <a href={askHref("the current Ebola and health situation")} className="text-gold underline underline-offset-4 hover:text-ivory">
              ask us anything about current conditions
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Trek Wild Uganda logo" className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50" />
              <span className="font-display text-2xl">Trek Wild Uganda</span>
            </div>
            <p className="mt-6 max-w-sm text-ivory/70">
              Discover the Pearl of Africa. Cinematic, private safaris crafted by trusted
              local experts.
            </p>
            <div className="mt-8 space-y-2 text-sm text-ivory/75">
              <div>
                <span className="text-ivory/50">WhatsApp: </span>
                <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {SITE_CONFIG.phoneWhatsApp}
                </a>
              </div>
              <div><span className="text-ivory/50">Call: </span>{SITE_CONFIG.phoneLandline}</div>
              <div>
                <span className="text-ivory/50">Email: </span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold">{SITE_CONFIG.email}</a>
              </div>
              <div><span className="text-ivory/50">Web: </span>www.trekwilduganda.com</div>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { s: "IG", href: SITE_CONFIG.social.instagram, label: "Instagram" },
                { s: "TT", href: SITE_CONFIG.social.tiktok, label: "TikTok" },
                { s: "FB", href: SITE_CONFIG.social.facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.s}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-xs transition-colors hover:border-gold hover:text-gold"
                >
                  {social.s}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.h}>
                <div className="eyebrow !text-gold-soft">{c.h}</div>
                <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                  {c.items.map((i) =>
                    i.ask ? (
                      <li key={i.label}><a href={askHref(i.label)} className="hover:text-gold">{i.label}</a></li>
                    ) : (
                      <li key={i.label}>
                        <Link to={i.to!} className="hover:text-gold">{i.label}</Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Trek Wild Uganda. All rights reserved.</div>
          <div>Discover the Pearl of Africa.</div>
        </div>
      </div>
    </footer>
  );
}
