import { component$, Slot } from '@qwik.dev/core';
import Nav from '../components/Nav';

export default component$(() => {
  return (
    <>
      <Nav />
      <Slot />
    </>
  );
});
