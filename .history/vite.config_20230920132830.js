import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vitest/config'
export default defineConfig({
    plugins: [
      react(),
      splitVendorChunkPlugin()
  ]})