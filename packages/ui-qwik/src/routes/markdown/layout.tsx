import { component$, Slot } from '@qwik.dev/core';

type MDX = {
  title: string;
  contributors?: string[];
  created_at?: string;
  updated_at?: string;
};

export type MarkdownItems = Record<string, MDX>;

export default component$(() => {
  return (
    <div class="mx-auto min-h-dvh max-w-7xl">
      <main class="contents">
        <div class="mt-48 w-full min-w-48 sm:mt-30">
          <article class="markdown px-4">
            <h1 class="border-b border-gray-700 pb-4 text-center font-bold">
              Markdown Documentation
            </h1>
            <Slot />
          </article>
        </div>
      </main>
    </div>
  );
});
