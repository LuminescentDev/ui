import {
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

export function IconsLogos() {
  return (
    <div className="lum-card">
      <h2 className="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Icons/Logos
      </h2>
      <div className="lum-card">
        <div className="flex flex-wrap justify-evenly gap-10">
          <LogoBirdflop size={40} />
          <LogoDiscord size={40} />
          <LogoFabric size={40} />
          <LogoForge size={40} />
          <LogoLuminescent size={40} />
          <LogoLuminescentFull size={40} />
          <LogoPaper size={40} />
          <LogoPterodactyl size={40} />
          <LogoPurpur size={40} />
          <LogoVelocity size={40} />
          <LogoWaterfall size={40} />
        </div>
      </div>
    </div>
  );
};
