import { component$ } from '@qwik.dev/core';
import { Anchor, Label, RangeInput } from '@luminescent/ui-qwik';

export default component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          RangeInput
        </h2>
      </Anchor>
      <div>
        <Label for="range-input" label="Range Input">
          <RangeInput id="range-input" />
        </Label>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Label for="range-input" label="Range Input">
  <RangeInput id="range-input" />
</Label>`}
      />
    </div>
  );
});
