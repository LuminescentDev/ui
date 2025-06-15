import type { JSXChildren, PropsOf } from '@builder.io/qwik';
import { component$, Slot, useStore } from '@builder.io/qwik';
import { Dropdown } from './Dropdown';

interface SelectMenuProps extends Omit<PropsOf<'select'>, 'class' | 'size'> {
  class?: { [key: string]: boolean };
  customDropdown?: boolean;
  hover?: boolean;
  values?: {
    name: JSXChildren;
    value: string | number;
  }[];
  id: string;
}

export const SelectMenu = component$<SelectMenuProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="pb-1 text-gray-300 select-none">
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
  ({ id, values, class: Class, customDropdown, hover, ...props }) => {
    const store = useStore({
      opened: false,
      value: props.value,
    });

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
            id={id}
            class={{
              hidden: true,
            }}
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
          class={Class}
          onClick$={() => {
            if (!hover) store.opened = !store.opened;
          }}
        >
          {customDropdown && <Slot name="dropdown"/>}
          {!customDropdown && (
            <span id={`lui-${id}-name`}>
              {values &&
                (values.find((value) => value.value.toString() === store.value)?.name
                  ?? values[0].name)
              }
              {!values && <Slot name="dropdown" />}
            </span>
          )}
        </Dropdown>
        <div
          class={{
            'absolute top-full left-0 z-[1000] pt-2 transition-all ease-out':
              true,
            'pointer-events-none scale-95 opacity-0': !store.opened,
            'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75':
              hover,
            'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75':
              true,
          }}
        >
          <div
            id={`lui-${id}-opts`}
            class={{
              'lum-bg-lum-input-bg lum-scroll flex max-h-72 flex-col gap-1 overflow-auto rounded-lum border p-1 select-none motion-safe:transition-all':
                true,
            }}
          >
            {values?.map(({ name, value }, i) => {
              return (
                <button type="button"
                  class={{
                    'lum-btn lum-bg-transparent rounded-lum-1': true,
                  }}
                  key={i}
                  onClick$={() => {
                    store.opened = false;
                    const select = document.getElementById(
                      id,
                    ) as HTMLSelectElement | null;
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
      </div>
    );
  },
);
