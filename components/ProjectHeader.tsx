import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./PostTitle";
import Author from "../types/author";
import { GithubIcon } from "./icons/GithubIcon";
import { WebsiteIcon } from "./icons/WebsiteIcon";
import { Button } from "./Button";
import { ProjectTechnologies } from "./ProjectTechnologies";

type Props = {
  title: string;
  coverImage?: string;
  date?: string;
  author?: Author;
  excerpt?: string;
  technologies?: string[];
};

export const ProjectHeader = ({
  title,
  coverImage,
  date,
  author,
  excerpt,
  technologies,
}: Props) => {
  return (
    <div className="max-w-2xl mx-auto py-10 md:py-24 flex flex-col">
      <PostTitle weight="bold" marginBottom="6" size="4xl" level="h1">
        {title}
      </PostTitle>
      <ProjectTechnologies technologies={technologies} />
      <div className="mx-w-2xl mx-auto">
        <p className="leading-relaxed text-base mx-w-2xl mx-auto font-extralight">
          {excerpt}
        </p>
        <div className="flex gap-2 mt-6">
          <Button
            title="Source Code"
            iconComponent={<GithubIcon size={18} />}
          />
          <Button title="Live Demo" iconComponent={<WebsiteIcon size={18} />} />
        </div>
      </div>
    </div>
  );
};
