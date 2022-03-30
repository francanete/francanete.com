import { ReactNode, FunctionComponent } from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props extends BoxModelProps {
  children?: ReactNode;
  display?: "flex";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
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
    <div
      className={`${tailwind} ${display} justify-${justifyContent} gap-${gap} mt-${marginTop} pt-${paddingTop} mb-${marginBottom}  mx-${marginHorizontal} my-${marginVertical} px-${paddingHorizontal} py-${paddingVertical} `}
    >
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
