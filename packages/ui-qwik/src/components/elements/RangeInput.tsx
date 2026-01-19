import type { PropsOf, QRL } from '@builder.io/qwik';
import { Slot, component$, useComputed$, useSignal } from '@builder.io/qwik';

interface RangeInputRawProps
  extends Omit<PropsOf<'input'> & { type: 'number' }, 'class' | 'type'> {
  onInput$?: QRL<
    (
      event: InputEvent,
      element: HTMLInputElement,
    ) => void
  >;
  class?: { [key: string]: boolean };
  value?: number;
  min?: number;
  max?: number;
}

interface RangeInputProps extends Omit<RangeInputRawProps, 'children'> {
  id: string;
}

export const RangeInput = component$<RangeInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="pb-1 text-lum-text select-none">
        <Slot />
      </label>
      <RangeInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const RangeInputRaw = component$<RangeInputRawProps>(
  ({ value = 0, max = 100, onInput$, ...props }) => {
    const valueSignal = useSignal<number>(value);
    const filledPercentage = useComputed$(() => (valueSignal.value / max) * 100);

    return (
      <div
        class={{
          'group relative flex touch-manipulation gap-1 text-lum-text lum-input p-0': true,
        }}
      >
        <div class="absolute w-full flex justify-between">
          {[...Array(max)].map((_, i) => {
            if (i === 0 || i === max - 1) return null;

            return <div
              key={i}
              class="border-l border-l-lum-border/20 h-1 my-0.5"
              style={{ left: `${(i / 4) * 100}%` }}
            />;
          })}
        </div>
        <div class="h-2 lum-bg-lum-accent group-hover:lum-bg-lum-accent rounded-lum"
          style={{ width: `${filledPercentage.value}%` }} />
        <div class="absolute -top-1 flex flex-col gap-4 items-center"
          style={{ left: `calc(${filledPercentage.value}% - 0.5rem)` }}>
          <div class="w-4 h-4 lum-bg-lum-accent group-hover:lum-bg-lum-accent rounded-full" />
          <div class="absolute top-6 lum-bg-lum-card-bg lum-btn-p-2 text-center rounded-lum opacity-0 group-hover:opacity-100 transition-all z-50">
            {valueSignal.value}
          </div>
        </div>
        <input
          {...props}
          max={max}
          type="range"
          value={valueSignal.value}
          class="absolute top-0 h-2 w-full opacity-0 cursor-pointer"
          onInput$={async (event, element) => {
            valueSignal.value = parseInt(element.value);
            if (onInput$) await onInput$(event, element);
          }}
        />
      </div>
    );
  },
);
