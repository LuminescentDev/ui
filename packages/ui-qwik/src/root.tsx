import { component$ } from '@builder.io/qwik';

import LumClasses from '~/components/docs/lum-classes';
import LumBtn from './components/docs/lum-btn';
import LumCard from './components/docs/lum-card';
import LumInput from './components/docs/lum-input';

import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import ColorPicker from '~/components/docs/ColorPicker';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import Dropdown from '~/components/docs/Dropdown';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';

import './global.css';

export default component$(() => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Luminescent UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="mx-auto flex max-w-6xl flex-col gap-4 bg-gray-950 px-4 py-24">
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
      </body>
    </>
  );
});
