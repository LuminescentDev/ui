import { component$, useStore } from '@qwik.dev/core';
import { Anchor, Dropdown as DropdownEl, Toggle } from '@luminescent/ui-qwik';

interface dropdownOptions {
  hover?: boolean;
  top?: boolean;
  align?: 'left' | 'right' | 'center';
}

export const Dropdown = component$(({ id }: { id: string }) => {
  const store = useStore<dropdownOptions>({ align: 'left' });

  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2
          id={id}
          class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl"
        >
          Dropdown
        </h2>
        <h3 class="text-lum-text-secondary text-sm">
          A dropdown menu component with customizable alignment, trigger mode,
          and panel position
        </h3>
      </Anchor>
      <div class="flex flex-wrap items-center gap-4">
        <Toggle
          id="dropdown-doc-hover"
          onChange$={(e, element) => (store.hover = element.checked)}
        >
          hover
        </Toggle>
        <Toggle
          id="dropdown-doc-top"
          onChange$={(e, element) => (store.top = element.checked)}
        >
          top
        </Toggle>
        <div class="flex items-center gap-2">
          <label class="text-sm">align:</label>
          <select
            class="lum-input"
            onChange$={(e, el) =>
              (store.align = el.value as 'left' | 'right' | 'center')
            }
          >
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>
        </div>
      </div>
      <div class="lum-card relative flex h-48 items-center justify-center">
        <DropdownEl
          id="demo-dropdown"
          hover={store.hover}
          top={store.top}
          align={store.align}
        >
          <span q:slot="dropdown">Open Dropdown</span>
          <button class="lum-btn lum-bg-transparent rounded-lum-1">
            Option 1
          </button>
          <button class="lum-btn lum-bg-transparent rounded-lum-1">
            Option 2
          </button>
          <button class="lum-btn lum-bg-transparent rounded-lum-1">
            Option 3
          </button>
        </DropdownEl>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Dropdown id="demo-dropdown"${store.hover ? ' hover' : ''}${store.top ? ' top' : ''}${store.align ? ` align="${store.align}"` : ''}>
  <span q:slot="dropdown">Open Dropdown</span>
  <button class="lum-btn lum-bg-transparent rounded-lum-1">
    Option 1
  </button>
  <button class="lum-btn lum-bg-transparent rounded-lum-1">
    Option 2
  </button>
  <button class="lum-btn lum-bg-transparent rounded-lum-1">
    Option 3
  </button>
</Dropdown>`}
      />
    </div>
  );
});
