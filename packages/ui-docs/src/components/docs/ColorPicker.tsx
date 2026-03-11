import { component$, useStore } from '@qwik.dev/core';
import { Anchor, SelectMenu, Toggle, ColorPicker } from '../../../../ui-qwik-old/lib-types';

interface colorPickerOptions {
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
  opacity?: boolean;
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
        onInput$={(e, element) => (store.horizontal = element.checked)}
      >
        horizontal
      </Toggle>
      <Toggle
        id="colorpicker-showinput"
        onInput$={(e, element) => (store.showInput = element.checked)}
      >
        showInput
      </Toggle>
      <Toggle
        id="colorpicker-opacity"
        onInput$={(e, element) => (store.opacity = element.checked)}
      >
        opacity
      </Toggle>
      <div class="flex">
        <ColorPicker
          id="color-picker"
          preview={store.preview}
          horizontal={store.horizontal}
          showInput={store.showInput}
          opacity={store.opacity}
          onInput$={() => {}}
        />
      </div>
      <textarea
        class="lum-input h-32"
        value={`<ColorPicker id="color-picker"${store.preview ? ` preview="${store.preview}"` : ''}${store.horizontal ? ' horizontal' : ''}${store.showInput == false ? ' showInput="false"' : ''}${store.opacity ? ' opacity' : ''}/>`}
      />
    </div>
  );
});
