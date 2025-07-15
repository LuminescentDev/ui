import { component$, useStore } from '@builder.io/qwik';
import {
  Anchor,
  Blobs,
  SelectMenu,
  blobColorClasses,
} from '../../index';

interface blobsOptions {
  color?: keyof typeof blobColorClasses;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

export default component$(({ id }: { id: string }) => {
  const store = useStore<blobsOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Blobs
        </h2>
      </Anchor>
      <div class="flex">
        <SelectMenu
          id="blobs-color"
          onChange$={(e, element) =>
            (store.color = element.value as keyof typeof blobColorClasses)
          }
          values={Object.keys(blobColorClasses).map((color) => ({
            name: color,
            value: color,
          }))}
          value="darkgray"
        >
          color
        </SelectMenu>
      </div>
      <div class="flex">
        <SelectMenu
          id="blobs-blur"
          onChange$={(e, element) =>
            (store.blur = element.value as 'sm' | 'md' | 'lg' | 'xl')
          }
          values={['sm', 'md', 'lg', 'xl'].map((size) => ({
            name: size,
            value: size,
          }))}
          value="xl"
        >
          blur
        </SelectMenu>
      </div>
      <div class="relative h-96 w-96 rounded-lum border border-gray-800">
        <Blobs color={store.color} blur={store.blur} />
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<div class="relative h-96 w-96 border border-gray-800 rounded-lum">
  <Blobs${(store.color && ` color="${store.color}"`) ?? ''}${(store.blur && ` blur="${store.blur}"`) ?? ''}/>
</div>`}
      />
    </div>
  );
});
