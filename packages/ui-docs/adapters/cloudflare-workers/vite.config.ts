import { cloudflarePagesAdapter } from '@qwik.dev/router/adapters/cloudflare-pages/vite';
import { extendConfig } from '@qwik.dev/router/vite';
import { lazyPlugins } from 'vite-plus';
import baseConfig from '../../vite.config.ts';

// oxlint-disable-next-line typescript/no-unsafe-argument typescript/no-unnecessary-type-assertion
export default extendConfig(baseConfig as any, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.cloudflare-pages.tsx'],
      },
    },
    plugins: lazyPlugins(() => [cloudflarePagesAdapter()]),
  };
});
