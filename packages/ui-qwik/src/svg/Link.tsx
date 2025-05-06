import { component$ } from '@builder.io/qwik';
import type { IconProps } from '../components/logos/IconProps';

export const Link = component$<IconProps>((props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      height={props.width}
    >
      <path
        d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="36"
      />
    </svg>
  );
});
