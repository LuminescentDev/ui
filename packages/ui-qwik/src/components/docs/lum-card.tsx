import { component$, useStore } from '@builder.io/qwik';
import { Blobs, Header, Toggle } from '../../index';

// @ts-ignore
import { defaultClasses } from '@luminescent/ui/components/card';

export default component$(() => {
  const store = useStore({
    class: 'lum-card',
    blur: false,
    blobs: false,
    loading: false,
  });

  return (
    <div class="lum-card">
      <Header id="card" anchor>
        Card
      </Header>
      <div>
        <label for="card-class">class</label>
        <input id="card-class" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
          onInput$={(e, el) => store.class = el.value}
          value={store.class}
        />
        <p class="text-gray-500">
          warning: only lum- classes are safelisted and other classes that aren't loaded in tailwind and arbitrary values will not work
        </p>
        <p class="text-gray-500">
          default associated classes: {defaultClasses}
        </p>
      </div>
      <Toggle id="card-blur" onChange$={(e, element) => store.blur = element.checked}
        label="blur" />
      <Toggle id="card-blobs" onChange$={(e, element) => store.blobs = element.checked}
        label="blobs" />
      <Toggle id="card-loading" onChange$={(e, element) => store.loading = element.checked}
        label="loading" />
      <div class="lum-card">
        <div class={{
          [store.class]: true,
          'relative': true,
        }} style={{
          transformStyle: 'preserve-3d',
        }}>
          {store.blur &&
            <div class="lum-card lum-bg-transparent absolute inset-0 w-full h-full z-10 backdrop-blur-xl transition opacity-0 hover:opacity-100">
              <Header subheader="Hello Luminescent v2">
                Blur Content
              </Header>
            </div>
          }
          {store.loading ?
            <div class="flex">
              <div class="flex-1">
                <h2 class={{
                  'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
                }}>
                  This is a card
                </h2>
                <h3 class="text-gray-400 text-sm">
                  Hello Luminescent v2
                </h3>
              </div>
              <div class="lum-loading w-5 h-5"></div>
            </div>
            :
            <div>
              <h2 class={{
                'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
              }}>
                This is a card
              </h2>
              <h3 class="text-gray-400 text-sm">
                Hello Luminescent v2
              </h3>
            </div>
          }
          {store.blobs &&
            <Blobs color='gray' class={{ 'absolute overflow-clip rounded-lg': true }} style={{
              transform: 'translateZ(-10px)',
            }}/>
          }
        </div>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<div class="${store.blur || store.blobs ? 'relative ' : ''}${store.class}" ${store.blobs ? 'style={{ transformStyle: "preserve-3d" }}' : ''}>
  ${store.blur ? `
  <div class="lum-card lum-bg-transparent absolute inset-0 w-full h-full z-10 backdrop-blur-xl transition opacity-0 hover:opacity-100">
    <Header subheader="Hello Luminescent v2">
      Blur Content
    </Header>
  </div>
  ` : ''}
  ${store.loading ? `
  <div class="flex">
    <div class="flex-1">
      <h2 class={{
        'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
      }}>
        This is a card
      </h2>
      <h3 class="text-gray-400 text-sm">
        Hello Luminescent v2
      </h3>
    </div>
    <div class="lum-loading w-5 h-5"></div>
  </div>
  ` : `
  <div>
    <h2 class={{
      'font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
    }}>
      This is a card
    </h2>
    <h3 class="text-gray-400 text-sm">
      Hello Luminescent v2
    </h3>
  </div>
  `}
  ${store.blobs ? `
    <Blobs color='gray' class={{ 'absolute overflow-clip rounded-lg': true }} style={{
      transform: 'translateZ(-10px)',
    }}/>
  ` : ''}
</div>`} />
    </div>
  );
});
