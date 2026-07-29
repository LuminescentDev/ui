import { component$, useSignal } from '@qwik.dev/core';
import { Anchor, Tabs as TabsEl, TabValue } from '@luminescent/ui-qwik';

export const Tabs = component$(({ id }: { id: string }) => {
  const tabs = useSignal<TabValue[]>([
    { name: 'Tab 1', value: '1' },
    { name: 'Tab 2', value: '2' },
    { name: 'Tab 3', value: '3' },
  ]);
  const activeTab = useSignal<TabValue>(tabs.value[0]);

  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2
          id={id}
          class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl"
        >
          Tabs
        </h2>
        <h3 class="text-lum-text-secondary text-sm">
          A tab bar component for switching views or managing tabbed items with
          optional add and delete actions
        </h3>
      </Anchor>

      <div>
        <TabsEl
          values={tabs.value}
          value={activeTab.value}
          onClick$={(val: TabValue) => (activeTab.value = val)}
          onPlus$={() => {
            const nextId = String(tabs.value.length + 1);
            tabs.value = [
              ...tabs.value,
              { name: `Tab ${nextId}`, value: nextId },
            ];
          }}
          onDelete$={(val: TabValue) => {
            tabs.value = tabs.value.filter((t) => t.value !== val.value);
            if (activeTab.value.value === val.value && tabs.value.length > 0) {
              activeTab.value = tabs.value[0];
            }
          }}
        />
      </div>

      <textarea
        class="lum-input h-32"
        value={`
<Tabs
  values={tabs.value}
  value={activeTab.value}
  onClick$={(val) => (activeTab.value = val)}
  onPlus$={() => { /* add tab */ }}
  onDelete$={(val) => { /* delete tab */ }}
/>`}
      />
    </div>
  );
});
