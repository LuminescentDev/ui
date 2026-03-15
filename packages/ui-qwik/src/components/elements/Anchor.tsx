import type { PropsOf } from '@qwik.dev/core';
import { Slot, component$ } from '@qwik.dev/core';
import { Link } from '~/svg/Link';
import { getClassObject } from '../functions';

interface AnchorProps extends PropsOf<'div'> {
  id?: string;
}

export const Anchor = component$<AnchorProps>(({ id, class: Class, ...props }) => (
  <div {...props}
    class={{
      'group flex items-center gap-2 scroll-mt-32': true,
      ...getClassObject(Class),
    }}
  >
    <Slot />
    {id && (
      <a
        href={`#${id}`}
        onClick$={async () => {
          await navigator.clipboard.writeText(window.location.href);
        }}
      >
        <Link
          class="opacity-10 transition-opacity duration-300 group-hover:opacity-100 group-hover:duration-75"
          size={20}
        />
      </a>
    )}
  </div>
));
