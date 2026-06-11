import type { ClassList, PropsOf } from '@qwik.dev/core';
import { Slot, component$, useSignal } from '@qwik.dev/core';
import { Menu } from '~/svg/Menu';
import { getClassObject } from '../functions';

interface NavProps extends PropsOf<'nav'> {
  fixed?: boolean;
  floating?: boolean;
  noblur?: boolean;
  nohamburger?: boolean;
  nodismiss?: boolean;
  innerProps?: PropsOf<'div'>;
  colorClass?: ClassList;
}

export const Nav = component$<NavProps>(
  ({
    fixed,
    floating,
    noblur,
    nohamburger,
    nodismiss,
    class: Class,
    colorClass = 'lum-bg-lum-card-bg',
    innerProps,
    ...props
  }) => {
    const menu = useSignal(false);

    return (
      <nav
        {...props}
        class={{
          'top-0 left-0 z-50 flex flex-col': true,
          'w-full': !floating,
          'w-[calc(100%-(--spacing(4)))] mx-2': floating,
          fixed: fixed,
          absolute: !fixed,
          ...getClassObject(Class),
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
              ...getClassObject(colorClass),
            }}
          >
            <Slot name="mobile" />
          </div>
        )}
        <div
          {...innerProps}
          style={!floating ? { '--lum-depth': 0 } : undefined}
          class={{
            'flex w-full justify-evenly px-2': true,
            'backdrop-blur-lg': !noblur,
            'border-x-0! border-t-0!': !floating,
            'mx-auto max-w-7xl mt-2 rounded-lum border': floating,
            ...getClassObject(colorClass),
          }}
        >
          <div {...innerProps} class="flex flex-1 items-center justify-start gap-2 py-2">
            <Slot name="start" />
          </div>
          <div {...innerProps} class="flex flex-1 items-center justify-center gap-2 py-2">
            <Slot name="center" />
          </div>
          <div {...innerProps} class="flex flex-1 items-center justify-end gap-2 py-2">
            <Slot name="end" />
            {!nohamburger && (
              <button
                name="Navigation Menu"
                title="Navigation Menu"
                class={{
                  "lum-btn lum-bg-transparent p-2 sm:hidden rounded-lum-2": true,
                  "nav-ignore-dismiss": menu.value,
                }}
                onClick$={() => {
                  menu.value = !menu.value;
                  if (nodismiss) return;
                  function onClick(e: PointerEvent) {
                    if (menu.value == false)
                      return window.removeEventListener('click', onClick);
                    // check if near any element that has class 'nav-ignore-dismiss'
                    let el = e.target as HTMLElement | null;
                    while (el) {
                      if (el.classList.contains('nav-ignore-dismiss')) return;
                      el = el.parentElement;
                    }
                    menu.value = false;
                  };
                  if (menu.value) window.addEventListener('click', onClick);
                }}
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  },
);
