import React from "react";
import { getAllProjects } from "../lib/apiProjects";
import Post from "../types/post";

type Props = {
  projects: Post[];
};

export default function FeaturedProjects({ projects }: Props) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {projects.map((project) => (
              <div className="  py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="flex-grow pl-6">
                    <a
                      href="#"
                      className=" ring-[#00425F]/30 hover:ring-offset-4 hover:ring-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {project.excerpt}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
