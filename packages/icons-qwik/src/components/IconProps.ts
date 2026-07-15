import type { PropsOf } from '@qwik.dev/core';

export type IconProps = Omit<PropsOf<'svg'>, 'height' | 'width'> & {
  size?: number;
}
