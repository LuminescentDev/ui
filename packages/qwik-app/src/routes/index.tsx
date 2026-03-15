import type { DocumentHead } from "@qwik.dev/router";
import { component$ } from "@qwik.dev/core";
import { Select, Checkbox } from "my-qwik-library-name";

export default component$(() => {
  return (
    <>
      <h1>Qwik Library Starter</h1>
      <p>
        This is a playground meant for testing your library. Make your
        components and export them from `src/index.ts`. This playground app will
        not be bundled with your library. You can use the Router like a normal
        Qwik app with the Qwik Router.
      </p>
      <Select onChange$={(e, el) => {
        console.log(el.value);
      }}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Checkbox onChange$={(e, el) => {
        console.log(el.checked);
      }}/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
