import { component$, useStore } from '@builder.io/qwik';
import { Anchor } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'lum-btn',
  });
  return (
    <div class="lum-card">
      <Anchor id="button">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Button
        </h2>
      </Anchor>
      <div>
        <label for="button-class">class</label>
        <input
          id="button-class"
          class="lum-input"
          onInput$={(e, el) => (store.class = el.value)}
          value={store.class}
        />
        <p class="text-lum-text-secondary">
          warning: only some classes will work because of the way tailwindcss works
        </p>
      </div>
      <div class="lum-card">
        <div>
          <button class={store.class}>
            Button
          </button>
        </div>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<button class="${store.class}">
  Button
</button>`}
      />
    </div>
  );
});
