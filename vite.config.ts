import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    sourcemap: mode !== "production",
    minify: "terser",
    target: "esnext",
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false
      },
      mangle: true
    },
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-dropdown-menu'
    ],
    force: true
  }
}));
