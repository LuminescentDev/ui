import { component$ } from '@qwik.dev/core';
import { Anchor } from '@luminescent/ui-qwik';

export const LumClasses = component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2
          id={id}
          class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl"
        >
          Classes
        </h2>
      </Anchor>
      <p>Background Classes</p>
      <p class="lum-input whitespace-pre-wrap">lum-bg-{'<color>/[opacity]'}</p>
      <div class="lum-bg-lum-card-bg mb-4 h-32 w-64 rounded" />
      <p class="lum-input whitespace-pre-wrap">
        lum-bg (with --bg-color set to a color)
      </p>
      <div class="lum-bg-lum-card-bg mb-4 h-32 w-64 rounded" />
      <p>lum-grad-bg-{'<color>/[opacity]'} (for gradient backgrounds)</p>
      <div class="lum-grad-bg-lum-card-bg mb-4 h-32 w-64 rounded" />
      <p>
        lum-flat-bg-{'<color>/[opacity]'} (for flat backgrounds, can also be
        gradient with lum-flat-grad-bg-{'<color>/[opacity]'})
      </p>
      <div class="lum-flat-bg-lum-card-bg mb-4 h-32 w-64 rounded" />
      <p>
        lum-depth-bg-{'<color>/[opacity]'} (for depth backgrounds, can also be
        gradient with lum-depth-grad-bg-{'<color>/[opacity]'})
      </p>
      <div class="lum-depth-bg-lum-card-bg mb-4 h-32 w-64 rounded" />
      <p>
        lum-depth-shadow (if you want to add depth to an element without using
        the full lum-bg utility)
      </p>
      <div class="bg-lum-card-bg lum-depth-shadow mb-4 h-32 w-64 rounded" />
      <p>Element Classes</p>
      <p class="lum-input whitespace-pre-wrap">lum-btn lum-card lum-input</p>
      <p>Padding Classes</p>
      <p class="lum-input whitespace-pre-wrap">lum-btn-p-{'<size>'}</p>
    </div>
  );
});
