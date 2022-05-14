import Image from "next/image";
import Link from "next/link";
import React from "react";
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
    <div className="container md:px-5 pb-12 md:py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <PostTitle weight="bold" size="4xl" level="h1">
          Check out my latest articles
        </PostTitle>
        <p className="lg:w-2/3 mx-auto">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
        </p>
      </div>
    </div>
  );
}
