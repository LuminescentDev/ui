import { component$, Fragment, PropsOf, Slot, useSignal } from '@qwik.dev/core';
import { getClassObject } from '../functions';
import { Dropdown, DropdownProps } from './Dropdown';

interface SelectMenuProps extends Omit<DropdownProps, 'onChange$'> {
  customDropdownButton?: boolean;
  onChange$?: PropsOf<'select'>['onChange$'];
  selectProps?: Omit<PropsOf<'select'>, 'onChange$'>;
  btnProps?: PropsOf<'button'>;
  values: {
    name: string;
    value: string | number;
    custom?: boolean;
  }[];
}

export const SelectMenu = component$<SelectMenuProps>(
  ({
    customDropdownButton,
    onChange$,
    selectProps,
    btnProps,
    values,
    class: Class,
    ...props
  }) => {
    const selectValue = useSignal(props.value);
    const selectRef = useSignal<HTMLSelectElement>();
    const selected =
      values?.find((v) => v.value === selectValue.value) ?? values?.[0];

    return (
      <Dropdown {...props}>
        <select
          q:slot="outer"
          onChange$={onChange$}
          {...selectProps}
          ref={selectRef}
          class="hidden"
        >
          {values.map((value, i) => {
            return (
              <option key={i} value={value.value}>{`${value.value}`}</option>
            );
          })}
        </select>

        <Fragment q:slot="dropdown">
          <Slot name="dropdown-before" />
          {(customDropdownButton || !selected?.name || selected?.custom) && (
            <Slot name="dropdown" />
          )}
          {!customDropdownButton && !selected?.custom && selected?.name}
          <Slot name="dropdown-after" />
        </Fragment>

        {values.map(({ name, value, custom }, i) => {
          return (
            <button
              key={i}
              type="button"
              data-dismissDropdown="true"
              class={{
                ...getClassObject(btnProps?.class),
                'lum-btn rounded-lum-1 lum-bg-transparent': true,
              }}
              onClick$={(e, el) => {
                // blur the button to remove focus and close the dropdown
                el.blur();

                // set the value of the select element
                const select = selectRef.value;
                if (select) {
                  select.value = value.toString();
                  select.dispatchEvent(new Event('change'));
                }
                selectValue.value = value.toString();
              }}
            >
              <Slot key={i} name={`before-${value}`} />
              {!custom && <>{name}</>}
              {custom && <Slot key={i} name={value.toString()} />}
              <Slot key={i} name={`after-${value}`} />
            </button>
          );
        })}
        <Slot name="extra-content" />
      </Dropdown>
    );
  }
);
