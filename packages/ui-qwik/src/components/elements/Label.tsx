import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';
import { getClassObject } from '../functions';

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
    <div class={{
      "flex flex-col gap-1": true,
      ...getClassObject(outerProps?.class),
    }} {...outerProps}>
      <label {...props} class={{
        "pb-1 text-lum-text select-none": true,
        ...getClassObject(props.class),
      }}>
        <Slot name="before-label" />
        {label}
        <Slot name="after-label" />
      </label>
      <Slot />
    </div>
  );
});