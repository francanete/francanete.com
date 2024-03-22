import Author from "./author";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ArticleMeta } from "@/lib/types";

export type TArticle = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  featured?: boolean;
  technologies: string[];
  tags: string[];
  project: boolean;
};

// export default PostType;

export interface MDXPost {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}
