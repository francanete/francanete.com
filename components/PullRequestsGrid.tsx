import React from "react";
import { IRepository, TPullRequest } from "@/types/github";
import Link from "next/link";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { BiGitMerge } from "react-icons/bi";
import { BiGitPullRequest } from "react-icons/bi";
import { VscGitPullRequestClosed } from "react-icons/vsc";
import { Tag } from "./Tag/Tag";

import styles from "./PullRequestsGrid.module.scss";

interface IPullRequestsGrid {
  pullRequests: IRepository;
}

export const PullRequestsGrid = ({ pullRequests }: IPullRequestsGrid) => {
  const pullRequestsArray = pullRequests.pullRequests.edges.map(
    (pullRequest: TPullRequest) => {
      return {
        id: pullRequest.node.id,
        title: pullRequest.node.title,
        state: pullRequest.node.state,
        createdAt: pullRequest.node.createdAt,
        url: pullRequest.node.url,
        commitsTotalCount: pullRequest.node.commits.totalCount,
      };
    }
  );

  const getPullRequestIcon = (state: string) => {
    switch (state) {
      case "MERGED":
        return <BiGitMerge />;
      case "OPEN":
        return <BiGitPullRequest />;
      case "CLOSED":
        return <VscGitPullRequestClosed />;
      default:
        return null;
    }
  };

  return (
    <>
      <Heading level={3} className={styles.PullRequestsGrid__title}>
        Latest Contributions
      </Heading>
      <div className={styles.PullRequestsGrid}>
        {pullRequestsArray.map((pullRequest) => (
          <Link href={pullRequest.url} key={pullRequest.id} target="_blank">
            <div className={styles.PullRequestsGrid__item}>
              <Paragraph ellipsis size="medium">
                {pullRequest.title}
              </Paragraph>
              <div className={styles.PullRequestsGrid__tagWrapper}>
                <Tag
                  tagText={pullRequest.state}
                  className={styles.PullRequestsGrid__tag}
                  backgroundColor={pullRequest.state.toLocaleLowerCase()}
                  icon={getPullRequestIcon(pullRequest.state)}
                />
                <span className={styles.PullRequestsGrid__commitsTotalCount}>
                  {`${pullRequest.commitsTotalCount} commit${
                    pullRequest.commitsTotalCount > 1 ? "s" : ""
                  }`}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
