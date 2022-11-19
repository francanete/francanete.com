import React from "react";
import { Button } from "./Button";
import { GithubIcon } from "./icons/GithubIcon";
import { Heading } from "./Heading";

export const ProjectPageHeader = () => {
  return (
    <div className="container md:px-5 pb-12 md:py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <Heading level={1} bold size="large">
          Check out my latest projects
        </Heading>
        <p className="lg:w-2/3 mx-auto mb-8">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
        </p>
        <div className="flex justify-center">
          <Button
            title="Github"
            iconComponent={<GithubIcon size={16} />}
            className="px-7 py-2"
            href="https://github.com/francanete"
          />
        </div>
      </div>
    </div>
  );
};
