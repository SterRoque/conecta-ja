import { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "h-[40px] w-fit rounded-full px-8 font-semibold text-sm",
  variants: {
    variant: {
      primary: "bg-pink-400 text-white ",
      secondary: "bg-white text-gray-800",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={button({ variant })} {...rest}>
      {children}
    </button>
  );
}
