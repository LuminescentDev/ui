import type React from 'react';
import { PlusIcon, XIcon } from 'lucide-react';
import { ButtonContainer } from './ButtonContainer';
import { getClasses } from '../functions';

export type TabValue = { name: string; value: string };

export interface TabsProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick'
> {
  onPlus?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (value: TabValue) => void;
  onDelete?: (value: TabValue) => void;
  values?: TabValue[];
  value?: TabValue;
}

export function Tabs({
  className,
  onPlus,
  values,
  value,
  onClick,
  onDelete,
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
          className={getClasses({
            'flex p-0!': true,
            'lum-grad-bg-lum-accent!': value?.value === tab.value,
          })}
        >
          <button className="lum-btn-p-1 pr-0" onClick={() => onClick?.(tab)}>
            {tab.name}
          </button>
          {onDelete && (
            <button
              className="lum-btn lum-bg-transparent hover:lum-bg-red rounded-lum-2 m-1 p-0.5"
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
        <button onClick={onPlus} title="Add new tab">
          <PlusIcon size={16} />
        </button>
      )}
    </ButtonContainer>
  );
}
