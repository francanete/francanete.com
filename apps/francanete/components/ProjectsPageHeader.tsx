import { PageHeader } from "./PageHeader";
import { BsGithub } from "react-icons/bs";

export const ProjectPageHeader = () => {
  return (
    <PageHeader
      title="Check out my latest projects"
      description="I am a software engineer and I love to build things. Here are some of my
        latest projects. If you want to see more, check out my Github profile."
      showActionButton
      buttonText="Github"
      buttonIcon={<BsGithub size={16} />}
      buttonHref="https://github.com/francanete"
    />
  );
};
