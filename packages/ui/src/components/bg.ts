import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ matchUtilities, theme }: PluginAPI) {
  const colors: { [key: string]: string } = {};
  Object.entries(theme('colors')!).forEach(([color, value]) => {
    if (typeof value == 'string') {
      colors[color] = color;
    }
    else {
      Object.keys(value).forEach((shade) => {
        colors[`${color}-${shade}`] = `${color}.${shade}`;
        for (let i = 1; i < 20; i++) {
          colors[`${color}-${shade}/${i*5}`] = `${color}.${shade}/${i*5}`;
        }
      });
    }
  });
  matchUtilities({
    'lum-bg': (value) => {
      const color = value.split('-')[0];
      const shades = Object.values(colors).filter((c) => {
        return c.startsWith(color) && !c.includes('/');
      });
      const index = shades.indexOf(value.split('/')[0]);
      const borderColor = shades[index - 1 < 0 ? shades.length - 1 : index - 1] || shades[index + 1 > shades.length - 1 ? 0 : index + 1];
      const textColor = shades[index - 5 < 0 ? shades.length - 1 : index - 5] || shades[index + 5 > shades.length - 1 ? 0 : index + 5];

      return {
        color: textColor == value ? 'inherit' : theme(`colors.${textColor}`) ?? 'inherit',
        backgroundColor: `${theme(`colors.${value.split('/')[0]}`) ?? value}`,
        border: `1px solid ${theme(`colors.${borderColor ?? value}`) ?? borderColor ?? value}`,
        outline: 'none',
        '&:focus': {
          border: `1px solid ${textColor == value ? 'white' : theme(`colors.${textColor}`) ?? 'white'}`,
        },
      };
    },
  }, {
    values: colors,
  });
}