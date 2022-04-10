import * as React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const bioText = (
    <>
      <p className="text-lg md:text-2xl ">
        <strong>Frontend Software Engineer</strong> based in Manchester, UK.
      </p>
      <p className="text-lg md:text-2xl">
        I'm passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </p>
      <p className="text-lg md:text-2xl">
        Currently working with React, React Native, Next.js, Typescript.
      </p>
    </>
  );
  return (
    <div className="flex columns -mt-20 h-screen md:-mt-10  justify-center items-center ">
      <div className="max-w-screen-sm">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold text-main-dark  dark:text-zinc-200  -mt-35 ">
          Fran Canete
        </h2>
        <div className="text-center ">{bioText}</div>
        <SocialIcons width={25} height={25} marginTop={10} />
      </div>
    </div>
  );
}
