import { component$ } from '@qwik.dev/core';
import type { IconProps } from './IconProps';

/**
 * @deprecated Icons are going to be moved to a separate package @luminescent/icons-qwik.
 */
export const Waterfall = component$<IconProps>(({ size, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
});
