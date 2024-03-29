import { graphql } from '../../gql';
import { useInfinitePaginatedGraphQL, usePaginatedGraphQL } from '../../hooks/use-paginated-graphql';

type UseInfinitePostsProps = {
  take?: number;
};

export const useInfinitePosts = ({ take = 10 }: UseInfinitePostsProps) => {
  const posts = graphql(`
    query Posts($input: PostsInput!) {
      posts(input: $input) {
        edges {
          id
          title
          preview(size: MEDIUM)
        }
        pageInfo {
          endCursor
          hasNextPage

          startCursor
          hasPreviousPage
        }
      }
    }
  `);

  return useInfinitePaginatedGraphQL(posts, { input: { take } });
};

type UsePostsProps = {
  take?: number;
  before?: number | null;
  after?: number | null;
};

export const usePosts = ({ take, after, before }: UsePostsProps) => {
  const posts = graphql(`
    query Posts($input: PostsInput!) {
      posts(input: $input) {
        edges {
          id
          title
          preview(size: MEDIUM)
        }
        pageInfo {
          endCursor
          hasNextPage

          startCursor
          hasPreviousPage
        }
      }
    }
  `);

  return usePaginatedGraphQL(posts, { input: { take, after, before } });
};
