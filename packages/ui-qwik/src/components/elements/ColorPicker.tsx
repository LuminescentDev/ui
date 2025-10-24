import type { PropsOf, QRL } from '@builder.io/qwik';
import { $, component$, useStore } from '@builder.io/qwik';
import {
  getBrightness,
  hexNumberToRgb,
  hexStringToNumber,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
  clamp,
  getMousePosition,
} from '../../utils/color';
import { Shuffle } from '~/svg/Shuffle';

export interface ColorPickerProps
  extends Omit<PropsOf<'div'>, 'class' | 'onInput$'> {
  class?: {
    [key: string]: boolean;
  };
  onInput$?: QRL<(color: string) => void>;
  value?: string;
  colors?: string[];
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
}

export const ColorPicker = component$<ColorPickerProps>(
  ({
    id,
    value = '#000000',
    colors = [
      '#FAEDCB',
      '#C9E4DE',
      '#C6DEF1',
      '#DBCDF0',
      '#F2C6DE',
      '#FCD05C',
      '#5FE2C5',
      '#4498DB',
      '#9863E7',
      '#E43A96',
      '#000000',
      '#555555',
      '#AAAAAA',
      '#FFFFFF',
    ],
    onInput$,
    preview = 'left',
    horizontal,
    showInput = true,
    ...props
  }) => {
    const height = 150;
    const width = height - 25;
    const maxHue = height - 2;

    const hsvColor = rgbToHsv(hexNumberToRgb(hexStringToNumber(value)));
    const store = useStore({
      hue: {
        position: hsvColor.h * maxHue,
        color: rgbToHex(hsvToRgb({ h: hsvColor.h, s: 1, v: 1 })),
      },
      bPosition: (1 - hsvColor.v) * maxHue,
      sPosition: hsvColor.s * width,
      value: value,
    });

    const setColor = $(async (color: string) => {
      if (!color.match(/^#[0-9A-F]{6}$/i)) return;
      const number = hexStringToNumber(color);
      const hsv = rgbToHsv(hexNumberToRgb(number));
      store.hue.position = hsv.h * maxHue;
      store.hue.color = rgbToHex(hsvToRgb({ h: hsv.h, s: 1, v: 1 }));
      store.sPosition = hsv.s * width;
      store.bPosition = (1 - hsv.v) * maxHue;

      store.value = color;
      await onInput$?.(store.value);
    });

    const hueChange = $(async (e: MouseEvent | TouchEvent, hOffset: number) => {
      const { y } = getMousePosition(e);
      store.hue.position = clamp(maxHue - (y - hOffset), 0, maxHue);
      const hsvColor = rgbToHsv(hexNumberToRgb(hexStringToNumber(store.value)));
      const h = store.hue.position / maxHue;
      hsvColor.h = h;
      store.hue.color = rgbToHex(hsvToRgb({ h, s: 1, v: 1 }));

      store.value = rgbToHex(hsvToRgb(hsvColor));
      await onInput$?.(store.value);
    });

    const hueMouseDown = $(
      async (e: MouseEvent | TouchEvent, el: HTMLDivElement) => {
        const hOffset = el.getBoundingClientRect().top;
        await hueChange(e, hOffset);
        const eventListener = (e: MouseEvent | TouchEvent) =>
          void hueChange(e, hOffset);
        window.addEventListener('mousemove', eventListener);
        window.addEventListener('touchmove', eventListener);
        const mouseUpListener = () => {
          window.removeEventListener('mousemove', eventListener);
          window.removeEventListener('touchmove', eventListener);
          window.removeEventListener('mouseup', mouseUpListener);
          window.removeEventListener('touchend', mouseUpListener);
        };
        window.addEventListener('mouseup', mouseUpListener);
        window.addEventListener('touchend', mouseUpListener);
      },
    );

    const sbChange = $(async (e: MouseEvent | TouchEvent, hOffset: DOMRect) => {
      const { x, y } = getMousePosition(e);
      store.bPosition = clamp(y - hOffset.top, 0, maxHue);
      store.sPosition = clamp(x - hOffset.left, 0, width);
      const s = store.sPosition / width;
      const v = 1 - store.bPosition / maxHue;

      store.value = rgbToHex(
        hsvToRgb({
          h: store.hue.position / maxHue,
          s,
          v,
        }),
      );
      await onInput$?.(store.value);
    });

    const sbMouseDown = $(
      async (e: MouseEvent | TouchEvent, el: HTMLDivElement) => {
        const offset = el.getBoundingClientRect();
        await sbChange(e, offset);
        const eventListener = (e: MouseEvent | TouchEvent) =>
          void sbChange(e, offset);
        window.addEventListener('mousemove', eventListener);
        window.addEventListener('touchmove', eventListener);
        const mouseUpListener = () => {
          window.removeEventListener('mousemove', eventListener);
          window.removeEventListener('touchmove', eventListener);
          window.removeEventListener('mouseup', mouseUpListener);
          window.removeEventListener('touchend', mouseUpListener);
        };
        window.addEventListener('mouseup', mouseUpListener);
        window.addEventListener('touchend', mouseUpListener);
      },
    );

    return (
      <div
        class={{
          'lum-card touch-none p-4 motion-safe:transition-all': true,
          'flex-col': !horizontal,
          ...props.class,
        }}
        id={id}
        onInput$={async (e, el) => {
          if (!el.dataset.value) return;
          await setColor(el.dataset.value);
        }}
      >
        <div class="flex gap-4">
          <div
            class="relative h-[150px] w-[125px] rounded-md"
            style={{
              background: `linear-gradient(to right, #FFFFFF, ${store.hue.color})`,
            }}
            onMouseDown$={sbMouseDown}
            onTouchStart$={sbMouseDown}
            preventdefault:mousedown
            preventdefault:touchstart
          >
            <div class="h-[150px] w-[125px] rounded-md border border-gray-700 bg-linear-to-b from-transparent to-black" />
            <div
              class={{
                'absolute -top-2 -left-2 h-4 w-4 rounded-md border bg-white':
                  true,
                'border-white':
                  getBrightness(
                    hexNumberToRgb(hexStringToNumber(store.value)),
                  ) < 0.5,
                'border-black':
                  getBrightness(
                    hexNumberToRgb(hexStringToNumber(store.value)),
                  ) > 0.5,
              }}
              style={{
                background: store.value,
                transform: `translate(${store.sPosition}px, ${store.bPosition}px)`,
              }}
            />
          </div>
          <div
            class="relative h-[150px] w-2 rounded-md border border-gray-700"
            style={{
              background:
                'linear-gradient(to bottom, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
            }}
            onMouseDown$={hueMouseDown}
            onTouchStart$={hueMouseDown}
            preventdefault:mousedown
            preventdefault:touchstart
          >
            <div
              class="absolute -bottom-2 -left-[5px] h-4 w-4 rounded-md border border-white bg-[#ff0000]"
              style={{
                transform: `translateY(${-store.hue.position}px)`,
                background: store.hue.color,
              }}
            />
          </div>
        </div>
        <div class="flex w-[150px] flex-wrap justify-between gap-1">
          {showInput && (
            <div
              class={{
                'mb-2 flex w-[150px] border-b border-b-gray-700 pb-3': true,
                'flex-row gap-1': preview == 'left',
                'flex-row-reverse gap-1': preview == 'right',
                'flex-col': preview == 'top',
                'flex-col-reverse': preview == 'bottom',
              }}
            >
              {preview != 'full' && (
                <div
                  class={{
                    'border border-gray-700 rounded-sm': true,
                    'aspect-square h-full':
                      preview == 'left' || preview == 'right',
                    'h-3 w-full': preview == 'top' || preview == 'bottom',
                    'rounded-b-none': preview == 'top',
                    'rounded-t-none': preview == 'bottom',
                  }}
                  style={{
                    backgroundColor: `${store.value}`,
                  }}
                ></div>
              )}
              <input
                class={{
                  'lum-input w-full p-1 text-xs rounded-sm': true,
                  'rounded-t-none border-t-0': preview == 'top',
                  'rounded-b-none border-b-0': preview == 'bottom',
                }}
                value={store.value}
                style={
                  preview == 'full'
                    ? {
                      backgroundColor: `${store.value}`,
                      color:
                          getBrightness(
                            hexNumberToRgb(hexStringToNumber(store.value)),
                          ) > 0.5
                            ? 'black'
                            : 'white',
                    }
                    : {}
                }
                onInput$={async (e, el) => {
                  await setColor(el.value);
                }}
              />
            </div>
          )}
          {colors.map((color, i) => {
            return (
              <button type="button"
                key={i}
                name={color}
                class={{
                  'lum-btn rounded-sm h-[1.6rem] w-[1.6rem] border-2 border-white/30 p-0 hover:border-white':
                    true,
                }}
                style={{
                  background: color,
                  borderColor: color === store.value ? '#ffffff' : undefined,
                }}
                onClick$={async () => {
                  await setColor(color);
                }}
              ></button>
            );
          })}
          <button type="button"
            class="lum-btn rounded-sm h-[1.6rem] w-[1.6rem] p-0.5"
            name="Randomize"
            onClick$={async () => {
              const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
              await setColor(color);
            }}
          >
            <Shuffle class="p-0.5 pl-0.5 text-lum-text" />
          </button>
        </div>
      </div>
    );
  },
);
