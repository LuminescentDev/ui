import type React from 'react';
import { getClasses } from '../functions';

export interface SidebarProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  'title'
> {
  floating?: boolean;
  position?: 'left' | 'right';
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export function Sidebar({
  position = 'left',
  title,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      {...props}
      className={getClasses({
        'lum-card sticky top-0 z-40 hidden h-dvh rounded-none px-6 pt-20 pb-0 lg:flex': true,
        'left-0 border-0 border-r': position === 'left',
        'right-0 border-0 border-l': position === 'right',
        [className ?? '']: !!className,
      })}
    >
      <nav id="docs-sidebar" className="relative min-h-full">
        {title && (
          <div className="border-lum-border/10 flex items-center gap-3 border-b px-2 pb-3">
            <div className="flex-1">{title}</div>
          </div>
        )}
        <div className="mx-4 my-4 flex flex-col gap-3 lg:mx-0">{children}</div>
      </nav>
    </aside>
  );
}
