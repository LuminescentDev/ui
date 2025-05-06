import { component$ } from '@builder.io/qwik';

interface AnchorProps {
  id: string;
}

export const Anchor = component$<AnchorProps>(({ id }) => (
  <span id={id} class="block h-32 -mt-32 pointer-events-none" />
));
