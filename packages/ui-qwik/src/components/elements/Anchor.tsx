import { component$ } from '@builder.io/qwik';

interface AnchorProps {
  id: string;
}

export const Anchor = component$<AnchorProps>(({ id }) => (
  <span id={id} class="pointer-events-none -mt-32 block h-32" />
));
