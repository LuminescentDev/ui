import { component$ } from '@builder.io/qwik';

export interface BlobProps {
  class?: { [key: string]: boolean };
  style?: { [key: string]: string | number };
  color?: keyof typeof blobColorClasses | [string, string, string];
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

export const blobColorClasses = {
  slate: ['bg-slate-400', 'bg-slate-500', 'bg-slate-600'],
  gray: ['bg-gray-400', 'bg-gray-500', 'bg-gray-600'],
  darkgray: ['bg-gray-500', 'bg-gray-600', 'bg-gray-700'],
  darkergray: ['bg-gray-600', 'bg-gray-700', 'bg-gray-800'],
  zinc: ['bg-zinc-400', 'bg-zinc-500', 'bg-zinc-600'],
  neutral: ['bg-neutral-400', 'bg-neutral-500', 'bg-neutral-600'],
  stone: ['bg-stone-400', 'bg-stone-500', 'bg-stone-600'],
  red: ['bg-red-400', 'bg-red-500', 'bg-red-600'],
  orange: ['bg-orange-400', 'bg-orange-500', 'bg-orange-600'],
  amber: ['bg-amber-400', 'bg-amber-500', 'bg-amber-600'],
  yellow: ['bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600'],
  lime: ['bg-lime-400', 'bg-lime-500', 'bg-lime-600'],
  green: ['bg-green-400', 'bg-green-500', 'bg-green-600'],
  emerald: ['bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600'],
  teal: ['bg-teal-400', 'bg-teal-500', 'bg-teal-600'],
  cyan: ['bg-cyan-400', 'bg-cyan-500', 'bg-cyan-600'],
  sky: ['bg-sky-400', 'bg-sky-500', 'bg-sky-600'],
  blue: ['bg-blue-400', 'bg-blue-500', 'bg-blue-600'],
  indigo: ['bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600'],
  violet: ['bg-violet-400', 'bg-violet-500', 'bg-violet-600'],
  purple: ['bg-purple-400', 'bg-purple-500', 'bg-purple-600'],
  fuchsia: ['bg-fuchsia-400', 'bg-fuchsia-500', 'bg-fuchsia-600'],
  pink: ['bg-pink-400', 'bg-pink-500', 'bg-pink-600'],
  rose: ['bg-rose-400', 'bg-rose-500', 'bg-rose-600'],
};

const blobClasses = [
  'animate-blob',
  'animate-blob1',
  'animate-blob2',
  'animate-blob3',
  'animate-blob4',
  'animate-blob5',
  'animate-blob6',
];

export const Blobs = component$<BlobProps>(
  ({ color = 'darkgray', blur = 'xl', ...props }) => {
    const blob = Math.round(Math.random() * 6);
    const colorClass =
      typeof color == 'string' ? blobColorClasses[color] : color;

    return (
      <div
        class={{
          'animate-in fade-in anim-duration-[2s] absolute inset-0 transition-all motion-reduce:hidden':
            true,
          ...props.class,
        }}
        style={{ containerType: 'size', ...props.style }}
      >
        <div
          class={{
            'absolute top-0 h-[30cqw] w-[30cqw] rounded-full opacity-20 ease-in-out':
              true,
            'blur-sm': blur === 'sm',
            'blur-md': blur === 'md',
            'blur-lg': blur === 'lg',
            'blur-xl': blur === 'xl',
            [blobClasses[blob]]: true,
            [colorClass[0]]: true,
          }}
        />
        <div
          class={{
            'absolute top-0 h-[30cqw] w-[30cqw] rounded-full opacity-20 ease-in-out':
              true,
            'blur-sm': blur === 'sm',
            'blur-md': blur === 'md',
            'blur-lg': blur === 'lg',
            'blur-xl': blur === 'xl',
            'anim-delay-[-5s]': true,
            [blobClasses[blob]]: true,
            [colorClass[1]]: true,
          }}
        />
        <div
          class={{
            'absolute top-0 h-[30cqw] w-[30cqw] rounded-full opacity-20 ease-in-out':
              true,
            'blur-sm': blur === 'sm',
            'blur-md': blur === 'md',
            'blur-lg': blur === 'lg',
            'blur-xl': blur === 'xl',
            'anim-delay-[-10s]': true,
            [blobClasses[blob]]: true,
            [colorClass[2]]: true,
          }}
        />
      </div>
    );
  },
);
