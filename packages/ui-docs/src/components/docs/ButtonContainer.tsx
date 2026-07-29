import { component$ } from '@qwik.dev/core';
import {
  Anchor,
  ButtonContainer as ButtonContainerEl,
} from '@luminescent/ui-qwik';

export const ButtonContainer = component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2
          id={id}
          class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl"
        >
          ButtonContainer
        </h2>
        <h3 class="text-lum-text-secondary text-sm">
          A container element for grouping interactive buttons and links with
          consistent styling
        </h3>
      </Anchor>
      <div>
        <ButtonContainerEl>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </ButtonContainerEl>
      </div>
      <textarea
        class="lum-input h-32"
        value={`
<ButtonContainer>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</ButtonContainer>`}
      />
    </div>
  );
});
