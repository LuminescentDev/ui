import { component$, useStore } from '@builder.io/qwik';
import { Header } from '../../index';

// @ts-ignore
import { defaultClasses } from '@luminescent/ui/components/input';

export default component$(() => {
  const store = useStore({
    class: 'lum-input',
  });
  return (
    <div class="lum-card">
      <Header id="input" anchor>
        Input
      </Header>
      <div>
        <label for="input-class">class</label>
        <input id="input-class" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
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
      <div class="lum-card">
        <div>
          <input class={store.class}/>
          <textarea class={{
            [store.class]: true,
            'h-32': true,
          }} />
        </div>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<input class="${store.class}"/>
<textarea class={{
  '${store.class}': true,
  'h-32': true,
}} />`} />
    </div>
  );
});
