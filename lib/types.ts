export interface Post {
  content: string;
  meta: ArticleMeta;
}

export interface ArticleMeta {
  type: "post" | "project";
  excerpt: string;
  url: string;
  slug: string;
  title: string;
  category: string[];
  date: string;
  featured: boolean;
  technologies: string[];
  article: boolean;
  repositoryName: string;
}
