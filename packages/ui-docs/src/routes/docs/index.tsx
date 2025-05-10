import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Readme from '../../../../../README.md';

import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import ColorPicker from '~/components/docs/ColorPicker';
import Dropdown from '~/components/docs/Dropdown';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';
import LumClasses from '~/components/docs/lum-classes';
import LumBtn from '~/components/docs/lum-btn';
import LumCard from '~/components/docs/lum-card';
import LumInput from '~/components/docs/lum-input';

export default component$(() => {
  return (
    <section class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-32">
      <h1 class="mb-2 flex items-center gap-4 text-4xl font-extrabold tracking-wide">
        Luminescent UI Documentation
      </h1>

      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Get Started
      </h2>
      <div class="lum-card">
        <div class="flex flex-col gap-4 text-sm [&>pre]:rounded-lg [&>pre]:border [&>pre]:border-gray-800 [&>pre]:bg-gray-950/40 [&>pre]:p-4 [&>pre]:text-gray-400">
          <Readme />
        </div>
      </div>

      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Luminescent UI Tailwind Components
      </h2>
      <LumClasses />
      <LumBtn />
      <LumCard />
      <LumInput />

      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Luminescent UI Qwik Components
      </h2>
      <Anchor />
      <Blobs />
      <ColorPicker />
      <Dropdown />
      <Nav />
      <NumberInput />
      <Toggle />
      <IconsLogos />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent UI Docs',
  meta: [
    {
      name: 'description',
      content: 'Luminescent UI components documentation',
    },
  ],
};
