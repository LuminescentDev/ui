import { component$, useStore } from '@builder.io/qwik';
import { Header, NumberInput, Toggle } from '@luminescent/ui-qwik';

interface numberInputOptions {
  input?: boolean;
}

export default component$(() => {
  const store = useStore<numberInputOptions>({});
  return (
    <div class="lum-card">
      <Header id="numberinput" anchor>
        NumberInput
      </Header>
      <Toggle
        id="numberinput-input"
        onChange$={(e, element) => (store.input = element.checked)}
        label="input"
      />
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
