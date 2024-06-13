import React from "react";
import { TagsList } from "./Tag/TagsList";
import { Heading } from "./Heading";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { ArticleMeta } from "@/lib/types";
import { IRepository } from "@/types/github";
import { PostHeader } from "./PostHeader";
import styles from "./ProjectHeader.module.scss";
import { ArticleExcerpt } from "./Article/ArticleExcerpt";
import { ButtonLink } from "./Button/ButtonLink";

type IProjectHeader = {
  projectMeta: ArticleMeta;
  repository: IRepository;
};

export const ProjectHeader = ({ projectMeta, repository }: IProjectHeader) => {
  if (!repository) return <PostHeader postMeta={projectMeta} />;

  return (
    <>
      <div className={styles["ProjectHeader"]}>
        <Heading level={1} bold size="large">
          {projectMeta.title}
        </Heading>
        <TagsList category={projectMeta.category} />
        <ArticleExcerpt excerpt={projectMeta.excerpt} weight="thin" />
        <div className={styles["ProjectHeader__body"]}>
          <ButtonLink
            href={repository.url}
            title="Source Code"
            iconComponent={<BsGithub size={15} />}
          />
          <ButtonLink
            href={repository.homepageUrl}
            title="Live Demo"
            iconComponent={<BiLink size={15} />}
          />
        </div>
      </div>
    </>
  );
};
