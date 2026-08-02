import { useEffect, useRef, useState } from "react";

const LANGUAGES: { code: string; label: string }[] = [
  { code: "en", label: "English" },
  { code: "af", label: "Afrikaans" },
  { code: "am", label: "አማርኛ" },
  { code: "ar", label: "العربية" },
  { code: "bg", label: "Български" },
  { code: "bn", label: "বাংলা" },
  { code: "cs", label: "Čeština" },
  { code: "da", label: "Dansk" },
  { code: "de", label: "Deutsch" },
  { code: "el", label: "Ελληνικά" },
  { code: "es", label: "Español" },
  { code: "et", label: "Eesti" },
  { code: "fa", label: "فارسی" },
  { code: "fi", label: "Suomi" },
  { code: "fr", label: "Français" },
  { code: "ha", label: "Hausa" },
  { code: "he", label: "עברית" },
  { code: "hi", label: "हिन्दी" },
  { code: "hr", label: "Hrvatski" },
  { code: "hu", label: "Magyar" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ig", label: "Igbo" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "lt", label: "Lietuvių" },
  { code: "lv", label: "Latviešu" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "nl", label: "Nederlands" },
  { code: "no", label: "Norsk" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "ro", label: "Română" },
  { code: "ru", label: "Русский" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "sk", label: "Slovenčina" },
  { code: "sl", label: "Slovenščina" },
  { code: "so", label: "Soomaali" },
  { code: "sr", label: "Српски" },
  { code: "sv", label: "Svenska" },
  { code: "sw", label: "Kiswahili" },
  { code: "ta", label: "தமிழ்" },
  { code: "th", label: "ไทย" },
  { code: "tr", label: "Türkçe" },
  { code: "uk", label: "Українська" },
  { code: "ur", label: "اردو" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "yo", label: "Yorùbá" },
  { code: "zh-CN", label: "中文 (简体)" },
  { code: "zh-TW", label: "中文 (繁體)" },
  { code: "zu", label: "isiZulu" },
];


const SCRIPT_ID = "google-translate-script";

function readCurrent(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return match?.[1] ?? "en";
}

function setLanguage(code: string) {
  const host = window.location.hostname;
  const value = code === "en" ? "" : `/en/${code}`;
  const expiry = code === "en" ? "Thu, 01 Jan 1970 00:00:00 GMT" : "";
  const parts = [`googtrans=${value}`, "path=/"];
  if (expiry) parts.push(`expires=${expiry}`);
  document.cookie = parts.join("; ");
  document.cookie = [...parts, `domain=.${host}`].join("; ");
  window.location.reload();
}

/**
 * Lightweight language switcher for non-English visitors.
 * Loads the Google Translate element once, then drives it via the googtrans cookie.
 */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(readCurrent());
    if (document.getElementById(SCRIPT_ID)) return;
    (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
      const g = (window as unknown as { google?: any }).google;
      if (!g?.translate) return;
      new g.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element",
      );
    };
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const label = LANGUAGES.find((l) => l.code === current)?.label ?? "English";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div id="google_translate_element" className="hidden" />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="notranslate flex items-center gap-1.5 rounded-full border border-current/25 px-3 py-1.5 text-xs uppercase tracking-widest transition-colors hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span>{label}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="notranslate absolute right-0 z-50 mt-2 max-h-72 w-44 overflow-y-auto rounded-2xl border border-charcoal/10 bg-ivory p-1 shadow-xl"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === current}
              onClick={() => setLanguage(l.code)}
              className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                l.code === current ? "bg-forest text-ivory" : "text-charcoal hover:bg-charcoal/5"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
