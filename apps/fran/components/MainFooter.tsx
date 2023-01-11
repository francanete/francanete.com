import Link from "next/link";
import SocialIcons from "./SocialIcons";

import styles from "./MainFooter.module.scss";

export const MainFooter = () => {
  return (
    <footer className={styles["MainFooter"]}>
      <div className={styles["MainFooter__wrapper"]}>
        <span className={styles["MainFooter__name"]}>Fran Canete</span>
        <p className={styles["MainFooter__main"]}>
          © 2022 —
          <Link
            href="https://twitter.com/francanetecom"
            rel="noopener noreferrer"
            target="_blank"
          >
            @francanetecom
          </Link>
        </p>
        <span className={styles["MainFooter__social"]}>
          <SocialIcons width={20} height={20} />
        </span>
      </div>
    </footer>
  );
};
