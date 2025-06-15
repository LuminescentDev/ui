import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useSignal } from '@builder.io/qwik';
import { Menu } from '~/svg/Menu';

interface NavContainerProps extends Omit<PropsOf<'nav'>, 'class'> {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  nohamburger?: boolean;
  colorClass?: string;
}

export const Nav = component$<NavContainerProps>(
  ({
    fixed,
    floating,
    nohamburger,
    colorClass = 'lum-bg-lum-card-bg',
    ...props
  }) => {
    const menu = useSignal(false);

    return (
      <nav
        {...props}
        class={{
          'top-0 left-0 z-50 flex w-full flex-col duration-200 motion-safe:transition-all':
            true,
          fixed: fixed,
          absolute: !fixed,
          ...props.class,
        }}
      >
        {!nohamburger && (
          <div
            class={{
              'absolute top-full flex w-full flex-col items-center px-2 motion-safe:transition-all sm:hidden':
                true,
              'mt-2': menu.value,
              'pointer-events-none opacity-0': !menu.value,
              'before:backdrop-blur-lg': !colorClass.includes('transparent'),
              'before:absolute before:-z-10 before:h-full before:w-full before:rounded-lum before:drop-shadow-xl before:content-[""]':
                true,
            }}
          >
            <div
              class={{
                [colorClass]: true,
                'flex w-full max-w-7xl flex-col gap-2 rounded-lum border px-2 py-4 motion-safe:transition-all':
                  true,
              }}
            >
              <Slot name="mobile" />
            </div>
          </div>
        )}
        <div
          class={{
            [colorClass]: !floating,
            '!border-x-0 !border-t-0': !floating,
            'before:backdrop-blur-lg':
              !colorClass.includes('transparent') && !floating,
            'before:absolute before:-z-10 before:h-full before:w-full before:drop-shadow-xl before:content-[""]':
              !floating,
            'relative mx-2 mt-2': floating,
          }}
        >
          <div
            class={{
              'mx-auto flex w-full max-w-7xl justify-evenly px-2': true,
              [colorClass]: floating,
              'rounded-lum border': floating,
              'before:backdrop-blur-lg':
                !colorClass.includes('transparent') && floating,
              'before:absolute before:-z-10 before:h-full before:w-full before:max-w-7xl before:rounded-lum before:drop-shadow-xl before:content-[""]':
                floating,
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
                  class={'lum-btn lum-bg-transparent p-2 sm:hidden'}
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
