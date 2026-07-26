import { createClient } from "@supabase/supabase-js";

/**
 * Traveler Dashboard backend.
 *
 * Requires two env vars (see .env.example): VITE_SUPABASE_URL and
 * VITE_SUPABASE_ANON_KEY, both from your Supabase project's Settings ->
 * API page. The anon key is safe to expose client-side — it has no
 * power on its own; access is enforced entirely by the Row-Level
 * Security policies defined in supabase/schema.sql. Do not use the
 * service_role key here, ever — that key bypasses RLS and must never
 * reach the browser.
 *
 * If these vars are missing (e.g. local dev before setup, or a
 * preview deploy without secrets configured), `supabase` is null and
 * the dashboard route shows a clear setup message instead of crashing.
 */

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = Boolean(url && anonKey);

export const supabase = supabaseConfigured ? createClient(url as string, anonKey as string) : null;

export type BookingStatus = "inquiry" | "confirmed" | "in_progress" | "completed";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Booking = {
  id: string;
  trip_name: string;
  start_date: string | null;
  end_date: string | null;
  status: BookingStatus;
  itinerary: ItineraryDay[] | null;
  traveler_email: string;
  created_at: string;
};
