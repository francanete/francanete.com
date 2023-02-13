import { Button } from "./Button";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { TagsList } from "./TagsList";
import { Heading } from "./Heading";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { ArticleMeta } from "@/lib/types";
import { IRepository } from "@/types/github";
import { PullRequestsGrid } from "./PullRequestsGrid";
import { PostHeader } from "./PostHeader";

import styles from "./ProjectHeader.module.scss";

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
        <TagsList tags={projectMeta.tags} />
        <ArticleExcerpt excerpt={projectMeta.excerpt} />
        <div className={styles["ProjectHeader__body"]}>
          <Button
            href={repository.url}
            title="Source Code"
            iconComponent={<BsGithub size={15} />}
          />
          <Button
            href={repository.homepageUrl}
            title="Live Demo"
            iconComponent={<BiLink size={15} />}
          />
        </div>
      </div>
      <PullRequestsGrid pullRequests={repository} />
    </>
  );
};
