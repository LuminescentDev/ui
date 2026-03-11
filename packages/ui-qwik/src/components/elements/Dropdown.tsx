import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';
import { ChevronDown } from '../../svg/ChevronDown';

interface DropdownProps extends Omit<PropsOf<'button'>, 'class'> {
  class?: { [key: string]: boolean };
  hover?: boolean;
  opened?: boolean;
}

export const Dropdown = component$<DropdownProps>(({ class: Class, hover, opened, ...props }) => {
  return (
    <button type="button"
      class={{
        'group lum-btn': true,
        ...Class,
      }}
      {...props}
    >
      <span class="flex-1 text-left">
        <Slot />
      </span>
      <ChevronDown
        size={16}
        class={{
          'ease-out motion-safe:transition-transform': true,
          'rotate-180 transform': opened,
          'duration-300 group-hover:rotate-180 group-hover:transform group-hover:duration-75':
            hover,
          'focus-within:rotate-180 focus-within:transform focus-within:duration-75':
            true,
        }}
      />
    </button>
  );
});