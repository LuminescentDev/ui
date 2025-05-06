import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { Book, Github } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <>
      <section class="flex flex-col mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-40">
        <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
          <div
            class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none"
            style="filter: drop-shadow(0 0 3rem #CB6CE6);"
          >
            <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
            <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" /> / ui
          </div>
        </h1>
        <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6">
          A ui library built for Tailwind CSS with components for Qwik
        </h2>

        <div class="flex gap-2 justify-center">
          <a
            href="https://github.com/LuminescentDev/ui"
            class="lum-btn lum-bg-transparent lum-pad-equal-lg rounded-xl fill-gray-100 hover:fill-white"
          >
            <Github size={30} />
          </a>
          <a
            href="/discord"
            class="lum-btn lum-bg-transparent hover:lum-bg-indigo-700 lum-pad-equal-lg rounded-xl fill-indigo-300 hover:fill-white"
          >
            <LogoDiscord width={30} />
          </a>
        </div>

        <div class="flex gap-2 justify-center">
          <Link
            class="lum-btn lum-pad-xl rounded-xl lum-bg-blue-700 hover:lum-bg-blue-600 text-lg"
            href="/docs"
          >
            <Book size={30} class="text-3xl" /> Docs
          </Link>
          <a
            class="lum-btn lum-pad-xl rounded-xl lum-bg-pink-700 hover:lum-bg-pink-600 text-lg"
            href="https://luminescent.dev"
          >
            <LogoLuminescentFull width={120} />
          </a>
        </div>
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
