import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

export const Select = component$<PropsOf<'select'>>(({
  ...props
}) => {
  return (
    <SelectRaw
      {...props}
    >
      <Slot />
    </SelectRaw>
  );
});
export const SelectRaw = component$<PropsOf<'select'>>(({
  ...props
}) => {
  return (
    <select
      {...props}
    >
      <Slot />
    </select>
  );
});

export const Checkbox = component$<Omit<PropsOf<'input'> & { type: 'checkbox' }, 'type'>>(({
    ...props
  }) => {
    return (
      <input type="checkbox"
        {...props}
      />
    );
  },
);