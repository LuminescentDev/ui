import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import ColorPicker from '~/components/docs/ColorPicker';
import Dropdown from '~/components/docs/Dropdown';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';
import { Header } from '@luminescent/ui-qwik';
import Readme from '../../../../../README.md';

export default component$(() => {
  return (
    <section class="max-w-6xl mx-auto py-32 px-4 flex flex-col gap-4">
      <h1 class="text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4">
        Luminescent UI Documentation
      </h1>

      <Header>
        Get Started
      </Header>
      <div class="lum-card">
        <div class="flex flex-col gap-4 text-sm [&>pre]:p-4 [&>pre]:bg-gray-950/40 [&>pre]:border [&>pre]:border-gray-800 [&>pre]:rounded-lg [&>pre]:text-gray-400">
          <Readme />
        </div>
      </div>

      <Header>
        Components
      </Header>
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