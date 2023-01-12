import { ParsedUrlQuery } from "querystring";
import { getArticlesFromSlug } from "../lib/apiArticles";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

export const getArticles = async (params: ParsedUrlQuery) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getArticlesFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { meta, mdxSource };
};
