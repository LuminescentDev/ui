export type IconProps = Omit<
    React.SVGAttributes<SVGElement>,
    'bind:checked' | 'type' | 'children'
  > & {
  size?: number;
}
