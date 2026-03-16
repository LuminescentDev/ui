/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Cloudflare Workers when building for production.
 *
 * Learn more about the Cloudflare Workers integration here:
 * - https://qwik.dev/docs/deployments/cloudflare-workers/
 *
 */
import {
  createQwikRouter,
  type PlatformCloudflarePages as PlatformCloudflareWorkers,
} from '@qwik.dev/router/middleware/cloudflare-pages';
import qwikRouterConfig from '@qwik-router-config';
import render from './entry.ssr';

declare global {
  type QwikCityPlatform = PlatformCloudflareWorkers;
}

const fetch = createQwikRouter({ render, qwikRouterConfig });

export { fetch };
