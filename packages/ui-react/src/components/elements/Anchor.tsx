import type React from 'react';
import { LinkIcon } from 'lucide-react';
import { getClasses } from '../functions';

export interface AnchorProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  children?: React.ReactNode;
}

export function Anchor({ id, className, children, ...props }: AnchorProps) {
  return (
    <div
      {...props}
      className={getClasses({
        'group flex scroll-mt-32 items-center gap-2': true,
        [className ?? '']: !!className,
      })}
    >
      {children}
      {id && (
        <a
          href={`#${id}`}
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
          }}
        >
          <LinkIcon
            className="opacity-10 transition-opacity duration-300 group-hover:opacity-100 group-hover:duration-75"
            size={20}
          />
        </a>
      )}
    </div>
  );
}
