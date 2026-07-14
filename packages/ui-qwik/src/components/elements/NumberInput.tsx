import type { PropsOf, QRL } from '@qwik.dev/core';
import { $, component$, useStyles$ } from '@qwik.dev/core';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';
import { getClassObject } from '../functions';

interface NumberInputProps
  extends Omit<PropsOf<'input'> & { type: 'number' }, 'type'> {
  onDecrement$?: QRL<
    (
      event: PointerEvent,
      element: HTMLButtonElement,
      inputElement?: HTMLInputElement,
    ) => void
  >;
  onIncrement$?: QRL<
    (
      event: PointerEvent,
      element: HTMLButtonElement,
      inputElement?: HTMLInputElement,
    ) => void
  >;
  input?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  outerProps?: PropsOf<'div'>;
  btnProps?: PropsOf<'button'>;
}

export const NumberInput = component$<NumberInputProps>(
  ({ input, class: Class, onDecrement$, onIncrement$, value = 0, step = 1, outerProps, btnProps, ...props }) => {
    useStyles$(`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `);

    return (
      <div {...outerProps}
        class={{
          'flex touch-manipulation gap-1 text-lum-text': true,
          ...getClassObject(outerProps?.class),
        }}
      >
        <button type="button"
          {...btnProps}
          class={{
            'lum-btn p-2 rounded-r-sm': true,
            ...getClassObject(btnProps?.class)
          }}
          data-action="decrement"
          aria-label="Decrement"
          disabled={props.min ? value <= props.min : false}
          onClick$={onDecrement$ ?? $((event, element) => {
            const siblingInput =
              element.nextElementSibling as HTMLInputElement;
            siblingInput.stepDown();
            siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
          })}
        >
          <Minus size={20} />
        </button>
        {input && (
          <input
            {...props}
            type="number"
            value={value}
            step={step}
            class={{
              'lum-input text-center rounded-sm lum-input-p-1': true,
              ...getClassObject(Class),
            }}
            preventdefault:wheel
            onWheel$={(e) => {
              const inputElement = e.target as HTMLInputElement;
              if (e.deltaY < 0) {
                inputElement.stepUp();
              } else {
                inputElement.stepDown();
              }
              inputElement.dispatchEvent(new Event('input', { bubbles: true }));
            }}
          />
        )}
        <button type="button"
          {...btnProps}
          class={{
            'lum-btn p-2 rounded-l-sm': true,
            ...getClassObject(btnProps?.class)
          }}
          data-action="increment"
          aria-label="Increment"
          disabled={props.max ? value >= props.max : false}
          onClick$={onIncrement$ ?? $((event, element) => {
            const siblingInput = element.previousElementSibling as HTMLInputElement;
            siblingInput.stepUp();
            siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
          })}
        >
          <Plus size={20} />
        </button>
      </div>
    );
  },
);
