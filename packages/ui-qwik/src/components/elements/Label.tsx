import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

interface LabelProps extends PropsOf<'label'> {
  label?: string,
}

export const Label = component$<LabelProps>((props) => {
  return (
    <div class="flex flex-col">
      <label {...props} class="pb-1 text-lum-text select-none">
        {props.label}
        <Slot q:slot="label" />
      </label>
      <Slot />
    </div>
  );
});