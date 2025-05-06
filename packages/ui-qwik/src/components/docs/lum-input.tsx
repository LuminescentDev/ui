import { component$, useStore } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'lum-input',
  });
  return (
    <div class="lum-card">
      <Header id="input" anchor>
        Input
      </Header>
      <div>
        <label for="input-class">class</label>
        <input
          id="input-class"
          class="lum-input lum-pad-sm lum-bg-gray-800 hover:lum-bg-gray-700 w-full rounded-md text-sm"
          onInput$={(e, el) => (store.class = el.value)}
          value={store.class}
        />
        <p class="text-gray-500">
          warning: only lum- classes are safelisted and other classes that
          aren't loaded in tailwind and arbitrary values will not work
        </p>
      </div>
      <div class="lum-card">
        <div>
          <input class={store.class} />
          <textarea
            class={{
              [store.class]: true,
              'h-32': true,
            }}
          />
        </div>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<input class="${store.class}"/>
<textarea class={{
  '${store.class}': true,
  'h-32': true,
}} />`}
      />
    </div>
  );
});
