import type React from 'react';
import { useState, useEffect } from 'react';
import { ShuffleIcon } from 'lucide-react';
import {
  clamp,
  getMousePosition,
  hexToRgba,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
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
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
  };

  const handleSatMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
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
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
  };

  return (
    <div
      {...props}
      className={getClasses({
        'flex flex-col gap-2 p-2': true,
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
              'linear-gradient(to top, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
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

      {showInput && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="lum-input lum-input-p-1 text-lum-text w-full rounded-sm text-center text-sm"
            value={colorValue}
            onChange={(e) => updateColor(e.target.value)}
          />
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
        </div>
      )}

      {colors && colors.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {colors.map((c, i) => (
            <button
              key={i}
              type="button"
              className="h-5 w-5 rounded-sm border border-black/20 transition-transform hover:scale-110"
              style={{ backgroundColor: c }}
              onClick={() => updateColor(c)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
