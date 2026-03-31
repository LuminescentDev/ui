import { component$ } from '@qwik.dev/core';
import { Anchor, Label as LabelEl } from '@luminescent/ui-qwik';

export const Label = component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Label
        </h2>
        <h3 class="text-sm text-lum-text-secondary">Adds a consistent label to elements that it wraps</h3>
      </Anchor>

      <LabelEl for="wrapping-element" label="Label">
        <div id="wrapping-element" class="bg-red-500">
          Wrapping element
        </div>
      </LabelEl>

      <textarea
        class="lum-input h-32"
        value={`
<Label for="wrapping-element" label="Label">
  <div id="wrapping-element" class="bg-red-500">
    Wrapping element
  </div>
</Label>`}
      />
    </div>
  );
});
