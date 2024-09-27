import { classNames } from "@package/shared";

export function Button({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...rest}
      className={classNames(
        "px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-500 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
