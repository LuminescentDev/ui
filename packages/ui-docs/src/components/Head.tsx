import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`${head.title}`}</title>
      <meta content={`${head.title}`} property="og:title" />
      <meta content="#0D0D0D" name="theme-color" />

      <link rel="canonical" href={loc.url.href} />
      <link
        rel="icon"
        type="image/png"
        href="https://avatars.githubusercontent.com/u/86643576"
      />
      <meta
        name="og:image"
        content="https://avatars.githubusercontent.com/u/86643576"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
