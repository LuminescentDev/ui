import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-scroll': {
      '@apply scroll-smooth': {},
      '&::-webkit-scrollbar': {
        '@apply appearance-none w-2 h-2': {},
      },
      '&::-webkit-scrollbar-track': {
        '@apply bg-transparent': {},
      },
      '&::-webkit-scrollbar-thumb': {
        '@apply bg-white/20 rounded-full border border-white/20': {},
      },
      '&::-webkit-scrollbar-thumb:hover': {
        '@apply bg-white/30': {},
      },
      '&::-webkit-scrollbar-thumb:active': {
        '@apply bg-white/40': {},
      },
      '&::-webkit-scrollbar-corner': {
        '@apply bg-transparent': {},
      },
    },
  });
}