import plugin from 'tailwindcss/plugin';
import bg from './components/bg';
import btn from './components/btn';
import card from './components/card';
import input from './components/input';
import loading from './components/loading';
import pad from './components/pad';
import scroll from './components/scroll';

export default plugin(async function (plugin) {
  bg(plugin);
  btn(plugin);
  card(plugin);
  input(plugin);
  loading(plugin);
  pad(plugin);
  scroll(plugin);
});