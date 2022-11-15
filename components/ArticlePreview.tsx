import Link from "next/link";
import ButtonToContent from "./ButtonToContent";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { PostTitle } from "./PostTitle";
import { Tags } from "./Tags";

interface IArticlePreview {
  title: string;
  excerpt: string;
  slug: string;
  className?: string;
  tags: string[];
  project: boolean;
}

export const ArticlePreview = ({
  title,
  excerpt,
  slug,
  className,
  tags,
  project,
}: IArticlePreview) => {
  const path = project ? "projects" : "posts";
  return (
    <div className={`${className} dark:text-gray-100`}>
      <Link
        as={`/${path}/${slug}`}
        href={`/${path}/[slug]`}
        passHref
        className="hover:underline"
      >
        <PostTitle
          size="2xl"
          className="mb-4 md:text-justify"
          weight="bold"
          level="h3"
        >
          {title}
        </PostTitle>
      </Link>
      <Tags tags={tags} />
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
