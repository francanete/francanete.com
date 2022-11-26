import Link from "next/link";
import SocialIcons from "./SocialIcons";

import styles from "./Footer.module.scss";

export const MainFooter = () => {
  return (
    <footer className="Footer">
      <div className={styles["Footer__wrapper"]}>
        <span className={styles["Footer__name"]}>Fran Canete</span>
        <p className={styles["Footer__main"]}>
          © 2022 —
          <Link
            href="https://twitter.com/francanetecom"
            rel="noopener noreferrer"
            target="_blank"
          >
            @francantecom
          </Link>
        </p>
        <span className={styles["Footer__social"]}>
          <SocialIcons width={20} height={20} />
        </span>
      </div>
    </footer>
  );
};
