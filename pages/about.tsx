import React from "react";
import Header from "../components/header";
import style from "../styles/About.module.css";
import Layout from "../components/layout";
import Image from "next/image";
import { PostTitle } from "../components/PostTitle";

const About = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className={style.aboutWraper}>
          <PostTitle
            level="h1"
            className="text-3xl md:text-4xl text-center md:text-left py-3 md:my-10"
          >
            A software developer with a unique business perspective
          </PostTitle>
          {/* <h1 className="py-1">
            A software developer with a unique business perspective
          </h1> */}
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="row-span-1 my-10 md:my-0">
              <Image
                src="/img/francanete1.png"
                alt="fran canete"
                width={400}
                height={400}
                className="rounded-lg"
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
      </Layout>
    </React.Fragment>
  );
};

export default About;
