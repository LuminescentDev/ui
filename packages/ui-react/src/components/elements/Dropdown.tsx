import type React from 'react';
import { getClasses } from '../functions';
import { ChevronDownIcon } from 'lucide-react';

interface DropdownProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'bind:checked' | 'type' | 'children'
  > {
  children?: React.ReactNode;
  hover?: boolean;
  opened?: boolean;
}

export function Dropdown({
  className,
  opened = false,
  hover = false,
  children,
  ...props
}: DropdownProps) {
  return (
    <button type="button"
      className={getClasses({
        'group lum-btn': true,
        [className ?? '']: !!className,
      })}
      {...props}
    >
      <div className="flex-1 text-left">
        {children}
      </div>
      <ChevronDownIcon
        size={16}
        className={getClasses({
          'ease-out motion-safe:transition-all': true,
          'rotate-180 transform': opened,
          'duration-300 group-hover:rotate-180 group-hover:transform group-hover:duration-75':
            hover,
          'focus-within:rotate-180 focus-within:transform focus-within:duration-75':
            true,
        })}
      />
    </button>
  );
}