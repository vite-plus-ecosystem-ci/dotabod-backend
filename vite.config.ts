import { defineConfig } from 'vite-plus'

import fmt from './oxfmt.config.js'
import tsdownConfig from './tsdown.config.js'

export default defineConfig({
  fmt,
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    options: { typeAware: true, typeCheck: true },
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
  },
  pack: tsdownConfig,
})
