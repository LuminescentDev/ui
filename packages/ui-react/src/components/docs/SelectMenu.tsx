import { SelectMenu, Toggle } from '../../index';
import { useState } from 'react';

export default function SelectMenuDoc() {
  const [customDropdown, setCustomDropdown] = useState(false);
  const [hover, setHover] = useState(false);
  const [align, setAlign] = useState<'left' | 'right' | 'center'>('left');

  return (
    <div className="lum-card">
      <h2 className="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        SelectMenu
      </h2>
      <Toggle
        id="selectmenu-customDropdown"
        onInput={(e) => (setCustomDropdown(e.currentTarget.checked))}
      >
        customDropdown
      </Toggle>
      <Toggle
        id="selectmenu-hover"
        onInput={(e) => (setHover(e.currentTarget.checked))}
      >
        hover
      </Toggle>
      <div className="flex">
        <SelectMenu
          id="selectmenu-align"
          onChange={(e) => (setAlign(e.currentTarget.value as 'left' | 'right' | 'center'))}
          values={['left', 'right', 'center'].map((preview) => ({
            name: preview,
            value: preview,
          }))}
          defaultValue="left"
        >
          align
        </SelectMenu>
      </div>
      <div className="flex">
        <SelectMenu
          id="selectmenu-input"
          values={[
            {
              name: <div className="lum-bg-red-500">Any element you want</div>,
              value: '1',
            },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}
          defaultValue="1"
          customDropdown={customDropdown}
          hover={hover}
          align={align}
          dropdown={
            <p>Fallback content</p>
          }
          extra-buttons={<>
            <button className="lum-btn lum-bg-transparent">
              Option 4 (not an actual value)
            </button>
            <button className="lum-btn lum-bg-transparent">
              Option 4 (not an actual value)
            </button>
          </>}
        >
          Select Menu
        </SelectMenu>
      </div>
      <textarea
        className="lum-input h-32"
        defaultValue={`
<SelectMenu
  id="selectmenu-input"
  values={[
    {
      name: <div className="lum-bg-red-500">Any element you want</div>,
      value: '1',
    },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}
  defaultValue="1"${customDropdown ? ' customDropdown' : ''}${hover ? ' hover' : ''}${align ? ` align="${align}"` : ''}
>
  Select Menu
  <p q:slot="dropdown">
    Fallback content
  </p>
  <button q:slot="extra-buttons" className="lum-btn lum-bg-transparent">
    Option 4 (not an actual value)
  </button>
  <input q:slot="extra-buttons" className="lum-input lum-bg-transparent" placeholder="custom value..."/>
</SelectMenu>`}
      />
    </div>
  );
};
