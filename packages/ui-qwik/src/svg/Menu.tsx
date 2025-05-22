import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const Menu = component$<IconProps>(({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-menu-icon lucide-menu"
      {...props}
    >
      <path d="M4 12h16"/>
      <path d="M4 18h16"/>
      <path d="M4 6h16"/>
    </svg>
  );
});
