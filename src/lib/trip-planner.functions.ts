import { createServerFn } from "@tanstack/react-start";
import { generateText, Output } from "ai";
import { z } from "zod";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const DraftInput = z.object({
  request: z.string().min(1).max(2000),
  journey: z.object({
    title: z.string(),
    days: z.string(),
    tagline: z.string(),
    overview: z.string(),
    highlights: z.array(z.string()),
  }),
  experiences: z.array(z.object({ title: z.string(), excerpt: z.string() })),
});

const DraftOutput = z.object({
  headline: z.string().describe("One short, warm line naming the shape of this trip."),
  summary: z.string().describe("2-3 sentences on why this itinerary fits the traveller's request."),
  days: z
    .array(
      z.object({
        day: z.number(),
        title: z.string(),
        description: z.string(),
      }),
    )
    .describe("Day-by-day outline, one entry per travel day."),
  notes: z.array(z.string()).describe("2-4 short practical notes: pacing, permits, season, budget."),
});

export type ItineraryDraft = z.infer<typeof DraftOutput>;

export const draftItinerary = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => DraftInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI is not configured for this site yet.");

    const gateway = createLovableAiGatewayProvider(key);

    const { output } = await generateText({
      model: gateway("google/gemini-3.6-flash"),
      output: Output.object({ schema: DraftOutput }),
      system: [
        "You are a senior Uganda safari planner for Trek Wild Uganda.",
        "Write a realistic day-by-day draft itinerary grounded ONLY in the journey and experiences provided.",
        "Respect Uganda's real geography and drive times. Never invent lodges, prices, or permit availability.",
        "Tone: warm, specific, understated. No emoji, no exclamation marks, no sales language.",
      ].join(" "),
      prompt: [
        `Traveller's request: ${data.request}`,
        "",
        `Base journey: ${data.journey.title} (${data.journey.days} days)`,
        `Tagline: ${data.journey.tagline}`,
        `Overview: ${data.journey.overview}`,
        `Highlights: ${data.journey.highlights.join("; ")}`,
        "",
        "Suggested experiences to weave in where they fit:",
        ...data.experiences.map((e) => `- ${e.title}: ${e.excerpt}`),
        "",
        "Produce the draft. Keep the number of days close to what the traveller asked for.",
      ].join("\n"),
    });

    return output;
  });
