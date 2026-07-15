import type { PropsOf, QRL } from '@qwik.dev/core';
import { component$, useComputed$, useSignal } from '@qwik.dev/core';
import { getClassObject } from '~/index';

interface RangeInputProps extends Omit<
  PropsOf<'input'> & { type: 'number' },
  'type'
> {
  onInput$?: QRL<(event: InputEvent, element: HTMLInputElement) => void>;
  value?: number;
  min?: number;
  max?: number;
  outerProps?: PropsOf<'div'>;
}

export const RangeInput = component$<RangeInputProps>(
  ({ value, min = 0, max = 10, onInput$, outerProps, ...props }) => {
    const valueSignal = useSignal<number>(value ?? min);
    const filledPercentage = useComputed$(
      () => ((valueSignal.value - min) / (max - min)) * 100
    );
    const tickCount = max - min - 1;

    return (
      <div
        {...outerProps}
        class={{
          'group text-lum-text lum-input relative flex touch-manipulation gap-1 p-0': true,
          ...getClassObject(outerProps?.class),
        }}
      >
        <div class="absolute flex w-full justify-evenly">
          {tickCount > 0 &&
            [...Array(tickCount)].map((_, i) => {
              return (
                <div
                  key={i}
                  class="border-l-lum-border/20 my-0.5 h-1 border-l"
                />
              );
            })}
        </div>
        <div
          class="lum-bg-lum-accent group-hover:lum-bg-lum-accent rounded-lum h-2"
          style={{ width: `${filledPercentage.value}%` }}
        />
        <div
          class="absolute -top-1 flex flex-col items-center gap-4"
          style={{ left: `calc(${filledPercentage.value}% - 0.5rem)` }}
        >
          <div class="lum-bg-lum-accent group-hover:lum-bg-lum-accent h-4 w-4 rounded-full" />
          <div class="lum-bg-lum-card-bg lum-btn-p-2 rounded-lum absolute top-6 z-50 text-center opacity-0 transition-all group-hover:opacity-100">
            {valueSignal.value}
          </div>
        </div>
        <input
          {...props}
          min={min}
          max={max}
          type="range"
          value={valueSignal.value}
          class="absolute top-0 h-2 w-full cursor-pointer opacity-0"
          onInput$={async (event, element) => {
            valueSignal.value = parseFloat(element.value);
            if (onInput$) await onInput$(event, element);
          }}
        />
      </div>
    );
  }
);
