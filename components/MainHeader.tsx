import * as React from "react";
import SocialIcons from "./SocialIcons";
import { Heading } from "./Heading";

import styles from "./MainHeader.module.scss";
import { Paragraph } from "./Paragraph";

export const MainHeader = () => {
  const bioText = (
    <>
      <Paragraph size="large">
        <strong>Frontend Software Engineer</strong> based in Manchester, UK.
      </Paragraph>
      <Paragraph size="large">
        I&apos;m passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </Paragraph>
      <Paragraph size="large">
        Currently working with Typescript, React, React Native, Next.js.
      </Paragraph>
    </>
  );
  return (
    <div className={styles["MainHeader__wrapper"]}>
      <Heading className={styles["MainHeader__header"]} level={2}>
        Fran Canete
      </Heading>
      {bioText}
      <SocialIcons
        className={styles["MainHeader__social"]}
        width={25}
        height={25}
      />
    </div>
  );
};
