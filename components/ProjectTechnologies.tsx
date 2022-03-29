import React from "react";

interface Props {
  technologies: string[] | undefined;
  titleDisabled?: boolean;
}

export const ProjectTechnologies = ({ technologies, titleDisabled }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {!titleDisabled && <p className="text-sm mr-3">Technologies:</p>}
      <div className=" flex flex-wrap mb-5 max-w-2xl items-center">
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
