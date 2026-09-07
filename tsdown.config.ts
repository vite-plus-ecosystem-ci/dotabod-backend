import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  deps: { resolveDepSubpath: true },
  cwd: process.cwd(),
  dts: {
    generator: "tsgo",
  },
  outExtensions: () => ({ js: ".js" }),
  platform: "node",
});
