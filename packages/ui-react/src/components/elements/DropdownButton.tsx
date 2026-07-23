import type React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { getClasses } from '../functions';

export interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hover?: boolean;
  opened?: boolean;
  noChevron?: boolean;
  children?: React.ReactNode;
}

export function DropdownButton({
  hover,
  opened,
  noChevron,
  className,
  children,
  ...props
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={opened}
      aria-haspopup="true"
      {...props}
      className={getClasses({
        'group lum-btn': true,
        [className ?? '']: !!className,
      })}
    >
      <div className="flex-1 text-left">{children}</div>
      {!noChevron && (
        <ChevronDownIcon
          size={16}
          className={getClasses({
            'ml-auto ease-out motion-safe:transition-transform': true,
            'rotate-180 transform': opened,
            'duration-300 group-hover:rotate-180 group-hover:transform group-hover:duration-75':
              hover,
            'focus-within:rotate-180 focus-within:transform focus-within:duration-75': true,
          })}
        />
      )}
    </button>
  );
}
