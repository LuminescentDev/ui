import type { IconProps } from './IconProps';

export function LogoPaper({ size, ...props }: IconProps) {
  return (
    <svg
      xmlSpace="preserve"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="m12 18 6 2 3-17L2 14l6 2"
      />
      <path stroke="currentColor" strokeWidth="2" d="m9 21-1-5 4 2-3 3Z" />
      <path fill="currentColor" d="m12 18-4-2 10-9-6 11Z" />
    </svg>
  );
};
