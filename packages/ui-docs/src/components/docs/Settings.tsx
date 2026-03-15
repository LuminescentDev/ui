import { component$, isBrowser, PropsOf, QRL, useSignal, useStore, useTask$ } from '@qwik.dev/core';
import { ColorPicker, Label, NumberInput } from '@luminescent/ui-qwik';

interface ColorInputProps extends Omit<PropsOf<'input'>, 'onInput$'> {
  onInput$?: QRL<(newColor: string) => void>;
  color: string;
  id: string;
}

const ColorInput = component$(({ onInput$, color, id }: ColorInputProps) => {
  const open = useSignal(false);

  return (
    <div class="flex gap-1 relative">
      <div class="rounded-lum rounded-r-sm p-4 lum-bg" style={{
        '--bg-color': color,
      }}/>
      <input id={id}
        class={{
          'lum-input lum-input-p-1 rounded-l-sm': true,
        }}
        value={color}
        onInput$={(e, el) => {
          const picker = document.getElementById(`${id}-picker`)!;
          picker.dataset.value = el.value;
          picker.dispatchEvent(new Event('input'));
        }}
        onMouseUp$={() => {
          const picker = document.getElementById(`${id}-picker`)!;
          picker.dataset.value = color;
          picker.dispatchEvent(new Event('input'));
          open.value = !open.value;
          const abortController = new AbortController();
          document.addEventListener('click', (e) => {
            if (e.target instanceof HTMLElement && !e.target.closest(`#${id}-popup`)) {
              abortController.abort();
            }
          }, { signal: abortController.signal });
        }}
      />
      <div id={`${id}-popup`} stoppropagation:mousedown class={{
        'flex flex-col gap-2 motion-safe:transition-all absolute top-full z-1000 mt-2 left-0': true,
        'opacity-0 scale-95 pointer-events-none': !open.value,
      }}>
        <ColorPicker
          id={`${id}-picker`}
          value={color}
          onInput$={onInput$}
          showInput={false}
        />
      </div>
    </div>
  );
});

export default component$(() => {
  const store = useStore({
    '--lum-border-radius': 0.375,
    '--lum-border-superellipse': 1,
    '--lum-border-mix': 20,
    '--lum-btn-p-x': 2,
    '--lum-input-p-x': 1.5,
    '--lum-depth': 0,
    '--color-lum-border': 'var(--color-gray-300)',
    '--color-lum-card-bg': 'var(--color-gray-900)',
    '--color-lum-input-bg': 'var(--color-gray-800)',
    '--color-lum-input-hover-bg': 'var(--color-gray-700)',
    '--color-lum-accent': 'var(--color-blue-500)',
    '--color-lum-text': 'var(--color-gray-100)',
    '--color-lum-text-secondary': 'var(--color-gray-400)',
  });

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
    <>
      <Label for="border-radius"
        label={`--lum-border-radius: ${store['--lum-border-radius']}rem`}>
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
        />
      </Label>

      <Label for="lum-border-superellipse"
        label={`--lum-border-superellipse: ${store['--lum-border-superellipse']}`}>
        <NumberInput
          id="lum-border-superellipse"
          onIncrement$={() => {
            store['--lum-border-superellipse'] += 0.5;
          }}
          onDecrement$={() => {
            store['--lum-border-superellipse'] -= 0.5;
          }}
          onInput$={(e, el) => {
            store['--lum-border-superellipse'] = Number(el.value);
          }}
          input
          value={store['--lum-border-superellipse']}
        />
      </Label>

      <Label for="lum-border-mix"
        label={`--lum-border-mix: ${store['--lum-border-mix']}%`}>
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
        />
      </Label>

      <Label for="lum-btn-p-x"
        label={`--lum-btn-p-x: ${store['--lum-btn-p-x']}`}>
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
        />
      </Label>

      <Label for="lum-input-p-x"
        label={`--lum-input-p-x: ${store['--lum-input-p-x']}`}>
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
        />
      </Label>
      
      <Label for="lum-depth"
        label={`--lum-depth: ${store['--lum-depth']}`}>
        <NumberInput
          id="lum-depth"
          onIncrement$={() => {
            store['--lum-depth'] += 0.5;
          }}
          onDecrement$={() => {
            store['--lum-depth'] -= 0.5;
          }}
          onInput$={(e, el) => {
            store['--lum-depth'] = Number(el.value);
          }}
          input
          value={store['--lum-depth']}
        />
      </Label>

      <Label for="border-color"
        label="color-lum-border">
        <ColorInput color={store['--color-lum-border']} id="border-color" onInput$={(newColor) => {
          store['--color-lum-border'] = newColor;
        }}/>
      </Label>

      <Label for="card-bg-color"
        label="color-lum-card-bg">
        <ColorInput color={store['--color-lum-card-bg']} id="card-bg-color" onInput$={(newColor) => {
          store['--color-lum-card-bg'] = newColor;
        }}/>
      </Label>

        <Label for="input-bg-color"
        label="color-lum-input-bg">
        <ColorInput color={store['--color-lum-input-bg']} id="input-bg-color" onInput$={(newColor) => {
          store['--color-lum-input-bg'] = newColor;
        }}/>
      </Label>

      <Label for="input-hover-bg-color"
        label="color-lum-input-hover-bg">
        <ColorInput color={store['--color-lum-input-hover-bg']} id="input-hover-bg-color" onInput$={(newColor) => {
          store['--color-lum-input-hover-bg'] = newColor;
        }}/>
      </Label>

      <Label for="accent-color"
        label="color-lum-accent">
        <ColorInput color={store['--color-lum-accent']} id="accent-color" onInput$={(newColor) => {
          store['--color-lum-accent'] = newColor;
        }}/>
      </Label>

      <Label for="text-color"
        label="color-lum-text">
        <ColorInput color={store['--color-lum-text']} id="text-color" onInput$={(newColor) => {
          store['--color-lum-text'] = newColor;
        }}/>
      </Label>

      <Label for="text-secondary-color"
        label="color-lum-text-secondary">
        <ColorInput color={store['--color-lum-text-secondary']} id="text-secondary-color" onInput$={(newColor) => {
          store['--color-lum-text-secondary'] = newColor;
        }}/>
      </Label>

    </>
  );
});