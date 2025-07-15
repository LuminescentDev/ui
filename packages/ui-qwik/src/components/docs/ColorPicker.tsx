import { component$, useStore } from '@builder.io/qwik';
import { Anchor, SelectMenu, Toggle, ColorPicker } from '../../index';

interface colorPickerOptions {
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
}

export default component$(({ id }: { id: string }) => {
  const store = useStore<colorPickerOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          ColorPicker
        </h2>
      </Anchor>
      <div class="flex">
        <SelectMenu
          id="colorpicker-preview"
          onChange$={(e, element) =>
            (store.preview = element.value as
              | 'left'
              | 'right'
              | 'top'
              | 'bottom'
              | 'full')
          }
          values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({
            name: preview,
            value: preview,
          }))}
          value="left"
        >
          preview
        </SelectMenu>
      </div>
      <Toggle
        id="colorpicker-horizontal"
        label="horizontal"
        onInput$={(e, element) => (store.horizontal = element.checked)}
      />
      <Toggle
        id="colorpicker-showinput"
        label="showInput"
        onInput$={(e, element) => (store.showInput = element.checked)}
      />
      <div class="flex">
        <ColorPicker
          id="color-picker"
          preview={store.preview}
          horizontal={store.horizontal}
          showInput={store.showInput}
          onInput$={() => {}}
        />
      </div>
      <textarea
        class="lum-input h-32"
        value={`<ColorPicker id="color-picker"${store.preview ? ` preview="${store.preview}"` : ''}${store.horizontal ? ' horizontal' : ''}${store.showInput == false ? ' showInput="false"' : ''}/>`}
      />
    </div>
  );
});
