import { component$, JSXOutput } from '@qwik.dev/core';
import { OliTag, PurpurTag, QarthTag, SabTag } from './Tags';
import { Component } from '@qwik.dev/core';

import { Birdflop } from '@luminescent/icons-qwik';
import Luminara from '~/components/images/Luminara.png?jsx';
import { IconProps, SiDiscord, SiGithub } from 'simple-icons-qwik';
import { Globe } from 'lucide-icons-qwik';
export const LuminaraIcon = component$(() => {
  return <Luminara class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />;
});

export type Project = {
  title: string;
  description: string;
  image: Component | JSXOutput | string;
  tags: Component[];
  color: string;
  btnClass: string;
  buttons: Button[]
}

type Button = {
  icon: Component<IconProps>;
  title: string;
  href: string;
}

export const Projects: Project[] = [
  {
    title: 'Birdflop',
    description: 'A registered 501(c)(3) nonprofit server host aiming to provide affordable and accessible hosting and resources.',
    image: <Birdflop size={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" fillGradient={['#54daf4', '#545eb6']}/>,
    tags: [SabTag, OliTag, PurpurTag],
    color: 'lum-bg-cyan-500',
    btnClass: 'hover:lum-bg-cyan-500/20',
    buttons: [
      {
        icon: Globe,
        title: 'Visit page',
        href: 'https://birdflop.com',
      },
      {
        icon: SiGithub,
        title: 'Github',
        href: 'https://github.com/birdflop/web',
      },
      {
        icon: SiDiscord,
        title: 'Discord',
        href: 'https://discord.gg/nmgtX5z',
      },
    ],
  },
  {
    title: 'Mineplace',
    description: 'A 3d version of r/place in Minecraft, powered by Birdflop Hosting.',
    image: '/mineplace.svg',
    tags: [SabTag, OliTag, QarthTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
      {
        icon: Globe,
        title: 'Visit page',
        href: 'https://mineplace.me',
      },
      {
        icon: SiGithub,
        title: 'Github',
        href: 'https://github.com/LuminescentDev/mineplace',
      },
      {
        icon: SiDiscord,
        title: 'Discord',
        href: 'https://discord.gg/qNj5kMwE',
      },
    ],
  },
  {
    title: 'Luminara',
    description: 'A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!',
    image: <LuminaraIcon />,
    tags: [SabTag],
    color: 'lum-bg-pink-500',
    btnClass: 'hover:lum-bg-pink-500/20',
    buttons: [
      {
        icon: Globe,
        title: 'Visit page',
        href: 'https://luminaramc.org',
      },
      {
        icon: SiGithub,
        title: 'Github',
        href: 'https://github.com/saboooor/Luminara',
      },
      {
        icon: SiDiscord,
        title: 'Discord',
        href: 'https://discord.gg/Mw7fNpdg5N',
      },
    ],
  },
  {
    title: 'Burgers on Fleek',
    description: 'The burgers you are craving.™ Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019.',
    image: '/burgersonfleek.svg',
    tags: [SabTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
      {
        icon: Globe,
        title: 'Visit page',
        href: 'https://burgersonfleek.ca',
      },
      {
        icon: SiGithub,
        title: 'Github',
        href: 'https://github.com/saboooor/burgersonfleek',
      },
    ],
  },
];