import { component$, useStore } from '@builder.io/qwik';
import { Anchor } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    class: 'lum-input',
  });
  return (
    <div class="lum-card">
      <Anchor id="input">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Input
        </h2>
      </Anchor>
      <div>
        <label for="input-class">class</label>
        <input
          id="input-class"
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
