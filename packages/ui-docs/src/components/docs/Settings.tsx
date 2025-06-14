import { component$, isBrowser, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { ColorPicker, NumberInput } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    borderRadius: 0.375,
    borderColor: 'var(--color-gray-300)',
    borderMix: 20,
    btnPaddingX: 2,
    inputPaddingX: 1.5,
  });

  const open = useSignal(false);

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
      '--lum-border-color',
      `${store.borderColor}`,
    );
    document.documentElement.style.setProperty(
      '--lum-border-mix',
      `${store.borderMix}%`,
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
        --lum-border-color: {store.borderColor}
      </p>
      <p>
        --lum-border-mix: {store.borderMix}%
      </p>
      <p>
        --lum-btn-p-x: {store.btnPaddingX}
      </p>
      <p>
        --lum-input-p-x: {store.inputPaddingX}
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

      <label for="border-color">
        lum-border-color
      </label>
      <div class="flex gap-1 relative">
        <div class="aspect-square rounded-lum rounded-r-sm" style={{
          background: store.borderColor,
        }}></div>
        <input id="border-color"
          class={{
            'lum-input lum-input-p-1 rounded-l-sm': true,
          }}
          value={store.borderColor}
          onInput$={(e, el) => {
            const picker = document.getElementById('border-color-picker')!;
            picker.dataset.value = el.value;
            picker.dispatchEvent(new Event('input'));
          }}
          onMouseUp$={() => {
            const picker = document.getElementById('border-color-picker')!;
            picker.dataset.value = store.borderColor;
            picker.dispatchEvent(new Event('input'));
            open.value = !open.value;
            const abortController = new AbortController();
            document.addEventListener('click', (e) => {
              if (e.target instanceof HTMLElement && !e.target.closest('#border-color-popup')) {
                abortController.abort();
              }
            }, { signal: abortController.signal });
          }}
        />
        <div id="border-color-popup" stoppropagation:mousedown class={{
          'flex flex-col gap-2 motion-safe:transition-all absolute top-full z-[1000] mt-2 left-0': true,
          'opacity-0 scale-95 pointer-events-none': !open.value,
        }}>
          <ColorPicker
            id="border-color-picker"
            value={store.borderColor}
            onInput$={newColor => {
              store.borderColor = newColor;
            }}
            showInput={false}
          />
        </div>
      </div>

      <NumberInput
        id="border-mix"
        onIncrement$={() => {
          store.borderMix += 1;
        }}
        onDecrement$={() => {
          store.borderMix -= 1;
        }}
        onInput$={(e, el) => {
          store.borderMix = Number(el.value);
        }}
        input
        value={store.borderMix}
      >
        lum-border-mix
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