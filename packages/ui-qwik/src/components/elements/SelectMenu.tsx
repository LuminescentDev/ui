import type { JSXChildren, PropsOf } from '@builder.io/qwik';
import { component$, Slot, useSignal, useStore } from '@builder.io/qwik';
import { Dropdown } from './Dropdown';

interface SelectMenuProps extends Omit<PropsOf<'select'>, 'class' | 'size'> {
  class?: { [key: string]: boolean };
  panelClass?: string;
  btnClass?: string;
  noblur?: boolean;
  customDropdown?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
  values?: {
    name: JSXChildren;
    value: string | number;
  }[];
}

export const SelectMenu = component$<SelectMenuProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="pb-1 text-lum-text select-none">
        <Slot />
      </label>
      <SelectMenuRaw {...props}>
        <div q:slot="dropdown">
          {(props.customDropdown || !props.values?.length) && <Slot name="dropdown" />}
        </div>
        <div q:slot="extra-buttons">
          <Slot name="extra-buttons" />
        </div>
      </SelectMenuRaw>
    </div>
  );
});

export const SelectMenuRaw = component$<SelectMenuProps>(
  ({ values, class: Class, panelClass = 'lum-bg-lum-input-bg', btnClass = 'lum-bg-transparent', noblur, customDropdown, hover, align, ...props }) => {
    const store = useStore({
      opened: false,
      value: props.value,
    });
    const selectRef = useSignal<HTMLSelectElement>();

    return (
      <div
        class={{
          'relative touch-manipulation': true,
          group: hover,
        }}
      >
        {values && (
          <select
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
          opened={store.opened}
          class={{
            'w-full': true,
            ...Class,
          }}
          onClick$={() => {
            if (!hover) store.opened = !store.opened;
          }}
        >
          {customDropdown && <Slot name="dropdown"/>}
          {!customDropdown && (
            <span>
              {values &&
                (values.find((value) => value.value.toString() === store.value)?.name
                  ?? values[0].name)
              }
              {!values && <Slot name="dropdown" />}
            </span>
          )}
        </Dropdown>
        {hover && <div class="h-2 absolute w-full" />}
        <div class={{
          'absolute z-[1000] mt-2 transition-all ease-out': true,
          'backdrop-blur-lg': !noblur,
          'lum-scroll flex max-h-72 flex-col gap-1 overflow-auto rounded-lum border p-1 select-none motion-safe:transition-all': true,
          'left-0': align === 'left',
          'right-0': align === 'right',
          'left-1/2 -translate-x-1/2': align === 'center',
          'pointer-events-none scale-95 opacity-0': !store.opened,
          'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75': hover,
          'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75': true,
          [panelClass]: true,
        }}
        >
          {values?.map(({ name, value }, i) => {
            return (
              <button type="button"
                class={{
                  'lum-btn rounded-lum-1': true,
                  [btnClass]: true,
                }}
                key={i}
                onClick$={() => {
                  store.opened = false;
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
  },
);
