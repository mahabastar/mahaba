import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref } from "@/lib/site-config";
import { supabase, type Booking, type BookingStatus } from "@/lib/supabase";
import { lovable } from "@/integrations/lovable/index";


export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Traveler Dashboard — Trek Wild Uganda" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const STATUS_LABEL: Record<BookingStatus, string> = {
  inquiry: "Inquiry received",
  confirmed: "Confirmed",
  in_progress: "Trip in progress",
  completed: "Completed",
};

const STATUS_COLOR: Record<BookingStatus, string> = {
  inquiry: "bg-charcoal/10 text-charcoal/70",
  confirmed: "bg-forest/10 text-forest",
  in_progress: "bg-gold/20 text-forest-deep",
  completed: "bg-charcoal/10 text-charcoal/50",
};

function formatDate(d: string | null): string {
  if (!d) return "TBC";
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/dashboard",
    });
    if (result.error) setStatus("error");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + "/dashboard" },
    });
    setStatus(error ? "error" : "sent");
  }


  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[480px] px-6 py-24 md:px-10">
        <div className="text-center">
          <div className="eyebrow">Traveler Login</div>
          <h1 className="mt-4 font-display text-3xl text-charcoal">View your trip</h1>
          <p className="mt-3 text-sm text-charcoal/60">
            Enter the email you booked with — we'll send a one-time link, no password needed.
          </p>
        </div>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl border border-forest/20 bg-forest/5 p-6 text-center text-sm text-forest">
            Check your inbox — we've sent a login link to <strong>{email}</strong>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="dash-email" className="text-xs uppercase tracking-widest text-charcoal/50">
              Email address
            </label>
            <input
              id="dash-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
            <button
              type="submit"
              disabled={!email.trim() || status === "sending"}
              className="mt-4 w-full rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-[1.01] hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              {status === "sending" ? "Sending…" : "Send login link"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-center text-xs text-red-600">
                Something went wrong sending that link. Please try again.
              </p>
            )}
          </form>
        )}

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-charcoal/10" />
          <span className="text-xs uppercase tracking-widest text-charcoal/40">or</span>
          <span className="h-px flex-1 bg-charcoal/10" />
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="mt-6 w-full rounded-full border border-charcoal/15 bg-white px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
        >
          Continue with Google
        </button>


        <p className="mt-8 text-center text-xs text-charcoal/40">
          Don't have a booking yet?{" "}
          <Link to="/quote-request" className="underline decoration-charcoal/20 underline-offset-4 hover:text-forest">
            Request a quote
          </Link>{" "}
          to get started.
        </p>
      </div>
    </section>
  );
}

function BookingCard({ booking }: { booking: Booking }) {
  return (
    <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl text-charcoal">{booking.trip_name}</h2>
          <p className="mt-1 text-sm text-charcoal/60">
            {formatDate(booking.start_date)} – {formatDate(booking.end_date)}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest ${STATUS_COLOR[booking.status]}`}>
          {STATUS_LABEL[booking.status]}
        </span>
      </div>

      {booking.itinerary && booking.itinerary.length > 0 && (
        <div className="mt-6 space-y-4 border-t border-charcoal/10 pt-6">
          {booking.itinerary
            .slice()
            .sort((a, b) => a.day - b.day)
            .map((item) => (
              <div key={item.day} className="flex gap-4">
                <div className="w-14 shrink-0 text-xs uppercase tracking-widest text-charcoal/40">Day {item.day}</div>
                <div>
                  <div className="text-sm font-medium text-charcoal">{item.title}</div>
                  <p className="mt-1 text-sm text-charcoal/60">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="mt-6 border-t border-charcoal/10 pt-6">
        <a
          href={buildWhatsAppHref(`Hi! I have a question about my trip: ${booking.trip_name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-deep"
        >
          Ask a question about this trip →
        </a>
      </div>
    </div>
  );
}

function BookingsView({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data, error } = await supabase

        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (error) setError(error.message);
      else setBookings((data as Booking[]) ?? []);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="eyebrow">Welcome back</div>
            <h1 className="mt-2 font-display text-3xl text-charcoal">{email}</h1>
          </div>
          <button
            type="button"
            onClick={onSignOut}
            className="rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
          >
            Sign out
          </button>
        </div>

        <div className="mt-10 space-y-6">
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
              Couldn't load your bookings: {error}
            </div>
          )}
          {!error && bookings === null && (
            <div className="rounded-2xl border border-charcoal/10 bg-white p-10 text-center text-sm text-charcoal/50">
              Loading your trips…
            </div>
          )}
          {!error && bookings !== null && bookings.length === 0 && (
            <div className="rounded-2xl border border-charcoal/10 bg-white p-10 text-center">
              <p className="text-sm text-charcoal/60">
                No bookings on file yet for this email. Once your trip is confirmed, it'll appear here.
              </p>
              <Link
                to="/quote-request"
                className="mt-4 inline-block text-sm font-medium text-forest hover:text-forest-deep"
              >
                Request a quote →
              </Link>
            </div>
          )}
          {bookings?.map((b) => <BookingCard key={b.id} booking={b} />)}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(null);
  }

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {session === undefined ? (
        <section className="bg-ivory">
          <div className="mx-auto max-w-[480px] px-6 py-24 text-center text-sm text-charcoal/50 md:px-10">
            Loading…
          </div>
        </section>
      ) : session === null ? (
        <LoginForm />
      ) : (
        <BookingsView email={session.user.email ?? ""} onSignOut={handleSignOut} />
      )}


      <SiteFooter />
    </div>
  );
}
