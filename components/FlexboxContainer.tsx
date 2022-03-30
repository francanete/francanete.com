import { ReactNode, FunctionComponent } from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props extends BoxModelProps {
  children?: ReactNode;
  display?: "flex";
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  gap?:
    | "gap-1"
    | "gap-2"
    | "gap-3"
    | "gap-4"
    | "gap-5"
    | "gap-6"
    | "gap-7"
    | "gap-8";
  tailwind?: string;
}

export const FlexboxContainer = ({
  children,
  marginHorizontal,
  marginVertical,
  marginBottom,
  marginTop,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  display,
  justifyContent,
  gap,
  tailwind,
}: Props) => {
  return (
    <div className={`${tailwind} ${display} ${justifyContent} ${gap}`}>
      {children}
    </div>
  );
};

/**
 *
 *
 * flex
 * justityContent
 * alignItems
 * gap
 */
