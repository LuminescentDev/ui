import type React from 'react';
import { useState, useEffect } from 'react';
import { DropdownButton } from './DropdownButton';
import type { DropdownButtonProps } from './DropdownButton';
import { getClasses } from '../functions';

export interface DropdownProps extends DropdownButtonProps {
  panelProps?: React.HTMLAttributes<HTMLDivElement>;
  noblur?: boolean;
  nocloseonclick?: boolean;
  hover?: boolean;
  align?: 'left' | 'right' | 'center';
  top?: boolean;
  outerProps?: React.HTMLAttributes<HTMLDivElement>;
  dropdown?: React.ReactNode;
}

export function Dropdown({
  className,
  panelProps,
  noblur,
  nocloseonclick,
  hover,
  align,
  top,
  outerProps,
  dropdown,
  children,
  ...props
}: DropdownProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened || nocloseonclick || hover) return;
    const listener = (e: MouseEvent) => {
      const path = e.composedPath();
      const isDismissable = path.some(
        (el) =>
          el instanceof HTMLElement && el.dataset.dismissDropdown === 'true'
      );
      if (isDismissable) {
        setOpened(false);
      }
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [opened, nocloseonclick, hover]);

  return (
    <div
      {...outerProps}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && opened) {
          setOpened(false);
        }
      }}
      className={getClasses({
        'relative touch-manipulation': true,
        group: hover,
        [outerProps?.className ?? '']: !!outerProps?.className,
      })}
    >
      <DropdownButton
        {...props}
        id={props.id ? `${props.id}-dropdown` : undefined}
        opened={opened}
        hover={hover}
        className={getClasses({
          'w-full': true,
          [className ?? '']: !!className,
        })}
        onClick={() => {
          if (hover) return;
          setOpened(!opened);
        }}
      >
        {dropdown ?? children}
      </DropdownButton>
      {hover && (
        <div
          className={getClasses({
            'absolute h-2 w-full': true,
            'bottom-full': top,
          })}
        />
      )}
      <div
        {...panelProps}
        className={getClasses({
          'lum-bg-lum-input-bg absolute z-1000': true,
          'lum-scroll rounded-lum flex max-h-72 flex-col gap-1 overflow-auto border p-1 ease-out select-none transform-gpu motion-safe:transition-all': true,
          'focus-within:pointer-events-auto focus-within:scale-100 focus-within:opacity-100 focus-within:duration-75': true,
          'backdrop-blur-lg': !noblur,
          'left-0': align === 'left',
          'right-0': align === 'right',
          'left-1/2 -translate-x-1/2': align === 'center',
          'bottom-full mb-2': top,
          'mt-2': !top,
          'pointer-events-none scale-95 opacity-0': !opened,
          'duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:duration-75':
            hover,
          [panelProps?.className ?? '']: !!panelProps?.className,
        })}
      >
        {children}
      </div>
    </div>
  );
}
