import type { HTMLAttributes } from 'react';

export const Hoverable = {
  onMouseMove: (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    element.style.transition = 'transform 0.05s ease-out';
    element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  },
  onMouseLeave: (event) => {
    event.currentTarget.style.transition = 'transform 0.3s ease-out';
    event.currentTarget.style.transform =
      'perspective(500px) rotateX(0deg) rotateY(0deg)';
  },
} satisfies Pick<HTMLAttributes<HTMLElement>, 'onMouseMove' | 'onMouseLeave'>;
