import type { PropsOf, QRL } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';
import { ButtonContainer } from './ButtonContainer';
import { Plus } from '~/svg/Plus';
import { X } from '~/svg/X';
import { getClassObject } from '../functions';

export type TabValue = { name: string; value: string; permanent?: boolean };

export interface TabsProps extends Omit<PropsOf<'div'>, 'onClick$'> {
  onPlus$?: PropsOf<'button'>['onClick$'];
  onClick$?: QRL<(value: TabValue) => void>;
  onDelete$?: QRL<(value: TabValue) => void>;
  tabProps?: Omit<PropsOf<'div'>, 'onClick$'>;
  values?: TabValue[];
  value?: TabValue;
}

export const Tabs = component$<TabsProps>(
  ({
    class: classList,
    onPlus$,
    values,
    value,
    tabProps,
    onClick$,
    onDelete$,
    ...props
  }) => {
    return (
      <ButtonContainer
        {...props}
        class={{
          'items-stretch justify-start overflow-x-auto *:flex-none [&>button]:flex-none': true,
          ...getClassObject(classList),
        }}
      >
        {values?.map((tab) => (
          <div
            key={tab.value}
            {...tabProps}
            class={{
              'lum-btn lum-btn-p-1 relative': true,
              'pr-1': !!onDelete$ && !tab.permanent,
              'lum-grad-bg-lum-accent!': value?.value === tab.value,
              ...getClassObject(tabProps?.class),
            }}
          >
            <Slot name={`before-${tab.value}`} />
            <button
              class="p-0 after:absolute after:inset-0 after:content-['']"
              onClick$={() => onClick$?.(tab)}
            >
              {tab.name}
            </button>
            <Slot name={`after-${tab.value}`} />
            {onDelete$ && !tab.permanent && (
              <button
                class="lum-btn lum-bg-transparent hover:lum-bg-red-600 z-10 rounded-full p-0"
                title={`Delete ${tab.name}`}
                onClick$={async () => {
                  if (confirm(`Are you sure you want to delete ${tab.name}?`)) {
                    await onDelete$(tab);
                  }
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
        {onPlus$ && (
          <button onClick$={onPlus$} title="Add new tab">
            <Plus size={16} />
          </button>
        )}
      </ButtonContainer>
    );
  }
);
