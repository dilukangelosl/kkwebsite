import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
    plugins: [
      react(),
      splitVendorChunkPlugin()
  ]})