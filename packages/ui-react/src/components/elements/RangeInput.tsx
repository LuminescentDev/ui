import type React from 'react';
import { useState } from 'react';
import { getClasses } from '../functions';

export interface RangeInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  value?: number;
  min?: number;
  max?: number;
  outerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function RangeInput({
  value,
  min = 0,
  max = 10,
  onInput,
  outerProps,
  ...props
}: RangeInputProps) {
  const [internalValue, setInternalValue] = useState<number>(value ?? min);
  const currentValue = value ?? internalValue;
  const filledPercentage = ((currentValue - min) / (max - min)) * 100;
  const tickCount = max - min - 1;

  return (
    <div
      {...outerProps}
      className={getClasses({
        'group text-lum-text lum-input relative flex touch-manipulation gap-1 p-0': true,
        [outerProps?.className ?? '']: !!outerProps?.className,
      })}
    >
      <div className="absolute flex w-full justify-evenly">
        {tickCount > 0 &&
          Array.from({ length: tickCount }).map((_, i) => {
            return (
              <div
                key={i}
                className="border-l-lum-border/20 my-0.5 h-1 border-l"
              />
            );
          })}
      </div>
      <div
        className="lum-bg-lum-accent group-hover:lum-bg-lum-accent rounded-lum h-2"
        style={{ width: `${filledPercentage}%` }}
      />
      <div
        className="absolute -top-1 flex flex-col items-center gap-4"
        style={{ left: `calc(${filledPercentage}% - 0.5rem)` }}
      >
        <div className="lum-bg-lum-accent group-hover:lum-bg-lum-accent h-4 w-4 rounded-full" />
        <div className="lum-bg-lum-card-bg lum-btn-p-2 rounded-lum absolute top-6 z-50 text-center opacity-0 transition-all group-hover:opacity-100">
          {currentValue}
        </div>
      </div>
      <input
        {...props}
        min={min}
        max={max}
        type="range"
        value={currentValue}
        className="absolute top-0 h-2 w-full cursor-pointer opacity-0"
        onInput={(e) => {
          const val = parseFloat(e.currentTarget.value);
          setInternalValue(val);
          if (onInput) onInput(e);
        }}
      />
    </div>
  );
}
