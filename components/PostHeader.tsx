import { ProjectExcerpt } from "./ProjectExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";

import styles from "./PostHeader.module.scss";

interface IPostHeader {
  title: string;
  excerpt?: string;
  tags: string[];
}

export const PostHeader = ({ title, excerpt, tags }: IPostHeader) => {
  return (
    <div className={styles["PostHeader"]}>
      <Heading level={1} bold size="large">
        {title}
      </Heading>
      <Tags tags={tags} />
      <ProjectExcerpt excerpt={excerpt} weight="light" />
    </div>
  );
};
