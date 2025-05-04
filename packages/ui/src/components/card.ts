import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-card': {
      '@apply flex flex-col gap-3 whitespace-pre-wrap lum-bg-gray-900 p-7 rounded-lg': {},
    },
  });
}