import { component$ } from '@builder.io/qwik';
import { Anchor } from '@luminescent/ui-qwik';

export default component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Classes
        </h2>
      </Anchor>
      <p>Background Classes</p>
      <p class="lum-input whitespace-pre-wrap">
        lum-bg-{'<color>/[opacity]'}
      </p>
      <p>Element Classes</p>
      <p class="lum-input whitespace-pre-wrap">
        lum-btn lum-card lum-input
      </p>
      <p>Padding Classes</p>
      <p class="lum-input whitespace-pre-wrap">
        lum-btn-p-{'<size>'}
      </p>
    </div>
  );
});
