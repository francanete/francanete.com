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
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably
        haven&apos;t heard of them man bun deep.
      </p>
      <Button
        title="Github"
        iconComponent={<BsGithub size={16} />}
        href="https://github.com/francanete"
      />
    </Container>
  );
};
