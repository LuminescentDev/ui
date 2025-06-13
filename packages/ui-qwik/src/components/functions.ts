export const Hoverable = {
  onMouseMove$: (e: MouseEvent, el: HTMLElement) => {
    const mousex = e.clientX - el.getBoundingClientRect().left;
    const mousey = e.clientY - el.getBoundingClientRect().top;

    el.style.transform = `perspective(500px) rotateX(${(mousey / el.clientHeight - 0.5) * 10}deg) rotateY(${(mousex / el.clientWidth - 0.5) * 10}deg)`;
  },
  onMouseLeave$: (e: MouseEvent, el: HTMLElement) => {
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  },
} as const;