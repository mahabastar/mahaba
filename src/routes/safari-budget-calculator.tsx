import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref, SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/safari-budget-calculator")({
  head: () => ({
    meta: [
      { title: "Safari Budget Calculator — Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Estimate your Uganda safari budget based on trip duration, accommodation, activities and travel preferences, then request a customized itinerary from Trek Wild Uganda.",
      },
      {
        property: "og:title",
        content: "Safari Budget Calculator — Trek Wild Uganda",
      },
      {
        property: "og:description",
        content:
          "Estimate your Uganda safari budget based on trip duration, accommodation, activities and travel preferences, then request a customized itinerary from Trek Wild Uganda.",
      },
      {
        property: "og:url",
        content: `${SITE_CONFIG.url}/safari-budget-calculator`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `${SITE_CONFIG.url}/safari-budget-calculator`,
      },
    ],
  }),
  component: SafariBudgetCalculator,
});

/* ---------------- Data ---------------- */
// Rough 2026 per-person daily rates (accommodation + private transport + meals + park
// fees), based on published Uganda safari pricing guides. Trekking permits are priced
// separately below since they're fixed, activity-specific government fees.

const STYLES = [
  { key: "adventure", label: "Adventure", desc: "Budget lodges, shared transport, simple meals", rate: 200 },
  { key: "comfort", label: "Comfort", desc: "Mid-range lodges, private 4×4 & guide, full board", rate: 400 },
  { key: "luxury", label: "Luxury", desc: "Premium camps & lodges, private guide, all-inclusive", rate: 800 },
] as const;

const GORILLA_PERMIT = 800; // USD, foreign non-resident, standard season
const GORILLA_PERMIT_LOW_SEASON = 600; // USD, Apr / May / Nov
const CHIMP_PERMIT = 250; // USD, foreign non-resident

/* ---------------- Component ---------------- */

function SafariBudgetCalculator() {
  const [styleKey, setStyleKey] = useState<(typeof STYLES)[number]["key"]>("comfort");
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [gorilla, setGorilla] = useState(true);
  const [lowSeason, setLowSeason] = useState(false);
  const [chimp, setChimp] = useState(false);

  const style = STYLES.find((s) => s.key === styleKey)!;

  const { baseTotal, permitsTotal, grandTotal, perPerson, perPersonPerDay } = useMemo(() => {
    const base = style.rate * days * travelers;
    const gorillaRate = lowSeason ? GORILLA_PERMIT_LOW_SEASON : GORILLA_PERMIT;
    const permits = (gorilla ? gorillaRate * travelers : 0) + (chimp ? CHIMP_PERMIT * travelers : 0);
    const grand = base + permits;
    return {
      baseTotal: base,
      permitsTotal: permits,
      grandTotal: grand,
      perPerson: grand / travelers,
      perPersonPerDay: grand / travelers / days,
    };
  }, [style, days, travelers, gorilla, chimp, lowSeason]);

  const fmt = (n: number) => `$${Math.round(n).toLocaleString()}`;

  const summaryText = `Hi! I used the Safari Budget Calculator: ${travelers} traveler(s), ${days} days, ${style.label} style${gorilla ? ", with gorilla permit" : ""}${chimp ? ", with chimp permit" : ""}. Estimated total: ${fmt(grandTotal)}. Could you help me turn this into a real itinerary?`;
  const whatsappHref = buildWhatsAppHref(summaryText);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Safari Budget Calculator</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Know the number <em className="italic text-gold">before you ask.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            A realistic, no-surprises estimate — adjust travel style, trip length and
            group size to see how your budget shifts.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Inputs */}
            <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-luxe md:p-10">
              <div className="eyebrow !text-forest">Travel style</div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {STYLES.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setStyleKey(s.key)}
                    className={`flex flex-col items-start rounded-2xl border px-4 py-4 text-left transition-all ${
                      styleKey === s.key ? "border-forest bg-forest/5 shadow-md" : "border-charcoal/10 hover:border-forest/40"
                    }`}
                  >
                    <span className={`text-sm font-medium ${styleKey === s.key ? "text-forest" : "text-charcoal"}`}>{s.label}</span>
                    <span className="mt-1 text-xs text-charcoal/50">{s.desc}</span>
                    <span className="mt-2 text-xs font-medium text-gold">~${s.rate}/day pp</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="eyebrow !text-forest">Trip length</div>
                  <div className="mt-3 flex items-center gap-3">
                    <Stepper value={days} onChange={setDays} min={1} max={21} />
                    <span className="text-sm text-charcoal/60">days</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow !text-forest">Travelers</div>
                  <div className="mt-3 flex items-center gap-3">
                    <Stepper value={travelers} onChange={setTravelers} min={1} max={12} />
                    <span className="text-sm text-charcoal/60">people</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="eyebrow !text-forest">Add-ons</div>
                <Toggle
                  label="Gorilla trekking permit"
                  sub={`$${lowSeason ? GORILLA_PERMIT_LOW_SEASON : GORILLA_PERMIT} per person`}
                  checked={gorilla}
                  onChange={setGorilla}
                />
                {gorilla && (
                  <label className="ml-4 flex items-center gap-2 text-xs text-charcoal/60">
                    <input type="checkbox" checked={lowSeason} onChange={(e) => setLowSeason(e.target.checked)} className="accent-forest" />
                    Traveling in low season (Apr / May / Nov) — ${GORILLA_PERMIT_LOW_SEASON} rate
                  </label>
                )}
                <Toggle
                  label="Chimpanzee trekking permit"
                  sub={`$${CHIMP_PERMIT} per person`}
                  checked={chimp}
                  onChange={setChimp}
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col rounded-3xl bg-charcoal p-6 text-ivory shadow-luxe md:p-10">
              <div className="eyebrow !text-gold">Estimated total</div>
              <div className="mt-3 font-display text-5xl text-ivory">{fmt(grandTotal)}</div>
              <p className="mt-2 text-sm text-ivory/60">
                {fmt(perPerson)} per person · {fmt(perPersonPerDay)} per person, per day
              </p>

              <div className="mt-8 space-y-3 border-t border-ivory/10 pt-6 text-sm">
                <div className="flex justify-between text-ivory/70">
                  <span>Lodging, transport & meals</span>
                  <span className="text-ivory">{fmt(baseTotal)}</span>
                </div>
                <div className="flex justify-between text-ivory/70">
                  <span>Permits</span>
                  <span className="text-ivory">{fmt(permitsTotal)}</span>
                </div>
              </div>

              <div className="mt-8 flex-1 rounded-2xl bg-ivory/5 p-4 text-xs leading-relaxed text-ivory/50">
                This is a rough, general-market estimate for 2026 — actual costs vary by
                specific lodges, season, and route. It excludes international flights,
                visas, tips and travel insurance.
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("budget_calculator_sent", { travelers, days, style: style.label })}
                  className="rounded-full bg-forest px-6 py-3.5 text-center text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
                >
                  Get an exact quote via WhatsApp
                </a>
                <Link
                  to="/build-my-safari"
                  className="rounded-full border border-ivory/20 px-6 py-3.5 text-center text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  Turn this estimate into a real plan
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

/* ---------------- Bits ---------------- */

function Stepper({ value, onChange, min, max }: { value: number; onChange: (v: number) => void; min: number; max: number }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-charcoal/15 px-2 py-1">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid h-8 w-8 place-items-center rounded-full text-charcoal/60 transition-colors hover:bg-forest/10 hover:text-forest"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="w-6 text-center font-display text-lg text-charcoal">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="grid h-8 w-8 place-items-center rounded-full text-charcoal/60 transition-colors hover:bg-forest/10 hover:text-forest"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

function Toggle({ label, sub, checked, onChange }: { label: string; sub: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
        checked ? "border-forest bg-forest/5" : "border-charcoal/10 hover:border-forest/40"
      }`}
    >
      <span>
        <span className={`block text-sm font-medium ${checked ? "text-forest" : "text-charcoal"}`}>{label}</span>
        <span className="block text-xs text-charcoal/50">{sub}</span>
      </span>
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? "bg-forest" : "bg-charcoal/15"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}
