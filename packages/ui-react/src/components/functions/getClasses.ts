export function getClasses(classes: {
  [key: string]: boolean | undefined;
}) {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}