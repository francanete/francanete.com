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
        I am dedicated to creating exceptional client-focused web applications
        that effectively address user needs.
      </Paragraph>
      <Paragraph size="large">
        My expertise includes utilizing technologies such as Typescript, React,
        React Native, and Next.js.
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
