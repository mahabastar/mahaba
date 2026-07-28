// Server-only helper: connects the AI SDK to the Lovable AI Gateway.
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function createLovableAiGatewayProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "lovable",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: { "Lovable-API-Key": apiKey },
    // Required for Output.object(): sends a strict json_schema instead of
    // plain json_object mode, which the gateway rejects/ignores.
    supportsStructuredOutputs: true,
  });
}
