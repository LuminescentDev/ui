import { component$ } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="classes" anchor>
        Classes
      </Header>
      <p>Background Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-bg-{'<color>/[opacity]'}
      </p>
      <p>Element Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-btn lum-card lum-input
      </p>
      <p>Padding Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-btn-p-{'<size>'}
      </p>
    </div>
  );
});
