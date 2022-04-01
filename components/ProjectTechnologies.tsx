import React from "react";
import { BoxModelProps } from "../types/BoxModelProps";

interface Props extends BoxModelProps {
  technologies: string[] | undefined;
  titleDisabled?: boolean;
}

export const ProjectTechnologies = ({
  technologies,
  titleDisabled,
  marginTop,
  marginBottom,
}: Props) => {
  return (
    <div
      className={`  flex flex-col items-start mt-${marginTop} mb-${marginBottom}`}
    >
      {!titleDisabled && <p className="text-sm mr-3">Technologies:</p>}
      <div className="flex flex-wrap max-w-2xl items-center">
        {technologies?.map((tech) => (
          <p
            key={tech}
            className="bg-blue-100 text-secondary text-xs font-semibold my-2 mr-2 px-2.5 py-0.5 rounded "
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};
