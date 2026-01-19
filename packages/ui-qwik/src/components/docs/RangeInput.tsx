import { component$ } from '@builder.io/qwik';
import { Anchor } from '../../index';
import { RangeInput } from '../elements/RangeInput';

export default component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          RangeInput
        </h2>
      </Anchor>
      <div>
        <RangeInput
          id="range-input"
        >
          Range Input
        </RangeInput>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<RangeInput id="range-input">
  Range Input
</RangeInput>`}
      />
    </div>
  );
});
