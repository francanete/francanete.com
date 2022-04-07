import React from "react";
import { TypographyProps } from "../types/TypographyProps";
import { BoxModelProps } from "../types/BoxModelProps";
import { TailwindGap, TailwindMargin } from "../types/TailwindTypes";
interface ButtonProps extends BoxModelProps, Omit<TypographyProps, "level"> {
  title: string;
  iconComponent?: React.ReactNode;
  iconGap?: TailwindGap;
  margin?: TailwindMargin;
  className?: any;
  href?: string;
}

export const Button = ({
  title,
  iconComponent,
  marginTop,
  marginBottom,
  paddingHorizontal = "3",
  paddingVertical = "2",
  size,
  iconGap,
  margin,
  className,
  href,
}: ButtonProps) => {
  return (
    <a href={href} target="_blank">
      <button
        type="button"
        className={`${className} group ${iconGap} ${margin} mt-${marginTop} mb-${marginBottom} px-${paddingHorizontal} py-${paddingVertical} text-dark text-${size} text-dark text-${size} bg-white hover:bg-gray-100 border-solid border border-dark/20 focus:ring-slate-400/40 rounded-lg  inline-flex items-center dark:text-slate-900  dark:bg-slate-200 dark:hover:bg-slate-300 dark:focus:ring-slate-100/30`}
      >
        {iconComponent}
        {title}
      </button>
    </a>
  );
};
