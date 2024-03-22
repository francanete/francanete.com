export type PullRequest = {
  id: string;
  title: string;
  state: string;
  createdAt: string;
  url: string;
  commits: {
    totalCount: number;
  };
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
        commitsTotalCount: number;
      }
    ): {
      id: string;
      title: string;
      state: string;
      createdAt: string;
      url: string;
      commitsTotalCount: number;
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
