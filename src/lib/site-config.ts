// Lovable's TanStack Vite config already provides the TanStack Start,
// React, Tailwind, tsconfig-paths, route-tree and Nitro plugins.
// Keep this file minimal so the route crawler can run with the defaults.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
});
