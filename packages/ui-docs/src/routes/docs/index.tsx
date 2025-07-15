import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Readme from '../../../../../README.md';

import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import ColorPicker from '~/components/docs/ColorPicker';
import SelectMenu from '~/components/docs/SelectMenu';
import Dropdown from '~/components/docs/Dropdown';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';
import LumClasses from '~/components/docs/lum-classes';
import LumBtn from '~/components/docs/lum-btn';
import LumCard from '~/components/docs/lum-card';
import LumInput from '~/components/docs/lum-input';
import Settings from '~/components/docs/Settings';
import { Sidebar as SidebarElement } from '@luminescent/ui-qwik';
import Sidebar from '~/components/docs/Sidebar';

export default component$(() => {
  return <div class="flex gap-12 xl:gap-20 items-stretch lg:pl-0 xl:pr-0 min-h-dvh">
    <SidebarElement>
      <h3 q:slot="title" class="text-lg font-bold">
        Luminescent UI Documentation
      </h3>

      <h4 class="text-lg font-bold mt-4 pb-2 ml-2 border-b border-b-lum-border/10">
        Tailwind Components
      </h4>
      <a class="lum-btn lum-bg-transparent" href="#classes">
        Classes
      </a>
      <a class="lum-btn lum-bg-transparent" href="#button">
        Button
      </a>
      <a class="lum-btn lum-bg-transparent" href="#card">
        Card
      </a>
      <a class="lum-btn lum-bg-transparent" href="#input">
        Input
      </a>

      <h4 class="text-lg font-bold mt-4 pb-2 ml-2 border-b border-b-lum-border/10">
        Qwik Components
      </h4>
      <a class="lum-btn lum-bg-transparent" href="#anchor">
        Anchor
      </a>
      <a class="lum-btn lum-bg-transparent" href="#blobs">
        Blobs
      </a>
      <a class="lum-btn lum-bg-transparent" href="#color-picker">
        Color Picker
      </a>
      <a class="lum-btn lum-bg-transparent" href="#dropdown">
        Dropdown
      </a>
      <a class="lum-btn lum-bg-transparent" href="#nav">
        Nav
      </a>
      <a class="lum-btn lum-bg-transparent" href="#number-input">
        Number Input
      </a>
      <a class="lum-btn lum-bg-transparent" href="#select-menu">
        Select Menu
      </a>
      <a class="lum-btn lum-bg-transparent" href="#sidebar">
        Sidebar
      </a>
      <a class="lum-btn lum-bg-transparent" href="#toggle">
        Toggle
      </a>
      <a class="lum-btn lum-bg-transparent" href="#icons-logos">
        Icons & Logos
      </a>
    </SidebarElement>
    <section class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-32">
      <h1 q:slot="title" class="text-5xl font-bold mb-10">
        Luminescent UI Documentation
      </h1>

      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Get Started
      </h2>
      <div class="lum-card border-gradient-1 before:from-luminescent-200 before:to-luminescent-800 markdown nerfed-markdown">
        <Readme />
      </div>

      <h2 class="text-xl font-bold sm:text-2xl mt-6 mb-2">
        Luminescent UI Tailwind Components
      </h2>
      <LumClasses id="classes" />
      <LumBtn id="button" />
      <LumCard id="card" />
      <LumInput id="input" />

      <h2 class="text-xl font-bold sm:text-2xl mt-6 mb-2">
        Luminescent UI Qwik Components
      </h2>
      <Anchor id="anchor" />
      <Blobs id="blobs" />
      <ColorPicker id="color-picker" />
      <Dropdown id="dropdown" />
      <Nav id="nav" />
      <NumberInput id="number-input" />
      <SelectMenu id="select-menu" />
      <Sidebar id="sidebar" />
      <Toggle id="toggle" />
      <IconsLogos id="icons-logos" />
    </section>
    <SidebarElement class={{
      'border-l-1 border-r-0': true,
    }}>
      <h2 q:slot='title' class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Settings
      </h2>
      <Settings />
    </SidebarElement>
  </div>;
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
