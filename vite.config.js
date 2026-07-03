import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1700,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress harmless circular chunk warnings from manual chunking
        if (warning.message?.includes('Circular chunk')) return;
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // three.js ecosystem (must be checked before 'react')
            if (id.includes('three') || id.includes('@react-three')) return 'three-vendor';
            // Lottie ecosystem (must be checked before 'react')
            if (id.includes('lottie')) return 'lottie-vendor';
            // Icons
            if (id.includes('react-icons')) return 'icons-vendor';
            // Core React + React ecosystem (anything that depends on react)
            if (
              id.includes('react') ||
              id.includes('prop-types') ||
              id.includes('@radix-ui') ||
              id.includes('typewriter-effect')
            ) return 'react-vendor';
            return 'vendor';
          }
        }
      }
    }
  }
});
