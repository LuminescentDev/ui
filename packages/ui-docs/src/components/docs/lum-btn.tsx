import { component$, useStore } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    class: 'lum-btn',
  });
  return (
    <div class="lum-card">
      <Header id="button" anchor>
        Button
      </Header>
      <div>
        <label for="button-class">class</label>
        <input
          id="button-class"
          class="lum-input"
          onInput$={(e, el) => (store.class = el.value)}
          value={store.class}
        />
        <p class="text-gray-500">
          warning: only some classes will work because of the way tailwindcss works
        </p>
      </div>
      <div class="lum-card">
        <div>
          <button class={store.class}>Button</button>
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
