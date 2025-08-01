import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LogoDiscord, LogoLuminescentFull, Nav } from '@luminescent/ui-qwik';
import { Book, Github } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <Nav floating fixed colorClass="lum-bg-lum-input-bg/50 !text-lum-text" style={{
      '--lum-border-radius': '1rem',
    }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent rounded-lum-2">
        <div
          class="flex items-center gap-1 fill-[#f0ccfb] font-semibold text-[#f0ccfb]"
          style="filter: drop-shadow(0 0 1rem #CB6CE6);"
        >
          <LogoLuminescentFull size={20} />
        </div>
      </Link>

      <Link
        q:slot="end"
        href="/docs"
        class={{
          'lum-btn lum-bg-transparent hidden sm:flex rounded-lum-2 text-sm': true,
        }}
      >
        <Book size={20} /> Docs
      </Link>
      <a
        q:slot="end"
        href="https://luminescent.dev"
        class="lum-btn lum-bg-transparent rounded-lum-2"
      >
        <LogoLuminescentFull size={20} />
      </a>
      <div q:slot="end" class="hidden gap-2 sm:flex">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/docs" class="lum-btn lum-bg-transparent rounded-lum-2">
        <Book size={20} /> Docs
      </Link>
      <a
        q:slot="mobile"
        href="https://luminescent.dev"
        class="lum-btn lum-bg-transparent"
      >
        <div class="flex items-center gap-1 font-semibold">
          <LogoLuminescentFull size={20} class="mt-1" />
        </div>
      </a>
      <div q:slot="mobile" class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return (
    <>
      <a
        href="https://github.com/LuminescentDev"
        title="GitHub"
        class="lum-btn lum-bg-transparent p-2 rounded-lum-2"
      >
        <Github size={20} />
      </a>
      <a href="/discord" title="Discord" class="lum-btn lum-bg-transparent p-2 rounded-lum-2">
        <LogoDiscord size={20} />
      </a>
    </>
  );
});
