import { component$, useStore } from '@builder.io/qwik';
import { Dropdown, Toggle, Anchor } from '@luminescent/ui-qwik';

interface DropdownOptions {
  display?: string;
  hover?: boolean;
}

export default component$(() => {
  const store = useStore<DropdownOptions>({});
  return (
    <div class="lum-card">
      <Anchor id="dropdown">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Dropdown
        </h2>
      </Anchor>
      <label for="dropdown-display">display</label>
      <input
        id="dropdown-display"
        class="lum-input"
        onInput$={(e, el) => (store.display = el.value)}
        value={store.display}
      />
      <Toggle
        id="dropdown-hover"
        label="hover"
        onInput$={(e, el) => (store.hover = el.checked)}
      >
        hover
      </Toggle>
      <div>
        <Dropdown
          id="dropdown-input"
          values={[
            {
              name: <div class="bg-red-500">Any element you want</div>,
              value: '1',
            },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}
          value="1"
          display={
            store.display ? (
              <div dangerouslySetInnerHTML={store.display}></div>
            ) : undefined
          }
          hover={store.hover}
        >
          Select Input
        </Dropdown>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Dropdown id="dropdown-input"${store.display ? ` display={${store.display}}` : ''}${store.hover ? ' hover' : ''}>
  values={[
    { name: <div class="bg-red-500">Any element you want</div>, value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3', color: 'blue' },
  ]}
  value="1"
>
  Select Input
</Dropdown>`}
      />
    </div>
  );
});
