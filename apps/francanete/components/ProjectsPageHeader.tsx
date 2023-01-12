import { Button } from "./Button";
import { Heading } from "./Heading";
import { Container } from "./Container";
import { BsGithub } from "react-icons/bs";

import styles from "./ProjectPageHeader.module.scss";

export const ProjectPageHeader = () => {
  return (
    <Container className={styles["ProjectPageHeader"]}>
      <Heading level={1} bold size="large">
        Check out my latest projects
      </Heading>
      <p className={styles["ProjectPageHeader__description"]}>
        I am a software engineer and I love to build things. Here are some of my
        latest projects. If you want to see more, check out my Github profile.
      </p>
      <Button
        title="Github"
        iconComponent={<BsGithub size={16} />}
        href="https://github.com/francanete"
        className={styles["ProjectPageHeader__button"]}
      />
    </Container>
  );
};
