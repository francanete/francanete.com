import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./PostTitle";
import Author from "../types/author";
import { GithubIcon } from "./icons/GithubIcon";
import { WebsiteIcon } from "./icons/WebsiteIcon";
import { Button } from "./Button";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { FlexboxContainer } from "./FlexboxContainer";
import { ProjectExcerpt } from "./ProjectExcerpt";

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
    // class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    <div className="max-w-4xl mx-auto p-10 md:my-20 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700">
      <PostTitle weight="bold" className="mb-4" size="4xl" level="h1">
        {title}
      </PostTitle>
      <ProjectTechnologies
        marginTop="4"
        marginBottom="3"
        technologies={technologies}
      />
      <div className="mx-w-2xl mx-auto">
        <ProjectExcerpt excerpt={excerpt} weight="extralight" />
        <FlexboxContainer display="flex" gap="gap-3" tailwind="mt-5">
          <Button
            title="Source Code"
            size="xs"
            iconGap="gap-2"
            iconComponent={<GithubIcon size={15} />}
          />
          <Button
            title="Live Demo"
            size="xs"
            iconGap="gap-2"
            iconComponent={<WebsiteIcon size={15} />}
          />
        </FlexboxContainer>
      </div>
    </div>
  );
};
