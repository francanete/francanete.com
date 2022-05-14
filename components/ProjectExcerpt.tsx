import React from "react";

interface Props {
  excerpt: string | undefined;
  weight?: "extralight" | "light" | "semibold" | "bold";
}

export const ProjectExcerpt = ({ excerpt, weight }: Props) => {
  return (
    <>
      <p
        className={`text-justify leading-relaxed text-base mx-w-2xl mx-auto font-${weight}`}
      >
        {excerpt}
      </p>
    </>
  );
};
