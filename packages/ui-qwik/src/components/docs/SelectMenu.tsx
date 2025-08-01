import { component$, useStore } from '@builder.io/qwik';
import { SelectMenu, Toggle, Anchor } from '../../index';

interface SelectMenuOptions {
  customDropdown?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
}

export default component$(({ id }: { id: string }) => {
  const store = useStore<SelectMenuOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
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
      <div class="flex">
        <SelectMenu
          id="selectmenu-align"
          onChange$={(e, element) =>
            (store.align = element.value as
              | 'left'
              | 'right'
              | 'center')
          }
          values={['left', 'right', 'center'].map((preview) => ({
            name: preview,
            value: preview,
          }))}
          value="left"
        >
          align
        </SelectMenu>
      </div>
      <div class="flex">
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
          align={store.align}
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
  value="1"${store.customDropdown ? ' customDropdown' : ''}${store.hover ? ' hover' : ''}${store.align ? ` align="${store.align}"` : ''}
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
