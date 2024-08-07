import { component$, useStore } from '@builder.io/qwik';
import { Header, NumberInput, Toggle } from '../../index';

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
      <Toggle id="numberinput-input" onChange$={(e, element) => store.input = element.checked}
        label='input' />
      <div>
        <NumberInput id="number-input" onDecrement$={() => {}} onIncrement$={() => {}} input={store.input}>
          Number Input
        </NumberInput>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<NumberInput id="number-input"${store.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
    </div>
  );
});
