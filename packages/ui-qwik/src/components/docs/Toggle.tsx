import { component$, useStore } from '@builder.io/qwik';
import {
  Anchor,
  SelectMenu,
  Toggle,
  toggleOnColorClasses,
  toggleOffColorClasses,
} from '../../index';

interface toggleOptions {
  checkbox?: boolean;
  round?: boolean;
  center?: boolean;
  onColor?: keyof typeof toggleOnColorClasses;
  offColor?: keyof typeof toggleOffColorClasses;
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
      <SelectMenu
        id="toggle-oncolor"
        onChange$={(e, element) =>
          (store.onColor = element.value as keyof typeof toggleOnColorClasses)
        }
        values={Object.keys(toggleOnColorClasses).map((color) => ({
          name: color,
          value: color,
        }))}
        value="blue"
      >
        onColor
      </SelectMenu>
      <SelectMenu
        id="toggle-offcolor"
        onChange$={(e, element) =>
          (store.offColor = element.value as keyof typeof toggleOffColorClasses)
        }
        values={Object.keys(toggleOffColorClasses).map((color) => ({
          name: color,
          value: color,
        }))}
        value="darkgray"
      >
        offColor
      </SelectMenu>
      <Toggle
        id="toggle-center"
        onChange$={(e, element) => (store.center = element.checked)}
        label="center"
      />
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
          onColor={store.onColor}
          offColor={store.offColor}
          center={store.center}
        />
      </div>
      <textarea
        class="lum-input h-32"
        value={`<Toggle id="toggle-input" label="Toggle"${store.round ? ' round' : ''}${store.checkbox ? ' checkbox' : ''}${store.onColor ? ` onColor="${store.onColor}"` : ''}${store.offColor ? ` offColor="${store.offColor}"` : ''}${store.center ? ' center' : ''} />`}
      />
    </div>
  );
});
