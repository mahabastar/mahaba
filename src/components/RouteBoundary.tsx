import { Link, useRouter } from "@tanstack/react-router";

type RouteErrorBoundaryProps = {
  error: Error;
  reset: () => void;
  label?: string;
};

type RouteNotFoundBoundaryProps = {
  label?: string;
};

export function RouteErrorBoundary({ error, reset, label = "page" }: RouteErrorBoundaryProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center text-ivory">
      <div className="max-w-lg">
        <div className="eyebrow !text-gold">Something went wrong</div>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-balance">
          This {label} <em className="italic text-gold">didn't load.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          The trail went cold for a moment. Try again, or head back to the main route.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full border border-forest/70 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RouteNotFoundBoundary({ label = "page" }: RouteNotFoundBoundaryProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal grain px-6 text-center text-ivory">
      <div className="max-w-lg">
        <div className="eyebrow !text-gold">Not found</div>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-balance">
          This {label} is <em className="italic text-gold">off the trail.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-ivory/70">
          It may have moved, or the link may be out of date. Explore Uganda from the main route instead.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
          >
            Back home
          </Link>
          <Link
            to="/uganda-explorer"
            className="rounded-full border border-forest/70 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Explore Uganda
          </Link>
        </div>
      </div>
    </div>
  );
}