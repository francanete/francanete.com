import React from "react";
import SocialIcons from "./SocialIcons";
import { Heading } from "./Heading";

import styles from "./MainHeader.module.scss";
import { Paragraph } from "./Paragraph";
import { NewsletterForm } from "./NewsletterForm";

export const MainHeader = () => {
  const bioText = (
    <>
      <Paragraph size="large">
        <strong>Full Stack Software Engineer</strong> | Manchester, UK
      </Paragraph>
      <Paragraph size="large">
        Crafting exceptional, client-focused web applications with React,
        TypeScript, JavaScript, Node.js, and SQL (PostgreSQL).
      </Paragraph>
      <Paragraph size="large">
        Passionate about pushing digital boundaries for immersive online
        experiences! 🌐🚀
      </Paragraph>
    </>
  );

  return (
    <div className={styles["MainHeader__wrapper"]}>
      <Heading className={styles["MainHeader__header"]} level={2}>
        Fran Canete
      </Heading>
      {bioText}
      <SocialIcons
        className={styles["MainHeader__social"]}
        width={25}
        height={25}
      />
      <NewsletterForm />
    </div>
  );
};
