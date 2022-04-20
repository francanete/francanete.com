import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import ButtonToContent from "./ButtonToContent";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { PostTitle } from "./PostTitle";
import { Tags } from "./Tags";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  technologies: string[];
  className?: string;
  tags: string[];
  project: boolean;
};

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  technologies,
  className,
  tags,
  project,
}: Props) => {
  const path = project ? "projects" : "posts";
  return (
    <div className={`${className} dark:text-gray-100`}>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}

      <Link as={`/${path}/${slug}`} href={`/${path}/[slug]`} passHref>
        <a className="hover:underline">
          <PostTitle size="3xl" className="mb-4" weight="bold" level="h3">
            {title}
          </PostTitle>
        </a>
      </Link>
      {/* <ProjectTechnologies
        marginTop="6"
        marginBottom="3"
        titleDisabled
        technologies={technologies}
      /> */}
      <Tags tags={tags} />
      {/* <p>
        {tags.map((tag: string) => (
          <Link key={tag} href={`/tags/${tag}`}>
            {tag}
          </Link>
        ))}
      </p> */}
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      {/* <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div> */}
      <ProjectExcerpt excerpt={excerpt} weight="light" />
      <ButtonToContent
        marginTop="4"
        slug={slug}
        type="button"
        title="Read More"
        contentPath={project}
      />
    </div>
  );
};

export default ProjectPreview;
