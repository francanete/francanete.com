export interface Post {
  content: string;
  meta: ProjectMeta;
}

export interface ProjectMeta {
  type: string;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  featured: boolean;
  technologies: string[];
  article: boolean;
}
