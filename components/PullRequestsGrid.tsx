import { TPullRequest } from "@/types/github";
import Link from "next/link";
import { DateFormatter } from "./DateFormatter";

import styles from "./PullRequestsGrid.module.scss";

interface IPullRequestsGrid {
  pullRequests: TPullRequest;
}

export const PullRequestsGrid = ({ pullRequests }: IPullRequestsGrid) => {
  const { edges } = pullRequests;

  const pullRequestsArray = Object.entries(edges).map((pullRequest) => {
    // return the object inside node:
    return pullRequest;
  });

  const newArray = pullRequestsArray.map((pullRequest) => {
    // return array of objects inside node:
    return pullRequest[1];
  });

  console.log({ newArray });

  return (
    <div className={styles.PullRequestsGrid}>
      {newArray.map((pullRequest) => (
        <Link
          href={pullRequest.node.url}
          key={pullRequest.node.id}
          target="_blank"
        >
          <div className={styles.PullRequestsGrid__item}>
            <span>{pullRequest.node.title}</span>
            <span>{pullRequest.node.state}</span>
            <DateFormatter dateString={pullRequest.node.createdAt} />
          </div>
        </Link>
      ))}
    </div>
  );
};
