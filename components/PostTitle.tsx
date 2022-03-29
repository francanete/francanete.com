import React from "react";
import { TypographyProps } from "../types/TypographyProps";

interface Props extends TypographyProps {
  children?: React.ReactNode;
}

export const PostTitle = ({
  children,
  level: Heading,
  weight,
  size,
  align,
  marginTop,
  marginBottom,
}: Props) => {
  return (
    <Heading
      className={`text-${size} text-${align} font-${weight} mb-${marginBottom} mt-${marginTop}`}
    >
      {children}
    </Heading>
  );
};
