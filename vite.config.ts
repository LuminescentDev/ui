import { defineConfig } from 'vite-plus';
import { fmt } from './vite.lint';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt,
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
