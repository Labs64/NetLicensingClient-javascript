import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'NetLicensing',
  dts: true,
  minify: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'esnext',
  platform: 'browser',
  esbuildOptions(options) {
    options.legalComments = 'none';
  },
});
