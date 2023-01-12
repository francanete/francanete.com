import { Paragraph } from "./Paragraph";

interface IProjectExcerpt {
  excerpt: string | undefined;
}

export const ArticleExcerpt = ({ excerpt }: IProjectExcerpt) => {
  return <Paragraph weight="thin">{excerpt}</Paragraph>;
};
