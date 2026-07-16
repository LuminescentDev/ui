import type { PropsOf } from '@qwik.dev/core';
import { $, component$, useStyles$ } from '@qwik.dev/core';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';
import { getClassObject } from '../functions';

interface BaseNumberInputProps extends Omit<
  PropsOf<'input'> & { type: 'number' },
  'type'
> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  outerProps?: PropsOf<'div'>;
  btnProps?: PropsOf<'button'>;
}

type NumberInputProps = BaseNumberInputProps &
  (
    | {
        input: true;
        onDecrement$?: PropsOf<'button'>['onClick$'];
        onIncrement$?: PropsOf<'button'>['onClick$'];
      }
    | {
        input?: false;
        onDecrement$: PropsOf<'button'>['onClick$'];
        onIncrement$: PropsOf<'button'>['onClick$'];
      }
  );

export const NumberInput = component$<NumberInputProps>(
  ({
    input,
    class: Class,
    onDecrement$,
    onIncrement$,
    value = 0,
    step = 1,
    outerProps,
    btnProps,
    ...props
  }) => {
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
      <div
        {...outerProps}
        class={{
          'text-lum-text flex touch-manipulation gap-1': true,
          ...getClassObject(outerProps?.class),
        }}
      >
        <button
          type="button"
          {...btnProps}
          class={{
            'lum-btn rounded-r-sm p-2': true,
            ...getClassObject(btnProps?.class),
          }}
          data-action="decrement"
          aria-label="Decrement"
          disabled={props.min ? value <= props.min : false}
          onClick$={
            onDecrement$ ??
            $((event, element) => {
              const siblingInput =
                element.nextElementSibling as HTMLInputElement;
              siblingInput.stepDown();
              siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
            })
          }
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
              'lum-input lum-input-p-1 rounded-sm text-center': true,
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
        <button
          type="button"
          {...btnProps}
          class={{
            'lum-btn rounded-l-sm p-2': true,
            ...getClassObject(btnProps?.class),
          }}
          data-action="increment"
          aria-label="Increment"
          disabled={props.max ? value >= props.max : false}
          onClick$={
            onIncrement$ ??
            $((event, element) => {
              const siblingInput =
                element.previousElementSibling as HTMLInputElement;
              siblingInput.stepUp();
              siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
            })
          }
        >
          <Plus size={20} />
        </button>
      </div>
    );
  }
);
