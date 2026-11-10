import { defineConfig } from 'vite-plus'

import oxfmtConfig from './oxfmt.config.ts'
import tsdownConfig from './tsdown.config.js'

export default defineConfig({
  fmt: oxfmtConfig,
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  pack: tsdownConfig,
})
