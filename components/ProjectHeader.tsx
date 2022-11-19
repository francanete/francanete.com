import { GithubIcon } from "./icons/GithubIcon";
import { WebsiteIcon } from "./icons/WebsiteIcon";
import { Button } from "./Button";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";

import styles from "./ProjectHeader.module.scss";

type IProjectHeader = {
  title: string;
  excerpt?: string;
  tags: string[];
};

export const ProjectHeader = ({ title, excerpt, tags }: IProjectHeader) => {
  return (
    <div className={styles["ProjectHeader"]}>
      <Heading level={1} bold size="large">
        {title}
      </Heading>
      <Tags tags={tags} />
      <ProjectExcerpt excerpt={excerpt} weight="light" />
      <div className={styles["ProjectHeader__body"]}>
        <Button
          href="google.com"
          title="Source Code"
          iconComponent={<GithubIcon size={15} />}
        />
        <Button
          href="google.com"
          title="Live Demo"
          iconComponent={<WebsiteIcon size={15} />}
        />
      </div>
    </div>
  );
};
