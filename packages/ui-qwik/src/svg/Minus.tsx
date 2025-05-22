import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const Minus = component$<IconProps>(({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-minus-icon lucide-minus"
      {...props}
    >
      <path d="M5 12h14"/>
    </svg>
  );
});
