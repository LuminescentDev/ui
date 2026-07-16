import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot, useSignal } from '@qwik.dev/core';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
import { getClassObject } from '../functions';

export interface DropdownProps extends DropdownButtonProps {
  panelProps?: PropsOf<'div'>;
  noblur?: boolean;
  nocloseonclick?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
  outerProps?: PropsOf<'div'>;
}

export const Dropdown = component$<DropdownProps>(
  ({
    class: Class,
    panelProps,
    noblur,
    nocloseonclick,
    hover,
    align,
    outerProps,
    ...props
  }) => {
    const opened = useSignal(false);

    return (
      <div
        {...outerProps}
        class={{
          'relative touch-manipulation': true,
          group: hover,
          ...getClassObject(outerProps?.class),
        }}
      >
        <Slot name="outer" />
        <DropdownButton
          {...props}
          id={props.id ? `${props.id}-dropdown` : undefined}
          opened={opened.value}
          class={{
            'w-full': true,
            ...getClassObject(Class),
          }}
          onClick$={(e, el) => {
            if (hover) return; // do not toggle on click if hover is enabled
            opened.value = !opened.value;
            if (nocloseonclick) return; // do not close on click if nocloseonclick is true
            // close on click
            const listener = (e: MouseEvent) => {
              // if the dropdown is already closed, remove the listener
              if (!opened.value)
                return document.removeEventListener('click', listener);

              // check if the click is outside the button and if the element dismisses the dropdown on click
              const path = e.composedPath();
              if (
                path.includes(el) &&
                path.some(
                  (el) =>
                    el instanceof HTMLElement &&
                    el.dataset.dismissDropdown !== 'true'
                )
              )
                return;

              // close the dropdown and remove the listener
              opened.value = false;
              document.removeEventListener('click', listener);
            };
            document.addEventListener('click', listener);
          }}
        >
          <Slot name="dropdown" />
        </DropdownButton>
        {hover && <div class="absolute h-2 w-full" />}
        <div
          class={{
            ...getClassObject(panelProps?.class),
            'lum-bg-lum-input-bg absolute z-1000 mt-2': true,
            'lum-scroll rounded-lum flex max-h-72 flex-col gap-1 overflow-auto border p-1 ease-out select-none motion-safe:transition-all': true,
            'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75': true,
            'backdrop-blur-lg': !noblur,
            'left-0': align === 'left',
            'right-0': align === 'right',
            'left-1/2 -translate-x-1/2': align === 'center',
            'pointer-events-none scale-95 opacity-0': !opened.value,
            'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75':
              hover,
          }}
        >
          <Slot />
        </div>
      </div>
    );
  }
);
