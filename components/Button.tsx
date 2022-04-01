import React from "react";
import { TypographyProps } from "../types/TypographyProps";
import { BoxModelProps } from "../types/BoxModelProps";
import { TailwindGap, TailwindMargin } from "../types/TailwindTypes";
interface ButtonProps extends BoxModelProps, Omit<TypographyProps, "level"> {
  title: string;
  iconComponent?: React.ReactNode;
  iconGap?: TailwindGap;
  margin?: TailwindMargin;
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
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`group ${iconGap} ${margin} mt-${marginTop} mb-${marginBottom} px-${paddingHorizontal} py-${paddingVertical} text-white text-${size} bg-dark focus:ring-4 focus:outline-none focus:ring-slate-400/40 rounded-lg  inline-flex items-center dark:text-slate-900  dark:bg-slate-200 dark:hover:bg-slate-300 dark:focus:ring-slate-100/30`}
    >
      {iconComponent}
      {title}
    </button>
  );
};
