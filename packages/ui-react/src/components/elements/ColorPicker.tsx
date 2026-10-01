import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ShuffleIcon } from 'lucide-react';
import {
  clamp,
  getMousePosition,
  hexToRgba,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
  getBrightness,
} from '../../utils/color';
import { getClasses } from '../functions';

export interface ColorPickerProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onInput'
> {
  onInput?: (color: string) => void;
  value?: string;
  colors?: string[];
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
  opacity?: boolean;
}

export function ColorPicker({
  id,
  className,
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
  onInput,
  preview = 'left',
  horizontal,
  showInput = true,
  opacity,
  ...props
}: ColorPickerProps) {
  const height = 150;
  const width = height - 25;
  const maxHue = height - 2;

  const [colorValue, setColorValue] = useState(value);
  const dragCleanup = useRef<(() => void) | undefined>(undefined);
  useEffect(() => () => dragCleanup.current?.(), []);
  const hsvColor = rgbToHsv(hexToRgba(colorValue));

  const [huePos, setHuePos] = useState(hsvColor.h * maxHue);
  const [hueColor, setHueColor] = useState(
    rgbToHex(hsvToRgb({ h: hsvColor.h, s: 1, v: 1 }))
  );
  const [bPos, setBPos] = useState((1 - hsvColor.v) * maxHue);
  const [sPos, setSPos] = useState(hsvColor.s * width);

  useEffect(() => {
    setColorValue(value);
    const hsv = rgbToHsv(hexToRgba(value));
    setHuePos(hsv.h * maxHue);
    setHueColor(rgbToHex(hsvToRgb({ h: hsv.h, s: 1, v: 1, a: hsv.a })));
    setSPos(hsv.s * width);
    setBPos((1 - hsv.v) * maxHue);
  }, [value, maxHue, width]);

  const updateColor = (newColor: string) => {
    if (!/^#[0-9a-f]{0,8}$/i.test(newColor)) return;
    setColorValue(newColor);
    const hsv = rgbToHsv(hexToRgba(newColor));
    setHuePos(hsv.h * maxHue);
    setHueColor(rgbToHex(hsvToRgb({ h: hsv.h, s: 1, v: 1, a: hsv.a })));
    setSPos(hsv.s * width);
    setBPos((1 - hsv.v) * maxHue);
    if (onInput) onInput(newColor);
  };

  const handleHueMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    dragCleanup.current?.();
    const el = e.currentTarget;
    const hOffset = el.getBoundingClientRect().top;
    const updateHue = (evt: MouseEvent | TouchEvent) => {
      const { y } = getMousePosition(evt);
      const pos = clamp(maxHue - (y - hOffset), 0, maxHue);
      setHuePos(pos);
      const h = pos / maxHue;
      const hsv = rgbToHsv(hexToRgba(colorValue));
      hsv.h = h;
      setHueColor(rgbToHex(hsvToRgb({ h, s: 1, v: 1, a: hsv.a })));
      const hex = rgbToHex(hsvToRgb(hsv));
      setColorValue(hex);
      if (onInput) onInput(hex);
    };

    updateHue(e.nativeEvent);
    const onMove = (evt: MouseEvent | TouchEvent) => updateHue(evt);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    dragCleanup.current = onUp;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
  };

  const handleSatMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    dragCleanup.current?.();
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const updateSat = (evt: MouseEvent | TouchEvent) => {
      const { x, y } = getMousePosition(evt);
      const s = clamp(x - rect.left, 0, width);
      const b = clamp(maxHue - (y - rect.top), 0, maxHue);
      setSPos(s);
      setBPos(maxHue - b);

      const hsv = rgbToHsv(hexToRgba(colorValue));
      hsv.s = s / width;
      hsv.v = b / maxHue;

      const hex = rgbToHex(hsvToRgb(hsv));
      setColorValue(hex);
      if (onInput) onInput(hex);
    };

    updateSat(e.nativeEvent);
    const onMove = (evt: MouseEvent | TouchEvent) => updateSat(evt);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    dragCleanup.current = onUp;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
  };

  const handleOpacityDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragCleanup.current?.();
    const rect = event.currentTarget.getBoundingClientRect();
    const hsv = rgbToHsv(hexToRgba(colorValue));
    const update = (clientX: number) => {
      const a = 1 - clamp((clientX - rect.left) / rect.width, 0, 1);
      updateColor(rgbToHex(hsvToRgb({ ...hsv, a })));
    };
    update(event.clientX);
    const move = (event: PointerEvent) => update(event.clientX);
    const cleanup = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', cleanup);
      window.removeEventListener('pointercancel', cleanup);
    };
    dragCleanup.current = cleanup;
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', cleanup);
    window.addEventListener('pointercancel', cleanup);
  };

  return (
    <div
      {...props}
      id={id}
      className={getClasses({
        'lum-card touch-none gap-4 p-4': true,
        'flex-col': !horizontal,
        'flex-row': horizontal,
        [className ?? '']: !!className,
      })}
    >
      <div className="flex gap-2">
        <div
          className="relative cursor-pointer rounded-sm"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: hueColor,
          }}
          onMouseDown={handleSatMouseDown}
          onTouchStart={handleSatMouseDown}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-sm"
            style={{
              left: `${sPos}px`,
              top: `${bPos}px`,
              backgroundColor: colorValue,
            }}
          />
        </div>

        <div
          className="relative h-full w-5 cursor-pointer rounded-sm"
          style={{
            height: `${height}px`,
            background:
              'linear-gradient(to bottom, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
          }}
          onMouseDown={handleHueMouseDown}
          onTouchStart={handleHueMouseDown}
        >
          <div
            className="absolute left-0 h-1.5 w-full -translate-y-1/2 rounded-sm border border-white bg-black/40 shadow-sm"
            style={{ top: `${maxHue - huePos}px` }}
          />
        </div>
      </div>

      <div className="flex w-37.5 flex-col gap-2">
        {opacity && (
          <div
            role="slider"
            aria-label="Opacity"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((hsvColor.a ?? 1) * 100)}
            tabIndex={0}
            className="relative h-2 w-full cursor-pointer rounded-md border border-gray-700"
            style={{
              background: `linear-gradient(to right, ${rgbToHex(hsvToRgb({ ...hsvColor, a: 1 }))}, transparent), repeating-conic-gradient(#ccc 0% 25%, white 0% 50%) 0 / 8px 8px`,
            }}
            onPointerDown={handleOpacityDown}
            onKeyDown={(event) => {
              if (
                !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
              )
                return;
              event.preventDefault();
              const a =
                event.key === 'Home'
                  ? 1
                  : event.key === 'End'
                    ? 0
                    : clamp(
                        (hsvColor.a ?? 1) +
                          (event.key === 'ArrowLeft' ? 0.01 : -0.01),
                        0,
                        1
                      );
              updateColor(rgbToHex(hsvToRgb({ ...hsvColor, a })));
            }}
          >
            <div
              className="absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full border border-white"
              style={{
                left: `${(1 - (hsvColor.a ?? 1)) * 100}%`,
                backgroundColor: colorValue,
              }}
            />
          </div>
        )}
        {showInput && (
          <div
            className={getClasses({
              'flex gap-1': true,
              'flex-row': preview === 'left' || preview === 'full',
              'flex-row-reverse': preview === 'right',
              'flex-col': preview === 'top',
              'flex-col-reverse': preview === 'bottom',
            })}
          >
            {preview !== 'full' && (
              <div
                className={getClasses({
                  'rounded-sm border border-gray-700': true,
                  'w-8 shrink-0': preview === 'left' || preview === 'right',
                  'h-3 w-full': preview === 'top' || preview === 'bottom',
                })}
                style={{ backgroundColor: colorValue }}
              />
            )}
            <input
              type="text"
              className="lum-input lum-input-p-1 text-lum-text w-full rounded-sm text-center text-sm"
              value={colorValue}
              aria-label="Hex color"
              style={
                preview === 'full'
                  ? {
                      backgroundColor: colorValue,
                      color:
                        getBrightness(hexToRgba(colorValue)) > 0.5
                          ? 'black'
                          : 'white',
                    }
                  : undefined
              }
              onChange={(e) => updateColor(e.target.value)}
            />
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            type="button"
            className="lum-btn rounded-sm p-1.5"
            aria-label="Randomize color"
            onClick={() => {
              const randomHex =
                '#' +
                Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, '0')
                  .toUpperCase();
              updateColor(randomHex);
            }}
          >
            <ShuffleIcon size={16} />
          </button>
          {colors && colors.length > 0 && (
            <>
              {colors.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Select ${c}`}
                  aria-pressed={c.toLowerCase() === colorValue.toLowerCase()}
                  className="h-5 w-5 rounded-sm border border-black/20 transition-transform hover:scale-110"
                  style={{ backgroundColor: c }}
                  onClick={() => updateColor(c)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
