import { PostTitle } from "./PostTitle";

export const PostHeader = ({ title }: { title: string }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <PostTitle level="h1">{title}</PostTitle>
    </div>
  );
};
