export type TPullRequest = {
  edges: {
    node: {
      id: string;
      state: string;
      createdAt: string;
      title: string;
      url: string;
    };
  };
};

export interface IRepository {
  id: string;
  name: string;
  homepageUrl: string;
  url: string;
  pullRequests: TPullRequest;
}
