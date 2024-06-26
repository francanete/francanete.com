import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ArticleMeta } from '@/lib/types';

import styles from './ArticleBody.module.scss';
import { ImageArticle } from '../ImageArticle';

export interface MDXPost {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}

type TArticleBody = {
  content: MDXPost;
};

export const ArticleBody = ({ content }: TArticleBody) => {
  return (
    <div className={styles.ArticleBody}>
      <MDXRemote {...content.source} components={{ ImageArticle }} />
    </div>
  );
};
