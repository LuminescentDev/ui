import type React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { getClasses } from '../functions';

export interface NumberInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  input?: boolean;
  outerProps?: React.HTMLAttributes<HTMLDivElement>;
  btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onDecrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onIncrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NumberInput({
  input,
  className,
  onDecrement,
  onIncrement,
  value = 0,
  step = 1,
  outerProps,
  btnProps,
  ...props
}: NumberInputProps) {
  return (
    <div
      {...outerProps}
      className={getClasses({
        'text-lum-text flex touch-manipulation gap-1': true,
        [outerProps?.className ?? '']: !!outerProps?.className,
      })}
    >
      <button
        type="button"
        {...btnProps}
        className={getClasses({
          'lum-btn rounded-r-sm p-2': true,
          [btnProps?.className ?? '']: !!btnProps?.className,
        })}
        data-action="decrement"
        aria-label="Decrement"
        disabled={props.min !== undefined ? value <= props.min : false}
        onClick={(e) => {
          if (onDecrement) return onDecrement(e);
          const siblingInput = e.currentTarget
            .nextElementSibling as HTMLInputElement;
          if (siblingInput) {
            siblingInput.stepDown();
            siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }}
      >
        <MinusIcon size={20} />
      </button>
      {input && (
        <input
          {...props}
          type="number"
          value={value}
          step={step}
          className={getClasses({
            'lum-input lum-input-p-1 rounded-sm text-center': true,
            [className ?? '']: !!className,
          })}
          onWheel={(e) => {
            const inputElement = e.currentTarget;
            if (e.deltaY < 0) {
              inputElement.stepUp();
            } else {
              inputElement.stepDown();
            }
            inputElement.dispatchEvent(new Event('input', { bubbles: true }));
          }}
        />
      )}
      <button
        type="button"
        {...btnProps}
        className={getClasses({
          'lum-btn rounded-l-sm p-2': true,
          [btnProps?.className ?? '']: !!btnProps?.className,
        })}
        data-action="increment"
        aria-label="Increment"
        disabled={props.max !== undefined ? value >= props.max : false}
        onClick={(e) => {
          if (onIncrement) return onIncrement(e);
          const siblingInput = e.currentTarget
            .previousElementSibling as HTMLInputElement;
          if (siblingInput) {
            siblingInput.stepUp();
            siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }}
      >
        <PlusIcon size={20} />
      </button>
    </div>
  );
}
