import { GithubIcon } from "./icons/GithubIcon";
import { WebsiteIcon } from "./icons/WebsiteIcon";
import { Button } from "./Button";
import { FlexboxContainer } from "./FlexboxContainer";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";

type Props = {
  title: string;
  excerpt?: string;
  tags: string[];
};

export const ProjectHeader = ({ title, excerpt, tags }: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-10 md:my-16 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700">
      <Heading level={1} bold size="large">
        {title}
      </Heading>
      <Tags tags={tags} />
      <div className="mx-w-2xl mx-auto">
        <ProjectExcerpt excerpt={excerpt} weight="extralight" />
        <FlexboxContainer display="flex" gap="gap-3" tailwind="mt-5">
          <Button
            href="google.com"
            title="Source Code"
            size="xs"
            iconGap="gap-2"
            className=""
            iconComponent={<GithubIcon size={15} />}
          />
          <Button
            href="google.com"
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
