CREATE TABLE public.admin_allowlist (
  email text PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.admin_allowlist TO service_role;

ALTER TABLE public.admin_allowlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to admin allowlist"
  ON public.admin_allowlist FOR SELECT
  USING (false);

INSERT INTO public.admin_allowlist (email) VALUES ('herbertmuzoora1@gmail.com');

CREATE OR REPLACE FUNCTION public.claim_admin_role()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _email text;
  _uid uuid;
BEGIN
  _uid := auth.uid();
  IF _uid IS NULL THEN
    RETURN false;
  END IF;

  _email := lower(coalesce(auth.jwt() ->> 'email', ''));
  IF _email = '' OR NOT EXISTS (
    SELECT 1 FROM public.admin_allowlist WHERE lower(email) = _email
  ) THEN
    RETURN false;
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (_uid, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN true;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.claim_admin_role() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_admin_role() TO authenticated;