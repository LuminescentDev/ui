import type { PropsOf, QRL } from '@builder.io/qwik';
import { $, Slot, component$, useStyles$ } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';

interface NumberInputRawProps
  extends Omit<PropsOf<'input'> & { type: 'number' }, 'class' | 'type'> {
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
      <label for={props.id} class="pb-1 text-lum-text select-none">
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
          'flex touch-manipulation gap-1 text-lum-text': true,
        }}
      >
        <button type="button"
          class={{
            'lum-btn p-2 rounded-r-sm': true,
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
              ...props.class,
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
          class={{
            'lum-btn p-2 rounded-l-sm': true,
          }}
          data-action="increment"
          aria-label="Increment"
          disabled={props.max ? value >= props.max : false}
          onClick$={onIncrement$ ?? $((event, element) => {
            const siblingInput = element.previousElementSibling as HTMLInputElement;
            siblingInput.stepUp();
            siblingInput.dispatchEvent(new Event('input', { bubbles: true }));
          })
          }
        >
          <Plus size={20} />
        </button>
      </div>
    );
  },
);
