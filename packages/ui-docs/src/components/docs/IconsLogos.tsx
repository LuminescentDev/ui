import { component$ } from '@builder.io/qwik';
import {
  Anchor,
  LogoBirdflop,
  LogoDiscord,
  LogoFabric,
  LogoForge,
  LogoLuminescent,
  LogoLuminescentFull,
  LogoPaper,
  LogoPterodactyl,
  LogoPurpur,
  LogoVelocity,
  LogoWaterfall,
} from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <div class="lum-card">
      <Anchor id="icons">
        <h2 class="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
          Icons/Logos
        </h2>
      </Anchor>
      <div class="lum-card">
        <div class="flex flex-wrap justify-evenly gap-10">
          <LogoBirdflop width={40} />
          <LogoDiscord width={40} />
          <LogoFabric width={40} />
          <LogoForge width={40} />
          <LogoLuminescent width={40} />
          <LogoLuminescentFull width={40} />
          <LogoPaper width={40} />
          <LogoPterodactyl width={40} />
          <LogoPurpur width={40} />
          <LogoVelocity width={40} />
          <LogoWaterfall width={40} />
        </div>
      </div>
    </div>
  );
});
