import { component$, PropsOf, Slot } from '@builder.io/qwik';

interface SidebarProps extends Omit<PropsOf<'aside'>, 'class'> {
  class?: { [key: string]: boolean };
  floating?: boolean;
  position?: 'left' | 'right';
}

export const Sidebar = component$<SidebarProps>(({ position, ...props }) => {
  return (
    <aside
      {...props}
      class={{
        'hidden lg:flex sticky lum-card top-0 z-[40] px-6 pb-0 rounded-none pt-20 h-dvh': true,
        'left-0 border-0 border-r-1': position === 'left' || !position,
        'right-0 border-0 border-l-1': position === 'right',
        ...props.class,
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