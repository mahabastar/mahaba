import { useEffect, useState } from "react";

import { buildEmailHref, buildWhatsAppHref } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import type { GalleryPhoto } from "@/lib/gallery";

/**
 * Full-size lightbox for a gallery photograph, paired with a floating
 * enquiry panel. Every gallery image therefore doubles as a lead-capture
 * surface: the message is pre-filled with the photo's title, and the
 * photo slug is carried through as the enquiry source (both in the
 * message body and in the analytics event).
 */
export function GalleryLightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: GalleryPhoto;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [dates, setDates] = useState("");
  const [travellers, setTravellers] = useState("");
  const [message, setMessage] = useState("");

  // Reset the pre-filled message whenever a different photo is opened.
  useEffect(() => {
    setMessage(`I'm interested in this experience: ${photo.title} (${photo.category}).`);
  }, [photo.slug, photo.title, photo.category]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  const summary = [
    "Safari enquiry from the Trek Wild Uganda gallery.",
    `Enquiry source (photo): ${photo.title} [${photo.slug}] — ${photo.category}`,
    name ? `Name: ${name}` : "",
    email ? `Email: ${email}` : "",
    whatsapp ? `WhatsApp: ${whatsapp}` : "",
    country ? `Country: ${country}` : "",
    dates ? `Preferred travel dates: ${dates}` : "",
    travellers ? `Travellers: ${travellers}` : "",
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const ready = name.trim().length > 0 && (email.trim().length > 0 || whatsapp.trim().length > 0);

  const submit = (channel: "whatsapp" | "email") => {
    trackEvent("gallery_enquiry_submit", {
      channel,
      photo_slug: photo.slug,
      photo_title: photo.title,
      photo_category: photo.category,
    });
    const href =
      channel === "whatsapp"
        ? buildWhatsAppHref(summary)
        : buildEmailHref({ subject: `Safari enquiry — ${photo.title}`, body: summary });
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";
  const label = "text-[0.65rem] uppercase tracking-widest text-charcoal/50";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-[100] overflow-y-auto bg-charcoal/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-ivory/25 text-lg text-ivory transition-colors hover:border-gold hover:text-gold"
      >
        ✕
      </button>

      <div
        className="mx-auto flex min-h-full max-w-[1400px] flex-col gap-6 px-4 py-16 lg:flex-row lg:items-start lg:gap-10 lg:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full-size image */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-2xl bg-charcoal">
            <img
              src={photo.src}
              alt={photo.title}
              className="max-h-[70vh] w-full object-contain"
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">{photo.category}</div>
              <h2 className="mt-1 font-display text-xl text-ivory md:text-2xl">{photo.title}</h2>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous photo"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                ←
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next photo"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Floating enquiry panel */}
        <aside className="w-full rounded-2xl bg-ivory p-6 shadow-2xl lg:sticky lg:top-16 lg:w-[400px]">
          <div className="eyebrow !text-forest">Interested in this experience?</div>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            Tell us a little about your trip and we'll come back with a tailored plan built
            around exactly this.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="gl-name" className={label}>Name</label>
              <input id="gl-name" className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Traveller" maxLength={100} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="gl-email" className={label}>Email</label>
                <input id="gl-email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" maxLength={255} />
              </div>
              <div>
                <label htmlFor="gl-wa" className={label}>WhatsApp number</label>
                <input id="gl-wa" type="tel" className={field} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+1 555 0100" maxLength={30} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="gl-country" className={label}>Country</label>
                <input id="gl-country" className={field} value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United Kingdom" maxLength={60} />
              </div>
              <div>
                <label htmlFor="gl-travellers" className={label}>Travellers</label>
                <input id="gl-travellers" className={field} value={travellers} onChange={(e) => setTravellers(e.target.value)} placeholder="2 adults" maxLength={40} />
              </div>
            </div>
            <div>
              <label htmlFor="gl-dates" className={label}>Preferred travel dates</label>
              <input id="gl-dates" className={field} value={dates} onChange={(e) => setDates(e.target.value)} placeholder="June 2027, flexible" maxLength={80} />
            </div>
            <div>
              <label htmlFor="gl-message" className={label}>Message</label>
              <textarea id="gl-message" rows={3} className={field} value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} />
            </div>
          </div>

          <button
            type="button"
            disabled={!ready}
            onClick={() => submit("whatsapp")}
            className="mt-6 w-full rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send this to a guide on WhatsApp
          </button>
          <button
            type="button"
            disabled={!ready}
            onClick={() => submit("email")}
            className="mt-3 w-full rounded-full border border-forest/60 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send by email instead
          </button>
          {!ready && (
            <p className="mt-3 text-center text-xs text-charcoal/45">
              Add your name and either an email or WhatsApp number to send.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
