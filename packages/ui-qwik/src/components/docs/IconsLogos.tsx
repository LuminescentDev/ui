import { component$ } from '@builder.io/qwik';
import {
  Header,
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
} from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="icons" anchor>
        Icons/Logos
      </Header>
      <div class="lum-card">
        <div class="flex gap-10 flex-wrap justify-evenly">
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
