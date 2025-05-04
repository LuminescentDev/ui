import { component$, useStore } from '@builder.io/qwik';
import { Header, Nav, DropdownRaw, Toggle } from '../../index';

interface navOptions {
  fixed?: boolean;
  floating?: boolean;
  nohamburger?: boolean;
  colorClass?: string;
}

export default component$(() => {
  const store = useStore<navOptions>({});
  return (
    <div class="lum-card">
      <Header id="nav" anchor>
        Nav
      </Header>
      <Toggle id="nav-fixed" onChange$={(e, element) => store.fixed = element.checked}
        label="fixed" />
      <Toggle id="nav-floating" onChange$={(e, element) => store.floating = element.checked}
        label="floating" />
      <Toggle id="nav-nohamburger" onChange$={(e, element) => store.nohamburger = element.checked}
        label="nohamburger" />
      <label for="nav-colorclass">colorClass</label>
      <input id="nav-colorclass" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
        onInput$={(e, el) => store.colorClass = el.value}
        value={store.colorClass}
        placeholder="lum-bg-gray-900"
      />
      <div class="lum-card relative h-40">
        <Nav floating={store.floating} fixed={store.fixed} nohamburger={store.nohamburger} colorClass={store.colorClass}>

          <button q:slot="start" class={'lum-btn lum-bg-transparent'}>
            Brand
          </button>

          <button q:slot="center" class={'lum-btn lum-bg-transparent hidden sm:flex'}>
            Center Button
          </button>

          <DropdownRaw id="nav-dropdown" hover q:slot="end" class={{ 'hidden sm:flex lum-bg-transparent': true }} display="Dropdown">
            <button q:slot="extra-buttons" class={'lum-btn lum-bg-transparent'}>
              Option 1
            </button>
            <button q:slot="extra-buttons" class={'lum-btn lum-bg-transparent'}>
              Option 2
            </button>
            <button q:slot="extra-buttons" class={'lum-btn lum-bg-transparent'}>
              Option 3
            </button>
          </DropdownRaw>

          <button q:slot="mobile" class={'lum-btn lum-bg-transparent'}>
            button 1
          </button>
          <button q:slot="mobile" class={'lum-btn lum-bg-transparent'}>
            button 2
          </button>
          <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
            Dropdown
          </h3>
          <button q:slot="mobile" class={'lum-btn lum-bg-transparent'}>
            Option 1
          </button>
          <button q:slot="mobile" class={'lum-btn lum-bg-transparent'}>
            Option 2
          </button>
          <button q:slot="mobile" class={'lum-btn lum-bg-transparent'}>
            Option 3
          </button>

        </Nav>
      </div>
      <textarea class="lum-input h-32" value={`
<Nav${store.floating ? ' floating' : ''}${store.fixed ? ' fixed' : ''}${store.colorClass ? ` colorClass="${store.colorClass}"` : ''}>

  <button q:slot="start" class={'lum-btn lum-bg-transparent'}>
    Brand
  </button>

  <button q:slot="center" class={'lum-btn hidden sm:flex lum-bg-transparent'}>
    Center button
  </button>

  <DropdownRaw id="nav-dropdown" q:slot="end" hover class={{ 'hidden sm:flex lum-bg-transparent': true }} display="Dropdown">
    <button class={'lum-btn lum-bg-transparent'} q:slot="extra-buttons">
      Option 1
    </button>
    <button class={'lum-btn lum-bg-transparent'} q:slot="extra-buttons">
      Option 2
    </button>
    <button class={'lum-btn lum-bg-transparent'} q:slot="extra-buttons">
      Option 3
    </button>
  </DropdownRaw>

  <button class={'lum-btn lum-bg-transparent'} q:slot="mobile">
    button 1
  </button>
  <button class={'lum-btn lum-bg-transparent'} q:slot="mobile">
    button 2
  </button>
  <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
    Dropdown
  </h3>
  <button class={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 1
  </button>
  <button class={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 2
  </button>
  <button class={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 3
  </button>

</Nav>`} />
    </div>
  );
});
