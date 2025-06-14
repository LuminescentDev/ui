import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface ToggleProps
  extends Omit<
    PropsOf<'input'> & { type: 'checkbox' },
    'class' | 'bind:checked' | 'type' | 'children'
  > {
  class?: string;
  checkbox?: boolean;
  round?: boolean;
  label?: string | JSXOutput;
}

export const Toggle = component$<ToggleProps>(
  ({
    checkbox,
    round,
    label,
    ...props
  }) => {
    return (
      <div
        class={{
          'flex touch-manipulation items-center gap-3': true,
        }}
      >
        <label class="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            {...props}
            class={{
              'peer sr-only': true,
            }}
          />
          <div
            class={{
              'peer h-7 duration-300 ease-out hover:duration-75 motion-safe:transition':
                true,
              'after:absolute after:top-[4px] after:left-[4px] after:h-5 after:w-5 after:border after:duration-300 after:ease-out after:content-[\'\'] after:hover:duration-75 after:motion-safe:transition-all':
                true,
              'rounded-lum after:rounded-lum-1': !round,
              'rounded-full after:rounded-full': round,
              'w-12 peer-checked:after:translate-x-full': !checkbox,
              'w-7 after:opacity-0 peer-checked:after:opacity-100': checkbox,
              'lum-toggle-bg-gray-800 peer-checked:lum-toggle-bg-blue-500': true,
              [props.class ?? '']: !!props.class,
            }}
          />
        </label>
        {label && (
          <label for={props.id} class="flex gap-2 text-gray-300 select-none">
            {label}
          </label>
        )}
      </div>
    );
  },
);
