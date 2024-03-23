import { getArticles } from "./getArticles";

jest.mock("@/lib/apiArticles", () => ({
  getArticlesFromSlug: jest.fn().mockReturnValue({
    content: "mocked content",
    meta: { title: "Mocked Title", date: "Mocked Date" },
  }),
}));

jest.mock("next-mdx-remote/serialize", () => ({
  serialize: jest.fn().mockResolvedValue("mocked mdxSource"),
}));

jest.mock("rehype-slug", () => jest.fn());

jest.mock("rehype-autolink-headings", () => jest.fn());

jest.mock("rehype-highlight", () => jest.fn());

describe("getArticles", () => {
  it("should return the correct meta and mdxSource", async () => {
    const params = { slug: "example-slug" };
    const expectedMeta = { title: "Mocked Title", date: "Mocked Date" };
    const expectedMdxSource = "mocked mdxSource";

    const result = await getArticles(params);

    expect(result.meta).toEqual(expectedMeta);
    expect(result.mdxSource).toEqual(expectedMdxSource);
  });
});
