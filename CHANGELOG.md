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
<h3 class="text-sm text-gray-400">
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