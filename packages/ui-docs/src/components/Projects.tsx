import { component$, useSignal, useVisibleTask$ } from '@qwik.dev/core';

import { Projects } from './ProjectList';
import ChevronLeft from 'lucide-icons-qwik/icons/ChevronLeft';
import ChevronRight from 'lucide-icons-qwik/icons/ChevronRight';

export default component$(() => {
  const translateX = useSignal(0);
  const targetX = useSignal(0);
  const containerRef = useSignal<HTMLDivElement>();

  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const animate = () => {
      const el = containerRef.value;
      if (!el) {
        requestAnimationFrame(animate);
        return;
      }

      // Smooth easing
      translateX.value += (targetX.value - translateX.value) * 0.1;

      const width = el.scrollWidth / 2;

      // Infinite loop
      if (translateX.value > width) {
        translateX.value -= width;
        targetX.value -= width;
      }
      if (translateX.value < 0) {
        translateX.value += width;
        targetX.value += width;
      }

      // Apply transform (negative for left scroll)
      el.style.transform = `translateX(-${translateX.value}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  });

  return (
    <section
      id="projects"
      class="mx-auto mt-10 flex max-w-7xl flex-col items-center"
    >
      <div class="text-center">
        <h2 class="mb-2 text-3xl font-bold text-gray-100">Showcase</h2>
        <p class="text-gray-300">
          Here are some of the websites that use luminescent/ui, if you want to
          be featured here, please contact us on Discord.
        </p>
      </div>

      <div class="relative my-10 flex w-full px-8">
        {/* LEFT BUTTON */}
        <button
          class="group absolute left-0 z-20 h-full cursor-pointer"
          onClick$={() => (targetX.value -= 300)}
        >
          <span class="lum-btn lum-bg-gray-900 group-hover:lum-bg-gray-800 p-2 py-8 pl-1 drop-shadow-2xl backdrop-blur-sm">
            <ChevronLeft size={48} />
          </span>
        </button>

        {/* RIGHT BUTTON */}
        <button
          class="group absolute right-0 z-20 h-full cursor-pointer"
          onClick$={() => (targetX.value += 300)}
        >
          <span class="lum-btn lum-bg-gray-900 group-hover:lum-bg-gray-800 p-2 py-8 pr-1 drop-shadow-2xl backdrop-blur-sm">
            <ChevronRight size={48} />
          </span>
        </button>

        {/* Fade edges */}
        <div class="rounded-lum pointer-events-none absolute left-8 z-10 h-full w-20 rounded-r-none bg-linear-to-r from-gray-950 to-transparent" />
        <div class="rounded-lum pointer-events-none absolute right-8 z-10 h-full w-20 rounded-l-none bg-linear-to-l from-gray-950 to-transparent" />

        {/* Background */}
        <div class="rounded-lum lum-bg-gray-950 absolute inset-0 mx-8" />

        {/* Viewport */}
        <div class="relative flex w-full overflow-hidden p-10">
          {/* Scroll container */}
          <div ref={containerRef} class="flex gap-2 py-2 select-none">
            {[...Projects, ...Projects].map((project) => (
              <div
                key={project.title}
                class="lum-card lum-bg-gray-900/50 relative max-w-48 min-w-48 md:max-w-64 md:min-w-64"
              >
                {typeof project.image === 'string' ? (
                  <img
                    src={project.image}
                    alt={`${project.title} Logo`}
                    class="mx-auto mb-5 h-25 w-25 md:h-50 md:w-50"
                    width={200}
                    height={200}
                  />
                ) : (
                  project.image
                )}

                <h3 class="text-base font-bold text-gray-100 md:text-xl">
                  {project.title}
                </h3>

                <div class="hidden flex-wrap items-center gap-2 md:flex">
                  {project.tags.map((Tag, i) => (
                    <Tag key={i} />
                  ))}
                </div>

                <p class="text-xs text-gray-400 md:text-sm">
                  {project.description}
                </p>

                <div
                  class={{
                    'group lum-card lum-bg-gray-900/30 absolute inset-0 z-10 h-full w-full gap-2 p-2 opacity-0 backdrop-blur-md transition duration-300 ease-out hover:opacity-100 hover:duration-75': true,
                  }}
                >
                  {project.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.href}
                      draggable={false}
                      class={{
                        'lum-btn rounded-lum-2 lum-bg-transparent pointer-events-none flex h-full w-full flex-col items-center justify-center gap-2 fill-current transition-all group-hover:pointer-events-auto': true,
                        [project.btnClass]: project.btnClass,
                      }}
                    >
                      <button.icon size={24} />
                      {button.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
