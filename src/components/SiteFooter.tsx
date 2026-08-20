import { Link } from "@tanstack/react-router";

import {
  SITE_CONFIG,
  buildWhatsAppHref,
  getSiteUrl,
} from "@/lib/site-config";
import logoAsset from "@/assets/trek-wild-uganda-logo.png.asset.json";

type FooterItem = {
  label: string;
  to?: string;
  ask?: boolean;
};

type SocialProfile = {
  key: string;
  shortLabel: string;
  label: string;
  href: string;
};

const askHref = (label: string) =>
  buildWhatsAppHref(
    `Hi! I have a question about ${label.toLowerCase()} for my Uganda trip.`,
  );

const COLS: { h: string; items: FooterItem[] }[] = [
  {
    h: "Destinations",
    items: [
      {
        label: "Gorilla Trekking",
        to: "/destinations/gorilla-trekking",
      },
      {
        label: "Chimpanzee Trekking, Kibale",
        to: "/destinations/kibale-forest",
      },
      {
        label: "Tree-Climbing Lions",
        to: "/destinations/tree-climbing-lions",
      },
      {
        label: "Queen Elizabeth NP",
        to: "/destinations/queen-elizabeth-national-park",
      },
      {
        label: "Murchison Falls",
        to: "/destinations/murchison-falls",
      },
      {
        label: "Kidepo Valley",
        to: "/destinations/kidepo-valley",
      },
      {
        label: "Rwenzori Mountains",
        to: "/destinations/rwenzori-mountains",
      },
      {
        label: "Jinja, Source of the Nile",
        to: "/destinations/jinja-source-of-the-nile",
      },
      {
        label: "Sipi Falls",
        to: "/destinations/sipi-falls",
      },
      {
        label: "Lake Bunyonyi",
        to: "/destinations/lake-bunyonyi",
      },
      {
        label: "Entebbe",
        to: "/destinations/entebbe",
      },
    ],
  },
  {
    h: "Experiences",
    items: [
      {
        label: "Gorilla Trekking",
        to: "/destinations/gorilla-trekking",
      },
      {
        label: "Chimpanzee Trekking",
        to: "/destinations/chimpanzee-trekking",
      },
      {
        label: "Birding & Shoebills",
        to: "/bird-guide",
      },
      {
        label: "Cultural Experiences",
        to: "/cultural-heritage",
      },
      {
        label: "Photography Safaris",
        to: "/gallery",
      },
    ],
  },
  {
    h: "Travel Guide",
    items: [
      {
        label: "Uganda Explorer",
        to: "/uganda-explorer",
      },
      {
        label: "Untold Secrets",
        to: "/untold-secrets",
      },
      {
        label: "Wildlife Encyclopedia",
        to: "/wildlife-encyclopedia",
      },
      {
        label: "Seasonal Safari Calendar",
        to: "/seasonal-safari-calendar",
      },
      {
        label: "Safari Budget Calculator",
        to: "/safari-budget-calculator",
      },
      {
        label: "Visa & Entry",
        to: "/visa-guide",
      },
      {
        label: "Packing",
        to: "/packing-guide",
      },
      {
        label: "Safety",
        ask: true,
      },
      {
        label: "FAQs",
        to: "/faqs",
      },
    ],
  },
  {
    h: "Company",
    items: [
      {
        label: "Build My Safari",
        to: "/build-my-safari",
      },
      {
        label: "Experiences",
        to: "/experiences",
      },
      {
        label: "Uganda Travel Journal",
        to: "/travel-journal",
      },
      {
        label: "Responsible Tourism",
        to: "/responsible-tourism",
      },
      {
        label: "Wild Uganda TV",
        to: "/wild-uganda-tv",
      },
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Contact",
        to: "/contact",
      },
      {
        label: "Gallery",
        to: "/gallery",
      },
      {
        label: "Privacy",
        ask: true,
      },
      {
        label: "Terms",
        ask: true,
      },
    ],
  },
];

function getSocialProfiles(): SocialProfile[] {
  const profiles: Array<{
    key: string;
    shortLabel: string;
    label: string;
    href: string | null;
  }> = [
    {
      key: "tiktok",
      shortLabel: "TT",
      label: "Trek Wild Uganda on TikTok",
      href: SITE_CONFIG.social.tiktok,
    },
    {
      key: "youtube",
      shortLabel: "YT",
      label: "Trek Wild Uganda on YouTube",
      href: SITE_CONFIG.social.youtube,
    },
    {
      key: "facebook",
      shortLabel: "FB",
      label: "Trek Wild Uganda on Facebook",
      href: SITE_CONFIG.social.facebook,
    },
    {
      key: "instagram",
      shortLabel: "IG",
      label: "Trek Wild Uganda on Instagram",
      href: SITE_CONFIG.social.instagram,
    },
  ];

  return profiles.filter(
    (profile): profile is SocialProfile =>
      typeof profile.href === "string" && profile.href.length > 0,
  );
}

/**
 * Shared site-wide footer.
 *
 * The footer intentionally keeps the site's existing navigation structure
 * while ensuring that only verified social profiles are rendered.
 */
export function SiteFooter() {
  const socialProfiles = getSocialProfiles();

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Health & safety advisory — visible site-wide */}
      <div className="border-b border-ivory/10 bg-forest-deep/60">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:gap-6 md:px-10">
          <div className="shrink-0 text-[0.65rem] uppercase tracking-widest text-gold">
            Travel Health Notice · Ebola
          </div>

          <p className="text-xs leading-relaxed text-ivory/70">
            Uganda is safe for travel. There is no Ebola outbreak affecting
            tourist areas, and the national parks, gorilla trekking sectors
            and travel routes we use are fully open and operating normally.
            Uganda has a long, well-proven record of containing isolated
            outbreaks quickly, with screening at Entebbe International Airport
            and at park entry points. We monitor Ministry of Health and WHO
            updates daily and will always tell you directly if anything on
            your itinerary is affected —{" "}
            <a
              href={askHref("the current Ebola and health situation")}
              className="text-gold underline underline-offset-4 hover:text-ivory"
            >
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
              <img
                src={logoAsset.url}
                alt="Trek Wild Uganda logo"
                className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain p-0.5 ring-1 ring-gold/50"
              />

              <span className="font-display text-2xl">
                Trek Wild Uganda
              </span>
            </div>

            <p className="mt-6 max-w-sm text-ivory/70">
              A Ugandan-owned safari company based in Kampala. Private,
              unhurried journeys to the gorillas, the Nile and the mountains —
              guided by people who grew up beside them, and built to leave
              something behind in the communities we visit.
            </p>

            <div className="mt-8 space-y-2 text-sm text-ivory/75">
              <div>
                <span className="text-ivory/50">WhatsApp: </span>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {SITE_CONFIG.phoneWhatsApp}
                </a>
              </div>

              <div>
                <span className="text-ivory/50">Call: </span>
                {SITE_CONFIG.phoneLandline}
              </div>

              <div>
                <span className="text-ivory/50">Email: </span>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-gold"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="text-ivory/50">Web: </span>

                <a
                  href={getSiteUrl()}
                  className="hover:text-gold"
                  aria-label="Trek Wild Uganda website"
                >
                  www.trekwilduganda.com
                </a>
              </div>
            </div>

            {socialProfiles.length > 0 && (
              <div className="mt-8 flex gap-3">
                {socialProfiles.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-xs transition-colors hover:border-gold hover:text-gold"
                  >
                    {social.shortLabel}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            {COLS.map((column) => (
              <div key={column.h}>
                <div className="eyebrow !text-gold-soft">
                  {column.h}
                </div>

                <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                  {column.items.map((item) =>
                    item.ask ? (
                      <li key={item.label}>
                        <a
                          href={askHref(item.label)}
                          className="hover:text-gold"
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <Link
                          to={item.to!}
                          className="hover:text-gold"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Trek Wild Uganda. All rights
            reserved.
          </div>

          <div>
            Ugandan-owned, Ugandan-guided. Discover the Pearl of Africa.
          </div>
        </div>
      </div>
    </footer>
  );
}
