import { ReactNode } from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props extends BoxModelProps {
  children?: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 ">{children}</div>;
};
