export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function getMousePosition(e: MouseEvent | TouchEvent) {
  if (window.TouchEvent && e instanceof TouchEvent) {
    const touch = e.touches[0];
    return { x: touch.clientX, y: touch.clientY };
  }
  const mouse = e as MouseEvent;
  return { x: mouse.clientX, y: mouse.clientY };
}

export const pad2 = (c: string) => (c.length == 1 ? '0' + c : '' + c);

// Each member has a range of 0-1
export type RGBAColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

// Each member has a range of 0-1
export type HSVAColor = {
  h: number;
  s: number;
  v: number;
  a?: number;
};

export function getBrightness(color: RGBAColor) {
  const { r, g, b } = color;
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function hexNumberToRgb(color: number) {
  const r = ((color >> 16) & 255) / 255;
  const g = ((color >> 8) & 255) / 255;
  const b = (color & 255) / 255;
  return { r, g, b };
}

export function rgbToHex(color: RGBAColor) {
  const { r, g, b } = color;
  const hex = [
    '#',
    pad2(Math.round(r * 255).toString(16)),
    pad2(Math.round(g * 255).toString(16)),
    pad2(Math.round(b * 255).toString(16)),
  ];

  return hex.join('').toUpperCase();
}

export const hexStringToNumber = (color: string) =>
  parseInt(color.replace('#', ''), 16);

export function hsvToRgb(color: HSVAColor) {
  let { h } = color;
  const { s, v } = color;

  h *= 6;

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return { r, g, b };
}

export function rgbToHsv(color: RGBAColor) {
  const { r, g, b } = color;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  let h = 0;

  if (max != min) {
    switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
    }
    h /= 6;
  }
  return { h, s, v };
}
