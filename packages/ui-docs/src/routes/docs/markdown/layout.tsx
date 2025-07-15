import { component$, Slot } from '@builder.io/qwik';

type MDX = {
  title: string;
  contributors?: string[];
  created_at?: string;
  updated_at?: string;
};

export type MarkdownItems = Record<string, MDX>;

export default component$(() => {
  return (
    <div class="max-w-7xl mx-auto min-h-dvh">
      <main class="contents">
        <div class="w-full mt-48 sm:mt-30 min-w-48">
          <article class="px-4 markdown">
            <h1 class="font-bold text-center border-b border-gray-700 pb-4">
              Markdown Documentation
            </h1>
            <Slot />
          </article>
        </div>
      </main>
    </div>
  );
});