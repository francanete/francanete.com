import { ReactNode, FunctionComponent } from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props {
  children?: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 ">{children}</div>;
};

/**
 *
 *
 * flex
 * justityContent
 * alignItems
 * gap
 */
