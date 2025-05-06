import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="classes" anchor>
        Classes
      </Header>
      <p>Background Classes</p>
      <p class="lum-bg-gray-800 flex rounded-lg px-3 py-2 whitespace-pre-wrap">
        lum-bg-{'<color>/[opacity]'}
      </p>
      <p>Element Classes</p>
      <p class="lum-bg-gray-800 flex rounded-lg px-3 py-2 whitespace-pre-wrap">
        lum-btn lum-card lum-input
      </p>
      <p>Padding Classes</p>
      <p class="lum-bg-gray-800 flex rounded-lg px-3 py-2 whitespace-pre-wrap">
        lum-btn-p-{'<size>'}
      </p>
    </div>
  );
});
