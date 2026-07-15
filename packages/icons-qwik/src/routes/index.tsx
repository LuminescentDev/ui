import { component$ } from '@qwik.dev/core';
import {
  Birdflop,
  Fabric,
  Forge,
  Luminescent,
  LuminescentFull,
  Paper,
  Purpur,
  Waterfall,
} from '../index';

export default component$(() => {
  return (
    <>
      <h2>
        Icons
      </h2>
      <div>
        <Birdflop size={40} />
        <Fabric size={40} />
        <Forge size={40} />
        <Luminescent size={40} />
        <LuminescentFull size={40} />
        <Paper size={40} />
        <Purpur size={40} />
        <Waterfall size={40} />
      </div>
    </>
  );
});
