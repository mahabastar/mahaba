/**
 * Traveler Dashboard backend types.
 *
 * The Supabase client itself lives in the generated integration module
 * (`@/integrations/supabase/client`) and is wired up by Lovable Cloud —
 * no .env copying, no manual keys. Row-Level Security scopes every
 * booking read to the email address the traveler signed in with.
 */

export { supabase } from "@/integrations/supabase/client";

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
