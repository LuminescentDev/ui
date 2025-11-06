import { MenuIcon } from 'lucide-react';
import { getClasses } from '../functions';
import type React from 'react';
import { useEffect, useState } from 'react';

interface NavProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'bind:checked' | 'type' | 'children'
  > {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  noblur?: boolean;
  nohamburger?: boolean;
  nodismiss?: boolean;
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  mobile?: React.ReactNode;
  colorClass?: string;
}

export function Nav({
  fixed,
  floating,
  noblur,
  nohamburger,
  nodismiss,
  colorClass = 'lum-bg-lum-card-bg',
  start,
  center,
  end,
  mobile,
  ...props
}: NavProps) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu && !nodismiss) {
      const onClick = () => {
        setMenu(false);
        window.removeEventListener('click', onClick);
      };
      window.addEventListener('click', onClick);
    }
  }, [menu, nodismiss]);

  return (
    <nav
      {...props}
      className={getClasses({
        'top-0 left-0 z-50 flex w-full flex-col duration-200':
          true,
        fixed: fixed,
        absolute: !fixed,
        ...props.class,
      })}
    >
      {!nohamburger && (
        <div
          className={getClasses({
            'absolute top-full lum-card motion-safe:transition-all sm:hidden max-w-7xl gap-2 px-2 py-4': true,
            'w-[calc(100%-(--spacing(8)))] mx-4': floating,
            'w-[calc(100%-(--spacing(4)))] mx-2': !floating,
            'mt-2': menu,
            'pointer-events-none opacity-0 -mt-2 scale-95': !menu,
            'backdrop-blur-lg': !noblur,
            [colorClass]: true,
          })}
        >
          {mobile}
        </div>
      )}
      <div
        className={getClasses({
          [colorClass]: !floating,
          'border-x-0! border-t-0!': !floating,
          'backdrop-blur-lg': !noblur && !floating,
          'relative mx-2 mt-2': floating,
        })}
      >
        <div
          className={getClasses({
            'mx-auto flex w-full max-w-7xl justify-evenly px-2': true,
            [colorClass]: floating,
            'rounded-lum border': floating,
            'backdrop-blur-lg': !noblur && floating,
          })}
        >
          {start && (
            <div className="flex flex-1 items-center justify-start gap-2 py-2">
              {start}
            </div>
          )}
          {center && (
            <div className="flex flex-1 items-center justify-center gap-2 py-2">
              {center}
            </div>
          )}
          {end && (
            <div className="flex flex-1 items-center justify-end gap-2 py-2">
              {end}
            </div>
          )}
          {!nohamburger && (
            <button
              name="Navigation Menu"
              title="Navigation Menu"
              className="lum-btn lum-bg-transparent p-2 sm:hidden rounded-lum-2"
              onClick={() => setMenu(!menu)}
            >
              <MenuIcon size={24} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};