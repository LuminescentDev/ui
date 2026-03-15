import { component$, PropsOf, Slot } from '@qwik.dev/core';
import { getClassObject } from '../functions';

interface SidebarProps extends PropsOf<'aside'> {
  floating?: boolean;
  position?: 'left' | 'right';
}

export const Sidebar = component$<SidebarProps>(({ position, class: Class, ...props }) => {
  return (
    <aside
      {...props}
      class={{
        'hidden lg:flex sticky lum-card top-0 z-40 px-6 pb-0 rounded-none pt-20 h-dvh': true,
        'left-0 border-0 border-r': position === 'left' || !position,
        'right-0 border-0 border-l': position === 'right',
        ...getClassObject(Class),
      }}
    >
      <nav id="docs-sidebar" class="min-h-full relative">
        <div class="flex items-center gap-3 pb-3 px-2 border-b border-lum-border/10">
          <div class="flex-1">
            <Slot name="title" />
          </div>
        </div>

        <div class={{
          'flex flex-col gap-3 my-4 mx-4 lg:mx-0': true,
        }}>
          <Slot />
        </div>
      </nav>
    </aside>
  );
});