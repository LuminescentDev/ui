import type { IconProps } from './IconProps';

export function LogoPurpur({ size, ...props }: IconProps) {
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
      <defs>
        <path
          id="purpur"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.68"
          d="m264 41.95 8-4v8l-8 4v-8Z"
        />
      </defs>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.77"
        d="m264 29.95-8 4 8 4.42 8-4.42-8-4Z"
        transform="matrix(1.125 0 0 1.1372 -285 -31.69)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.77"
        d="m272 38.37-8 4.42-8-4.42"
        transform="matrix(1.125 0 0 1.1372 -285 -31.69)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.77"
        d="m260 31.95 8 4.21V45"
        transform="matrix(1.125 0 0 1.1372 -285 -31.69)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.77"
        d="M260 45v-8.84l8-4.21"
        transform="matrix(1.125 0 0 1.1372 -285 -31.69)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.68"
        d="m264 41.95 8-4v8l-8 4v-8Z"
        transform="matrix(1.125 0 0 1.2569 -285 -40.78)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.68"
        d="m264 41.95 8-4v8l-8 4v-8Z"
        transform="matrix(-1.125 0 0 1.2569 309 -40.78)"
      />
    </svg>
  );
};
