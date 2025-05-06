import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { Anchor } from './Anchor';
import { Link } from '~/svg/Link';

interface HeaderProps extends Omit<PropsOf<'h2'>, 'class'> {
  class?: { [key: string]: boolean };
  id?: string;
  anchor?: boolean;
}

export const Header = component$<HeaderProps>(({ id, anchor, ...props }) => (
  <h2
    class={{
      'group flex items-center gap-2 text-xl font-bold whitespace-nowrap text-white sm:text-2xl':
        true,
      ...props.class,
    }}
  >
    <Slot />
    {id && <Anchor id={id} />}
    {anchor && id && (
      <a
        href={`#${id}`}
        onClick$={async () => {
          await navigator.clipboard.writeText(window.location.href);
        }}
      >
        <Link
          class="opacity-10 transition-all duration-300 group-hover:opacity-100 group-hover:duration-75"
          width={24}
        />
      </a>
    )}
  </h2>
));
