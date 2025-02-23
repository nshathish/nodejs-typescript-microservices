import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';


export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index-dev.ts',
      exportName: 'app',
      tsCompiler: 'esbuild'
    })
  ],
});