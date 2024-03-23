import React from "react";
import Link from "next/link";
import { Tag } from "./Tag";

import styles from "./TagsList.module.scss";

interface ITagsList {
  tags: string[] | undefined;
  titleDisabled?: boolean;
  isClickable?: boolean;
}

export const TagsList = ({
  tags,
  titleDisabled,

  isClickable = true,
}: ITagsList) => {
  return (
    <div className={styles["TagsList"]}>
      {!titleDisabled && (
        <p className={styles["TagsList__title"]}>Technologies:</p>
      )}
      <div className={styles["TagsList__wrapper"]}>
        {tags?.map((tagText: string) =>
          isClickable ? (
            <Link key={tagText} href={`/tags/${tagText}`}>
              <Tag key={tagText} tagText={tagText} />
            </Link>
          ) : (
            <Tag key={tagText} tagText={tagText} />
          )
        )}
      </div>
    </div>
  );
};
