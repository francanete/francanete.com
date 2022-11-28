import { GithubIcon } from "./icons/GithubIcon";
import { WebsiteIcon } from "./icons/WebsiteIcon";
import { Button } from "./Button";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

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
      <ArticleExcerpt excerpt={excerpt} />
      <div className={styles["ProjectHeader__body"]}>
        <Button
          href="google.com"
          title="Source Code"
          iconComponent={<BsGithub size={15} />}
        />
        <Button
          href="google.com"
          title="Live Demo"
          iconComponent={<BiLink size={15} />}
        />
      </div>
    </div>
  );
};
