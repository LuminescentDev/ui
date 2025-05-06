import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { Book, Github } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <>
      <section class="mx-auto flex min-h-[calc(100svh)] max-w-7xl flex-col items-center justify-center px-4 pt-40">
        <h1 class="animate-in fade-in slide-in-from-top-8 anim-duration-1000 relative text-3xl font-bold text-gray-100 sm:text-6xl">
          <div
            class="flex items-center gap-2 fill-[#f0ccfb] font-semibold text-[#f0ccfb] select-none sm:gap-5"
            style="filter: drop-shadow(0 0 3rem #CB6CE6);"
          >
            <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
            <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" /> / ui
          </div>
        </h1>
        <h2 class="animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6 text-lg text-gray-300 sm:text-2xl">
          A ui library built for Tailwind CSS with components for Qwik
        </h2>

        <div class="flex justify-center gap-2">
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

        <div class="flex justify-center gap-2">
          <Link
            class="lum-btn lum-pad-xl lum-bg-blue-700 hover:lum-bg-blue-600 rounded-xl text-lg"
            href="/docs"
          >
            <Book size={30} class="text-3xl" /> Docs
          </Link>
          <a
            class="lum-btn lum-pad-xl lum-bg-pink-700 hover:lum-bg-pink-600 rounded-xl text-lg"
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
