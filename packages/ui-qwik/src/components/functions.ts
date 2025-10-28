export const Hoverable = {
  onMouseMove$: (e: MouseEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((mouseY / rect.height) - 0.5) * -10;
    const rotateY = ((mouseX / rect.width) - 0.5) * 10;

    el.style.transition = 'transform 0.05s ease-out';
    el.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  },
  onMouseLeave$: (_e: MouseEvent, el: HTMLElement) => {
    el.style.transition = 'transform 0.3s ease-out';
    el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
  },
} as const;