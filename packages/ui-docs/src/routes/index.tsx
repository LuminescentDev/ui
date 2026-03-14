import { component$ } from '@qwik.dev/core';
import { Link, type DocumentHead } from '@qwik.dev/router';

import { LuminescentFull } from '@luminescent/icons-qwik';
import { SocialButtons } from '~/components/Nav';

import Projects from '~/components/Projects';
import { Book } from 'lucide-icons-qwik';

export const QwikTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-purple-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="/qwik.svg" alt="Qwik Logo" width={16} height={16} />
      Qwik
    </p>
  );
});
export const ReactTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-blue-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="/react.svg" alt="React Logo" width={16} height={16} />
      React
    </p>
  );
});

export default component$(() => {
  return (
    <>
      <section class="mx-auto flex min-h-[calc(100svh)] max-w-7xl flex-col items-center justify-center px-4 pt-40" style={{
        '--lum-border-radius': '1rem',
      }}>
        <h1 class="animate-in fade-in slide-in-from-top-8 anim-duration-1000 relative text-3xl font-bold text-lum-text sm:text-6xl">
          <div
            class="flex items-center gap-2 fill-[#f0ccfb] font-semibold text-[#f0ccfb] select-none sm:gap-5"
            style="filter: drop-shadow(0 0 3rem #CB6CE6);"
          >
            <LuminescentFull size={70} class="mt-2 hidden sm:flex" />
            <LuminescentFull size={45} class="mt-1 flex sm:hidden" /> / ui
          </div>
        </h1>
        <h2 class="animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6 text-lg text-lum-text sm:text-2xl">
          A ui library built for Tailwind CSS with components for Qwik and React
        </h2>

        <div class="flex gap-2 justify-center mb-12">
          <SocialButtons large />
        </div>

        <Projects />

        <Link
          class="lum-btn lum-btn-p-4 lum-bg-blue-900 hover:lum-bg-blue-800 mt-10"
          href="/docs"
        >
          <Book />
          View Documentation
        </Link>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent / ui',
  meta: [
    {
      name: 'description',
      content:
        'Another component library for Qwik built with Tailwind CSS by Luminescent',
    },
    {
      name: 'og:description',
      content:
        'Another component library for Qwik built with Tailwind CSS by Luminescent',
    },
  ],
};
