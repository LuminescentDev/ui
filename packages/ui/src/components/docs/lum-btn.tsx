import { component$, useStore } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'lum-btn lum-pad-md text-base lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md',
  });
  return (
    <div class="lum-card lum-bg-gray-900 lum-pad-4xl lum-pad-equal rounded-lg">
      <Header id="button" anchor>
        Button
      </Header>
      <div>
        <label for="button-class">class</label>
        <input id="button-class" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
          onInput$={(e, el) => store.class = el.value}
          value={store.class}
        />
        <p class="text-gray-500">warning: only lum- classes are safelisted and other classes that aren't loaded in tailwind and arbitrary values will not work</p>
      </div>
      <div class="lum-card lum-bg-gray-900 lum-pad-4xl lum-pad-equal rounded-lg">
        <div>
          <button class={store.class}>
            Button
          </button>
        </div>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<button class="${store.class}">
  Button
</button>`} />
    </div>
  );
});
