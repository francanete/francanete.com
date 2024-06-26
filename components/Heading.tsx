import React from 'react';
import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './Heading.module.scss';

interface PropsType {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  underline?: boolean;
  ellipsis?: boolean;
  bold?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export const Heading = ({
  level,
  underline,
  ellipsis,
  bold,
  size,
  className,
  children = null,
}: PropsType) => {
  const Tag = `h${level}` as HeadingTag;
  return (
    <Tag
      className={classNames(
        styles['Heading'],
        {
          [styles['Heading--underline']]: underline,
          [styles['Heading--ellipsis']]: ellipsis,
          [styles['Heading--bold']]: bold,
          [styles[`Heading--size--${size}`]]: size,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
