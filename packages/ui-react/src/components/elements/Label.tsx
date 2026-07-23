import type React from 'react';
import { getClasses } from '../functions';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: React.ReactNode;
  beforeLabel?: React.ReactNode;
  afterLabel?: React.ReactNode;
  outerProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

export function Label({
  label,
  beforeLabel,
  afterLabel,
  outerProps,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <div
      style={{
        gap: 'var(--lum-label-gap)',
      }}
      {...outerProps}
      className={getClasses({
        'flex flex-col': true,
        [outerProps?.className ?? '']: !!outerProps?.className,
      })}
    >
      <label
        {...props}
        className={getClasses({
          'text-lum-text flex items-center gap-1 select-none': true,
          [className ?? '']: !!className,
        })}
      >
        {beforeLabel}
        {label}
        {afterLabel}
      </label>
      {children}
    </div>
  );
}
