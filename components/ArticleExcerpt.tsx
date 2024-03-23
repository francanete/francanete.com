import React from "react";
import { IParagraph, Paragraph } from "./Paragraph";

interface IProjectExcerpt extends IParagraph {
  excerpt: string | undefined;
}

export const ArticleExcerpt = ({ excerpt, weight }: IProjectExcerpt) => {
  return <Paragraph weight={weight}>{excerpt}</Paragraph>;
};
