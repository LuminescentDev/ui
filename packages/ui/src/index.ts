import plugin from 'tailwindcss/plugin';
import bg from './components/bg';
import btn from './components/btn';
import card from './components/card';
import input from './components/input';
import loading from './components/loading';
import scroll from './components/scroll';

export default plugin(function (plugin) {
  bg(plugin);
  btn(plugin);
  card(plugin);
  input(plugin);
  loading(plugin);
  scroll(plugin);
  return;
});