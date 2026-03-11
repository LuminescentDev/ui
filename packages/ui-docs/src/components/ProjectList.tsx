import { JSX } from '@qwik.dev/core';
import { LogoBirdflop, LogoDiscord } from '../../../ui-qwik-old/lib-types';
import { OliTag, PurpurTag, QarthTag, SabTag } from './Tags';
import { Component } from '@qwik.dev/core';
const Mineplace = '/mineplace.svg';
import Luminara from '../components/images/Luminara.png?jsx';

export type Project = {
  title: string;
  description: string;
  image: JSX.Element;
  tags: Component[];
  color: string;
  btnClass: string;
  buttons: Button[]
}

type Button = {
  icon: JSX.Element;
  title: string;
  href: string;
}

export const Projects: Project[] = [
  {
    title: 'Birdflop',
    description: 'A registered 501(c)(3) nonprofit server host aiming to provide affordable and accessible hosting and resources.',
    image: <LogoBirdflop size={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" fillGradient={['#54daf4', '#545eb6']}/>,
    tags: [SabTag, OliTag, PurpurTag],
    color: 'lum-bg-cyan-500',
    btnClass: 'hover:lum-bg-cyan-500/20',
    buttons: [
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/nmgtX5z',
      },
    ],
  },
  {
    title: 'Mineplace',
    description: 'A 3d version of r/place in Minecraft, powered by Birdflop Hosting.',
    image: <img src={Mineplace} alt="Mineplace Logo" width={200} height={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag, OliTag, QarthTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/qNj5kMwE',
      },
    ],
  },
  {
    title: 'Luminara',
    description: 'A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!',
    image: <Luminara class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag],
    color: 'lum-bg-pink-500',
    btnClass: 'hover:lum-bg-pink-500/20',
    buttons: [
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/Mw7fNpdg5N',
      },
    ],
  },
  {
    title: 'Burgers on Fleek',
    description: 'The burgers you are craving.™ Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019.',
    image: <img src="https://www.burgersonfleek.ca/branding/svg/icon.svg" height={200} width={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
    ],
  },
];