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

export default component$(({ id }: { id: string }) => {
  const store = useStore<toggleOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
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
      >
        checkbox
      </Toggle>
      <Toggle
        id="toggle-round"
        onChange$={(e, element) => (store.round = element.checked)}
      >
        round
      </Toggle>
      <div>
        <Toggle
          id="toggle-input"
          round={store.round}
          checkbox={store.checkbox}
          class={store.class}
        >
          Toggle
        </Toggle>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Toggle id="toggle-input"${store.round ? ' round' : ''}${store.checkbox ? ' checkbox' : ''}${store.class ? ` class="${store.class}"` : ''}>
  Toggle
</Toggle>`}
      />
    </div>
  );
});
