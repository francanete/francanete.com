import Link from "next/link";

import styles from "./Tags.module.scss";

interface ITags {
  tags: string[] | undefined;
  titleDisabled?: boolean;
  isClickable?: boolean;
}

export const Tags = ({
  tags,
  titleDisabled,

  isClickable = true,
}: ITags) => {
  return (
    <div className={styles["Tags"]}>
      {!titleDisabled && <p className={styles["Tags__title"]}>Technologies:</p>}
      <div className={styles["Tags__wrapper"]}>
        {tags?.map((tag: string) =>
          isClickable ? (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className={styles["Tags__tag"]}
            >
              {tag}
            </Link>
          ) : (
            <span key={tag} className={styles["Tags__tag"]}>
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );
};
