import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';

export default plugin(function ({ matchUtilities, theme }: PluginAPI) {
  const colors: { [key: string]: string } = {};
  Object.keys(theme('colors')).forEach((color) => {
    colors[color] = color;
    for (let i = 1; i < 20; i++) {
      colors[`${color}/${i*5}`] = `${color}/${i*5/100}`;
    }
  });
  matchUtilities({
    'lum-bg': (value) => {
      const color = value.split('-')[0];
      const opacity = '/' + (value.split('/')[1] ?? 1);
      const shades = Object.values(colors).filter((c) => {
        return c.startsWith(color) && !c.includes('/');
      });
      const index = shades.indexOf(value.split('/')[0]);
      const borderColor = shades[index - 1 < 0 ? shades.length - 1 : index - 1] || shades[index + 1 > shades.length - 1 ? 0 : index + 1];
      return {
        borderColor: `${theme(`colors.${borderColor ?? value}${opacity}`) ?? borderColor ?? value}`,
      };
    },
  }, {
    values: colors,
  });
  return;
});