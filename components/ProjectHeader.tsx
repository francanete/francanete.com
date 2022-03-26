import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./PostTitle";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage?: string;
  date?: string;
  author?: Author;
  excerpt?: string;
};

export const ProjectHeader = ({
  title,
  coverImage,
  date,
  author,
  excerpt,
}: Props) => {
  return (
    <div className="max-w-2xl mx-auto py-24 flex flex-col">
      <PostTitle>{title}</PostTitle>
      <div className="mx-w-2xl mx-auto">
        <p className="leading-relaxed text-base mx-w-2xl mx-auto">{excerpt}</p>
        <div className="flex md:mt-4 mt-6">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
          <a className="text-indigo-500 inline-flex items-center ml-4">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    // <div className="max-w-2xl mx-auto">
    //   <PostTitle>{title}</PostTitle>
    //   <div className="hidden md:block md:mb-12">
    //     <Avatar name={author.name} picture={author.picture} />
    //   </div>
    //   {/* <div className="mb-8 md:mb-16 sm:mx-0">
    //     <CoverImage title={title} src={coverImage} />
    //   </div> */}
    //   <div className="max-w-2xl mx-auto">
    //     <div className="block md:hidden mb-6">
    //       <Avatar name={author.name} picture={author.picture} />
    //     </div>
    //     <div className="mb-6 text-lg">
    //       <DateFormatter dateString={date} />
    //     </div>
    //   </div>
    // </div>
  );
};
