import { component$ } from '@builder.io/qwik';
import { Anchor } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <div class="lum-card">
      <Anchor id="anchor">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Anchor
        </h2>
        <h3 class="text-sm text-lum-text-secondary">The element is in the title</h3>
      </Anchor>
      <textarea
        class="lum-input h-32"
        value={`
<Anchor id="anchor">
  <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
    Anchor
  </h2>
</Anchor>`}
      />
      <textarea class="lum-input h-32" value={'<Anchor id="anchor"/>'} />
    </div>
  );
});
