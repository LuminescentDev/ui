import { component$ } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import Readme from 'root/README.md';

import * as Docs from '~/components/docs';
import { Sidebar } from '@luminescent/ui-qwik';

export default component$(() => {
  return <div class="flex gap-12 xl:gap-20 items-stretch lg:pl-0 xl:pr-0 min-h-dvh">
    <Sidebar>
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
      <a class="lum-btn lum-bg-transparent" href="#color-picker">
        Color Picker
      </a>
      <a class="lum-btn lum-bg-transparent" href="#dropdown">
        Dropdown
      </a>
      <a class="lum-btn lum-bg-transparent" href="#label">
        Label
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
    </Sidebar>
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
      <Docs.LumClasses id="classes" />
      <Docs.LumBtn id="button" />
      <Docs.LumCard id="card" />
      <Docs.LumInput id="input" />

      <h2 class="text-xl font-bold sm:text-2xl mt-6 mb-2">
        Luminescent UI Qwik Components
      </h2>
      <Docs.Anchor id="anchor" />
      <Docs.ColorPicker id="color-picker" />
      <Docs.Dropdown id="dropdown" />
      <Docs.Label id="label" />
      <Docs.Nav id="nav" />
      <Docs.NumberInput id="number-input" />
      <Docs.RangeInput id="range-input" />
      <Docs.SelectMenu id="select-menu" />
      <Docs.Sidebar id="sidebar" />
      <Docs.Toggle id="toggle" />
    </section>
    <Sidebar class={{
      'border-l border-r-0': true,
    }}>
      <h2 q:slot='title' class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Settings
      </h2>
      <Docs.Settings />
    </Sidebar>
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
