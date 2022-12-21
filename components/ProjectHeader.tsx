import { Button } from "./Button";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { ArticleMeta } from "@/lib/types";
import { IRepository } from "@/types/github";

import styles from "./ProjectHeader.module.scss";
import { PullRequestsGrid } from "./PullRequestsGrid";

type IProjectHeader = {
  projectMeta: ArticleMeta;
  reposiroty: IRepository;
};

export const ProjectHeader = ({ projectMeta, reposiroty }: IProjectHeader) => {
  console.log(reposiroty);

  if (!reposiroty) return null;

  return (
    <>
      <div className={styles["ProjectHeader"]}>
        <Heading level={1} bold size="large">
          {projectMeta.title}
        </Heading>
        <Tags tags={projectMeta.tags} />
        <ArticleExcerpt excerpt={projectMeta.excerpt} />
        <div className={styles["ProjectHeader__body"]}>
          <Button
            href={reposiroty.url}
            title="Source Code"
            iconComponent={<BsGithub size={15} />}
          />
          <Button
            href={reposiroty.homepageUrl}
            title="Live Demo"
            iconComponent={<BiLink size={15} />}
          />
        </div>
        {/* {reposiroty.pullRequests.edges.map((pullRequest) => (
        <>
          <span>{pullRequest.node.title}</span>
          <span>{pullRequest.node.state}</span>
          <span>{pullRequest.node.createdAt}</span>
          <a>{pullRequest.node.url}</a>
        </>
      ))} */}
      </div>
      <PullRequestsGrid pullRequests={reposiroty.pullRequests} />
    </>
  );
};
