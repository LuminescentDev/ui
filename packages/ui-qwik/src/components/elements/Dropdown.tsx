import type { JSXChildren, PropsOf } from '@builder.io/qwik';
import { component$, Slot, useStore } from '@builder.io/qwik';
import { ChevronDown } from '../../svg/ChevronDown';

interface DropdownProps extends Omit<PropsOf<'select'>, 'class' | 'size'> {
  class?: { [key: string]: boolean };
  display?: JSXChildren;
  hover?: boolean;
  values?: {
    name: JSXChildren;
    value: string | number;
  }[];
  id: string;
}

export const Dropdown = component$<DropdownProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="pb-1 text-gray-300 select-none">
        <Slot />
      </label>
      <DropdownRaw {...props} />
    </div>
  );
});

export const DropdownRaw = component$<DropdownProps>(
  ({ id, values, class: Class, display, hover, ...props }) => {
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
        <button
          class={{
            'lum-btn': true,
            ...Class,
          }}
          onClick$={() => {
            if (!hover) store.opened = !store.opened;
          }}
        >
          {display}
          {!display && values && (
            <span id={`lui-${id}-name`} class="flex-1 text-left">
              {values.find((value) => value.value.toString() === store.value)
                ?.name ?? values[0].name}
            </span>
          )}
          <ChevronDown
            width={16}
            class={{
              'ease-out motion-safe:transition-all': true,
              'rotate-180 transform': store.opened,
              'duration-300 group-hover:rotate-180 group-hover:transform group-hover:duration-75':
                hover,
              'focus-within:rotate-180 focus-within:transform focus-within:duration-75':
                true,
            }}
          />
        </button>
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
              'lum-bg-gray-800 lum-scroll flex max-h-72 flex-col gap-1 overflow-auto rounded-md border p-1 backdrop-blur-xl select-none motion-safe:transition-all':
                true,
            }}
          >
            {values?.map(({ name, value }, i) => {
              return (
                <button
                  class={{
                    'lum-btn lum-bg-transparent': true,
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
