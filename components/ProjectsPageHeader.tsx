import React from "react";
import Image from "next/image";
import { PostTitle } from "./PostTitle";
import { Button } from "./Button";
import { GithubIcon } from "./icons/GithubIcon";

export const ProjectPageHeader = () => {
  return (
    <div className="container md:px-5 pb-12 md:py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <PostTitle weight="bold" size="4xl" level="h1">
          Check out my latest projects
        </PostTitle>
        <p className="lg:w-2/3 mx-auto mb-8">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
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
