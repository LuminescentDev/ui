import { component$, isBrowser, useStore, useTask$ } from '@builder.io/qwik';
import { NumberInput } from '../../index';

export default component$(() => {
  const store = useStore({
    defaultAlpha: 100,
    defaultBackdropFilter: undefined as string | undefined,
    borderRadius: 0.375,
    borderLightness: 20,
    btnPaddingX: 2,
    inputPaddingX: 1.5,
  });

  useTask$(({ track }) => {
    for (const key in store) {
      track(() => store[key as keyof typeof store]);
    }
    if (!isBrowser) return;

    // set the CSS variables on the root element
    document.documentElement.style.setProperty(
      '--lum-default-alpha',
      `${store.defaultAlpha}`,
    );
    document.documentElement.style.setProperty(
      '--lum-border-radius',
      `${store.borderRadius}rem`,
    );
    document.documentElement.style.setProperty(
      '--lum-border-lightness',
      `${store.borderLightness}%`,
    );
    document.documentElement.style.setProperty(
      '--lum-btn-p-x',
      `${store.btnPaddingX}`,
    );
    document.documentElement.style.setProperty(
      '--lum-input-p-x',
      `${store.inputPaddingX}`,
    );
  });

  return (
    <div class="lum-card border-gradient-1 before:from-luminescent-200 before:to-luminescent-800">
      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Settings
      </h2>
      <p>
        --lum-default-alpha: {store.defaultAlpha}
      </p>
      <p>
        --lum-border-radius: {store.borderRadius}rem
      </p>
      <p>
        --lum-border-lightness: {store.borderLightness}%
      </p>
      <p>
        --lum-btn-p-x: {store.btnPaddingX}
      </p>
      <p>
        --lum-input-p-x: {store.inputPaddingX}
      </p>
      <NumberInput
        id="default-alpha"
        onIncrement$={() => {
          store.defaultAlpha += 1;
        }}
        onDecrement$={() => {
          store.defaultAlpha -= 1;
        }}
        onInput$={(e, el) => {
          store.defaultAlpha = Number(el.value);
        }}
        input
        value={store.defaultAlpha}
      >
        lum-default-alpha
      </NumberInput>
      <NumberInput
        id="border-radius"
        onIncrement$={() => {
          store.borderRadius += 0.01;
        }}
        onDecrement$={() => {
          store.borderRadius -= 0.01;
        }}
        onInput$={(e, el) => {
          store.borderRadius = Number(el.value);
        }}
        input
        value={store.borderRadius}
      >
        lum-border-radius
      </NumberInput>
      <NumberInput
        id="border-lightness"
        onIncrement$={() => {
          store.borderLightness += 1;
        }}
        onDecrement$={() => {
          store.borderLightness -= 1;
        }}
        onInput$={(e, el) => {
          store.borderLightness = Number(el.value);
        }}
        input
        value={store.borderLightness}
      >
        lum-border-lightness
      </NumberInput>
      <NumberInput
        id="lum-btn-p-x"
        onIncrement$={() => {
          store.btnPaddingX += 0.5;
        }}
        onDecrement$={() => {
          store.btnPaddingX -= 0.5;
        }}
        onInput$={(e, el) => {
          store.btnPaddingX = Number(el.value);
        }}
        input
        value={store.btnPaddingX}
      >
        lum-btn-p-x
      </NumberInput>
      <NumberInput
        id="lum-input-p-x"
        onIncrement$={() => {
          store.inputPaddingX += 0.5;
        }}
        onDecrement$={() => {
          store.inputPaddingX -= 0.5;
        }}
        onInput$={(e, el) => {
          store.inputPaddingX = Number(el.value);
        }}
        input
        value={store.inputPaddingX}
      >
        lum-input-p-x
      </NumberInput>
    </div>
  );
});