import { component$ } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="anchor">
        Anchor
      </Header>
      <div class="flex">
        <a href="#anchor" class={'lum-btn'}>
          Scroll to anchor
        </a>
      </div>
      <textarea class="lum-input h-32" value={'<Anchor id="anchor"/>'} />
    </div>
  );
});
