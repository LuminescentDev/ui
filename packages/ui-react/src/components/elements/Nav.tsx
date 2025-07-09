import { MenuIcon } from 'lucide-react';
import { getClasses } from '../functions';
import type React from 'react';
import { useState } from 'react';

interface NavProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'bind:checked' | 'type' | 'children'
  > {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  nohamburger?: boolean;
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  mobile?: React.ReactNode;
  colorClass?: string;
}

export function Nav({
  fixed,
  floating,
  nohamburger,
  colorClass = 'lum-bg-lum-card-bg',
  start,
  center,
  end,
  mobile,
  ...props
}: NavProps) {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      {...props}
      className={getClasses({
        'top-0 left-0 z-50 flex w-full flex-col duration-200 motion-safe:transition-all':
          true,
        fixed: fixed,
        absolute: !fixed,
        ...props.class,
      })}
    >
      {!nohamburger && (
        <div
          className={getClasses({
            'absolute top-full flex w-full flex-col items-center px-2 motion-safe:transition-all sm:hidden':
              true,
            'mt-2': menu,
            'pointer-events-none opacity-0': !menu,
            'before:backdrop-blur-lg': !colorClass.includes('transparent'),
            'before:absolute before:-z-10 before:h-full before:w-full before:rounded-lum before:drop-shadow-xl before:content-[""]':
              true,
          })}
        >
          <div
            className={getClasses({
              [colorClass]: true,
              'flex w-full max-w-7xl flex-col gap-2 rounded-lum border px-2 py-4 motion-safe:transition-all':
                true,
            })}
          >
            {mobile}
          </div>
        </div>
      )}
      <div
        className={getClasses({
          [colorClass]: !floating,
          '!border-x-0 !border-t-0': !floating,
          'before:backdrop-blur-lg':
            !colorClass.includes('transparent') && !floating,
          'before:absolute before:-z-10 before:h-full before:w-full before:drop-shadow-xl before:content-[""]':
            !floating,
          'relative mx-2 mt-2': floating,
        })}
      >
        <div
          className={getClasses({
            'mx-auto flex w-full max-w-7xl justify-evenly px-2': true,
            [colorClass]: floating,
            'rounded-lum border': floating,
            'before:backdrop-blur-lg':
              !colorClass.includes('transparent') && floating,
            'before:absolute before:-z-10 before:h-full before:w-full before:max-w-7xl before:rounded-lum before:drop-shadow-xl before:content-[""]':
              floating,
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
              className={'lum-btn lum-bg-transparent p-2 sm:hidden'}
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