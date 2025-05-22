import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { ChevronDown } from '../../svg/ChevronDown';

interface DropdownProps extends Omit<PropsOf<'button'>, 'class'> {
  class?: { [key: string]: boolean };
  hover?: boolean;
  opened?: boolean;
}

export const Dropdown = component$<DropdownProps>(({ class: Class, hover, opened, ...props }) => {
  return (
    <button
      class={{
        'lum-btn': true,
        ...Class,
      }}
      {...props}
    >
      <div class="flex-1 text-left">
        <Slot />
      </div>
      <ChevronDown
        size={16}
        class={{
          'ease-out motion-safe:transition-all': true,
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