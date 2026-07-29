import type { RequestHandler } from '@qwik.dev/router';
import { generateLlmsTxt } from '~/components/docs/docsData';

export const onGet: RequestHandler = ({ headers, send }) => {
  headers.set('Content-Type', 'text/plain; charset=utf-8');
  send(200, generateLlmsTxt());
};
