import React from "react";

interface Props {
  excerpt: string;
  font?: "extralight" | "light" | "semibold" | "bold";
}

export const ProjectExcerpt = ({ excerpt, font }: Props) => {
  return (
    <>
      <p className={`leading-relaxed text-base mx-w-2xl mx-auto font-${font}`}>
        {excerpt}
      </p>
    </>
  );
};
