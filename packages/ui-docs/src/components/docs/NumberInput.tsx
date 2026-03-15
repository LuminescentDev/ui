import { component$, useStore } from '@qwik.dev/core';
import { Anchor, Label, NumberInput, Toggle } from '@luminescent/ui-qwik';

interface numberInputOptions {
  input?: boolean;
}

export default component$(({ id }: { id: string }) => {
  const store = useStore<numberInputOptions>({});
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          NumberInput
        </h2>
      </Anchor>
      <Toggle
        id="numberinput-input"
        onChange$={(e, element) => (store.input = element.checked)}
      >
        input
      </Toggle>
      <div>
        <Label for="number-input" label="Number Input">
          <NumberInput id="number-input" input={store.input} />
        </Label>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Label for="number-input" label="Number Input">
  <NumberInput id="number-input"${store.input ? ' input' : ''} />
</Label>`}
      />
    </div>
  );
});
