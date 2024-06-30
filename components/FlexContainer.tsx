import React from 'react';
import classNames from 'classnames';
import styles from './FlexContainer.module.scss';

interface FlexContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  className?: string;
  gap?: number;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  direction = 'row',
  align = 'center',
  justify = 'center',
  className,
  gap = 0,
}) => {
  return (
    <div
      className={classNames(styles.flexContainer, className)}
      style={
        {
          '--flex-direction': direction,
          '--align-items': align,
          '--justify-content': justify,
          '--gap': `${gap}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FlexContainer;
