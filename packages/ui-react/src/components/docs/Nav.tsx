import { Nav, SelectMenuRaw, Toggle } from '../../index';
import { useState } from 'react';

export default function NavDoc() {
  const [fixed, setFixed] = useState(false);
  const [floating, setFloating] = useState(false);
  const [nohamburger, setNoHamburger] = useState(false);
  const [colorClass, setColorClass] = useState('lum-bg-lum-card-bg');

  return (
    <div className="lum-card">
      <h2 className="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Nav
      </h2>
      <Toggle
        id="nav-fixed"
        onChange={(e) => (setFixed(e.target.checked))}
        label="fixed"
      />
      <Toggle
        id="nav-floating"
        onChange={(e) => (setFloating(e.target.checked))}
        label="floating"
      />
      <Toggle
        id="nav-nohamburger"
        onChange={(e) => (setNoHamburger(e.target.checked))}
        label="nohamburger"
      />
      <label htmlFor="nav-colorclass">colorClass</label>
      <input
        id="nav-colorclass"
        className="lum-input"
        onInput={(e) => (setColorClass(e.currentTarget.value))}
        value={colorClass}
        placeholder="lum-bg-lum-card-bg"
      />
      <div className="lum-card relative h-40">
        <Nav
          floating={floating}
          fixed={fixed}
          nohamburger={nohamburger}
          colorClass={colorClass}
          start={
            <button className="lum-btn lum-bg-transparent">
              Brand
            </button>
          }
          center={
            <button className="lum-btn lum-bg-transparent hidden sm:flex">
              Center Button
            </button>
          }
          end={
            <SelectMenuRaw
              id="nav-dropdown"
              hover customDropdown
              className="lum-bg-transparent hidden sm:flex"
              dropdown={
                <p>
                  Dropdown
                </p>
              }
              extra-buttons={
                <>
                  <button className="lum-btn lum-bg-transparent rounded-lum-1">
                    Option 1
                  </button>
                  <button className="lum-btn lum-bg-transparent rounded-lum-1">
                    Option 2
                  </button>
                  <button className="lum-btn lum-bg-transparent rounded-lum-1">
                    Option 3
                  </button>
                </>
              }
            />
          }
          mobile={
            <>
              <button className="lum-btn lum-bg-transparent">
                button 1
              </button>
              <button className="lum-btn lum-bg-transparent">
                button 2
              </button>
              <h3 className="mx-4 border-b border-gray-700 py-2 text-lum-text-secondary">
                Dropdown
              </h3>
              <button className="lum-btn lum-bg-transparent">
                Option 1
              </button>
              <button className="lum-btn lum-bg-transparent">
                Option 2
              </button>
              <button className="lum-btn lum-bg-transparent">
                Option 3
              </button>
            </>
          }
        />
      </div>
      <textarea
        className="lum-input h-32"
        value={`
<Nav${floating ? ' floating' : ''}${fixed ? ' fixed' : ''}${colorClass ? ` colorClass="${colorClass}"` : ''}>

  <button q:slot="start" className={'lum-btn lum-bg-transparent'}>
    Brand
  </button>

  <button q:slot="center" className={'lum-btn hidden sm:flex lum-bg-transparent'}>
    Center button
  </button>

  <DropdownRaw id="nav-dropdown" q:slot="end" hover className={{ 'hidden sm:flex lum-bg-transparent': true }} display="Dropdown">
    <button className={'lum-btn lum-bg-transparent rounded-lum-1'} q:slot="extra-buttons">
      Option 1
    </button>
    <button className={'lum-btn lum-bg-transparent rounded-lum-1'} q:slot="extra-buttons">
      Option 2
    </button>
    <button className={'lum-btn lum-bg-transparent rounded-lum-1'} q:slot="extra-buttons">
      Option 3
    </button>
  </DropdownRaw>

  <button className={'lum-btn lum-bg-transparent'} q:slot="mobile">
    button 1
  </button>
  <button className={'lum-btn lum-bg-transparent'} q:slot="mobile">
    button 2
  </button>
  <h3 q:slot="mobile" className="mx-4 py-2 text-lum-text-secondary border-b border-gray-700">
    Dropdown
  </h3>
  <button className={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 1
  </button>
  <button className={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 2
  </button>
  <button className={'lum-btn lum-bg-transparent'} q:slot="mobile">
    Option 3
  </button>

</Nav>`}
      />
    </div>
  );
};
