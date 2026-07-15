import { component$, useStore } from '@qwik.dev/core';
import {
  SelectMenu as SelectMenuEl,
  Toggle,
  Anchor,
  Label,
} from '@luminescent/ui-qwik';
import { Plus } from '~/svg/Plus';

interface SelectMenuOptions {
  customDropdown?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
}

export const SelectMenu = component$(({ id }: { id: string }) => {
  const store = useStore<SelectMenuOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2
          id={id}
          class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl"
        >
          SelectMenu
        </h2>
      </Anchor>
      <Toggle
        id="selectmenu-customDropdown"
        onInput$={(e, el) => (store.customDropdown = el.checked)}
      >
        customDropdown
      </Toggle>
      <Toggle
        id="selectmenu-hover"
        onInput$={(e, el) => (store.hover = el.checked)}
      >
        hover
      </Toggle>
      <div class="flex">
        <Label for="selectmenu-align">
          align
          <SelectMenuEl
            id="selectmenu-align"
            onChange$={(e, element) =>
              (store.align = element.value as 'left' | 'right' | 'center')
            }
            values={['left', 'right', 'center'].map((preview) => ({
              name: preview,
              value: preview,
            }))}
            value="left"
          />
        </Label>
      </div>
      <div class="flex">
        <Label for="selectmenu-input">
          Select Menu
          <SelectMenuEl
            id="selectmenu-input"
            values={[
              {
                name: 'Custom Button',
                value: '1',
                custom: true,
              },
              { name: 'Button with a plus icon', value: '2' },
              { name: 'Option 3', value: '3' },
              { name: 'Option 4', value: '4' },
            ]}
            value="1"
            customDropdown={store.customDropdown}
            hover={store.hover}
            align={store.align}
          >
            <p q:slot="dropdown">Fallback content</p>

            <button class="lum-bg-red-500 rounded p-1" q:slot="1">
              Custom Button
            </button>

            <Plus q:slot="before-2" size={20} />

            <button q:slot="extra-content" class="lum-btn lum-bg-transparent">
              Option 5 (not an actual value)
            </button>
            <input
              q:slot="extra-content"
              class="lum-input lum-bg-transparent"
              placeholder="custom value..."
            />
          </SelectMenuEl>
        </Label>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<SelectMenu id="selectmenu-input"
  values={[
    {
      name: 'Custom Button',
      value: '1',
      custom: true,
    },
    { name: 'Button with a plus icon', value: '2' },
    { name: 'Option 3', value: '3' },
    { name: 'Option 4', value: '4' },
  ]}
  value="1"
  customDropdown={store.customDropdown}
  hover={store.hover}
  align={store.align}
>
  <p q:slot="dropdown">
    Fallback content
  </p>

  <button class="lum-bg-red-500 p-1 rounded" q:slot="1">
    Custom Button
  </button>

  <Plus q:slot="before-2" size={20} />

  <button q:slot="extra-content" class="lum-btn lum-bg-transparent">
    Option 5 (not an actual value)
  </button>
  <input q:slot="extra-content" class="lum-input lum-bg-transparent" placeholder="custom value..."/>
</SelectMenu>`}
      />
    </div>
  );
});
