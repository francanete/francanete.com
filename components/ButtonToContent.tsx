import Link from "next/link";
import React from "react";

type ButtonToContentProps = {
  type?: "button" | "submit";
  title: string;
  slug: string;
};

export default function Button({ type, title, slug }: ButtonToContentProps) {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
      <div className="group cursor-pointer mt-12 flex items-center gap-5 ">
        <span className="text-lg hover:underline">{title}</span>
        <button
          type={type}
          className="group-hover:animate-pulse  border border-dark group-hover:bg-dark group-hover:text-white focus:ring-4 group-focus:ring-slate-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-white dark:text-white dark:group-hover:text-dark dark:group-hover:bg-slate-100 "
        >
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </Link>
  );
}
