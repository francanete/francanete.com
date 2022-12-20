export interface Post {
  content: string;
  meta: ArticleMeta;
}

export interface ArticleMeta {
  type: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  featured: boolean;
  technologies: string[];
  article: boolean;
  repositoryName: string;
}
