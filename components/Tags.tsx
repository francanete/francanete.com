import Link from "next/link";
import React from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props extends BoxModelProps {
  tags: string[] | undefined;
  titleDisabled?: boolean;
  isClickable?: boolean;
}

export const Tags = ({
  tags,
  titleDisabled,
  marginTop,
  marginBottom,
  isClickable = true,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-start mt-${marginTop} mb-${marginBottom}`}
    >
      {!titleDisabled && <p className="text-sm mr-3">Technologies:</p>}
      <div className="flex flex-wrap max-w-2xl items-center px-1">
        {tags?.map((tag: string) =>
          isClickable ? (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-blue-100 text-secondary hover:ring-2  hover:ring-slate-700/20 dark:hover:ring-2  dark:hover:ring-gray-300/60 text-xs font-semibold my-2 mr-2 px-2.5 py-0.5 rounded "
            >
              {tag}
            </Link>
          ) : (
            <span
              key={tag}
              className="bg-blue-100 text-secondary hover:ring-2  hover:ring-slate-700/20 dark:hover:ring-2  dark:hover:ring-gray-300/60 text-xs font-semibold my-2 mr-2 px-2.5 py-0.5 rounded "
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );
};
