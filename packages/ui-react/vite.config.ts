import { defineConfig, lazyPlugins } from 'vite-plus';
import pkg from './package.json';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import { fmt, lint } from '../../vite.lint';

const { dependencies = {}, peerDependencies = {} } = pkg;
const makeRegex = (dep: string) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj: Record<string, unknown>) =>
  Object.keys(obj).map(makeRegex);

// https://vite.dev/config/
export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt,
  lint,
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    target: 'es2020',
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: [
        /^node:.*/,
        ...excludeAll(dependencies),
        ...excludeAll(peerDependencies),
      ],
    },
  },
  plugins: lazyPlugins(() => [
    react(),
    dts({ include: ['src'] }),
    tailwindcss(),
  ]),
});
