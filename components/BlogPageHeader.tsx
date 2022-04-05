import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllProjects } from "../lib/apiProjects";
import Post from "../types/post";
import { Button } from "./Button";
import { GithubIcon } from "./icons/GithubIcon";
import { PostTitle } from "./PostTitle";
import { ProjectTechnologies } from "./ProjectTechnologies";

type Props = {
  projects: Post[];
};

export default function BlogPageHeader({ projects }: Props) {
  return (
    <div className="container lg:h-screen mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <PostTitle weight="bold" size="4xl" level="h1" marginBottom="8">
          Check out my latest articles
        </PostTitle>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center">
          <div className="mb-6">
            <input
              placeholder="Search..."
              type="text"
              id="large-input"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
        </div>
      </div>
      <div className=" w-full lg:max-w-lg lg:w-full mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          src="../images/laptop2.png"
          alt="laptop"
        />
      </div>
    </div>
  );
}
