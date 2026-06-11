import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

interface LabelProps extends PropsOf<'label'> {
  label?: string,
  outerProps?: PropsOf<'div'>,
}

export const Label = component$<LabelProps>(({
  label,
  outerProps,
  ...props
}) => {
  return (
    <div class="flex flex-col" {...outerProps}>
      <label {...props} class="pb-1 text-lum-text select-none">
        {label}
        <Slot q:slot="label" />
      </label>
      <Slot />
    </div>
  );
});