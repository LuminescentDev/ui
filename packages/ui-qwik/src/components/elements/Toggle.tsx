import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

interface ToggleProps
  extends Omit<
    PropsOf<'input'> & { type: 'checkbox' },
    'class' | 'bind:checked' | 'type' | 'children'
  > {
  class?: string;
  checkbox?: boolean;
  round?: boolean;
}

export const Toggle = component$<ToggleProps>(
  ({
    checkbox,
    round,
    ...props
  }) => {
    return (
      <div class="flex touch-manipulation items-center gap-3">
        <label class="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            {...props}
            class="peer sr-only"
          />
          <div
            class={{
              'peer h-7 duration-300 ease-out hover:duration-75 motion-safe:transition':
                true,
              'after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:border after:duration-300 after:ease-out after:content-[\'\'] after:hover:duration-75 after:motion-safe:transition-all':
                true,
              'rounded-lum after:rounded-lum-1': !round,
              'rounded-full after:rounded-full': round,
              'w-12 peer-checked:after:translate-x-full': !checkbox,
              'w-7 after:opacity-0 peer-checked:after:opacity-100': checkbox,
              'lum-toggle-bg-lum-input-bg peer-checked:lum-toggle-bg-lum-accent': true,
              [props.class ?? '']: !!props.class,
            }}
          />
        </label>
        <label for={props.id} class="flex gap-2 text-lum-text select-none empty:hidden">
          <Slot />
        </label>
      </div>
    );
  },
);
