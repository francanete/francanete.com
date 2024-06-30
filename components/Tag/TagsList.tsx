import React from 'react';
import Link from 'next/link';
import { Tag } from './Tag';

import styles from './TagsList.module.scss';

interface ITagsList {
  category: string[] | undefined;
  titleDisabled?: boolean;
  isClickable?: boolean;
}

export const TagsList = ({
  category,
  titleDisabled,

  isClickable = true,
}: ITagsList) => {
  return (
    <div className={styles['TagsList']}>
      {!titleDisabled && (
        <p className={styles['TagsList__title']}>Categories:</p>
      )}
      <div className={styles['TagsList__wrapper']}>
        {category?.map((tagText: string) =>
          isClickable ? (
            <Link key={tagText} href={`/category/${tagText}`}>
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
