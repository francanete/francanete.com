import { MarginProps } from "./MarginProps";
export interface TypographyProps extends MarginProps {
  level: "span" | "h1" | "h2" | "h3" | "h4";
  weight?: "extralight" | "light" | "semibold" | "bold";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  align?: "left" | "right" | "center" | "justify";
  // marginTop?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  // marginBottom?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
}
