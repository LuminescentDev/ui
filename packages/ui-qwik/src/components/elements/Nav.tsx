import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useSignal } from '@builder.io/qwik';

interface NavContainerProps extends Omit<PropsOf<'nav'>, 'class'> {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  nohamburger?: boolean;
  colorClass?: string;
}

export const Nav = component$<NavContainerProps>(({ fixed, floating, nohamburger, colorClass = 'lum-bg-gray-900', ...props }) => {
  const menu = useSignal(false);

  return (
    <nav {...props} class={{
      'motion-safe:transition-all duration-200 flex flex-col top-0 left-0 w-full z-50': true,
      'fixed': fixed,
      'absolute': !fixed,
      ...props.class,
    }}>
      {!nohamburger && (
        <div class={{
          'sm:hidden motion-safe:transition-all flex flex-col px-2 items-center absolute w-full top-full': true,
          'mt-2': menu.value,
          'opacity-0 pointer-events-none': !menu.value,
          'before:backdrop-blur-lg': !colorClass.includes('transparent'),
          'before:absolute before:content-[""] before:w-full before:h-full before:drop-shadow-xl before:-z-10 before:rounded-lg': true,
        }}>
          <div class={{
            [colorClass]: true,
            'flex flex-col gap-2 motion-safe:transition-all max-w-7xl w-full px-2 py-4 border rounded-lg': true,
          }}>
            <Slot name="mobile" />
          </div>
        </div>
      )}
      <div class={{
        [colorClass]: !floating,
        '!border-t-0 !border-x-0': !floating,
        'before:backdrop-blur-lg': !colorClass.includes('transparent') && !floating,
        'before:absolute before:content-[""] before:w-full before:h-full before:drop-shadow-xl before:-z-10': !floating,
        'relative mt-2 mx-2': floating,
      }}>
        <div class={{
          'flex justify-evenly w-full mx-auto px-2 max-w-7xl': true,
          [colorClass]: floating,
          'border rounded-lg': floating,
          'before:backdrop-blur-lg': !colorClass.includes('transparent') && floating,
          'before:absolute before:content-[""] before:w-full before:max-w-7xl before:h-full before:rounded-lg before:drop-shadow-xl before:-z-10': floating,
        }}>
          <div class="flex items-center flex-1 gap-2 py-2 justify-start">
            <Slot name="start" />
          </div>
          <div class="flex items-center flex-1 gap-2 py-2 justify-center">
            <Slot name="center" />
          </div>
          <div class="flex items-center flex-1 gap-2 py-2 justify-end">
            <Slot name="end" />
            {!nohamburger && (
              <button class={'lum-btn p-2 lum-bg-transparent sm:hidden'} onClick$={() => menu.value = !menu.value}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
});