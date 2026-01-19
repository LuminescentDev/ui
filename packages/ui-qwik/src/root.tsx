import { component$ } from '@builder.io/qwik';
import Settings from './components/docs/Settings';

import LumClasses from '~/components/docs/lum-classes';
import LumBtn from './components/docs/lum-btn';
import LumCard from './components/docs/lum-card';
import LumInput from './components/docs/lum-input';

import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import ColorPicker from '~/components/docs/ColorPicker';
import Dropdown from '~/components/docs/Dropdown';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import RangeInput from './components/docs/RangeInput';
import SelectMenu from './components/docs/SelectMenu';
import Sidebar from './components/docs/Sidebar';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';

import { Sidebar as SidebarElement } from './components/elements';

import './global.css';

export default component$(() => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Luminescent UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="flex">
        <SidebarElement>
          <h3 q:slot="title" class="text-lg font-bold">
            Luminescent UI Documentation
          </h3>

          <a class="lum-btn lum-bg-transparent hidden sm:flex" href="#settings">
            Settings
          </a>

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
        <div class="flex flex-col gap-4 mx-auto my-24 px-4">
          <h1 q:slot="title" class="text-5xl font-bold mb-10">
            Luminescent UI Documentation
          </h1>

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
          <RangeInput id="range-input" />
          <SelectMenu id="select-menu" />
          <Sidebar id="sidebar" />
          <Toggle id="toggle" />
          <IconsLogos id="icons-logos" />
        </div>
        <SidebarElement position='right'>
          <h2 q:slot='title' class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
            Settings
          </h2>
          <Settings />
        </SidebarElement>
      </body>
    </>
  );
});
