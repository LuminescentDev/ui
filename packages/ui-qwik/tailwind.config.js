/** @type {import('tailwindcss').Config} */

import { theme } from './src/tailwind.config';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /lum-.*/,
      variants: ['hover', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /rounded-.*/,
      variants: ['hover', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /text-.*/,
      variants: ['hover', 'sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      animation: {
        ...theme.extend.animation,
      },
      keyframes: {
        ...theme.extend.keyframes,
      },
    },
  },
};
