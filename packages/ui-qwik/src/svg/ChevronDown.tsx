import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const ChevronDown = component$<IconProps>(({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-chevron-down-icon lucide-chevron-down"
      {...props}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
});
