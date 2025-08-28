import { useState } from 'react';
import {
  Toggle,
} from '../../index';

export default function ToggleDoc() {
  const [checkbox, setCheckbox] = useState(false);
  const [round, setRound] = useState(false);
  const [className, setClassName] = useState('');

  return (
    <div className="lum-card">
      <h2 className="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Toggle
      </h2>
      <div>
        <label htmlFor="card-class">class</label>
        <input
          id="card-class"
          className="lum-input w-full"
          placeholder='lum-toggle-bg-gray-800 peer-checked:lum-toggle-bg-blue-500'
          onInput={(e) => (setClassName(e.currentTarget.value))}
          value={className[0]}
        />
        <p className="text-lum-text-secondary">
          warning: only some classes will work because of the way tailwindcss works
        </p>
      </div>
      <Toggle
        id="toggle-checkbox"
        onChange={(e) => (setCheckbox(e.currentTarget.checked))}
      >
        checkbox
      </Toggle>
      <Toggle
        id="toggle-round"
        onChange={(e) => (setRound(e.currentTarget.checked))}
      >
        round
      </Toggle>
      <div>
        <Toggle
          id="toggle-input"
          round={round}
          checkbox={checkbox}
          className={className}
        >
          Toggle
        </Toggle>
      </div>
      <textarea
        className="lum-input h-32"
        defaultValue={`
<Toggle id="toggle-input"${round ? ' round' : ''}${checkbox ? ' checkbox' : ''}${className ? ` className="${className}"` : ''}>
  Toggle
</Toggle>`}
      />
    </div>
  );
};
