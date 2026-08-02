import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase, type Booking, type BookingStatus } from "@/lib/supabase";

export const Route = createFileRoute("/admin/bookings")({
  head: () => ({
    meta: [
      { title: "Bookings Management — Trek Wild Uganda" },
      { name: "description", content: "Internal console to review, filter and update traveler bookings." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BookingsAdmin,
});

const STATUSES: BookingStatus[] = ["inquiry", "confirmed", "in_progress", "completed"];

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

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[560px] px-6 py-24 text-center md:px-10">
        <h1 className="font-display text-3xl text-charcoal">{title}</h1>
        <p className="mt-3 text-sm text-charcoal/60">{body}</p>
      </div>
    </section>
  );
}

type EditState = {
  trip_name: string;
  traveler_email: string;
  start_date: string;
  end_date: string;
  status: BookingStatus;
};

function BookingRow({
  booking,
  onSaved,
  onDeleted,
}: {
  booking: Booking;
  onSaved: (b: Booking) => void;
  onDeleted: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<EditState>({
    trip_name: booking.trip_name,
    traveler_email: booking.traveler_email,
    start_date: booking.start_date ?? "",
    end_date: booking.end_date ?? "",
    status: booking.status,
  });

  async function patch(values: Partial<EditState>) {
    setBusy(true);
    setError(null);
    const { data, error } = await supabase
      .from("bookings")
      .update({
        ...(values.trip_name !== undefined ? { trip_name: values.trip_name.trim() } : {}),
        ...(values.traveler_email !== undefined ? { traveler_email: values.traveler_email.trim() } : {}),
        ...(values.start_date !== undefined ? { start_date: values.start_date || null } : {}),
        ...(values.end_date !== undefined ? { end_date: values.end_date || null } : {}),
        ...(values.status !== undefined ? { status: values.status } : {}),
      })
      .eq("id", booking.id)
      .select()
      .maybeSingle();
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data) onSaved(data as Booking);
    setEditing(false);
  }

  async function handleDelete() {
    if (!window.confirm(`Delete booking "${booking.trip_name}"? This cannot be undone.`)) return;
    setBusy(true);
    setError(null);
    const { error } = await supabase.from("bookings").delete().eq("id", booking.id);
    setBusy(false);
    if (error) setError(error.message);
    else onDeleted(booking.id);
  }

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm md:p-6">
      {editing ? (
        <div className="grid gap-3 md:grid-cols-2">
          <input
            aria-label="Trip name"
            className={inputClass}
            value={form.trip_name}
            onChange={(e) => setForm({ ...form, trip_name: e.target.value })}
          />
          <input
            aria-label="Traveler email"
            type="email"
            className={inputClass}
            value={form.traveler_email}
            onChange={(e) => setForm({ ...form, traveler_email: e.target.value })}
          />
          <input
            aria-label="Start date"
            type="date"
            className={inputClass}
            value={form.start_date}
            onChange={(e) => setForm({ ...form, start_date: e.target.value })}
          />
          <input
            aria-label="End date"
            type="date"
            className={inputClass}
            value={form.end_date}
            onChange={(e) => setForm({ ...form, end_date: e.target.value })}
          />
          <div className="flex gap-3 md:col-span-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => patch(form)}
              className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory hover:bg-forest-deep disabled:opacity-40"
            >
              {busy ? "Saving…" : "Save changes"}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="rounded-full border border-charcoal/15 px-6 py-2.5 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-[200px]">
            <h2 className="font-display text-xl text-charcoal">{booking.trip_name}</h2>
            <p className="mt-1 text-sm text-charcoal/60">{booking.traveler_email}</p>
            <p className="mt-1 text-sm text-charcoal/50">
              {formatDate(booking.start_date)} – {formatDate(booking.end_date)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest ${STATUS_COLOR[booking.status]}`}
            >
              {STATUS_LABEL[booking.status]}
            </span>
            <select
              aria-label={`Status for ${booking.trip_name}`}
              disabled={busy}
              value={booking.status}
              onChange={(e) => patch({ status: e.target.value as BookingStatus })}
              className="rounded-xl border border-charcoal/15 bg-white px-3 py-2 text-sm text-charcoal focus:border-forest focus:outline-none"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
            >
              Edit
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={handleDelete}
              className="rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-40"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function NewBookingForm({ onCreated }: { onCreated: (b: Booking) => void }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<EditState>({
    trip_name: "",
    traveler_email: "",
    start_date: "",
    end_date: "",
    status: "inquiry",
  });

  async function handleCreate() {
    if (!form.trip_name.trim() || !form.traveler_email.trim()) return;
    setBusy(true);
    setError(null);
    const { data, error } = await supabase
      .from("bookings")
      .insert({
        trip_name: form.trip_name.trim(),
        traveler_email: form.traveler_email.trim(),
        start_date: form.start_date || null,
        end_date: form.end_date || null,
        status: form.status,
      })
      .select()
      .maybeSingle();
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data) onCreated(data as Booking);
    setForm({ trip_name: "", traveler_email: "", start_date: "", end_date: "", status: "inquiry" });
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory hover:bg-forest-deep"
      >
        + New booking
      </button>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
      <h2 className="font-display text-lg text-charcoal">Add a booking</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <input
          aria-label="Trip name"
          placeholder="Trip name"
          className={inputClass}
          value={form.trip_name}
          onChange={(e) => setForm({ ...form, trip_name: e.target.value })}
        />
        <input
          aria-label="Traveler email"
          type="email"
          placeholder="traveler@example.com"
          className={inputClass}
          value={form.traveler_email}
          onChange={(e) => setForm({ ...form, traveler_email: e.target.value })}
        />
        <input
          aria-label="Start date"
          type="date"
          className={inputClass}
          value={form.start_date}
          onChange={(e) => setForm({ ...form, start_date: e.target.value })}
        />
        <input
          aria-label="End date"
          type="date"
          className={inputClass}
          value={form.end_date}
          onChange={(e) => setForm({ ...form, end_date: e.target.value })}
        />
        <select
          aria-label="Status"
          className={inputClass}
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value as BookingStatus })}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          disabled={busy || !form.trip_name.trim() || !form.traveler_email.trim()}
          onClick={handleCreate}
          className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory hover:bg-forest-deep disabled:opacity-40"
        >
          {busy ? "Creating…" : "Create booking"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full border border-charcoal/15 px-6 py-2.5 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
        >
          Cancel
        </button>
      </div>
      {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function ManageBookings({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "all">("all");
  const [sort, setSort] = useState<"newest" | "start_date">("newest");

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else {
      setError(null);
      setBookings((data as Booking[]) ?? []);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = (bookings ?? []).filter((b) => {
      const matchesQuery =
        !q || b.trip_name.toLowerCase().includes(q) || b.traveler_email.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || b.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
    if (sort === "start_date") {
      rows = rows.slice().sort((a, b) => (a.start_date ?? "9999").localeCompare(b.start_date ?? "9999"));
    }
    return rows;
  }, [bookings, query, statusFilter, sort]);

  const counts = useMemo(() => {
    const base: Record<string, number> = { all: bookings?.length ?? 0 };
    for (const s of STATUSES) base[s] = (bookings ?? []).filter((b) => b.status === s).length;
    return base;
  }, [bookings]);

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="eyebrow">Operations</div>
            <h1 className="mt-2 font-display text-3xl text-charcoal">Bookings management</h1>
            <p className="mt-2 text-sm text-charcoal/60">Signed in as {email}</p>
          </div>
          <button
            type="button"
            onClick={onSignOut}
            className="rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
          >
            Sign out
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <input
            aria-label="Search bookings"
            placeholder="Search by trip or email…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${inputClass} max-w-[320px]`}
          />
          <select
            aria-label="Filter by status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as BookingStatus | "all")}
            className={`${inputClass} max-w-[220px]`}
          >
            <option value="all">All statuses ({counts.all})</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]} ({counts[s] ?? 0})
              </option>
            ))}
          </select>
          <select
            aria-label="Sort bookings"
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "start_date")}
            className={`${inputClass} max-w-[200px]`}
          >
            <option value="newest">Newest first</option>
            <option value="start_date">By start date</option>
          </select>
          <NewBookingForm onCreated={(b) => setBookings((prev) => [b, ...(prev ?? [])])} />
        </div>

        <div className="mt-8 space-y-4">
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
              Couldn't load bookings: {error}
            </div>
          )}
          {!error && bookings === null && (
            <div className="rounded-2xl border border-charcoal/10 bg-white p-10 text-center text-sm text-charcoal/50">
              Loading bookings…
            </div>
          )}
          {!error && bookings !== null && visible.length === 0 && (
            <div className="rounded-2xl border border-charcoal/10 bg-white p-10 text-center text-sm text-charcoal/60">
              No bookings match these filters.
            </div>
          )}
          {visible.map((b) => (
            <BookingRow
              key={b.id}
              booking={b}
              onSaved={(updated) =>
                setBookings((prev) => (prev ?? []).map((x) => (x.id === updated.id ? updated : x)))
              }
              onDeleted={(id) => setBookings((prev) => (prev ?? []).filter((x) => x.id !== id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingsAdmin() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setAllowed(session === null ? false : null);
      return;
    }
    let cancelled = false;
    (async () => {
      const check = async () => {
        const [admin, staff] = await Promise.all([
          supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }),
          supabase.rpc("has_role", { _user_id: session.user.id, _role: "staff" }),
        ]);
        return Boolean(admin.data) || Boolean(staff.data);
      };

      let ok = await check();
      if (!ok) {
        // Allowlisted staff emails are promoted to admin on first visit.
        const { data: claimed } = await supabase.rpc("claim_admin_role");
        if (claimed) ok = await check();
      }
      if (!cancelled) setAllowed(ok);
    })();

    return () => {
      cancelled = true;
    };
  }, [session]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(null);
  }

  if (session === undefined || (session && allowed === null)) {
    return (
      <Shell>
        <Notice title="Loading…" body="Checking your access to the bookings console." />
      </Shell>
    );
  }

  if (session === null) {
    return (
      <Shell>
        <Notice
          title="Staff sign-in required"
          body="Sign in from the traveler dashboard with your staff email, then return to this page."
        />
      </Shell>
    );
  }

  if (!allowed) {
    return (
      <Shell>
        <Notice
          title="No access"
          body="This console is limited to Trek Wild Uganda staff. Ask an admin to grant your account access."
        />
      </Shell>
    );
  }

  return (
    <Shell>
      <ManageBookings email={session.user.email ?? ""} onSignOut={handleSignOut} />
    </Shell>
  );
}
