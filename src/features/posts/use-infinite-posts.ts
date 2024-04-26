import { PostsQuery } from '../../gql/graphql';
import { graphql } from '../../gql';
import client from '../../graphql-request/client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { InitialDataInfiniteOptions } from '../../utils/graphql/initial-data-infinite-options';

type UseInfinitePostsProps = {
  take?: number;
};

export const useInfinitePosts = (
  { take = 10 }: UseInfinitePostsProps,
  options?: InitialDataInfiniteOptions<PostsQuery>
) => {
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

  return useInfiniteQuery<PostsQuery>({
    queryKey: [(posts.definitions[0] as any).name.value, { input: { take } }],
    queryFn: () => {
      return client.request(posts, { input: { take } });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.posts.pageInfo.hasNextPage
        ? { after: lastPage.posts.pageInfo.endCursor }
        : undefined;
    },
    initialPageParam: { after: null },
    ...options,
  });
};
