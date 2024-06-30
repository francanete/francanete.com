import { IRepository } from '@/types/github';
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GIT_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getRepositories = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "francanete") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  pullRequests(first: 10) {
                    edges {
                      node {
                        id
                        state
                        createdAt
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  return user.pinnedItems.edges.map((edge: any) => edge.node);
};

export const getRepositoryByname = async (name: string) => {
  const { data } = await client.query({
    query: gql`
      {
        repository(owner: "francanete", name: "${name}") {
          id
          name
          homepageUrl
          url
          pullRequests(first: 9, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                id
                state
                createdAt
                title
                url
                commits {
                  totalCount
                }
              }
            }
          }
        }
      }
    `,
  });

  const { repository } = data;
  return repository;
};
