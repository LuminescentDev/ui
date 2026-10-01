import type React from 'react';
import { useRef, useState } from 'react';
import { Dropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown';
import { getClasses } from '../functions';

export interface SelectMenuProps extends Omit<DropdownProps, 'onChange'> {
  customDropdownButton?: boolean;
  customDropdown?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectProps?: Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;
  btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  values?: {
    name: React.ReactNode;
    value: string | number;
    custom?: boolean;
  }[];
  dropdownBefore?: React.ReactNode;
  dropdownAfter?: React.ReactNode;
  extraContent?: React.ReactNode;
  renderBefore?: (value: string | number) => React.ReactNode;
  renderAfter?: (value: string | number) => React.ReactNode;
  renderOption?: (value: string | number) => React.ReactNode;
}

export function SelectMenu({
  customDropdownButton,
  customDropdown,
  onChange,
  selectProps,
  btnProps,
  values,
  dropdownBefore,
  dropdownAfter,
  extraContent,
  children,
  panelProps,
  renderBefore,
  renderAfter,
  renderOption,
  ...props
}: SelectMenuProps) {
  const isCustomButton = customDropdownButton || customDropdown;
  const initialVal =
    (typeof props.value === 'string' || typeof props.value === 'number'
      ? props.value
      : values?.[0]?.value) ?? '';

  const [internalValue, setSelectValue] = useState<string | number>(initialVal);
  const selectValue = props.value ?? internalValue;
  const selectRef = useRef<HTMLSelectElement>(null);
  const selected =
    values?.find((v) => v.value.toString() === selectValue.toString()) ??
    values?.[0];

  const dropdownLabel = (
    <>
      {dropdownBefore}
      {(isCustomButton || !selected?.name || selected?.custom) && children}
      {!isCustomButton && !selected?.custom && selected?.name}
      {dropdownAfter}
    </>
  );

  return (
    <Dropdown
      {...props}
      panelProps={{ role: 'listbox', ...panelProps }}
      dropdown={dropdownLabel}
      outerContent={
        values && (
          <select
            {...selectProps}
            onChange={(e) => {
              setSelectValue(e.target.value);
              if (onChange) onChange(e);
            }}
            ref={selectRef}
            value={selectValue}
            className="hidden"
          >
            {values.map((val, i) => (
              <option key={i} value={val.value}>
                {`${val.value}`}
              </option>
            ))}
          </select>
        )
      }
    >
      {values?.map(({ name, value, custom }, i) => (
        <button
          key={i}
          {...btnProps}
          type="button"
          role="option"
          aria-selected={selectValue.toString() === value.toString()}
          data-dismiss-dropdown="true"
          className={getClasses({
            'lum-btn rounded-lum-1 lum-bg-transparent': true,
            'lum-bg-lum-accent/80 hover:lum-bg-lum-accent/100':
              selectValue.toString() === value.toString(),
            [btnProps?.className ?? '']: !!btnProps?.className,
          })}
          onClick={(e) => {
            btnProps?.onClick?.(e);
            if (e.defaultPrevented) return;
            e.currentTarget.blur();
            const select = selectRef.current;
            if (select) {
              select.value = value.toString();
              select.dispatchEvent(new Event('change', { bubbles: true }));
            }
            setSelectValue(value.toString());
          }}
        >
          {renderBefore?.(value)}
          {custom ? (renderOption?.(value) ?? name) : name}
          {renderAfter?.(value)}
        </button>
      ))}
      {extraContent}
    </Dropdown>
  );
}

export const SelectMenuRaw = SelectMenu;
