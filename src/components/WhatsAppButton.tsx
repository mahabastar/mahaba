import { buildWhatsAppHref } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_HREF = buildWhatsAppHref("Hi! I'd like to ask about planning a Uganda safari.");

/**
 * Persistent WhatsApp quick-contact button, per the brand bible's nav spec
 * (section 15). Rendered once in the root layout so it appears on every page.
 */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-forest text-ivory shadow-luxe transition-all duration-300 hover:scale-110 hover:bg-forest-deep"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2Zm5.63 14.13c-.24.67-1.4 1.28-1.93 1.34-.5.06-1.02.29-3.42-.71-2.9-1.2-4.76-4.13-4.9-4.32-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.61 1.99 1.11.98 2.04 1.29 2.34 1.44.3.15.47.13.65-.08.18-.21.76-.88.96-1.19.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.07.13.07.75-.17 1.42Z" />
      </svg>
    </a>
  );
}
