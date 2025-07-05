import { component$, useStore } from '@builder.io/qwik';
import { Anchor, Dropdown, Sidebar, Toggle } from '../../index';

interface sidebarOptions {
  fixed?: boolean;
  floating?: boolean;
  nohamburger?: boolean;
  dropdownOpen?: boolean;
}

export default component$(() => {
  const store = useStore<sidebarOptions>({});
  return (
    <div class="lum-card">
      <Anchor id="sidebar">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Sidebar
        </h2>
      </Anchor>
      <Toggle
        id="sidebar-floating"
        onChange$={(e, element) => (store.floating = element.checked)}
        label="floating"
      />
      <div class="lum-card h-150 p-0">
        <Sidebar
          floating={store.floating}
        >
          <h3 q:slot="title" class="text-lg font-bold">
            Sidebar
          </h3>

          <div class="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Search..."
              class="w-full lum-input lum-btn-p-1"
            />
          </div>

          <button class="lum-btn lum-bg-transparent hidden sm:flex">
            Button
          </button>

          <Dropdown opened={store.dropdownOpen}
            id="sidebar-dropdown"
            onClick$={() => {
              store.dropdownOpen = !store.dropdownOpen;
            }}
            class={{
              'w-full lum-bg-transparent border-b-lum-border/10 -mb-4': true,
            }}
          >
            Dropdown
          </Dropdown>
          <div class={{
            'transition-all duration-200 overflow-hidden flex flex-col gap-1 pl-2 pt-2 border-l border-l-lum-border/10': true,
            'max-h-0 opacity-0 scale-98': !store.dropdownOpen,
            'max-h-screen opacity-100 mt-1': store.dropdownOpen,
          }}>
            <button class="lum-btn lum-bg-transparent lum-btn-p-1">
              Option 1
            </button>
            <button class="lum-btn lum-bg-transparent lum-btn-p-1">
              Option 2
            </button>
            <button class="lum-btn lum-bg-transparent lum-btn-p-1">
              Option 3
            </button>
          </div>
        </Sidebar>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Sidebar${store.floating ? ' floating' : ''}>
  <h3 q:slot="title" class="text-lg font-bold">
    Sidebar
  </h3>

  <div class="flex gap-3 items-center">
    <input
      type="text"
      placeholder="Search..."
      class="w-full lum-input lum-btn-p-1"
    />
  </div>

  <button class="lum-btn lum-bg-transparent hidden sm:flex">
    Button
  </button>

  <Dropdown opened={store.dropdownOpen}
    id="sidebar-dropdown"
    onClick$={() => {
      store.dropdownOpen = !store.dropdownOpen;
    }}
    class={{
      'w-full lum-bg-transparent border-b-lum-border/10 -mb-4': true,
    }}
  >
    Dropdown
  </Dropdown>
  <div class={{
    'transition-all duration-200 overflow-hidden flex flex-col gap-1 pl-2 pt-2 border-l border-l-lum-border/10': true,
    'max-h-0 opacity-0 scale-98': !store.dropdownOpen,
    'max-h-screen opacity-100 mt-1': store.dropdownOpen,
  }}>
    <button class="lum-btn lum-bg-transparent lum-btn-p-1">
      Option 1
    </button>
    <button class="lum-btn lum-bg-transparent lum-btn-p-1">
      Option 2
    </button>
    <button class="lum-btn lum-bg-transparent lum-btn-p-1">
      Option 3
    </button>
  </div>
</Sidebar>`}
      />
    </div>
  );
});
