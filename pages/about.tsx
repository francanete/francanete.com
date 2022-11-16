import React from "react";
import style from "../styles/About.module.css";
import Image from "next/image";
import { MainLayout } from "../components/MainLayout";
import { Heading } from "../components/Heading";

import styles from "./About.module.scss";

const About = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <div className={style.aboutWraper}>
          <Heading level={1} className={styles["About__title"]}>
            A software developer with a unique business perspective
          </Heading>
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="row-span-1 my-10 md:my-0">
              <Image
                src="/img/francanete1.png"
                alt="fran canete"
                width={400}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="row-span-2 text-justify">
              <p>
                After 13 years of professional experience in finance and as a
                small business owner, I am a software developer with a unique
                holistic perspective that allows me to go beyond writing code.
              </p>
              <p>
                Understanding the real needs of the market, listening to the
                users pain point and developing solutions that truly solves
                their problems is my personal mission.
              </p>
              <p>
                My transition from business to software development has been an
                inspiring journey to fulfil this purpose of creating products
                that serve the market, not the other way around.
              </p>
            </div>
          </div>

          <h2>What I am passionate about</h2>
          <p className="text-justify">
            Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
            fusce ut. Et ultrices neque ornare aenean euismod elementum nisi
            quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. Mattis molestie a iaculis at erat pellentesque. Nullam eget
            felis eget nunc lobortis mattis. Pellentesque elit eget gravida cum
            sociis natoque penatibus. Pellentesque habitant morbi tristique
            senectus et netus. Ut ornare lectus sit amet est placerat in
            egestas.
          </p>

          <h2>My interests and hobbies</h2>

          <p className="text-justify">
            Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
            fusce ut. Et ultrices neque ornare aenean euismod elementum nisi
            quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. Mattis molestie a iaculis at erat pellentesque. Nullam eget
            felis eget nunc lobortis mattis. Pellentesque elit eget gravida cum
            sociis natoque penatibus. Pellentesque habitant morbi tristique
            senectus et netus. Ut ornare lectus sit amet est placerat in
            egestas.
          </p>
        </div>
      </MainLayout>
    </React.Fragment>
  );
};

export default About;
