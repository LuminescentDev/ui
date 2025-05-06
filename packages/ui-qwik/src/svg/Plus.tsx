import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const Plus = component$<IconProps>((props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      height={props.width}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M256 112v288M400 256H112"
      />
    </svg>
  );
});
