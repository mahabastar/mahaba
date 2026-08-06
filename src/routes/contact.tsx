import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_CONFIG, buildWhatsAppHref, buildEmailHref } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Trek Wild Uganda — Talk to a Ugandan Guide" },
      {
        name: "description",
        content:
          "Speak directly with the Ugandan guides who will plan and lead your safari. WhatsApp, phone or email — a founder replies personally, usually within a day.",
      },
      { property: "og:title", content: "Contact Trek Wild Uganda — Talk to a Ugandan Guide" },
      {
        property: "og:description",
        content:
          "No call centre and no automated reply — message the team in Uganda who will be planning your gorilla trek and meeting you at Entebbe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_CONFIG.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/contact` }],

  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    `Hi! My name is ${name || "…"}.`,
    travelDates ? `I'm thinking of traveling around: ${travelDates}.` : "",
    message ? message : "",
  ]
    .filter(Boolean)
    .join(" ");

  const whatsappHref = buildWhatsAppHref(composed);
  const emailHref = buildEmailHref({ subject: "Uganda trip enquiry", body: composed });

  const ready = name.trim().length > 0 && message.trim().length > 0;

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Contact Us</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Let's start <em className="italic text-gold">a conversation.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Tell us who's travelling, roughly when, and what you most hope to see. One of
            our founders reads every enquiry personally and replies from Uganda — usually
            within a day, always with real answers rather than a brochure. In a hurry?{" "}
            <Link to="/quote-request" className="underline decoration-gold/50 underline-offset-4 hover:text-gold">
              Request a fast quote
            </Link>{" "}
            instead.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-luxe md:p-10">
              <div className="eyebrow !text-forest">Tell us about your trip</div>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-charcoal/50">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Traveler"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-dates" className="text-xs uppercase tracking-widest text-charcoal/50">
                    Approximate travel dates
                  </label>
                  <input
                    id="contact-dates"
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. Late June 2026, flexible"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-charcoal/50">
                    What are you hoping to do?
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell us who's traveling, what you're interested in, and anything else that would help us plan."
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-charcoal/40">
                This form doesn't submit automatically — it opens WhatsApp or your email
                app with your message pre-filled, ready to send.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={ready ? whatsappHref : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!ready}
                  onClick={(e) => {
                    if (!ready) e.preventDefault();
                    else trackEvent("contact_sent", { channel: "whatsapp" });
                  }}
                  className={`flex-1 rounded-full px-6 py-3.5 text-center text-sm font-medium shadow-md transition-all ${
                    ready
                      ? "bg-forest text-ivory hover:scale-105 hover:bg-forest-deep"
                      : "cursor-not-allowed bg-charcoal/10 text-charcoal/40"
                  }`}
                >
                  Send via WhatsApp
                </a>
                <a
                  href={ready ? emailHref : undefined}
                  aria-disabled={!ready}
                  onClick={(e) => {
                    if (!ready) e.preventDefault();
                    else trackEvent("contact_sent", { channel: "email" });
                  }}
                  className={`flex-1 rounded-full border px-6 py-3.5 text-center text-sm font-medium transition-colors ${
                    ready
                      ? "border-forest/70 text-charcoal hover:border-forest hover:text-forest"
                      : "cursor-not-allowed border-charcoal/10 text-charcoal/40"
                  }`}
                >
                  Send via Email
                </a>
              </div>
              {!ready && (
                <p className="mt-3 text-xs text-charcoal/40">Fill in your name and a message to continue.</p>
              )}
            </div>

            {/* Direct details */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-charcoal p-8 text-ivory">
                <div className="eyebrow !text-gold">Reach us directly</div>
                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="text-ivory/50">WhatsApp</div>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-ivory hover:text-gold"
                    >
                      {SITE_CONFIG.phoneWhatsApp}
                    </a>
                  </div>
                  <div>
                    <div className="text-ivory/50">Call</div>
                    <a
                      href={`tel:${SITE_CONFIG.phoneLandline.replace(/\s+/g, "")}`}
                      className="mt-1 block text-ivory hover:text-gold"
                    >
                      {SITE_CONFIG.phoneLandline}
                    </a>
                  </div>
                  <div>
                    <div className="text-ivory/50">Email</div>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="mt-1 block text-ivory hover:text-gold">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-ivory/50">Based in</div>
                    <div className="mt-1 text-ivory">Kampala, Uganda (EAT, UTC+3)</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-charcoal/10 bg-mist p-8">
                <div className="eyebrow !text-forest">Not sure what to ask yet?</div>
                <p className="mt-3 text-sm text-charcoal/70">
                  Try the Build My Safari planner first — five short questions about who's
                  travelling, when, and what matters most. We'll have a draft route in mind
                  before we even speak, and you'll have something concrete to react to.
                </p>
                <Link to="/build-my-safari" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest hover:text-forest-deep">
                  Build My Safari <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
