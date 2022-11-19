import * as React from "react";
import SocialIcons from "./SocialIcons";

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
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-main-dark  dark:text-zinc-200  -mt-35 ">
        Fran Canete
      </h2>
      <div className="text-center ">{bioText}</div>
      <SocialIcons width={25} height={25} />
    </div>
  );
};
