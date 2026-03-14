import { component$ } from '@qwik.dev/core';
import {
  LogoBirdflop,
  LogoFabric,
  LogoForge,
  LogoLuminescent,
  LogoLuminescentFull,
  LogoPaper,
  LogoPurpur,
  LogoWaterfall,
} from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Icons/Logos
      </h2>
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
