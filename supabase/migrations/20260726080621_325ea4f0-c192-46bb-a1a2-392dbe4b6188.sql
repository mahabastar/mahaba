CREATE TYPE public.booking_status AS ENUM ('inquiry', 'confirmed', 'in_progress', 'completed');

CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  traveler_email TEXT NOT NULL,
  trip_name TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  status public.booking_status NOT NULL DEFAULT 'inquiry',
  itinerary JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX bookings_traveler_email_idx ON public.bookings (lower(traveler_email));

GRANT SELECT ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Travelers can view bookings for their own email"
ON public.bookings
FOR SELECT
TO authenticated
USING (lower(traveler_email) = lower(coalesce(auth.jwt() ->> 'email', '')));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();