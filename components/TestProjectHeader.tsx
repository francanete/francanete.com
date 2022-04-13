import React from "react";
import Image from "next/image";
import { PostTitle } from "./PostTitle";
import { Button } from "./Button";
import { GithubIcon } from "./icons/GithubIcon";

export const TestProjectHeader = () => {
  return (
    <div className="container mx-auto flex mb-24 py-2 lg:py-24 md:flex-row flex-col items-center">
      <div className=" w-full lg:max-w-lg lg:w-full mb-10 md:mb-0">
        <Image
          src="/francanete.png"
          alt="fran canete"
          width={350}
          height={350}
          // className={style.image}
        />
        <p>TEST</p>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <PostTitle weight="bold" size="4xl" level="h1" marginBottom="8">
          Check out my latest projects
        </PostTitle>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center">
          <Button
            title="Github"
            iconGap="gap-3"
            size="sm"
            iconComponent={<GithubIcon size={16} />}
            className="px-7 py-2"
            href="https://github.com/francanete"
          />
        </div>
      </div>
    </div>
  );
};
