export type PullRequest = {
  id: string;
  title: string;
  state: string;
  createdAt: string;
  url: string;
};

export type TPullRequest = {
  node: PullRequest;
  edges: {
    map(
      arg0: (pullRequest: TPullRequest) => {
        id: string;
        title: string;
        state: string;
        createdAt: string;
        url: string;
      }
    ): {
      id: string;
      title: string;
      state: string;
      createdAt: string;
      url: string;
    }[];
  };
};

export interface IRepository {
  id: string;
  name: string;
  homepageUrl: string;
  url: string;
  pullRequests: TPullRequest;
}
