import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface ToggleProps
  extends Omit<
    PropsOf<'input'> & { type: 'checkbox' },
    'class' | 'bind:checked' | 'type' | 'children'
  > {
  class?: { [key: string]: boolean };
  checkbox?: boolean;
  round?: boolean;
  onColor?: keyof typeof toggleOnColorClasses;
  offColor?: keyof typeof toggleOffColorClasses;
  center?: boolean;
  label?: string | JSXOutput;
}

export const toggleOnColorClasses = {
  slate: {
    checked:
      'peer-checked:bg-slate-600 peer-checked:border-slate-500 peer-checked:hover:bg-slate-500 peer-checked:active:bg-slate-400',
    checkedAfter:
      'peer-checked:after:bg-slate-500 peer-checked:after:border-slate-400 peer-checked:after:hover:bg-slate-400 peer-checked:after:active:bg-slate-300',
  },
  gray: {
    checked:
      'peer-checked:bg-gray-600 peer-checked:border-gray-500 peer-checked:hover:bg-gray-500 peer-checked:active:bg-gray-400',
    checkedAfter:
      'peer-checked:after:bg-gray-500 peer-checked:after:border-gray-400 peer-checked:after:hover:bg-gray-400 peer-checked:after:active:bg-gray-300',
  },
  darkgray: {
    checked:
      'peer-checked:bg-gray-700 peer-checked:border-gray-600 peer-checked:hover:bg-gray-600 peer-checked:active:bg-gray-500',
    checkedAfter:
      'peer-checked:after:bg-gray-600 peer-checked:after:border-gray-500 peer-checked:after:hover:bg-gray-500 peer-checked:after:active:bg-gray-400',
  },
  darkergray: {
    checked:
      'peer-checked:bg-gray-800 peer-checked:border-gray-700 peer-checked:hover:bg-gray-700 peer-checked:active:bg-gray-600',
    checkedAfter:
      'peer-checked:after:bg-gray-700 peer-checked:after:border-gray-600 peer-checked:after:hover:bg-gray-600 peer-checked:after:active:bg-gray-500',
  },
  zinc: {
    checked:
      'peer-checked:bg-zinc-600 peer-checked:border-zinc-500 peer-checked:hover:bg-zinc-500 peer-checked:active:bg-zinc-400',
    checkedAfter:
      'peer-checked:after:bg-zinc-500 peer-checked:after:border-zinc-400 peer-checked:after:hover:bg-zinc-400 peer-checked:after:active:bg-zinc-300',
  },
  neutral: {
    checked:
      'peer-checked:bg-neutral-600 peer-checked:border-neutral-500 peer-checked:hover:bg-neutral-500 peer-checked:active:bg-neutral-400',
    checkedAfter:
      'peer-checked:after:bg-neutral-500 peer-checked:after:border-neutral-400 peer-checked:after:hover:bg-neutral-400 peer-checked:after:active:bg-neutral-300',
  },
  stone: {
    checked:
      'peer-checked:bg-stone-600 peer-checked:border-stone-500 peer-checked:hover:bg-stone-500 peer-checked:active:bg-stone-400',
    checkedAfter:
      'peer-checked:after:bg-stone-500 peer-checked:after:border-stone-400 peer-checked:after:hover:bg-stone-400 peer-checked:after:active:bg-stone-300',
  },
  red: {
    checked:
      'peer-checked:bg-red-600 peer-checked:border-red-500 peer-checked:hover:bg-red-500 peer-checked:active:bg-red-400',
    checkedAfter:
      'peer-checked:after:bg-red-500 peer-checked:after:border-red-400 peer-checked:after:hover:bg-red-400 peer-checked:after:active:bg-red-300',
  },
  orange: {
    checked:
      'peer-checked:bg-orange-600 peer-checked:border-orange-500 peer-checked:hover:bg-orange-500 peer-checked:active:bg-orange-400',
    checkedAfter:
      'peer-checked:after:bg-orange-500 peer-checked:after:border-orange-400 peer-checked:after:hover:bg-orange-400 peer-checked:after:active:bg-orange-300',
  },
  amber: {
    checked:
      'peer-checked:bg-amber-600 peer-checked:border-amber-500 peer-checked:hover:bg-amber-500 peer-checked:active:bg-amber-400',
    checkedAfter:
      'peer-checked:after:bg-amber-500 peer-checked:after:border-amber-400 peer-checked:after:hover:bg-amber-400 peer-checked:after:active:bg-amber-300',
  },
  yellow: {
    checked:
      'peer-checked:bg-yellow-600 peer-checked:border-yellow-500 peer-checked:hover:bg-yellow-500 peer-checked:active:bg-yellow-400',
    checkedAfter:
      'peer-checked:after:bg-yellow-500 peer-checked:after:border-yellow-400 peer-checked:after:hover:bg-yellow-400 peer-checked:after:active:bg-yellow-300',
  },
  lime: {
    checked:
      'peer-checked:bg-lime-600 peer-checked:border-lime-500 peer-checked:hover:bg-lime-500 peer-checked:active:bg-lime-400',
    checkedAfter:
      'peer-checked:after:bg-lime-500 peer-checked:after:border-lime-400 peer-checked:after:hover:bg-lime-400 peer-checked:after:active:bg-lime-300',
  },
  green: {
    checked:
      'peer-checked:bg-green-600 peer-checked:border-green-500 peer-checked:hover:bg-green-500 peer-checked:active:bg-green-400',
    checkedAfter:
      'peer-checked:after:bg-green-500 peer-checked:after:border-green-400 peer-checked:after:hover:bg-green-400 peer-checked:after:active:bg-green-300',
  },
  emerald: {
    checked:
      'peer-checked:bg-emerald-600 peer-checked:border-emerald-500 peer-checked:hover:bg-emerald-500 peer-checked:active:bg-emerald-400',
    checkedAfter:
      'peer-checked:after:bg-emerald-500 peer-checked:after:border-emerald-400 peer-checked:after:hover:bg-emerald-400 peer-checked:after:active:bg-emerald-300',
  },
  teal: {
    checked:
      'peer-checked:bg-teal-600 peer-checked:border-teal-500 peer-checked:hover:bg-teal-500 peer-checked:active:bg-teal-400',
    checkedAfter:
      'peer-checked:after:bg-teal-500 peer-checked:after:border-teal-400 peer-checked:after:hover:bg-teal-400 peer-checked:after:active:bg-teal-300',
  },
  cyan: {
    checked:
      'peer-checked:bg-cyan-600 peer-checked:border-cyan-500 peer-checked:hover:bg-cyan-500 peer-checked:active:bg-cyan-400',
    checkedAfter:
      'peer-checked:after:bg-cyan-500 peer-checked:after:border-cyan-400 peer-checked:after:hover:bg-cyan-400 peer-checked:after:active:bg-cyan-300',
  },
  sky: {
    checked:
      'peer-checked:bg-sky-600 peer-checked:border-sky-500 peer-checked:hover:bg-sky-500 peer-checked:active:bg-sky-400',
    checkedAfter:
      'peer-checked:after:bg-sky-500 peer-checked:after:border-sky-400 peer-checked:after:hover:bg-sky-400 peer-checked:after:active:bg-sky-300',
  },
  blue: {
    checked:
      'peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:hover:bg-blue-500 peer-checked:active:bg-blue-400',
    checkedAfter:
      'peer-checked:after:bg-blue-500 peer-checked:after:border-blue-400 peer-checked:after:hover:bg-blue-400 peer-checked:after:active:bg-blue-300',
  },
  indigo: {
    checked:
      'peer-checked:bg-indigo-600 peer-checked:border-indigo-500 peer-checked:hover:bg-indigo-500 peer-checked:active:bg-indigo-400',
    checkedAfter:
      'peer-checked:after:bg-indigo-500 peer-checked:after:border-indigo-400 peer-checked:after:hover:bg-indigo-400 peer-checked:after:active:bg-indigo-300',
  },
  violet: {
    checked:
      'peer-checked:bg-violet-600 peer-checked:border-violet-500 peer-checked:hover:bg-violet-500 peer-checked:active:bg-violet-400',
    checkedAfter:
      'peer-checked:after:bg-violet-500 peer-checked:after:border-violet-400 peer-checked:after:hover:bg-violet-400 peer-checked:after:active:bg-violet-300',
  },
  purple: {
    checked:
      'peer-checked:bg-purple-600 peer-checked:border-purple-500 peer-checked:hover:bg-purple-500 peer-checked:active:bg-purple-400',
    checkedAfter:
      'peer-checked:after:bg-purple-500 peer-checked:after:border-purple-400 peer-checked:after:hover:bg-purple-400 peer-checked:after:active:bg-purple-300',
  },
  fuchsia: {
    checked:
      'peer-checked:bg-fuchsia-600 peer-checked:border-fuchsia-500 peer-checked:hover:bg-fuchsia-500 peer-checked:active:bg-fuchsia-400',
    checkedAfter:
      'peer-checked:after:bg-fuchsia-500 peer-checked:after:border-fuchsia-400 peer-checked:after:hover:bg-fuchsia-400 peer-checked:after:active:bg-fuchsia-300',
  },
  pink: {
    checked:
      'peer-checked:bg-pink-600 peer-checked:border-pink-500 peer-checked:hover:bg-pink-500 peer-checked:active:bg-pink-400',
    checkedAfter:
      'peer-checked:after:bg-pink-500 peer-checked:after:border-pink-400 peer-checked:after:hover:bg-pink-400 peer-checked:after:active:bg-pink-300',
  },
  rose: {
    checked:
      'peer-checked:bg-rose-600 peer-checked:border-rose-500 peer-checked:hover:bg-rose-500 peer-checked:active:bg-rose-400',
    checkedAfter:
      'peer-checked:after:bg-rose-500 peer-checked:after:border-rose-400 peer-checked:after:hover:bg-rose-400 peer-checked:after:active:bg-rose-300',
  },
};

export const toggleOffColorClasses = {
  slate: {
    unchecked:
      'bg-slate-700 border-slate-600 hover:bg-slate-600 active:bg-slate-500',
    uncheckedAfter:
      'after:bg-slate-600 after:border-slate-500 after:hover:bg-slate-500 after:active:bg-slate-400',
  },
  gray: {
    unchecked:
      'bg-gray-700 border-gray-600 hover:bg-gray-600 active:bg-gray-500',
    uncheckedAfter:
      'after:bg-gray-600 after:border-gray-500 after:hover:bg-gray-500 after:active:bg-gray-400',
  },
  darkgray: {
    unchecked:
      'bg-gray-800 border-gray-700 hover:bg-gray-700 active:bg-gray-600',
    uncheckedAfter:
      'after:bg-gray-700 after:border-gray-600 after:hover:bg-gray-600 after:active:bg-gray-500',
  },
  darkergray: {
    unchecked:
      'bg-gray-900 border-gray-800 hover:bg-gray-800 active:bg-gray-700',
    uncheckedAfter:
      'after:bg-gray-800 after:border-gray-700 after:hover:bg-gray-700 after:active:bg-gray-600',
  },
  zinc: {
    unchecked:
      'bg-zinc-700 border-zinc-600 hover:bg-zinc-600 active:bg-zinc-500',
    uncheckedAfter:
      'after:bg-zinc-600 after:border-zinc-500 after:hover:bg-zinc-500 after:active:bg-zinc-400',
  },
  neutral: {
    unchecked:
      'bg-neutral-700 border-neutral-600 hover:bg-neutral-600 active:bg-neutral-500',
    uncheckedAfter:
      'after:bg-neutral-600 after:border-neutral-500 after:hover:bg-neutral-500 after:active:bg-neutral-400',
  },
  stone: {
    unchecked:
      'bg-stone-700 border-stone-600 hover:bg-stone-600 active:bg-stone-500',
    uncheckedAfter:
      'after:bg-stone-600 after:border-stone-500 after:hover:bg-stone-500 after:active:bg-stone-400',
  },
  red: {
    unchecked: 'bg-red-700 border-red-600 hover:bg-red-600 active:bg-red-500',
    uncheckedAfter:
      'after:bg-red-600 after:border-red-500 after:hover:bg-red-500 after:active:bg-red-400',
  },
  orange: {
    unchecked:
      'bg-orange-700 border-orange-600 hover:bg-orange-600 active:bg-orange-500',
    uncheckedAfter:
      'after:bg-orange-600 after:border-orange-500 after:hover:bg-orange-500 after:active:bg-orange-400',
  },
  amber: {
    unchecked:
      'bg-amber-700 border-amber-600 hover:bg-amber-600 active:bg-amber-500',
    uncheckedAfter:
      'after:bg-amber-600 after:border-amber-500 after:hover:bg-amber-500 after:active:bg-amber-400',
  },
  yellow: {
    unchecked:
      'bg-yellow-700 border-yellow-600 hover:bg-yellow-600 active:bg-yellow-500',
    uncheckedAfter:
      'after:bg-yellow-600 after:border-yellow-500 after:hover:bg-yellow-500 after:active:bg-yellow-400',
  },
  lime: {
    unchecked:
      'bg-lime-700 border-lime-600 hover:bg-lime-600 active:bg-lime-500',
    uncheckedAfter:
      'after:bg-lime-600 after:border-lime-500 after:hover:bg-lime-500 after:active:bg-lime-400',
  },
  green: {
    unchecked:
      'bg-green-700 border-green-600 hover:bg-green-600 active:bg-green-500',
    uncheckedAfter:
      'after:bg-green-600 after:border-green-500 after:hover:bg-green-500 after:active:bg-green-400',
  },
  emerald: {
    unchecked:
      'bg-emerald-700 border-emerald-600 hover:bg-emerald-600 active:bg-emerald-500',
    uncheckedAfter:
      'after:bg-emerald-600 after:border-emerald-500 after:hover:bg-emerald-500 after:active:bg-emerald-400',
  },
  teal: {
    unchecked:
      'bg-teal-700 border-teal-600 hover:bg-teal-600 active:bg-teal-500',
    uncheckedAfter:
      'after:bg-teal-600 after:border-teal-500 after:hover:bg-teal-500 after:active:bg-teal-400',
  },
  cyan: {
    unchecked:
      'bg-cyan-700 border-cyan-600 hover:bg-cyan-600 active:bg-cyan-500',
    uncheckedAfter:
      'after:bg-cyan-600 after:border-cyan-500 after:hover:bg-cyan-500 after:active:bg-cyan-400',
  },
  sky: {
    unchecked: 'bg-sky-700 border-sky-600 hover:bg-sky-600 active:bg-sky-500',
    uncheckedAfter:
      'after:bg-sky-600 after:border-sky-500 after:hover:bg-sky-500 after:active:bg-sky-400',
  },
  blue: {
    unchecked:
      'bg-blue-700 border-blue-600 hover:bg-blue-600 active:bg-blue-500',
    uncheckedAfter:
      'after:bg-blue-600 after:border-blue-500 after:hover:bg-blue-500 after:active:bg-blue-400',
  },
  indigo: {
    unchecked:
      'bg-indigo-700 border-indigo-600 hover:bg-indigo-600 active:bg-indigo-500',
    uncheckedAfter:
      'after:bg-indigo-600 after:border-indigo-500 after:hover:bg-indigo-500 after:active:bg-indigo-400',
  },
  violet: {
    unchecked:
      'bg-violet-700 border-violet-600 hover:bg-violet-600 active:bg-violet-500',
    uncheckedAfter:
      'after:bg-violet-600 after:border-violet-500 after:hover:bg-violet-500 after:active:bg-violet-400',
  },
  purple: {
    unchecked:
      'bg-purple-700 border-purple-600 hover:bg-purple-600 active:bg-purple-500',
    uncheckedAfter:
      'after:bg-purple-600 after:border-purple-500 after:hover:bg-purple-500 after:active:bg-purple-400',
  },
  fuchsia: {
    unchecked:
      'bg-fuchsia-700 border-fuchsia-600 hover:bg-fuchsia-600 active:bg-fuchsia-500',
    uncheckedAfter:
      'after:bg-fuchsia-600 after:border-fuchsia-500 after:hover:bg-fuchsia-500 after:active:bg-fuchsia-400',
  },
  pink: {
    unchecked:
      'bg-pink-700 border-pink-600 hover:bg-pink-600 active:bg-pink-500',
    uncheckedAfter:
      'after:bg-pink-600 after:border-pink-500 after:hover:bg-pink-500 after:active:bg-pink-400',
  },
  rose: {
    unchecked:
      'bg-rose-700 border-rose-600 hover:bg-rose-600 active:bg-rose-500',
    uncheckedAfter:
      'after:bg-rose-600 after:border-rose-500 after:hover:bg-rose-500 after:active:bg-rose-400',
  },
};

export const Toggle = component$<ToggleProps>(
  ({
    checkbox,
    round,
    center,
    label,
    onColor = 'blue',
    offColor = 'darkgray',
    ...props
  }) => {
    return (
      <div
        class={{
          'flex touch-manipulation items-center gap-3': true,
          'justify-center': center,
        }}
      >
        <label class="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            {...props}
            class={{
              'peer sr-only': true,
              ...props.class,
            }}
          />
          <div
            class={{
              'peer h-7 border duration-300 ease-out hover:shadow-lg hover:duration-75 motion-safe:transition':
                true,
              'after:absolute after:top-[4px] after:left-[4px] after:h-5 after:w-5 after:border after:duration-300 after:ease-out after:content-[\'\'] after:hover:duration-75 after:motion-safe:transition-all':
                true,
              'rounded-lum after:rounded-lum-1': !round,
              'rounded-full after:rounded-full': round,
              'w-12 peer-checked:after:translate-x-full': !checkbox,
              'w-7 after:opacity-0 peer-checked:after:opacity-100': checkbox,
              [toggleOnColorClasses[onColor].checked]: true,
              [toggleOnColorClasses[onColor].checkedAfter]: true,
              [toggleOffColorClasses[offColor].unchecked]: true,
              [toggleOffColorClasses[offColor].uncheckedAfter]: true,
            }}
          />
        </label>
        {label && (
          <label for={props.id} class="flex gap-2 text-gray-300 select-none">
            {label}
          </label>
        )}
      </div>
    );
  },
);
