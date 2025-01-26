import { InputHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="h-10 w-full max-w-64 rounded-lg border border-gray-300 px-5 focus-visible:outline-none placeholder:text-sm"
      {...rest}
    />
  );
}
