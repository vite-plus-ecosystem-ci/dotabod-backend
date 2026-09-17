import { defineConfig } from 'vite-plus/pack'

export default defineConfig({
  cwd: process.cwd(),
  deps: { resolveDepSubpath: true },
  dts: {
    generator: 'tsgo',
  },
  outExtensions: () => ({ js: '.js' }),
  platform: 'node',
})
