import type React from 'react';
import { getClasses } from '../functions';
import { Dropdown } from './Dropdown';
import { useRef, useState } from 'react';

interface SelectMenuProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  customDropdown?: boolean;
  panelClass?: string;
  btnClass?: string;
  noblur?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
  values?: {
    name: React.ReactNode;
    value: string | number;
  }[];
  dropdown?: React.ReactNode;
  'extra-buttons'?: React.ReactNode;
}

export function SelectMenu({
  children,
  ...props
}: SelectMenuProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="pb-1 text-lum-text select-none">
        {children}
      </label>
      <SelectMenuRaw {...props}
        dropdown={(props.customDropdown || !props.values?.length)
          ? props.dropdown : undefined
        }
        extra-buttons={props['extra-buttons']}>
      </SelectMenuRaw>
    </div>
  );
}

export function SelectMenuRaw({
  values, className, panelClass = 'lum-bg-lum-input-bg', btnClass = 'lum-bg-transparent', noblur, customDropdown, hover, align,
  ...props
}: SelectMenuProps) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState(props.value?.toString() || (values && values[0]?.value.toString()) || '');
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <div
      className={getClasses({
        'relative touch-manipulation': true,
        group: hover,
      })}
    >
      {values && (
        <select
          {...props}
          className="hidden"
          ref={selectRef}
        >
          {values.map((value, i) => {
            return (
              <option key={i} value={value.value}>{`${value.value}`}</option>
            );
          })}
        </select>
      )}
      <Dropdown
        opened={opened}
        className={getClasses({
          'w-full': true,
          [className ?? '']: !!className,
        })}
        onClick={() => {
          if (!hover) setOpened(!opened);
        }}
      >
        {customDropdown && props.dropdown}
        {!customDropdown && (
          <span>
            {values &&
              (values.find((v) => v.value.toString() === value)?.name
                ?? values[0].name)
            }
            {!values && props.dropdown}
          </span>
        )}
      </Dropdown>
      {hover && <div className="h-2 absolute w-full" />}
      <div className={getClasses({
        'absolute z-[1000] mt-2 transition-all ease-out': true,
        'backdrop-blur-lg': !noblur,
        'lum-scroll flex max-h-72 flex-col gap-1 overflow-auto rounded-lum border p-1 select-none motion-safe:transition-all': true,
        'left-0': align === 'left',
        'right-0': align === 'right',
        'left-1/2 -translate-x-1/2': align === 'center',
        'pointer-events-none scale-95 opacity-0': !opened,
        'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75': hover,
        'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75': true,
        [panelClass]: true,
      })}
      >
        {values?.map(({ name, value }, i) => {
          return (
            <button type="button"
              className={getClasses({
                'lum-btn rounded-lum-1': true,
                [btnClass]: true,
              })}
              key={i}
              onClick={() => {
                setOpened(false);
                const select = selectRef.current;
                if (select) {
                  select.value = value.toString();
                  select.dispatchEvent(new Event('change', {
                    bubbles: true,
                    cancelable: true,
                  }));
                }
                setValue(value.toString());
              }}
            >
              {name}
            </button>
          );
        })}
        {props['extra-buttons']}
      </div>
    </div>
  );
}