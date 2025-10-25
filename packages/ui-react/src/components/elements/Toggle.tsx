import type React from 'react';
import { getClasses } from '../functions';

interface ToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement> & { type: 'checkbox' },
    'bind:checked' | 'type' | 'children'
  > {
  children?: React.ReactNode;
  checkbox?: boolean;
  round?: boolean;
}

export function Toggle({
  className,
  checkbox,
  round,
  children,
  ...props
}: ToggleProps) {
  return (
    <div className="flex touch-manipulation items-center gap-3">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          {...props}
          className="peer sr-only"
        />
        <div
          className={getClasses({
            'peer h-7 duration-300 ease-out hover:duration-75':
              true,
            'after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:border after:duration-300 after:ease-out after:content-[\'\'] after:hover:duration-75 after:motion-safe:transition-transform':
              true,
            'rounded-lum after:rounded-lum-1': !round,
            'rounded-full after:rounded-full': round,
            'w-12 peer-checked:after:translate-x-full': !checkbox,
            'w-7 after:opacity-0 peer-checked:after:opacity-100': checkbox,
            'lum-toggle-bg-lum-input-bg peer-checked:lum-toggle-bg-lum-accent': true,
            [className ?? '']: !!className,
          })}
        />
      </label>
      {children && (
        <label htmlFor={props.id} className="flex gap-2 text-lum-text select-none empty:hidden">
          {children}
        </label>
      )}
    </div>
  );
}