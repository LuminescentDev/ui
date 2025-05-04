import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-input': {
      '@apply flex motion-safe:transition duration-300 hover:duration-75 ease-out disabled:opacity-50 hover:drop-shadow-lg whitespace-nowrap touch-manipulation select-none lum-btn-p-2 lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md': {},
    },
  });
}