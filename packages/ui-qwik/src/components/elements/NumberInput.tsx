import type { PropsOf, QRL } from '@builder.io/qwik';
import { $, Slot, component$, useStyles$ } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';

interface NumberInputRawProps
  extends Omit<PropsOf<'input'> & { type: 'number' }, 'class' | 'type'> {
  onDecrement$: QRL<
    (
      event: PointerEvent,
      element: HTMLButtonElement,
      inputElement?: HTMLInputElement,
    ) => void
  >;
  onIncrement$: QRL<
    (
      event: PointerEvent,
      element: HTMLButtonElement,
      inputElement?: HTMLInputElement,
    ) => void
  >;
  input?: boolean;
  class?: { [key: string]: boolean };
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

interface NumberInputProps extends Omit<NumberInputRawProps, 'children'> {
  id: string;
}

export const NumberInput = component$<NumberInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1 select-none">
        <Slot />
      </label>
      <NumberInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const NumberInputRaw = component$<NumberInputRawProps>(
  ({ input, onDecrement$, onIncrement$, value = 0, step = 1, ...props }) => {
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
        class={{
          'flex gap-2 text-gray-50 touch-manipulation': true,
        }}
      >
        <button
          class={{
            'lum-btn p-2': true,
          }}
          data-action="decrement"
          aria-label="Decrement"
          disabled={props.min ? value <= props.min : false}
          onClick$={
            input
              ? $(async (event, element) => {
                const siblingInput =
                    element.nextElementSibling as HTMLInputElement;
                siblingInput.stepDown();
                await onDecrement$(event, element, siblingInput);
              })
              : onDecrement$
          }
        >
          <Minus width="24" class="fill-current" />
        </button>
        {input && (
          <input
            {...props}
            type="number"
            value={value}
            step={step}
            class={{
              'lum-input text-center': true,
              ...props.class,
            }}
          />
        )}
        <button
          class={{
            'lum-btn p-2': true,
          }}
          data-action="increment"
          aria-label="Increment"
          disabled={props.max ? value >= props.max : false}
          onClick$={
            input
              ? $(async (event, element) => {
                const siblingInput =
                    element.previousElementSibling as HTMLInputElement;
                siblingInput.stepUp();
                await onIncrement$(event, element, siblingInput);
              })
              : onIncrement$
          }
        >
          <Plus width="24" class="fill-current" />
        </button>
      </div>
    );
  },
);
