import { component$, useSignal } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import { generateLlmsTxt, componentDocs } from '~/components/docs/docsData';
import { Anchor, ButtonContainer } from '@luminescent/ui-qwik';

export default component$(() => {
  const copied = useSignal(false);
  const search = useSignal('');
  const llmsText = generateLlmsTxt();

  const filteredDocs = componentDocs.filter(
    (item) =>
      item.name.toLowerCase().includes(search.value.toLowerCase()) ||
      item.description.toLowerCase().includes(search.value.toLowerCase()) ||
      item.id.toLowerCase().includes(search.value.toLowerCase())
  );

  return (
    <div class="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-4xl font-bold">Luminescent UI AI Documentation</h1>
          <p class="text-lum-text-secondary mt-1">
            Machine-readable, AI-optimized documentation for LLM coding
            assistants.
          </p>
        </div>
        <ButtonContainer class="flex-none">
          <button
            class={{
              'lum-btn p-2 transition-colors duration-200': true,
              'lum-bg-green! text-white': copied.value,
              'lum-bg-blue': !copied.value,
            }}
            onClick$={() => {
              void navigator.clipboard.writeText(llmsText);
              copied.value = true;
              setTimeout(() => {
                copied.value = false;
              }, 2000);
            }}
          >
            {copied.value
              ? '✓ Copied to Clipboard!'
              : 'Copy All AI Docs (Markdown)'}
          </button>
          <a
            href="/llms.txt"
            target="_blank"
            class="lum-btn lum-bg-transparent p-2 text-center"
          >
            View /llms.txt
          </a>
        </ButtonContainer>
      </div>

      <div class="lum-card p-4">
        <input
          type="text"
          class="lum-input w-full"
          placeholder="Filter AI component documentation..."
          onInput$={(e, el) => (search.value = el.value)}
        />
      </div>

      <div class="flex flex-col gap-6">
        {filteredDocs.map((doc) => (
          <div key={doc.id} class="lum-card p-6">
            <Anchor id={doc.id}>
              <h2 id={doc.id} class="text-2xl font-bold text-white">
                {doc.name}
              </h2>
              <p class="text-lum-text-secondary text-sm">{doc.description}</p>
            </Anchor>

            {doc.props && doc.props.length > 0 && (
              <div class="mt-4">
                <h3 class="mb-2 text-sm font-semibold text-white">Props</h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs">
                    <thead>
                      <tr class="border-b border-gray-700 text-gray-400">
                        <th class="py-1">Prop</th>
                        <th class="py-1">Type</th>
                        <th class="py-1">Default</th>
                        <th class="py-1">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doc.props.map((p) => (
                        <tr key={p.name} class="border-b border-gray-800">
                          <td class="py-1 font-mono text-cyan-400">{p.name}</td>
                          <td class="py-1 font-mono text-amber-300">
                            {p.type}
                          </td>
                          <td class="py-1 font-mono text-gray-400">
                            {p.default ?? '-'}
                          </td>
                          <td class="py-1 text-gray-300">{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {doc.slots && doc.slots.length > 0 && (
              <div class="mt-4">
                <h3 class="mb-2 text-sm font-semibold text-white">Slots</h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs">
                    <thead>
                      <tr class="border-b border-gray-700 text-gray-400">
                        <th class="py-1">Slot Name</th>
                        <th class="py-1">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doc.slots.map((s) => (
                        <tr key={s.name} class="border-b border-gray-800">
                          <td class="py-1 font-mono text-purple-400">
                            {s.name}
                          </td>
                          <td class="py-1 text-gray-300">{s.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div class="mt-4">
              <h3 class="mb-1 text-sm font-semibold text-white">
                Qwik Usage Example
              </h3>
              <textarea
                class="lum-input h-32 w-full font-mono text-xs"
                value={doc.qwikCode}
                readOnly
              />
            </div>

            {doc.reactCode && (
              <div class="mt-4">
                <h3 class="mb-1 text-sm font-semibold text-white">
                  React Usage Example
                </h3>
                <textarea
                  class="lum-input h-32 w-full font-mono text-xs"
                  value={doc.reactCode}
                  readOnly
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'AI Documentation - Luminescent UI',
  meta: [
    {
      name: 'description',
      content: 'Machine-readable AI documentation for Luminescent UI',
    },
  ],
};
