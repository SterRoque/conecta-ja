import { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "h-[40px]  px-8 font-semibold text-sm",
  variants: {
    variant: {
      primary: "bg-pink-400 text-white",
      secondary: "bg-white text-gray-800",
    },

    rounded: {
      sm: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      small: "w-fit",
      full: "w-full",
    },
  },

  defaultVariants: {
    variant: "primary",
    rounded: "full",
    size: "small",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  rounded?: "sm" | "full";
  size?: "small" | "full";
}

export function Button({
  variant,
  rounded,
  size,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ variant, rounded, size })} {...rest}>
      {children}
    </button>
  );
}
