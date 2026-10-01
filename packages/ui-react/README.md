# Luminescent UI for React

React components use normal event callbacks and React nodes in place of Qwik
callbacks and named slots.

## Navigation

`Nav` accepts `start`, `center`, `end`, `hamburger`, and `mobile` content.
Use `innerProps`, `panelProps`, and `mobileNavProps` to customize the main bar,
hamburger panel, and mobile bar. `floating`, `fixed`, `noblur`, `nohamburger`, and
`nodismiss` control the layout and behavior.

## Tabs

Set `permanent: true` on a tab to hide its delete button. `tabProps` customizes
each tab container. `renderBefore(tab)` and `renderAfter(tab)` add content around
its label. `onClick(tab)`, `onDelete(tab)`, and `onPlus(event)` handle actions.

## Select menus and dropdowns

`SelectMenu` supports `renderBefore(value)`, `renderAfter(value)`, and
`renderOption(value)` for options with `custom: true`. `btnProps` applies to
option buttons. Use `dropdownBefore`, `dropdownAfter`, `extraContent`, and
`customDropdownButton` to customize the trigger and panel. A supplied `value`
controls the selection; update it in `onChange`.

`Dropdown` closes on outside clicks and Escape. `nocloseonclick` disables click
dismissal. `outerContent` renders content outside its panel, alongside the trigger.

## Color picker

`ColorPicker` supports `opacity`, `horizontal`, `showInput`, custom `colors`, and
`preview="left" | "right" | "top" | "bottom" | "full"`. Opacity can be adjusted
by dragging or with the arrow, Home, and End keys. `onInput(color)` receives hex
colors, including alpha when applicable. Randomization remains available when
`showInput={false}`.

## Hover tilt

```tsx
import { Hoverable } from '@luminescent/ui-react';

<div className="lum-card" {...Hoverable}>
  Hover over me
</div>;
```

## Validation

Run `pnpm nx run @luminescent/ui-react:build` and
`pnpm nx run @luminescent/ui-react:test` from the workspace root.
