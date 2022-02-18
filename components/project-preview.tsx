import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="dark:text-gray-100">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      <div className="text-lg mb-4">
        {/* <DateFormatter dateString={date} /> */}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <div className="group cursor-pointer mt-12 flex items-center gap-5 ">
          <span className="text-lg hover:underline">Read more</span>
          <div>
            <button
              type="button"
              className="group-hover:animate-pulse  border border-dark group-hover:bg-dark group-hover:text-white focus:ring-4 group-focus:ring-slate-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-white dark:text-white dark:group-hover:text-dark dark:group-hover:bg-slate-100 "
            >
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreview;
