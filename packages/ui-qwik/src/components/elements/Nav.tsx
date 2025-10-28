import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Menu } from '~/svg/Menu';

interface NavProps extends Omit<PropsOf<'nav'>, 'class'> {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  noblur?: boolean;
  nohamburger?: boolean;
  nodismiss?: boolean;
  colorClass?: string;
}

export const Nav = component$<NavProps>(
  ({
    fixed,
    floating,
    noblur,
    nohamburger,
    nodismiss,
    colorClass = 'lum-bg-lum-card-bg',
    ...props
  }) => {
    const menu = useSignal(false);

    useTask$(({ track }) => {
      track(() => menu.value);
      if (menu.value && !nodismiss) {
        const onClick = () => {
          menu.value = false;
          window.removeEventListener('click', onClick);
        };
        window.addEventListener('click', onClick);
      }
    });

    return (
      <nav
        {...props}
        class={{
          'top-0 left-0 z-50 flex w-full flex-col': true,
          fixed: fixed,
          absolute: !fixed,
          ...props.class,
        }}
      >
        {!nohamburger && (
          <div
            class={{
              'absolute top-full lum-card motion-safe:transition-all sm:hidden max-w-7xl gap-2 px-2 py-4': true,
              'w-[calc(100%-(--spacing(8)))] mx-4': floating,
              'w-[calc(100%-(--spacing(4)))] mx-2': !floating,
              'mt-2': menu.value,
              'pointer-events-none opacity-0 -mt-2 scale-95': !menu.value,
              'backdrop-blur-lg': !noblur,
              [colorClass]: true,
            }}
          >
            <Slot name="mobile" />
          </div>
        )}
        <div
          class={{
            [colorClass]: !floating,
            'border-x-0! border-t-0!': !floating,
            'backdrop-blur-lg': !noblur && !floating,
            'relative mx-2 mt-2': floating,
          }}
        >
          <div
            class={{
              'mx-auto flex w-full max-w-7xl justify-evenly px-2': true,
              [colorClass]: floating,
              'rounded-lum border': floating,
              'backdrop-blur-lg': !noblur && floating,
            }}
          >
            <div class="flex flex-1 items-center justify-start gap-2 py-2">
              <Slot name="start" />
            </div>
            <div class="flex flex-1 items-center justify-center gap-2 py-2">
              <Slot name="center" />
            </div>
            <div class="flex flex-1 items-center justify-end gap-2 py-2">
              <Slot name="end" />
              {!nohamburger && (
                <button
                  name="Navigation Menu"
                  class={'lum-btn lum-bg-transparent p-2 sm:hidden rounded-lum-2'}
                  onClick$={() => (menu.value = !menu.value)}
                >
                  <Menu size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  },
);
