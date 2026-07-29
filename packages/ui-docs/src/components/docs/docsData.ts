export interface ComponentPropDoc {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentSlotDoc {
  name: string;
  description: string;
}

export interface ComponentDocEntry {
  id: string;
  name: string;
  category: 'Tailwind Components' | 'Qwik / React Components';
  description: string;
  props?: ComponentPropDoc[];
  slots?: ComponentSlotDoc[];
  qwikCode: string;
  reactCode?: string;
}

export const componentDocs: ComponentDocEntry[] = [
  {
    id: 'classes',
    name: 'LumClasses',
    category: 'Tailwind Components',
    description:
      'Core Luminescent UI CSS classes and design tokens built on Tailwind CSS v4.',
    qwikCode: `<div class="lum-card lum-bg-lum-card-bg rounded-lum p-4">
  <p class="lum-text-secondary text-sm">Design System Token Example</p>
</div>`,
    reactCode: `<div className="lum-card lum-bg-lum-card-bg rounded-lum p-4">
  <p className="lum-text-secondary text-sm">Design System Token Example</p>
</div>`,
  },
  {
    id: 'button',
    name: 'LumBtn',
    category: 'Tailwind Components',
    description:
      'Luminescent UI button utility classes providing consistent button variants, hover states, and padding options.',
    qwikCode: `<button class="lum-btn lum-bg-blue rounded-lum-2 p-2">
  Click Me
</button>`,
    reactCode: `<button className="lum-btn lum-bg-blue rounded-lum-2 p-2">
  Click Me
</button>`,
  },
  {
    id: 'card',
    name: 'LumCard',
    category: 'Tailwind Components',
    description:
      'Card container styling with glassmorphic background blur and gradient border utilities.',
    qwikCode: `<div class="lum-card border-gradient-1 p-4">
  <h3 class="text-lg font-bold">Card Title</h3>
  <p>Card content text</p>
</div>`,
    reactCode: `<div className="lum-card border-gradient-1 p-4">
  <h3 className="text-lg font-bold">Card Title</h3>
  <p>Card content text</p>
</div>`,
  },
  {
    id: 'input',
    name: 'LumInput',
    category: 'Tailwind Components',
    description:
      'Styled form inputs, textareas, and select menus with unified focus rings and background colors.',
    qwikCode: `<input class="lum-input" placeholder="Enter text..." />`,
    reactCode: `<input className="lum-input" placeholder="Enter text..." />`,
  },
  {
    id: 'anchor',
    name: 'Anchor',
    category: 'Qwik / React Components',
    description:
      'Header title wrapper component providing auto-generated scroll anchor links.',
    props: [
      {
        name: 'id',
        type: 'string',
        description: 'Unique element ID for the anchor scroll target',
      },
    ],
    qwikCode: `<Anchor id="my-section">
  <h2 id="my-section" class="text-2xl font-bold">My Section Title</h2>
</Anchor>`,
  },
  {
    id: 'button-container',
    name: 'ButtonContainer',
    category: 'Qwik / React Components',
    description:
      'Flex container for grouping interactive buttons and links with consistent spacing, rounding, and hover styles.',
    props: [
      {
        name: 'class',
        type: 'ClassList | string',
        description: 'Additional CSS class list for custom positioning',
      },
    ],
    qwikCode: `<ButtonContainer>
  <button class="lum-btn lum-bg-transparent">Button 1</button>
  <button class="lum-btn lum-bg-transparent">Button 2</button>
</ButtonContainer>`,
    reactCode: `<ButtonContainer>
  <button className="lum-btn lum-bg-transparent">Button 1</button>
  <button className="lum-btn lum-bg-transparent">Button 2</button>
</ButtonContainer>`,
  },
  {
    id: 'color-picker',
    name: 'ColorPicker',
    category: 'Qwik / React Components',
    description:
      'Interactive color picker component supporting HEX, HSL, RGB, and opacity controls.',
    props: [
      {
        name: 'value',
        type: 'string',
        description: 'Current color string (e.g. #3b82f6)',
      },
      {
        name: 'onChange$',
        type: 'QRL<(color: string) => void>',
        description: 'Color change callback',
      },
    ],
    qwikCode: `<ColorPicker
  value={color.value}
  onChange$={(newColor) => (color.value = newColor)}
/>`,
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    category: 'Qwik / React Components',
    description:
      'Dropdown menu component with customizable alignment, hover trigger, and panel placement.',
    props: [
      {
        name: 'id',
        type: 'string',
        description: 'Unique identifier for the dropdown',
      },
      {
        name: 'align',
        type: "'left' | 'right' | 'center'",
        default: "'left'",
        description: 'Alignment of the dropdown panel relative to trigger',
      },
      {
        name: 'hover',
        type: 'boolean',
        default: 'false',
        description: 'Open dropdown menu on hover instead of click',
      },
      {
        name: 'top',
        type: 'boolean',
        default: 'false',
        description: 'Position panel above the trigger button',
      },
      {
        name: 'panelProps',
        type: "PropsOf<'div'>",
        description: 'Additional props for the dropdown panel container',
      },
    ],
    slots: [
      {
        name: 'dropdown',
        description: 'Content rendered inside the trigger button',
      },
      {
        name: 'default',
        description: 'Options rendered inside the dropdown panel',
      },
    ],
    qwikCode: `<Dropdown id="demo-dropdown" align="left">
  <span q:slot="dropdown">Open Dropdown</span>
  <button class="lum-btn lum-bg-transparent rounded-lum-1">Option 1</button>
  <button class="lum-btn lum-bg-transparent rounded-lum-1">Option 2</button>
</Dropdown>`,
    reactCode: `<Dropdown id="demo-dropdown" align="left" mobile={<span>Open Dropdown</span>}>
  <button className="lum-btn lum-bg-transparent rounded-lum-1">Option 1</button>
  <button className="lum-btn lum-bg-transparent rounded-lum-1">Option 2</button>
</Dropdown>`,
  },
  {
    id: 'dropdown-button',
    name: 'DropdownButton',
    category: 'Qwik / React Components',
    description:
      'Interactive trigger button component for standalone or custom dropdown menus.',
    props: [
      {
        name: 'opened',
        type: 'boolean',
        description: 'Controls the active open indicator state',
      },
      {
        name: 'hover',
        type: 'boolean',
        description: 'Enables hover mode styling',
      },
    ],
    qwikCode: `<DropdownButton
  opened={opened.value}
  onClick$={() => (opened.value = !opened.value)}
>
  Dropdown Trigger
</DropdownButton>`,
  },
  {
    id: 'label',
    name: 'Label',
    category: 'Qwik / React Components',
    description:
      'Form field wrapper component providing accessible labels and consistent spacing.',
    props: [
      {
        name: 'for',
        type: 'string',
        description: 'Target input element ID',
      },
      {
        name: 'label',
        type: 'string',
        description: 'Label text to display',
      },
    ],
    qwikCode: `<Label for="my-input" label="Username">
  <input id="my-input" class="lum-input" />
</Label>`,
  },
  {
    id: 'nav',
    name: 'Nav',
    category: 'Qwik / React Components',
    description:
      'Responsive navigation header component supporting start, center, end, hamburger dropdown, and fixed bottom mobile navigation bar slots.',
    props: [
      {
        name: 'fixed',
        type: 'boolean',
        description: 'Fix navigation bar at the top of the viewport',
      },
      {
        name: 'floating',
        type: 'boolean',
        description: 'Enable floating card layout style with margin',
      },
      {
        name: 'nohamburger',
        type: 'boolean',
        description: 'Hide the top-right hamburger menu button on mobile',
      },
      {
        name: 'colorClass',
        type: 'ClassList | string',
        description: 'Custom background/border styling class',
      },
      {
        name: 'innerProps',
        type: "PropsOf<'div'>",
        description: 'Props for main inner navigation bar container',
      },
      {
        name: 'panelProps',
        type: "PropsOf<'div'>",
        description: 'Props for top hamburger menu dropdown container',
      },
      {
        name: 'mobileNavProps',
        type: "PropsOf<'div'>",
        description: 'Props for bottom fixed mobile navigation bar container',
      },
    ],
    slots: [
      {
        name: 'start',
        description: 'Left-aligned brand logo or title',
      },
      {
        name: 'center',
        description: 'Center navigation items (hidden on mobile by default)',
      },
      {
        name: 'end',
        description: 'Right-aligned navigation links, search, or profile menu',
      },
      {
        name: 'hamburger',
        description:
          'Navigation items displayed inside the top hamburger dropdown menu',
      },
      {
        name: 'mobile',
        description:
          'Navigation items displayed inside the fixed bottom mobile navigation bar',
      },
    ],
    qwikCode: `<Nav floating>
  <a q:slot="start" href="/" class="lum-btn lum-bg-transparent">Brand</a>
  <a q:slot="end" href="/docs" class="lum-btn lum-bg-transparent">Docs</a>
  <button q:slot="hamburger" class="lum-btn lum-bg-transparent">Hamburger Menu Item</button>
  <button q:slot="mobile" class="lum-btn lum-bg-transparent">Mobile Bar Item</button>
</Nav>`,
    reactCode: `<Nav
  floating
  start={<a href="/" className="lum-btn lum-bg-transparent">Brand</a>}
  end={<a href="/docs" className="lum-btn lum-bg-transparent">Docs</a>}
  hamburger={<button className="lum-btn lum-bg-transparent">Hamburger Item</button>}
  mobile={<button className="lum-btn lum-bg-transparent">Mobile Item</button>}
/>`,
  },
  {
    id: 'number-input',
    name: 'NumberInput',
    category: 'Qwik / React Components',
    description:
      'Stepper numeric input component with increment (+) and decrement (-) buttons.',
    props: [
      {
        name: 'value',
        type: 'number',
        description: 'Current numeric value',
      },
      {
        name: 'min',
        type: 'number',
        description: 'Minimum allowed numeric value',
      },
      {
        name: 'max',
        type: 'number',
        description: 'Maximum allowed numeric value',
      },
      {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step increment value',
      },
      {
        name: 'onChange$',
        type: 'QRL<(val: number) => void>',
        description: 'Value change handler',
      },
    ],
    qwikCode: `<NumberInput
  value={count.value}
  min={0}
  max={10}
  onChange$={(val) => (count.value = val)}
/>`,
  },
  {
    id: 'range-input',
    name: 'RangeInput',
    category: 'Qwik / React Components',
    description: 'Dynamic range slider input component.',
    props: [
      {
        name: 'value',
        type: 'number',
        description: 'Current slider value',
      },
      {
        name: 'min',
        type: 'number',
        description: 'Minimum slider value',
      },
      {
        name: 'max',
        type: 'number',
        description: 'Maximum slider value',
      },
      {
        name: 'onChange$',
        type: 'QRL<(val: number) => void>',
        description: 'Slider value change handler',
      },
    ],
    qwikCode: `<RangeInput
  value={slider.value}
  min={0}
  max={100}
  onChange$={(val) => (slider.value = val)}
/>`,
  },
  {
    id: 'select-menu',
    name: 'SelectMenu',
    category: 'Qwik / React Components',
    description:
      'Custom dropdown select menu with support for icons, custom option slots, and placement alignment.',
    props: [
      {
        name: 'values',
        type: 'SelectMenuValue[]',
        description: 'Array of option items ({ name: string, value: string })',
      },
      {
        name: 'value',
        type: 'string',
        description: 'Currently selected option value',
      },
      {
        name: 'align',
        type: "'left' | 'right' | 'center'",
        description: 'Alignment of the select menu dropdown panel',
      },
    ],
    qwikCode: `<SelectMenu
  values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
  ]}
  value="1"
  onChange$={(e, el) => (selected.value = el.value)}
/>`,
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    category: 'Qwik / React Components',
    description: 'Responsive collapsible sidebar layout component.',
    props: [
      {
        name: 'floating',
        type: 'boolean',
        description: 'Enable floating card layout style',
      },
    ],
    slots: [
      {
        name: 'title',
        description: 'Sidebar header title text or icon',
      },
      {
        name: 'default',
        description: 'Sidebar navigation items and links',
      },
    ],
    qwikCode: `<Sidebar floating>
  <h3 q:slot="title" class="text-lg font-bold">Navigation</h3>
  <a class="lum-btn lum-bg-transparent" href="#link1">Link 1</a>
  <a class="lum-btn lum-bg-transparent" href="#link2">Link 2</a>
</Sidebar>`,
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Qwik / React Components',
    description:
      'Horizontal tab strip component built on ButtonContainer for switching views with optional add (+) and delete (x) actions.',
    props: [
      {
        name: 'values',
        type: 'TabValue[]',
        description: 'Array of tab objects ({ name: string, value: string })',
      },
      {
        name: 'value',
        type: 'TabValue',
        description: 'Currently active tab object',
      },
      {
        name: 'onClick$',
        type: 'QRL<(tab: TabValue) => void>',
        description: 'Tab selection click handler',
      },
      {
        name: 'onPlus$',
        type: 'QRL<() => void>',
        description: 'Optional handler for add tab (+) button',
      },
      {
        name: 'onDelete$',
        type: 'QRL<(tab: TabValue) => void>',
        description: 'Optional handler for delete tab (x) button',
      },
    ],
    qwikCode: `<Tabs
  values={tabs.value}
  value={activeTab.value}
  onClick$={(tab) => (activeTab.value = tab)}
  onPlus$={() => { /* add tab logic */ }}
  onDelete$={(tab) => { /* delete tab logic */ }}
/>`,
    reactCode: `<Tabs
  values={tabs}
  value={activeTab}
  onClick={(tab) => setActiveTab(tab)}
  onPlus={() => { /* add tab logic */ }}
  onDelete={(tab) => { /* delete tab logic */ }}
/>`,
  },
  {
    id: 'toggle',
    name: 'Toggle',
    category: 'Qwik / React Components',
    description: 'Accessible switch toggle component for boolean options.',
    props: [
      {
        name: 'id',
        type: 'string',
        description: 'Unique toggle input element ID',
      },
      {
        name: 'checked',
        type: 'boolean',
        description: 'Controls the active checked toggle state',
      },
      {
        name: 'onChange$',
        type: 'QRL<(e, el) => void>',
        description: 'Toggle change event callback',
      },
    ],
    qwikCode: `<Toggle
  id="my-toggle"
  checked={enabled.value}
  onChange$={(e, el) => (enabled.value = el.checked)}
>
  Enable Option
</Toggle>`,
    reactCode: `<Toggle
  id="my-toggle"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
>
  Enable Option
</Toggle>`,
  },
];

/**
 * Generates clean, comprehensive Markdown documentation for AI/LLMs.
 */
export function generateLlmsTxt(): string {
  let md = `# Luminescent UI Documentation

> Complete component reference and API specifications for Luminescent UI (\`@luminescent/ui\`, \`@luminescent/ui-qwik\`, and \`@luminescent/ui-react\`).

## Quick Start & Installation

\`\`\`bash
# Install Qwik UI components
npm install @luminescent/ui-qwik @luminescent/ui

# Install React UI components
npm install @luminescent/ui-react @luminescent/ui
\`\`\`

## Component Catalog & API Reference

`;

  componentDocs.forEach((doc) => {
    md += `---

### ${doc.name} (\`#${doc.id}\`)
- **Category**: ${doc.category}
- **Description**: ${doc.description}

`;

    if (doc.props && doc.props.length > 0) {
      md += `#### Props\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n`;
      doc.props.forEach((p) => {
        md += `| \`${p.name}\` | \`${p.type}\` | \`${p.default ?? '-'}\` | ${p.description} |\n`;
      });
      md += `\n`;
    }

    if (doc.slots && doc.slots.length > 0) {
      md += `#### Slots\n| Slot Name | Description |\n| --- | --- |\n`;
      doc.slots.forEach((s) => {
        md += `| \`${s.name}\` | ${s.description} |\n`;
      });
      md += `\n`;
    }

    md += `#### Qwik Usage Example\n\`\`\`tsx\n${doc.qwikCode}\n\`\`\`\n\n`;

    if (doc.reactCode) {
      md += `#### React Usage Example\n\`\`\`tsx\n${doc.reactCode}\n\`\`\`\n\n`;
    }
  });

  return md.trim();
}
