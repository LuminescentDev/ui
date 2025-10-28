## 6.2.0 (2025-10-28)

### 🚀 Features

- **nav:** auto-dismiss mobile menu on outside clicks; add nodismiss opt-out ([49b8ba1](https://github.com/LuminescentDev/ui/commit/49b8ba1))

### 🩹 Fixes

- **lum-bg:** make focus state depth-aware with fading border and shadow ([87a97dc](https://github.com/LuminescentDev/ui/commit/87a97dc))

### ❤️ Thank You

- saboooor

## 6.1.2 (2025-10-25)

### 🚀 Features

- add active for mobile click events ([52085c9](https://github.com/LuminescentDev/ui/commit/52085c9))

### ❤️ Thank You

- saboooor

## 6.1.1 (2025-10-25)

### 🚀 Features

- add --lum-depth variable and integrate depth-based styling across components ([a2948b9](https://github.com/LuminescentDev/ui/commit/a2948b9))
- enhance lum-toggle-bg utility with depth-based border and shadow effects ([d43c716](https://github.com/LuminescentDev/ui/commit/d43c716))

### ❤️ Thank You

- saboooor

## 6.1.0 (2025-10-24)

### 🚀 Features

- add --lum-depth variable and integrate depth-based styling across components ([a2948b9](https://github.com/LuminescentDev/ui/commit/a2948b9))
- enhance lum-toggle-bg utility with depth-based border and shadow effects ([d43c716](https://github.com/LuminescentDev/ui/commit/d43c716))

### ❤️ Thank You

- saboooor

Added depth-based border fade and shadow to lum-bg-* classes. The depth variable can be adjusted globally to change the intensity of the effect.

example:

```css
@theme {
  --lum-depth: 0; /* default */
}
```
```css
@theme {
  --lum-depth: 1; /* depth enabled */
}
```

## 5.2.0 (2025-07-29)

Breaking Changes:
- the Toggle component's label is now passed as children instead of a label prop.
  Migration Guide:

```jsx
<Toggle id="toggle-input" label="Toggle" />
```
```jsx
<Toggle id="toggle-input">
  Toggle
</Toggle>
```

## 5.1.0 (2025-07-29)

### 🚀 Features

- enhance SelectMenu component with additional props for customization ([435431b](https://github.com/LuminescentDev/ui/commit/435431b))

### 🩹 Fixes

- correct stop-color to stopColor in Birdflop logo gradient ([c959ee9](https://github.com/LuminescentDev/ui/commit/c959ee9))

### ❤️ Thank You

- saboooor

## 5.0.1 (2025-07-17)

### 🚀 Features

- enhance SelectMenu component with additional props for customization ([435431b](https://github.com/LuminescentDev/ui/commit/435431b))

### 🩹 Fixes

- correct stop-color to stopColor in Birdflop logo gradient ([c959ee9](https://github.com/LuminescentDev/ui/commit/c959ee9))

### ❤️ Thank You

- saboooor

## 5.0.1-7 (2025-07-17)

This was a version bump only, there were no code changes.

## 5.0.1-6 (2025-07-16)

This was a version bump only, there were no code changes.

## 5.0.1-5 (2025-07-16)

This was a version bump only, there were no code changes.

## 5.0.1-4 (2025-07-16)

This was a version bump only, there were no code changes.

## 5.0.1-3 (2025-07-16)

### 🚀 Features

- add Luminescent UI React library with components and documentation ([28d224b](https://github.com/LuminescentDev/ui/commit/28d224b))

### 🩹 Fixes

- **SelectMenu:** refactor to use useSignal for select reference and remove id prop ([fde776b](https://github.com/LuminescentDev/ui/commit/fde776b))

### ❤️ Thank You

- saboooor

## 5.0.1-2 (2025-07-10)

This was a version bump only, there were no code changes.

## 5.0.1-1 (2025-07-10)

### 🩹 Fixes

- **SelectMenu:** refactor to use useSignal for select reference and remove id prop ([fde776b](https://github.com/LuminescentDev/ui/commit/fde776b))

### ❤️ Thank You

- saboooor

## 5.0.1-0 (2025-07-10)

### 🚀 Features

- add Luminescent UI React library with components and documentation ([28d224b](https://github.com/LuminescentDev/ui/commit/28d224b))

### ❤️ Thank You

- saboooor

## 5.0.0-0 (2025-07-09)

### 🚀 Features

- update a bunch of stuff ([3e7ed79](https://github.com/LuminescentDev/ui/commit/3e7ed79))
- update Toggle component for new lum-bg classes and enhance customization options ([d965fb6](https://github.com/LuminescentDev/ui/commit/d965fb6))
- add more color variables   --color-lum-card-bg: var(--color-gray-900);   --color-lum-input-bg: var(--color-gray-800);   --color-lum-input-hover-bg: var(--color-gray-700);   --color-lum-accent: var(--color-blue-500); ([6bee32e](https://github.com/LuminescentDev/ui/commit/6bee32e))
- update text color variables to use lum-text and lum-text-secondary ([7934342](https://github.com/LuminescentDev/ui/commit/7934342))
- add Sidebar component and update imports in elements and root ([6301903](https://github.com/LuminescentDev/ui/commit/6301903))

### ❤️ Thank You

- saboooor

## 4.3.0-0 (2025-07-05)

### 🚀 Features

- add Sidebar component and update imports in elements and root ([6301903](https://github.com/LuminescentDev/ui/commit/6301903))

### ❤️ Thank You

- saboooor

## 4.2.2 (2025-07-05)

Fixed the dropdown menu not animating when hover is enabled and hovering over the dropdown button.

## 4.2.1 (2025-07-02)

This was a version bump only, there were no code changes.

## 4.2.0 (2025-07-02)

added align prop to select menu for aligning the dropdown content, which can be set to 'left', 'center', or 'right'. Default is 'left'.

added theme colors to formatting

Breaking Changes:
- the SelectMenu component now takes up the full width of its parent container by default, in addition to the align prop. If you want to change the width, you can use the `w-auto` class.

## 4.1.1 (2025-06-16)

### 🚀 Features

- update text color variables to use lum-text and lum-text-secondary ([7934342](https://github.com/LuminescentDev/ui/commit/7934342))

### ❤️ Thank You

- saboooor

## 4.1.0 (2025-06-15)

### 🚀 Features

- add more color variables   --color-lum-card-bg: var(--color-gray-900);   --color-lum-input-bg: var(--color-gray-800);   --color-lum-input-hover-bg: var(--color-gray-700);   --color-lum-accent: var(--color-blue-500); ([6bee32e](https://github.com/LuminescentDev/ui/commit/6bee32e))

### ❤️ Thank You

- saboooor

## 4.0.2 (2025-06-14)

This was a version bump only, there were no code changes.

## 4.0.1 (2025-06-14)

### 🚀 Features

- update Toggle component for new lum-bg classes and enhance customization options ([d965fb6](https://github.com/LuminescentDev/ui/commit/d965fb6))

### ❤️ Thank You

- saboooor

## 4.0.0 (2025-06-14)

lum-bg no longer requires a separate import, it's now included in the main css file.
Migration Guide:

```css
@import '@luminescent/ui/css';
@plugin '@luminescent/ui/lum-bg';
```

```css
@import '@luminescent/ui/css';
```

Toggle component has been rewritten to use the new lum-bg classes, which will allow for more customization on how you want the toggle to look like.
Migration Guide:

```html
<Toggle id="toggle-input" label="Toggle" onColor="green" offColor="slate" />
```

```html
<Toggle id="toggle-input" label="Toggle" class="lum-toggle-bg-slate-600 peer-checked:lum-toggle-bg-green-600" />
```

Added some variables that you can change on your global.css file to change the default values

```css
@theme {
  --lum-default-alpha: 100;
  --lum-btn-p-x: 2;
  --lum-input-p-x: 1.5;
  --lum-border-radius: var(--radius-md);
  --lum-border-mix: 20%;
  --color-lum-border: var(--color-gray-400);
}
```

You can use the rounded-lum utility to apply the default border radius to any element.

In addition, you can also nest rounded border radius classes by appending the amount of padding to the class name, such as `rounded-lum-2` for an element that has the `p-2` class.


Added border-gradient- utility class to apply a gradient border to an element.

Example:

```html
<div class="border-gradient-1 before:from-blue-500 before:to-purple-500">
  This is a div with a gradient border
</div>
<div class="border-gradient-2 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500">
  This is a div with a gradient border that goes from left to right
</div>
```

Added mouse-tracking card that follows the mouse cursor around the screen. qwik only for now.
```jsx
import { Hoverable } from '@luminescent/ui-qwik';
<div class="lum-card lum-hoverable" onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)} onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}>
  This card follows the mouse cursor around the screen
</div>
```

Added a 'lum-hoverable' class that applies a pop out effect on hover to any element.

Some small styling changes were made and may change the look of some elements, such as the NumberInput component.

## 3.0.2 (2025-05-26)

fix for individual fill gradients and a bit of style changes for formatting

## 3.0.1 (2025-05-22)

Renamed imports

Migration Guide:

```css
@import '@luminescent/ui/css';
@plugin '@luminescent/ui';
```

```css
@import '@luminescent/ui';
@plugin '@luminescent/ui/lum-bg';
```

New formatting import that applies default formatting to various elements

```css
@import 'luminescent/ui/formatting'
```

All icon size properties have been renamed from 'width' to 'size'

Migration Guide:

```html
<LogoLuminescent width={20}>
```

```html
<LogoLuminescent size={20}>
```

Dropdown has been renamed to SelectMenu, display property has been moved to a slot. It's recommended to also use the slot if you need a fallback value to show as a display

Migration Guide

```html
<Dropdown display={<p>Dropdown uwu<p>}>
  Dropdown
  <button q:slot="extra-buttons" class="lum-btn lum-bg-transparent">
    Option 4 (not an actual value)
  </button>
</Dropdown>
```

```html
<SelectMenu customDropdown>
  Select Menu
  <p q:slot="dropdown">
    Select Menu uwu
  <p>
  <button q:slot="extra-buttons" class="lum-btn lum-bg-transparent">
    Option 4 (not an actual value)
  </button>
</SelectMenu>
```

Icons have been updated to use lucide icons

## 2.1.0 (2025-05-10)

Removed the Header element, Anchor is now its own element that wraps around any element.

Migration guide:

```html
<Header>
  This is a header
</Header>
```

```html
<h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
  This is a header
</h2>
```

```html
<Header id="anchor" anchor>
  This is a header with an anchor
</Header>
```

```html
<Anchor id="anchor">
  <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
    This is a header with an anchor
  </h2>
</Anchor>
```

```html
<Header subheader="This is a subheader">
  This is a header with a subheader
</Header>
```

```html
<h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
  This is a header with a subheader
</h2>
<h3 class="text-sm text-lum-text-secondary">
  This is a subheader
</h3>
```

# 2.0.0 (2025-05-06)

Updated to tailwind v4

Replaced lum-pad classes with integer values instead of sm/md/lg/xl/2xl

Migration guide:

```
lum-pad-xs > px-2.5 py-1.5 / SUGGESTED => lum-btn-p-1
lum-pad-sm > px-3 py-2 / SUGGESTED => lum-btn-p-2
lum-pad-md > lum-btn-p-2
lum-pad-lg > px-7 py-4 / SUGGESTED => lum-btn-p-3
lum-pad-xl > lum-btn-p-4
lum-pad-2xl > lum-btn-p-5
lum-pad-3xl > lum-btn-p-6
lum-pad-4xl > lum-btn-p-7
lum-pad-5xl > lum-btn-p-8
```
```
lum-pad-equal-xs > p-1.5
lum-pad-equal-sm > p-2
lum-pad-equal-md > p-2
lum-pad-equal-lg > p-4
lum-pad-equal-xl > p-4
lum-pad-equal-2xl > p-5
lum-pad-equal-3xl > p-6
lum-pad-equal-4xl > p-7
lum-pad-equal-5xl > p-8
```