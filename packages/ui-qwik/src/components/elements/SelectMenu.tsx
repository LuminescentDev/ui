import type { ClassList, JSXChildren, PropsOf, QRL } from '@qwik.dev/core';
import { component$, Slot, useSignal, useStore } from '@qwik.dev/core';
import { Dropdown } from './Dropdown';
import { getClassObject } from '../functions';

interface SelectMenuProps extends Omit<PropsOf<'select'>, 'onChange$'> {
  panelClass?: ClassList;
  btnClass?: ClassList;
  noblur?: boolean;
  nocloseonclick?: boolean;
  customDropdown?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
  onChange$?: QRL<
    (
      event: Event,
      element: HTMLSelectElement,
    ) => void
  >;
  values?: {
    name: JSXChildren;
    value: string | number;
  }[];
}

export const SelectMenu = component$<SelectMenuProps>(({
  values,
  class: Class,
  panelClass = 'lum-bg-lum-input-bg',
  btnClass = 'lum-bg-transparent',
  noblur,
  nocloseonclick,
  customDropdown,
  hover,
  align,
  ...props
}) => {
  const store = useStore({
    opened: false,
    value: props.value,
  });
  const selectRef = useSignal<HTMLSelectElement>();
  const selected = values?.find(v => v.value === store.value);

  return (
    <div
      class={{
        'relative touch-manipulation': true,
        group: hover,
      }}
    >
      {values && (
        <select
          onChange$={props.onChange$}
          {...props}
          ref={selectRef}
          class="hidden"
        >
          {values.map((value, i) => {
            return (
              <option key={i} value={value.value}>{`${value.value}`}</option>
            );
          })}
        </select>
      )}
      <Dropdown
        id={props.id ? `${props.id}-dropdown` : undefined}
        opened={store.opened}
        class={{
          'w-full': true,
          ...getClassObject(Class),
        }}
        onClick$={(e, el) => {
          if (hover) return; // do not toggle on click if hover is enabled
          store.opened = !store.opened;
          if (nocloseonclick) return; // do not close on click if nocloseonclick is true
          // close on click
          const listener = (e: MouseEvent) => {
            // if the dropdown is already closed, remove the listener
            if (!store.opened) return document.removeEventListener('click', listener);

            // check if the click is outside the button
            const path = e.composedPath();
            if (path.includes(el)) return;

            // close the dropdown and remove the listener
            store.opened = false;
            document.removeEventListener('click', listener);
          };
          document.addEventListener('click', listener);
        }}
      >
        {customDropdown && <Slot name="dropdown"/>}
        {!customDropdown && (selected?.name ?? values?.[0]?.name ?? <Slot name="dropdown" />)}
      </Dropdown>
      {hover && <div class="h-2 absolute w-full" />}
      <div class={{
        'absolute z-1000 mt-2': true,
        'backdrop-blur-lg': !noblur,
        'lum-scroll flex max-h-72 flex-col gap-1 overflow-auto rounded-lum border p-1 select-none motion-safe:transition-all ease-out': true,
        'left-0': align === 'left',
        'right-0': align === 'right',
        'left-1/2 -translate-x-1/2': align === 'center',
        'pointer-events-none scale-95 opacity-0': !store.opened,
        'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75': hover,
        'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75': true,
        ...getClassObject(panelClass),
      }}
      >
        {values?.map(({ name, value }, i) => {
          return (
            <button type="button"
              class={{
                'lum-btn rounded-lum-1': true,
                ...getClassObject(btnClass),
              }}
              key={i}
              onClick$={(e, el) => {
                // close the dropdown
                el.blur();
                store.opened = false;

                // set the value of the select element
                const select = selectRef.value;
                if (select) {
                  select.value = value.toString();
                  select.dispatchEvent(new Event('change'));
                }
                store.value = value.toString();
              }}
            >
              {name}
            </button>
          );
        })}
        <Slot name="extra-buttons" />
      </div>
    </div>
  );
});
