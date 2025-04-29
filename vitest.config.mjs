import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@test-utils': path.resolve(__dirname, 'test/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.spec.ts'],
  },
});
