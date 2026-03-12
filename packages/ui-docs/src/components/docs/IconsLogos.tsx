import { component$ } from '@qwik.dev/core';
import {
  Anchor,
  LogoBirdflop,
  LogoFabric,
  LogoForge,
  LogoLuminescent,
  LogoLuminescentFull,
  LogoPaper,
  LogoPurpur,
  LogoWaterfall,
} from '@luminescent/ui-qwik';

export default component$(({ id }: { id: string }) => {
  return (
    <div class="lum-card">
      <Anchor id={id}>
        <h2 id={id} class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Icons/Logos DEPRECATED
        </h2>
      </Anchor>
      <p>
        The icons and logos in this package are going to be moved to a separate package called @luminescent/icons-qwik.
      </p>
      <div class="lum-card">
        <div class="flex flex-wrap justify-evenly gap-10">
          <LogoBirdflop size={40} />
          <LogoFabric size={40} />
          <LogoForge size={40} />
          <LogoLuminescent size={40} />
          <LogoLuminescentFull size={40} />
          <LogoPaper size={40} />
          <LogoPurpur size={40} />
          <LogoWaterfall size={40} />
        </div>
      </div>
    </div>
  );
});