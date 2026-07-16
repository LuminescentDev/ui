import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';
import { ChevronDown } from '../../svg/ChevronDown';
import { getClassObject } from '../functions';

export interface DropdownButtonProps extends PropsOf<'button'> {
  hover?: boolean;
  opened?: boolean;
  noChevron?: boolean;
}

export const DropdownButton = component$<DropdownButtonProps>(
  ({ hover, opened, noChevron, ...props }) => {
    return (
      <button
        type="button"
        {...props}
        class={{
          'group lum-btn': true,
          ...getClassObject(props.class),
        }}
      >
        <span class="flex flex-1 items-center gap-2 text-left">
          <Slot />
        </span>
        {!noChevron && (
          <ChevronDown
            size={16}
            class={{
              'ease-out motion-safe:transition-transform': true,
              'rotate-180 transform': opened,
              'duration-300 group-hover:rotate-180 group-hover:transform group-hover:duration-75':
                hover,
              'focus-within:rotate-180 focus-within:transform focus-within:duration-75': true,
            }}
          />
        )}
      </button>
    );
  }
);
