import type { PropsOf } from '@builder.io/qwik';

export type IconProps = Omit<PropsOf<'svg'>, 'height' | 'width'> & {
  size?: number;
}
