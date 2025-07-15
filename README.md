<img src="./branding.png" width="400">

## To use the Luminescent UI Tailwind Library, you need to install the package from npm.

```bash
pnpm install @luminescent/ui
```

Once installed, include the following to your tailwind css file

```css
@import "@luminescent/ui";
@plugin "@luminescent/ui/lum-bg";
```

Once finished, you can use the classes included, shown in the documentation.

### Luminescent UI also provides default formatting for various elements

This is mainly for people who would like to easily format Markdown elements, you can add it to your tailwind css file. You can see the formatting in action in the [Markdown Documentation](https://ui.luminescent.dev/docs/markdown).

```css
@import "@luminescent/ui/formatting";
```

## To use the Luminescent UI Qwik Library, you need to install the qwik package from npm in addition to the main package.

```bash
pnpm install @luminescent/ui-qwik
```

Once installed, include the following to your tailwind css file after the previous imports

```css
@config "@luminescent/ui-qwik/config";
@source "../node_modules/@luminescent/ui-qwik";
```

## To use the Luminescent UI React Library, you need to install the react package from npm in addition to the main package.

```bash
pnpm install @luminescent/ui-react
```

Once installed, include the following to your tailwind css file after the previous imports

```css
@source "../node_modules/@luminescent/ui-react";
```