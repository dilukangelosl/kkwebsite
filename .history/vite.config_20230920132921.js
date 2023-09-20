import { splitVendorChunkPlugin,defineConfig } from 'vite';


export default defineConfig({
    plugins: [
      react(),
      splitVendorChunkPlugin()
  ]})


