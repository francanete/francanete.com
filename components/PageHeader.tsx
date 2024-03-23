import React from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Container } from "./Container";

import styles from "./PageHeader.module.scss";

interface IPageHeaderProps {
  title: string;
  description: string;
  showActionButton?: boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonHref?: string;
}

type PageHeaderProps = IPageHeaderProps &
  (
    | {
        showActionButton: true;
        buttonText: string;
        buttonIcon: React.ReactNode;
        buttonHref: string;
      }
    | {
        showActionButton?: false;
        buttonText?: string;
        buttonIcon?: React.ReactNode;
        buttonHref?: string;
      }
  );

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  showActionButton,
  buttonText,
  buttonIcon,
  buttonHref,
}) => {
  return (
    <Container className={styles["PageHeader"]}>
      <Heading level={1} bold size="large">
        {title}
      </Heading>
      <p className={styles["PageHeader__description"]}>{description}</p>
      {showActionButton && (
        <Button
          title={buttonText}
          iconComponent={buttonIcon}
          href={buttonHref}
          className={styles["PageHeader__button"]}
        />
      )}
    </Container>
  );
};
