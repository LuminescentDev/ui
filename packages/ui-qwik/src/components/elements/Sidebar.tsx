import { component$, PropsOf, Slot, useSignal } from '@builder.io/qwik';
import { Menu } from '~/svg/Menu';

interface SidebarProps extends Omit<PropsOf<'aside'>, 'class'> {
  class?: { [key: string]: boolean };
  floating?: boolean;
}

export const Sidebar = component$<SidebarProps>(({ floating, ...props }) => {
  const menu = useSignal(false);

  return (
    <aside
      {...props}
      class={{
        'lg:w-100 fixed lg:sticky lum-card top-0 left-0 z-[40] px-0 lg:px-6 pb-0': true,
        'w-full rounded-none pt-14 lg:pt-20 lg:h-dvh lg:border-y-0 border-l-0': !floating,
        'mt-16 lg:mt-22 lg:ml-4 pt-4 mx-2 w-[calc(100%-16px)]': floating,
        ...props.class,
      }}
    >
      <nav id="docs-sidebar" class="min-h-full relative">
        <div class="flex items-center gap-3 pb-3 px-2 border-b border-lum-border/10">
          <div class="flex-1">
            <Slot name="title" />
          </div>

          <button class='lum-btn lum-bg-transparent p-2 lg:hidden' onClick$={() => {
            menu.value = !menu.value;
            const abortController = new AbortController();
            document.addEventListener('click', (e) => {
              if (!e.composedPath().includes(document.querySelector('aside')!) || e.target instanceof HTMLAnchorElement) {
                menu.value = false;
                abortController.abort();
              }
            }, { signal: abortController.signal });
          }} aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>

        <div class={{
          'flex-col gap-3 my-4 mx-4 lg:mx-0': true,
          'hidden lg:flex': !menu.value,
          'flex': menu.value,
        }}>
          <Slot />
        </div>
      </nav>
    </aside>
  );
});