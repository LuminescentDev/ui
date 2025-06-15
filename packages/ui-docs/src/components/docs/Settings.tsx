import { component$, isBrowser, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { ColorPicker, NumberInput } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    '--lum-default-alpha': 100,
    '--lum-border-radius': 0.375,
    '--lum-border-mix': 20,
    '--lum-btn-p-x': 2,
    '--lum-input-p-x': 1.5,
    '--color-lum-border': 'var(--color-gray-300)',
    '--color-lum-card-bg': 'var(--color-gray-900)',
    '--color-lum-input-bg': 'var(--color-gray-800)',
  });

  const open = useSignal(false);

  useTask$(({ track }) => {
    for (const key in store) {
      track(() => store[key as keyof typeof store]);
    }
    if (!isBrowser) return;

    // set the CSS variables on the root element
    Object.keys(store).forEach((key) => {
      let suffix = '';
      if (key == '--lum-border-mix') {
        suffix = '%';
      }
      if (key == '--lum-border-radius') {
        suffix = 'rem';
      }
      console.log(key, store[key as keyof typeof store], suffix);
      document.documentElement.style.setProperty(key, `${store[key as keyof typeof store]}${suffix}`);
    });
  });

  return (
    <div class="lum-card border-gradient-1 before:from-luminescent-200 before:to-luminescent-800">
      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Settings
      </h2>
      <p>
        --lum-border-mix: {store['--lum-border-mix']}%
      </p>
      <p>
        --lum-btn-p-x: {store['--lum-btn-p-x']}
      </p>
      <p>
        --lum-input-p-x: {store['--lum-input-p-x']}
      </p>
      <p>
        --color-lum-border: {store['--color-lum-border']}
      </p>
      <p>
        --color-lum-card-bg: {store['--color-lum-card-bg']}
      </p>
      <p>
        --color-lum-input-bg: {store['--color-lum-input-bg']}
      </p>
      <NumberInput
        id="default-alpha"
        onIncrement$={() => {
          store['--lum-default-alpha'] += 1;
        }}
        onDecrement$={() => {
          store['--lum-default-alpha'] -= 1;
        }}
        onInput$={(e, el) => {
          store['--lum-default-alpha'] = Number(el.value);
        }}
        input
        value={store['--lum-default-alpha']}
      >
        lum-default-alpha
      </NumberInput>
      <p>
        --lum-default-alpha: {store['--lum-default-alpha']}
      </p>

      <NumberInput
        id="border-radius"
        onIncrement$={() => {
          store['--lum-border-radius'] += 0.01;
        }}
        onDecrement$={() => {
          store['--lum-border-radius'] -= 0.01;
        }}
        onInput$={(e, el) => {
          store['--lum-border-radius'] = Number(el.value);
        }}
        input
        value={store['--lum-border-radius']}
      >
        lum-border-radius
      </NumberInput>
      <p>
        --lum-border-radius: {store['--lum-border-radius']}rem
      </p>

      <NumberInput
        id="border-mix"
        onIncrement$={() => {
          store['--lum-border-mix'] += 1;
        }}
        onDecrement$={() => {
          store['--lum-border-mix'] -= 1;
        }}
        onInput$={(e, el) => {
          store['--lum-border-mix'] = Number(el.value);
        }}
        input
        value={store['--lum-border-mix']}
      >
        lum-border-mix
      </NumberInput>
      <NumberInput
        id="lum-btn-p-x"
        onIncrement$={() => {
          store['--lum-btn-p-x'] += 0.5;
        }}
        onDecrement$={() => {
          store['--lum-btn-p-x'] -= 0.5;
        }}
        onInput$={(e, el) => {
          store['--lum-btn-p-x'] = Number(el.value);
        }}
        input
        value={store['--lum-btn-p-x']}
      >
        lum-btn-p-x
      </NumberInput>
      <NumberInput
        id="lum-input-p-x"
        onIncrement$={() => {
          store['--lum-input-p-x'] += 0.5;
        }}
        onDecrement$={() => {
          store['--lum-input-p-x'] -= 0.5;
        }}
        onInput$={(e, el) => {
          store['--lum-input-p-x'] = Number(el.value);
        }}
        input
        value={store['--lum-input-p-x']}
      >
        lum-input-p-x
      </NumberInput>

      <label for="border-color">
        color-lum-border
      </label>
      <div class="flex gap-1 relative">
        <div class="aspect-square rounded-lum rounded-r-sm" style={{
          background: store['--color-lum-border'],
        }}></div>
        <input id="border-color"
          class={{
            'lum-input lum-input-p-1 rounded-l-sm': true,
          }}
          value={store['--color-lum-border']}
          onInput$={(e, el) => {
            const picker = document.getElementById('border-color-picker')!;
            picker.dataset.value = el.value;
            picker.dispatchEvent(new Event('input'));
          }}
          onMouseUp$={() => {
            const picker = document.getElementById('border-color-picker')!;
            picker.dataset.value = store['--color-lum-border'];
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
            value={store['--color-lum-border']}
            onInput$={newColor => {
              store['--color-lum-border'] = newColor;
            }}
            showInput={false}
          />
        </div>
      </div>
    </div>
  );
});