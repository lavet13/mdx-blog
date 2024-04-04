import { graphql } from '../../gql';
import {
  useInfinitePaginatedGraphQL,
  usePaginatedGraphQL,
} from '../../hooks/use-paginated-graphql';

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
  query?: string;
};

export const usePosts = ({ take, after, before, query }: UsePostsProps) => {
  const input: Record<string, any> = {};
  console.log({ before, after });

  if(after !== null && after !== undefined) {
    input.after = after;
  }
  if(before !== null && before !== undefined) {
    input.before = before;
  }
  if(take !== undefined) {
    input.take = take;
  }
  if(query?.length !== 0) {
    input.query = query;
  }
  console.log({ input });

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

  return usePaginatedGraphQL(posts, { input });
};
