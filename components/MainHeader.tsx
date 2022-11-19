import * as React from "react";
import SocialIcons from "./SocialIcons";
import { Heading } from "./Heading";

import styles from "./MainHeader.module.scss";

export const MainHeader = () => {
  const bioText = (
    <>
      <p className={styles["MainHeader__paragraph"]}>
        <strong>Frontend Software Engineer</strong> based in Manchester, UK.
      </p>
      <p className={styles["MainHeader__paragraph"]}>
        I'm passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </p>
      <p className={styles["MainHeader__paragraph"]}>
        Currently working with Typescript, React, React Native, Next.js.
      </p>
    </>
  );
  return (
    <div className={styles["MainHeader__wrapper"]}>
      <Heading className={styles["MainHeader__header"]} level={2}>
        Fran Canete
      </Heading>
      {bioText}
      <SocialIcons width={25} height={25} />
    </div>
  );
};
