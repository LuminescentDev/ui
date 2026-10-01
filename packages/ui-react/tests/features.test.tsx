import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vite-plus/test';
import { ColorPicker, Nav, SelectMenu, Tabs } from '../src';

describe('Qwik feature parity', () => {
  it('keeps permanent tabs while allowing other tabs to be deleted', () => {
    const html = renderToStaticMarkup(
      <Tabs
        values={[
          { name: 'Home', value: 'home', permanent: true },
          { name: 'Draft', value: 'draft' },
        ]}
        onDelete={() => {}}
        tabProps={{ className: 'custom-tab' }}
        renderBefore={(tab) => <span>{`Before ${tab.name}`}</span>}
        renderAfter={(tab) => <span>{`After ${tab.name}`}</span>}
      />
    );
    expect(html).not.toContain('Delete Home');
    expect(html).toContain('Delete Draft');
    expect(html).toContain('custom-tab');
    expect(html).toContain('Before Home');
    expect(html).toContain('After Draft');
  });

  it('renders opacity from alpha and keeps randomization when the hex input is hidden', () => {
    const html = renderToStaticMarkup(
      <ColorPicker value="#ff000080" opacity horizontal showInput={false} />
    );
    expect(html).toContain('aria-valuenow="50"');
    expect(html).toContain('flex-row');
    expect(html).toContain('Randomize color');
    expect(html).not.toContain('Hex color');
  });

  it.each(['left', 'right', 'top', 'bottom', 'full'] as const)(
    'renders the %s color preview',
    (preview) => {
      const html = renderToStaticMarkup(
        <ColorPicker preview={preview} value="#ffffff" />
      );
      expect(html).toContain('Hex color');
      if (preview === 'full') expect(html).toContain('color:black');
      if (preview === 'right') expect(html).toContain('flex-row-reverse');
      if (preview === 'bottom') expect(html).toContain('flex-col-reverse');
    }
  );

  it('forwards navigation props to the intended containers', () => {
    const html = renderToStaticMarkup(
      <Nav
        floating
        innerProps={{ id: 'inner-nav' }}
        panelProps={{ id: 'nav-panel' }}
        mobileNavProps={{ id: 'mobile-nav' }}
        mobile={<span>Mobile links</span>}
      />
    );
    expect(html).toContain('id="inner-nav"');
    expect(html).toContain('id="nav-panel"');
    expect(html).toContain('id="mobile-nav"');
    expect(html).toContain('nav-ignore-dismiss');
  });

  it('renders custom options and compares numeric values with selected strings', () => {
    const html = renderToStaticMarkup(
      <SelectMenu
        value="2"
        values={[{ name: 'Second', value: 2, custom: true }]}
        btnProps={{ title: 'Custom option' }}
        renderOption={(value) => <strong>{`Option ${value}`}</strong>}
        renderBefore={() => <span>Before option</span>}
      />
    );
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('Option 2');
    expect(html).toContain('Before option');
    expect(html).toContain('title="Custom option"');
    expect(html.indexOf('<select')).toBeLessThan(html.indexOf('aria-haspopup'));
  });
});
