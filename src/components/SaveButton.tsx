import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { isItemSaved, toggleSavedItem, type SavedItemType } from "@/lib/saved-trip";

export interface SaveButtonProps {
  type: SavedItemType;
  slug: string;
  name: string;
  img: string;
  to: string;
  /** "pill" for a labelled button in a CTA row, "icon" for a compact circular toggle. */
  variant?: "pill" | "icon";
  className?: string;
}

export function SaveButton({ type, slug, name, img, to, variant = "pill", className = "" }: SaveButtonProps) {
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read localStorage only after mount, so server-rendered/static markup
  // never has to guess at client-only state and risk a hydration mismatch.
  useEffect(() => {
    setMounted(true);
    setSaved(isItemSaved(type, slug));
  }, [type, slug]);

  function handleClick() {
    setSaved(toggleSavedItem({ type, slug, name, img, to }));
  }

  if (!mounted) return null;

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={saved}
        aria-label={saved ? `Remove ${name} from My Trip` : `Save ${name} to My Trip`}
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border backdrop-blur-md transition-colors ${
          saved ? "border-gold bg-gold/10 text-gold" : "border-ivory/40 text-ivory hover:border-gold hover:text-gold"
        } ${className}`}
      >
        <Heart className="h-4 w-4" fill={saved ? "currentColor" : "none"} strokeWidth={2} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2.5 rounded-full border px-7 py-4 text-sm font-medium tracking-wide backdrop-blur-md transition-colors ${
        saved
          ? "border-gold bg-gold/10 text-gold"
          : "border-forest/70 text-ivory hover:border-gold hover:text-gold"
      } ${className}`}
    >
      <Heart className="h-4 w-4" fill={saved ? "currentColor" : "none"} strokeWidth={2} />
      {saved ? "Saved to My Trip" : "Save to My Trip"}
    </button>
  );
}
