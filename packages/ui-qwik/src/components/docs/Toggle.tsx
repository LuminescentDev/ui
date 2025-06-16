import { component$, useStore } from '@builder.io/qwik';
import {
  Anchor,
  Toggle,
} from '../../index';

interface toggleOptions {
  checkbox?: boolean;
  round?: boolean;
  class?: string;
}

export default component$(() => {
  const store = useStore<toggleOptions>({});
  return (
    <div class="lum-card">
      <Anchor id="toggle">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Toggle
        </h2>
      </Anchor>
      <div>
        <label for="card-class">class</label>
        <input
          id="card-class"
          class="lum-input w-full"
          placeholder='lum-toggle-bg-gray-800 peer-checked:lum-toggle-bg-blue-500'
          onInput$={(e, el) => (store.class = el.value)}
          value={store.class}
        />
        <p class="text-lum-text-secondary">
          warning: only some classes will work because of the way tailwindcss works
        </p>
      </div>
      <Toggle
        id="toggle-checkbox"
        onChange$={(e, element) => (store.checkbox = element.checked)}
        label="checkbox"
      />
      <Toggle
        id="toggle-round"
        onChange$={(e, element) => (store.round = element.checked)}
        label="round"
      />
      <div>
        <Toggle
          id="toggle-input"
          label="Toggle"
          round={store.round}
          checkbox={store.checkbox}
          class={store.class}
        />
      </div>
      <textarea
        class="lum-input h-32"
        value={`<Toggle id="toggle-input" label="Toggle"${store.round ? ' round' : ''}${store.checkbox ? ' checkbox' : ''}${store.class ? ` class="${store.class}"` : ''} />`}
      />
    </div>
  );
});
