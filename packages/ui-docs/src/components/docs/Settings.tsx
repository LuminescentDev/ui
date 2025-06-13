import { component$, isBrowser, useStore, useTask$ } from '@builder.io/qwik';
import { NumberInput } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    borderRadius: 0.375,
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
      '--lum-border-radius',
      `${store.borderRadius}rem`,
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
        --lum-border-radius: {store.borderRadius}rem
      </p>
      <p>
        --lum-btn-p-x: {store.btnPaddingX}rem
      </p>
      <p>
        --lum-input-p-x: {store.inputPaddingX}rem
      </p>
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