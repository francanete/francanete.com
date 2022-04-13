import React from "react";
import { TypographyProps } from "../types/TypographyProps";

interface Props extends TypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export const PostTitle = ({
  children,
  level: Heading,
  weight,
  size,
  align,
  className,
}: Props) => {
  return (
    <Heading
      className={`text-${size} text-${align} font-${weight} ${className}`}
    >
      {children}
    </Heading>
  );
};
