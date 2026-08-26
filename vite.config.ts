import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Keep the project on the Vercel Nitro target. The Lovable TanStack config
// already provides the TanStack Start, React, Tailwind, tsconfig-paths,
// devtools and other required plugins, so we should not duplicate them here.
export default defineConfig({
  nitro: {
    preset: "vercel",
  },
});
