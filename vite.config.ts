/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
    coverage: {
      include: ['src/app/**/*.ts', 'src/server/**/*.ts'],
      exclude: ['src/app/app.config.**', '**/*types.ts'],
      all: true,
      reportsDirectory: './coverage',
      provider: 'v8',
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
