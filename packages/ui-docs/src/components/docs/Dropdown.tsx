import { component$, useSignal } from '@builder.io/qwik';
import { Anchor, Dropdown, Toggle } from '@luminescent/ui-qwik';

export default component$(({ id }: { id: string }) => {
  const opened = useSignal(false);
  const hover = useSignal(false);

  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Dropdown
        </h2>
      </Anchor>
      <Toggle
        id="dropdown-hover"
        label="hover"
        onInput$={(e, el) => (hover.value = el.checked)}
      />
      <Toggle
        id="dropdown-opened"
        label="opened"
        onInput$={(e, el) => (opened.value = el.checked)}
        checked={opened.value}
      />
      <div>
        <Dropdown
          opened={opened.value}
          hover={hover.value}
          onClick$={() => (opened.value = !opened.value)}>
          Dropdown
        </Dropdown>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<Dropdown ${hover.value ? 'hover' : ''}
  opened={opened.value}
  onClick$={() => (opened.value = !opened.value)}>
  Dropdown
</Dropdown>`}
      />
    </div>
  );
});
