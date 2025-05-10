import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { Link } from '~/svg/Link';

interface AnchorProps extends Omit<PropsOf<'div'>, 'class'> {
  class?: { [key: string]: boolean };
  id?: string;
}

export const Anchor = component$<AnchorProps>(({ id, ...props }) => (
  <div {...props}
    class={{
      'group flex items-center gap-2':
        true,
      ...props.class,
    }}
  >
    <Slot />
    {id && <span id={id} class="pointer-events-none -mt-32 block h-32" />}
    {id && (
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
  </div>
));
