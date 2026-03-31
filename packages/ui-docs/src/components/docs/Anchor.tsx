import { component$ } from '@qwik.dev/core';
import { Anchor as AnchorEl } from '@luminescent/ui-qwik';

export const Anchor = component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <AnchorEl id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Anchor
        </h2>
        <h3 class="text-sm text-lum-text-secondary">The element is in the title</h3>
      </AnchorEl>
      <textarea
        class="lum-input h-32"
        value={`
<Anchor id="anchor">
  <h2 id="anchor" class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
    Anchor
  </h2>
</Anchor>`}
      />
      <textarea class="lum-input h-32" value={'<Anchor id="anchor"/>'} />
    </div>
  );
});
