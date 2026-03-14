import { component$ } from '@qwik.dev/core';
import type { IconProps } from './IconProps';

export const Plus = component$<IconProps>(({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-plus-icon lucide-plus"
      {...props}
    >
      <path d="M5 12h14"/>
      <path d="M12 5v14"/>
    </svg>
  );
});
