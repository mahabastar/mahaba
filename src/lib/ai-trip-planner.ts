import { JOURNEYS, type Journey } from "@/lib/journeys";
import { EXPERIENCES, type Experience } from "@/lib/experiences";

/**
 * Deterministic grounding layer for the trip planner. It scores the real
 * JOURNEYS/EXPERIENCES data against keywords and a requested trip length,
 * so the model never has to invent products that don't exist.
 *
 * The narrative day-by-day draft itself comes from a real model call —
 * see src/lib/trip-planner.functions.ts (server-side, Lovable AI).
 */


export type TripPlan = {
  journey: Journey;
  experiences: Experience[];
  matchedKeywords: string[];
  dayHint: number | null;
};

const KEYWORD_TAGS: Record<string, string[]> = {
  gorilla: ["gorilla", "silverback", "primate"],
  chimp: ["chimp", "chimpanzee", "primate"],
  honeymoon: ["honeymoon", "romantic", "couple", "anniversary"],
  family: ["family", "kids", "children", "child"],
  adventure: ["adventure", "raft", "rafting", "hike", "hiking", "trek", "kayak", "adrenaline"],
  luxury: ["luxury", "premium", "high-end", "exclusive", "private"],
  wildlife: ["wildlife", "safari", "big five", "game drive", "lion", "elephant"],
  bird: ["bird", "birding", "birdwatching", "shoebill"],
  photo: ["photo", "photography", "camera"],
  flyIn: ["fly", "flying", "flight", "aerial"],
  walking: ["walk", "walking", "on foot"],
  selfDrive: ["self-drive", "self drive", "rent a car", "own car", "independent"],
  budget: ["budget", "cheap", "affordable", "backpack"],
};

function scoreText(text: string, keywords: string[]): number {
  let score = 0;
  for (const kw of keywords) {
    if (text.includes(kw)) score += 1;
  }
  return score;
}

function extractDays(text: string): number | null {
  const weekMatch = text.match(/(\d+)\s*week/);
  if (weekMatch) return parseInt(weekMatch[1], 10) * 7;
  const dayMatch = text.match(/(\d+)\s*[- ]?day/);
  if (dayMatch) return parseInt(dayMatch[1], 10);
  return null;
}

function matchedTags(text: string): string[] {
  const found: string[] = [];
  for (const [tag, keywords] of Object.entries(KEYWORD_TAGS)) {
    if (keywords.some((kw) => text.includes(kw))) found.push(tag);
  }
  return found;
}

export function planTrip(input: string): TripPlan {
  const text = input.toLowerCase();
  const dayHint = extractDays(text);
  const tags = matchedTags(text);

  // Score journeys: keyword overlap with title/tagline/highlights, plus
  // closeness to the requested day count.
  let bestJourney = JOURNEYS[2]; // Pearl of Africa (7 days) as a sane default
  let bestJourneyScore = -Infinity;
  for (const j of JOURNEYS) {
    const journeyText = `${j.title} ${j.tagline} ${j.overview} ${j.highlights.join(" ")}`.toLowerCase();
    let score = scoreText(journeyText, tags.flatMap((t) => KEYWORD_TAGS[t]));
    if (dayHint !== null) {
      const diff = Math.abs(parseInt(j.days, 10) - dayHint);
      score += Math.max(0, 6 - diff); // closer day count scores higher
    }
    if (score > bestJourneyScore) {
      bestJourneyScore = score;
      bestJourney = j;
    }
  }

  // Score experiences the same way, take the top 3 distinct matches.
  const scored = EXPERIENCES.map((e) => {
    const expText = `${e.title} ${e.tagline} ${e.excerpt} ${e.intro}`.toLowerCase();
    const score = scoreText(expText, tags.flatMap((t) => KEYWORD_TAGS[t]));
    return { e, score };
  }).sort((a, b) => b.score - a.score);

  const experiences = scored.filter((s) => s.score > 0).slice(0, 3).map((s) => s.e);
  // Fallback if nothing scored: show a couple of popular, broadly-appealing picks.
  const fallback = EXPERIENCES.filter((e) => ["wildlife-safaris", "adventure-safaris"].includes(e.slug));

  return {
    journey: bestJourney,
    experiences: experiences.length > 0 ? experiences : fallback,
    matchedKeywords: tags,
    dayHint,
  };
}
