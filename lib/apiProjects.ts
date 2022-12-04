import path from "path";
import { getArticlesFromSlugHelper, getPath, getSlugHelper } from "./utils";
import { Post } from "./types";

export enum EArticleType {
  PROJECTS = "projects",
  POSTS = "posts",
}

type TArticleType = "project" | "post";
const ARTICLE_PATH = getPath();

export const getSlugs = (path: string): string[] => {
  return getSlugHelper(path);
};

export const getArticlesFromSlug = (slug: string): Post => {
  const postPath = path.join(ARTICLE_PATH, `${slug}.mdx`);
  return getArticlesFromSlugHelper(postPath, slug);
};

export const getAllArticles = (type: TArticleType) => {
  return getSlugs(ARTICLE_PATH)
    .map((slug) => getArticlesFromSlug(slug))
    .filter((article) => article.meta.type === type)
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
};
