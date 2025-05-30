import { component$, useStore } from '@builder.io/qwik';
import { Anchor, Blobs, Toggle } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    class: 'lum-card',
    blur: false,
    blobs: false,
    loading: false,
  });

  return (
    <div class="lum-card">
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
        onChange$={(e, element) => (store.blur = element.checked)}
        label="blur"
      />
      <Toggle
        id="card-blobs"
        onChange$={(e, element) => (store.blobs = element.checked)}
        label="blobs"
      />
      <Toggle
        id="card-loading"
        onChange$={(e, element) => (store.loading = element.checked)}
        label="loading"
      />
      <div class="lum-card">
        <div
          class={{
            [store.class]: true,
            relative: true,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
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
              class={{ 'absolute overflow-clip rounded-lg': true }}
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
<div class="${store.blur || store.blobs ? 'relative ' : ''}${store.class}" ${store.blobs ? 'style={{ transformStyle: "preserve-3d" }}' : ''}>
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
    <Blobs color='gray' class={{ 'absolute overflow-clip rounded-lg': true }} style={{
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
