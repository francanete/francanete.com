import React from 'react';
import { TagsList } from './Tag/TagsList';
import { Heading } from './Heading';
import { ArticleMeta } from '@/lib/types';

import styles from './PostHeader.module.scss';
import { BsGithub } from 'react-icons/bs';
import { ArticleExcerpt } from './Article/ArticleExcerpt';
import { ButtonLink } from './Button/ButtonLink';

interface IPostHeader {
  postMeta: ArticleMeta;
}

export const PostHeader = ({ postMeta }: IPostHeader) => {
  return (
    <div className={styles['PostHeader']}>
      <Heading level={1} bold size="large">
        {postMeta.title}
      </Heading>
      <TagsList category={postMeta.category} />
      <ArticleExcerpt excerpt={postMeta.excerpt} weight="thin" />
      {postMeta.url && (
        <div className={styles['PostHeader__body']}>
          <ButtonLink
            href={postMeta.url}
            title="Source Code"
            iconComponent={<BsGithub size={15} />}
          />
        </div>
      )}
    </div>
  );
};
