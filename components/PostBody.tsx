import { MDXRemote } from "next-mdx-remote";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { MDXPost } from "../pages/posts/[slug]";
// import CodeBlock from "./CodeBlock";
import markdownStyles from "./markdown-styles.module.css";
import { Button } from "./Button";
import { ProjectHeader } from "./ProjectHeader";

type Props = {
  content: MDXPost;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className=" post-body prose-slate lg:prose-xl dark:prose-invert max-w-2xl mx-auto ">
      {/* <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
      {/* <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
      {/* <div className={markdownStyles["markdown"]}></div> */}

      {/* <ReactMarkdown>{content}</ReactMarkdown> */}
      <MDXRemote
        {...content.source}
        // components={{ Image, Button, ProjectHeader }}
      />
    </div>
  );
};

export default PostBody;
