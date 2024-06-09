import React from "react";
import SocialIcons from "./SocialIcons";

import styles from "./MainFooter.module.scss";
import IconSwitcher from "./IconSwitcher";

export const MainFooter = () => {
  return (
    <footer className={styles["MainFooter"]}>
      <div className={styles["MainFooter__wrapper"]}>
        <div className={styles["MainFooter__left"]}>
          <span>Fran Canete</span>
        </div>
        <p className={styles["MainFooter__center"]}>
          <SocialIcons width={20} height={20} />
        </p>
        <span className={styles["MainFooter__right"]}>
          <IconSwitcher className={styles["MainFooter__iconSwitcher"]} />
        </span>
      </div>
    </footer>
  );
};
