import Prism from "prismjs";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
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

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostBody;
