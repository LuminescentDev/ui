import type { PluginAPI } from 'tailwindcss/types/config';

export const defaultClasses = 'lum-pad-md text-base lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-btn': {
      '@apply flex items-center gap-3 motion-safe:transition duration-300 hover:duration-75 ease-out disabled:opacity-50 hover:drop-shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none text-center': {},
      [`@apply ${defaultClasses}`]: {},
    },
  });
}