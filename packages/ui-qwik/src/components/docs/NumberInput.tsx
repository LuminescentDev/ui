import { component$, useStore } from '@builder.io/qwik';
import { Anchor, NumberInput, Toggle } from '../../index';

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
        <NumberInput
          id="number-input"
          onDecrement$={() => {}}
          onIncrement$={() => {}}
          input={store.input}
        >
          Number Input
        </NumberInput>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<NumberInput id="number-input"${store.input ? ' input' : ''}>
  Number Input
</NumberInput`}
      />
    </div>
  );
});
