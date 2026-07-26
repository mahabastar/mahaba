/**
 * "My Trip" is a browser-local wishlist, not a user account. There's no
 * backend on this static site to hold logins or sync data across
 * devices — this persists to localStorage only, on this one browser.
 * That limitation is surfaced to the visitor on the dashboard itself
 * rather than implied away.
 */

export type SavedItemType = "destination" | "experience" | "journey";

export type SavedItem = {
  type: SavedItemType;
  slug: string;
  name: string;
  img: string;
  to: string;
  savedAt: number;
};

const STORAGE_KEY = "wildugandatreks:my-trip";
const CHANGE_EVENT = "wildugandatreks:my-trip-changed";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getSavedItems(): SavedItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setSavedItems(items: SavedItem[]) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // Storage can fail (private browsing, quota) — fail silently rather
    // than break the page over a non-critical feature.
  }
}

export function isItemSaved(type: SavedItemType, slug: string): boolean {
  return getSavedItems().some((i) => i.type === type && i.slug === slug);
}

/** Toggles an item and returns the new saved state. */
export function toggleSavedItem(item: Omit<SavedItem, "savedAt">): boolean {
  const items = getSavedItems();
  const idx = items.findIndex((i) => i.type === item.type && i.slug === item.slug);
  if (idx >= 0) {
    items.splice(idx, 1);
    setSavedItems(items);
    return false;
  }
  items.push({ ...item, savedAt: Date.now() });
  setSavedItems(items);
  return true;
}

export function removeSavedItem(type: SavedItemType, slug: string) {
  setSavedItems(getSavedItems().filter((i) => !(i.type === type && i.slug === slug)));
}

export function clearSavedItems() {
  setSavedItems([]);
}

/** Subscribe to changes (including from other tabs/components). Returns an unsubscribe function. */
export function onSavedItemsChange(callback: () => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = () => callback();
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
