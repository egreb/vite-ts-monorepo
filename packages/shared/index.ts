export function classNames(...names: (string | boolean | null | undefined)[]) {
  return names.filter(Boolean).join(" ");
}
