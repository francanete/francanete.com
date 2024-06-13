import path from "path";
import { EArticleType, TArticleType } from "./apiArticles";
import { sync } from "glob";
import fs from "fs";
import matter from "gray-matter";

export const getPath = () => path.join(process.cwd(), "blog");

export const getSlugHelper = (slugPath: string) => {
  const paths = sync(`${slugPath}/*.mdx`);

  return paths.map((path: string) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};

export const getArticlesFromSlugHelper = (postPath: string, slug: string) => {
  const source = fs.readFileSync(postPath);
  console.log("source", matter(source));
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      article: data.article ?? true,
      featured: data.featured ?? true,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      category: (data.category ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      type: data.type ?? (EArticleType.PROJECTS || EArticleType.POSTS),
      repositoryName: data.repositoryName ?? "",
      url: data.url ?? "",
    },
  };
};
