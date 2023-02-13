import React from "react";
import Image from "next/image";
import { MainLayout } from "@/components/MainLayout";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
import { Paragraph } from "@/components/Paragraph";

import styles from "./About.module.scss";

const About = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <Container className={styles.About}>
          <Heading level={1} className={styles["About__title"]}>
            A software developer with a unique business perspective
          </Heading>
          <div className={styles["About__wrapper"]}>
            <Image
              src="/img/francanete1.png"
              alt="fran canete"
              width={400}
              height={400}
              className={styles["About__image"]}
              priority
            />
            <div>
              <Paragraph>
                After 13 years of professional experience in finance and as a
                small business owner, I am a software developer with a unique
                holistic perspective that allows me to go beyond writing code.
              </Paragraph>
              <Paragraph>
                Understanding the real needs of the market, listening to the
                users pain point and developing solutions that truly solves
                their problems is my personal mission.
              </Paragraph>
              <Paragraph>
                My transition from business to software development has been an
                inspiring journey to fulfil this purpose of creating products
                that serve the market, not the other way around.
              </Paragraph>
            </div>
          </div>
          <Heading level={2} className={styles["About__heading"]}>
            What I am passionate about
          </Heading>
          <Paragraph>
            Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
            fusce ut. Et ultrices neque ornare aenean euismod elementum nisi
            quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. Mattis molestie a iaculis at erat pellentesque. Nullam eget
            felis eget nunc lobortis mattis. Pellentesque elit eget gravida cum
            sociis natoque penatibus. Pellentesque habitant morbi tristique
            senectus et netus. Ut ornare lectus sit amet est placerat in
            egestas.
          </Paragraph>
          <Heading level={2} className={styles["About__heading"]}>
            My interests and hobbies
          </Heading>
          <Paragraph>
            Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
            fusce ut. Et ultrices neque ornare aenean euismod elementum nisi
            quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. Mattis molestie a iaculis at erat pellentesque. Nullam eget
            felis eget nunc lobortis mattis. Pellentesque elit eget gravida cum
            sociis natoque penatibus. Pellentesque habitant morbi tristique
            senectus et netus. Ut ornare lectus sit amet est placerat in
            egestas.
          </Paragraph>
        </Container>
      </MainLayout>
    </React.Fragment>
  );
};

export default About;
