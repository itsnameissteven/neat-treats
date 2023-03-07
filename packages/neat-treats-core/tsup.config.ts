import { sassPlugin } from 'esbuild-sass-plugin';
import { defineConfig } from 'tsup';

export default defineConfig({
  esbuildPlugins: [sassPlugin()],
  clean: true,
  dts: true,
  // minify: true,
  shims: true,
  treeshake: true,
  outDir: 'dist',
  external: ['react'],
  format: ['cjs', 'esm'],
  target: 'es6',
  entryPoints: ['./src/index.ts'],
});
