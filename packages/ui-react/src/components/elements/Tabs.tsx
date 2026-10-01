import type React from 'react';
import { PlusIcon, XIcon } from 'lucide-react';
import { ButtonContainer } from './ButtonContainer';
import { getClasses } from '../functions';

export type TabValue = { name: string; value: string; permanent?: boolean };

export interface TabsProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick'
> {
  onPlus?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (value: TabValue) => void;
  onDelete?: (value: TabValue) => void;
  values?: TabValue[];
  value?: TabValue;
  tabProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;
  renderBefore?: (tab: TabValue) => React.ReactNode;
  renderAfter?: (tab: TabValue) => React.ReactNode;
}

export function Tabs({
  className,
  onPlus,
  values,
  value,
  onClick,
  onDelete,
  tabProps,
  renderBefore,
  renderAfter,
  ...props
}: TabsProps) {
  return (
    <ButtonContainer
      {...props}
      className={getClasses({
        'items-stretch justify-start overflow-x-auto *:flex-none [&>button]:flex-none': true,
        [className ?? '']: true,
      })}
    >
      {values?.map((tab) => (
        <div
          key={tab.value}
          {...tabProps}
          className={getClasses({
            'lum-btn lum-btn-p-1 relative': true,
            'pr-1': !!onDelete && !tab.permanent,
            'lum-grad-bg-lum-accent!': value?.value === tab.value,
            [tabProps?.className ?? '']: !!tabProps?.className,
          })}
        >
          {renderBefore?.(tab)}
          <button
            type="button"
            className="p-0 after:absolute after:inset-0 after:content-['']"
            onClick={() => onClick?.(tab)}
          >
            {tab.name}
          </button>
          {renderAfter?.(tab)}
          {onDelete && !tab.permanent && (
            <button
              type="button"
              className="lum-btn lum-bg-transparent hover:lum-bg-red-600 z-10 rounded-full p-0"
              title={`Delete ${tab.name}`}
              onClick={() => {
                if (confirm(`Are you sure you want to delete ${tab.name}?`)) {
                  onDelete?.(tab);
                }
              }}
            >
              <XIcon size={16} />
            </button>
          )}
        </div>
      ))}
      {onPlus && (
        <button type="button" onClick={onPlus} title="Add new tab">
          <PlusIcon size={16} />
        </button>
      )}
    </ButtonContainer>
  );
}
