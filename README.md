<img src="./branding.png" width="400">

## To use the Luminescent UI Tailwind Library, you need to install the package from npm.

```bash
pnpm install @luminescent/ui
```

Once installed, include the following to your tailwind css file

```css
@import "@luminescent/ui/css";
@plugin "@luminescent/ui";
```

Once finished, you can use the classes included, shown in the documentation.

## To use the Luminescent UI Qwik Library, you need to install the qwik package from npm in addition to the main package.

```bash
pnpm install @luminescent/ui-qwik
```

Once installed, you can use the components included in the library, shown in the documentation.

If you want to use the Blobs component however, include the following to your tailwind css file after the previous imports
```css
@config "@luminescent/ui-qwik/config";
```