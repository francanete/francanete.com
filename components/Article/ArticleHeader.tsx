import React from "react";
import { ArticleMeta } from "@/lib/types";
import { IRepository } from "@/types/github";
import { PostHeader } from "../PostHeader";
import { ProjectHeader } from "../ProjectHeader";

interface IArticleHeader {
  articleMeta: ArticleMeta;
  repository: IRepository;
}

export const ArticleHeader = ({ articleMeta, repository }: IArticleHeader) => {
  if (articleMeta.type === "post") {
    return <PostHeader postMeta={articleMeta} />;
  }

  return <ProjectHeader projectMeta={articleMeta} repository={repository} />;
};
