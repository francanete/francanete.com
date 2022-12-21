import { IRepository, TPullRequest } from "@/types/github";
import Link from "next/link";
import { DateFormatter } from "./DateFormatter";
import { Paragraph } from "./Paragraph";

import styles from "./PullRequestsGrid.module.scss";
import { Tag } from "./Tag";

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
      };
    }
  );

  return (
    <div className={styles.PullRequestsGrid}>
      {pullRequestsArray.map((pullRequest) => (
        <Link href={pullRequest.url} key={pullRequest.id} target="_blank">
          <div className={styles.PullRequestsGrid__item}>
            <Paragraph ellipsis size="medium">
              {pullRequest.title}
            </Paragraph>
            <div>
              <Tag
                tagText={pullRequest.state}
                className={styles.PullRequestsGrid__tag}
              />
              <DateFormatter
                className={styles.PullRequestsGrid__date}
                dateString={pullRequest.createdAt}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
