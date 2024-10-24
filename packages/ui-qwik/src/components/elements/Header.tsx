
import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { Anchor } from './Anchor';
import { Link } from '~/svg/Link';

interface HeaderProps extends Omit<PropsOf<'h2'>, 'class'> {
  class?: { [key: string]: boolean };
  id?: string;
  anchor?: boolean;
  subheader?: string | JSXOutput;
}

export const Header = component$<HeaderProps>(({ id, anchor, subheader, ...props }) => {
  let Component = <>
    <h2 class={{
      'flex gap-2 group items-center font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
      ...props.class,
    }}>
      <Slot />
      {id && <Anchor id={id}/>}
      {anchor && id && <a href={`#${id}`} onClick$={() => {
        navigator.clipboard.writeText(window.location.href);
      }}>
        <Link class="transition-all opacity-10 group-hover:opacity-100 duration-300 group-hover:duration-75" width={24} />
      </a>}
    </h2>
  </>;

  if (subheader) {
    Component = (
      <div class="flex flex-col gap-1">
        {Component}
        <h3 class="flex items-center text-gray-400 text-sm">
          {subheader}
        </h3>
      </div>
    );
  }

  return Component;
});