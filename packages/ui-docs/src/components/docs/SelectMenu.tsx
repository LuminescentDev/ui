import { component$, useStore } from '@builder.io/qwik';
import { SelectMenu, Toggle, Anchor } from '@luminescent/ui-qwik';

interface SelectMenuOptions {
  customDropdown?: boolean;
  hover?: boolean;
}

export default component$(() => {
  const store = useStore<SelectMenuOptions>({});
  return (
    <div class="lum-card">
      <Anchor id="selectmenu">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          SelectMenu
        </h2>
      </Anchor>
      <Toggle
        id="selectmenu-customDropdown"
        label="customDropdown"
        onInput$={(e, el) => (store.customDropdown = el.checked)}
      />
      <Toggle
        id="selectmenu-hover"
        label="hover"
        onInput$={(e, el) => (store.hover = el.checked)}
      />
      <div>
        <SelectMenu
          id="selectmenu-input"
          values={[
            {
              name: <div class="lum-bg-red-500">Any element you want</div>,
              value: '1',
            },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}
          value="1"
          customDropdown={store.customDropdown}
          hover={store.hover}
        >
          Select Menu
          <p q:slot="dropdown">
            Fallback content
          </p>
          <button q:slot="extra-buttons" class="lum-btn lum-bg-transparent">
            Option 4 (not an actual value)
          </button>
          <input q:slot="extra-buttons" class="lum-input lum-bg-transparent" placeholder="custom value..."/>
        </SelectMenu>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<SelectMenu
  id="selectmenu-input"
  values={[
    {
      name: <div class="lum-bg-red-500">Any element you want</div>,
      value: '1',
    },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}
  value="1"
  customDropdown={store.customDropdown}
  hover={store.hover}
>
  Select Menu
  <p q:slot="dropdown">
    Fallback content
  </p>
  <button q:slot="extra-buttons" class="lum-btn lum-bg-transparent">
    Option 4 (not an actual value)
  </button>
  <input q:slot="extra-buttons" class="lum-input lum-bg-transparent" placeholder="custom value..."/>
</SelectMenu>`}
      />
    </div>
  );
});
