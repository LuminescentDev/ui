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
    <div style={{
        gap: "var(--lum-label-gap)",
      }}
      {...outerProps}
      class={{
        "flex flex-col": true,
        ...getClassObject(outerProps?.class),
      }}
    >
      <label {...props} class={{
        "text-lum-text select-none flex items-center gap-1": true,
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