import { component$, PropsOf, Slot } from '@qwik.dev/core';
import { getClassObject } from '../functions';

interface SidebarProps extends PropsOf<'aside'> {
  floating?: boolean;
  position?: 'left' | 'right';
}

export const Sidebar = component$<SidebarProps>(({ position, ...props }) => {
  return (
    <aside
      {...props}
      class={{
        'lum-card sticky top-0 z-40 hidden h-dvh rounded-none px-6 pt-20 pb-0 lg:flex': true,
        'left-0 border-0 border-r': position === 'left' || !position,
        'right-0 border-0 border-l': position === 'right',
        ...getClassObject(props.class),
      }}
    >
      <nav id="docs-sidebar" class="relative min-h-full">
        <div class="border-lum-border/10 flex items-center gap-3 border-b px-2 pb-3">
          <div class="flex-1">
            <Slot name="title" />
          </div>
        </div>

        <div
          class={{
            'mx-4 my-4 flex flex-col gap-3 lg:mx-0': true,
          }}
        >
          <Slot />
        </div>
      </nav>
    </aside>
  );
});
