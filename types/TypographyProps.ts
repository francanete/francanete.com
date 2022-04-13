import { BoxModelProps } from "./BoxModelProps";
export type TypographyProps = {
  level: "span" | "h1" | "h2" | "h3" | "h4";
  weight?: "extralight" | "light" | "semibold" | "bold";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  align?: "left" | "right" | "center" | "justify";
};
