import { component$, useStore } from '@builder.io/qwik';
import { Anchor, Blobs, Toggle, Hoverable } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'lum-card lum-hoverable max-w-md',
    hoverable: false,
    blur: false,
    blobs: false,
    loading: false,
  });

  return (
    <div class="lum-card border-gradient-1 before:from-red-500 before:to-blue-500">
      <Anchor id="card">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Card
        </h2>
      </Anchor>
      <div>
        <label for="card-class">class</label>
        <input
          id="card-class"
          class="lum-input"
          onInput$={(e, el) => (store.class = el.value)}
          value={store.class}
        />
        <p class="text-gray-500">
          warning: only some classes will work because of the way tailwindcss works
        </p>
      </div>
      <Toggle
        id="card-blur"
        onChange$={(e, element) => {
          store.blur = element.checked;
          if (element.checked) store.hoverable = false;
        }}
        label="blur"
        checked={store.blur}
      />
      <Toggle
        id="card-blobs"
        onChange$={(e, element) => (store.blobs = element.checked)}
        label="blobs"
        checked={store.blobs}
      />
      <Toggle
        id="card-loading"
        onChange$={(e, element) => (store.loading = element.checked)}
        label="loading"
        checked={store.loading}
      />
      <Toggle
        id="card-hoverable"
        onChange$={(e, element) => {
          store.hoverable = element.checked;
          if (element.checked) store.blur = false;
        }}
        label="hoverable (qwik only)"
        checked={store.hoverable}
      />
      <div class="lum-card">
        <div
          class={{
            [store.class]: true,
            relative: true,
          }}
          onMouseMove$={(e, el) => (store.hoverable ? Hoverable.onMouseMove$(e, el) : null)}
          onMouseLeave$={(e, el) => (store.hoverable ? Hoverable.onMouseLeave$(e, el) : null)}
        >
          {store.blur && (
            <div class="lum-card lum-bg-transparent absolute inset-0 z-10 h-full w-full opacity-0 backdrop-blur-xl transition hover:opacity-100">
              <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
                Blur Content
              </h2>
            </div>
          )}
          {store.loading ? (
            <div class="flex">
              <div class="flex-1">
                <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
                  This is a card
                </h2>
                <h3 class="text-sm text-gray-400">This is a description</h3>
              </div>
              <div class="lum-loading h-5 w-5"></div>
            </div>
          ) : (
            <div>
              <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
                This is a card
              </h2>
              <h3 class="text-sm text-gray-400">This is a description</h3>
            </div>
          )}
          {store.blobs && (
            <Blobs
              color="gray"
              class={{ 'absolute overflow-clip rounded-lum': true }}
              style={{
                transform: 'translateZ(-10px)',
              }}
            />
          )}
        </div>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
${store.hoverable ? `
import { Hoverable } from '@luminescent/ui-qwik'
` : ''}
<div class="${store.blur || store.blobs ? 'relative ' : ''}${store.class}"
${store.hoverable ? `
  onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
  onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
` : ''}
>
  ${
    store.blur
      ? `
  <div class="lum-card lum-bg-transparent absolute inset-0 w-full h-full z-10 backdrop-blur-xl transition opacity-0 hover:opacity-100">
    <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
      Blur Content
    </h2>
  </div>
  `
      : ''
    }
  ${
    store.loading
      ? `
  <div class="flex">
    <div class="flex-1">
      <h2 class={{
        'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
      }}>
        This is a card
      </h2>
      <h3 class="text-gray-400 text-sm">
        This is a description
      </h3>
    </div>
    <div class="lum-loading w-5 h-5"></div>
  </div>
  `
      : `
  <div>
    <h2 class={{
      'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
    }}>
      This is a card
    </h2>
    <h3 class="text-gray-400 text-sm">
      This is a description
    </h3>
  </div>
  `
    }
  ${
    store.blobs
      ? `
    <Blobs color='gray' class={{ 'absolute overflow-clip rounded-lum': true }} style={{
      transform: 'translateZ(-10px)',
    }}/>
  `
      : ''
    }
</div>`}
      />
    </div>
  );
});
