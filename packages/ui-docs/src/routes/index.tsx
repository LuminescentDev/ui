import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { Blobs, LogoBirdflop, LogoDiscord, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { Book, Github, Globe } from 'lucide-icons-qwik';
import { SocialButtons } from '~/components/Nav';

import Luminara from '../components/images/Luminara.png?jsx';
const Mineplace = '/mineplace.png';

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
            <LogoLuminescentFull size={70} class="mt-2 hidden sm:flex" />
            <LogoLuminescentFull size={45} class="mt-1 flex sm:hidden" /> / ui
          </div>
        </h1>
        <h2 class="animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6 text-lg text-lum-text sm:text-2xl">
          A ui library built for Tailwind CSS with components for Qwik and React
        </h2>

        <div class="flex gap-2 justify-center mb-12">
          <SocialButtons large />
        </div>

        <h2 class="text-gray-100 text-3xl font-bold mb-2">
          Showcase
        </h2>
        <p class="text-gray-300">
          Here are some of the websites that use luminescent/ui, if you want to be featured here, please contact us on Discord.
        </p>

        <div class="flex relative w-full overflow-x-hidden my-10 justify-evenly">
          <div class="flex gap-2 overflow-x-auto py-2">
            <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
              <LogoBirdflop size={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
              <h3 class="text-gray-100 text-xl font-bold">
                Birdflop
              </h3>
              <div class="flex gap-2 items-center">
                <QwikTag /><ReactTag />
              </div>
              <p class="text-gray-400 text-sm">
                A registered 501(c)(3) nonprofit server host aiming to provide affordable and accessible hosting and resources.
              </p>
              <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
              <div class={{
                'lum-card lum-bg-gray-900/50 absolute inset-0 p-2! gap-2! border-0! text-white! w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
                '*:h-full *:w-full *:lum-btn *:lum-bg-transparent *:hover:lum-bg-cyan-900/20 *:flex *:flex-col *:justify-center *:transition-all *:items-center *:gap-2': true,
                '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
              }}>
                <a href={'https://birdflop.com'}>
                  <Globe size={24} />
                  Visit page
                </a>
                <a href={'https://github.com/birdflop/web'}>
                  <Github size={24} />
                  Github
                </a>
                <a href={'https://discord.gg/nmgtX5z'}>
                  <LogoDiscord size={24} />
                  Discord
                </a>
              </div>
            </div>
            <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
              <img src={Mineplace} alt="Mineplace Logo" width={200} height={200} class="mx-auto mb-5" />
              <h3 class="text-gray-100 text-xl font-bold">
                Mineplace
              </h3>
              <div class="flex gap-2 items-center">
                <QwikTag />
              </div>
              <p class="text-gray-400 text-sm">
                A 3d version of r/place in Minecraft, powered by Birdflop Hosting.
              </p>
              <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
              <div class={{
                'lum-card lum-bg-gray-900/50 absolute inset-0 p-2! gap-2! border-0! text-white! w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
                '*:h-full *:w-full *:lum-btn *:lum-bg-transparent *:hover:lum-bg-cyan-900/20 *:flex *:flex-col *:justify-center *:transition-all *:items-center *:gap-2': true,
                '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
              }}>
                <a href={'https://mineplace.me'}>
                  <Globe size={24} />
                  Visit page
                </a>
                <a href={'https://github.com/LuminescentDev/mineplace'}>
                  <Github size={24} />
                  Github
                </a>
                <a href={'https://discord.gg/qNj5kMwE'}>
                  <LogoDiscord size={24} />
                  Discord
                </a>
              </div>
            </div>
            <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
              <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
              <Luminara class="mx-auto mb-5" />
              <h3 class="text-gray-100 text-xl font-bold">
                Luminara SMP
              </h3>
              <div class="flex gap-2 items-center">
                <QwikTag />
              </div>
              <p class="text-gray-400 text-sm">
                A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!
              </p>
              <div class={{
                'lum-card lum-bg-gray-900/50 absolute inset-0 p-2! gap-2! border-0! text-white! w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
                '*:h-full *:w-full *:lum-btn *:lum-bg-transparent *:hover:lum-bg-pink-900/20 *:flex *:flex-col *:justify-center *:transition-all *:items-center *:gap-2': true,
                '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
              }}>
                <a href={'https://mc.luminescent.dev'}>
                  <Globe size={24} />
                  Visit page
                </a>
                <a href={'https://discord.gg/Mw7fNpdg5N'}>
                  <LogoDiscord size={24} />
                  Discord
                </a>
              </div>
            </div>
            <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
              <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
              <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5" />
              <h3 class="text-gray-100 text-xl font-bold">
                Burgers on Fleek
              </h3>
              <div class="flex gap-2 items-center">
                <QwikTag />
              </div>
              <p class="text-gray-400 text-sm">
                The burgers you are craving.™ Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019
              </p>
              <div class={{
                'lum-card lum-bg-gray-900/50 absolute inset-0 p-2! gap-2! border-0! text-white! w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
                '*:h-full *:w-full *:lum-btn *:lum-bg-transparent *:hover:lum-bg-orange-900/20 *:flex *:flex-col *:justify-center *:transition-all *:items-center *:gap-2': true,
                '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
              }}>
                <a href={'https://burgersonfleek.ca'}>
                  <Globe size={24} />
                  Visit page
                </a>
                <a href={'https://github.com/saboooor/burgersonfleek'}>
                  <Github size={24} />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link
          class="lum-btn lum-btn-p-4 lum-bg-blue-900/60 hover:lum-bg-blue-900 mt-10"
          href="/docs"
        >
          <Book size={30} /> Documentation
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
