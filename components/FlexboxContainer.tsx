import { ReactNode, FunctionComponent } from "react";
import { BoxModelProps } from "../types/BoxModelProps";
import { TailwindGap } from "../types/TailwindTypes";

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
  gap?: TailwindGap;
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
