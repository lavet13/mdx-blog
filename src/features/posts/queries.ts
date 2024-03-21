import { useState } from 'react';
import { graphql } from '../../gql';
import { usePaginatedGraphQL } from '../../hooks/use-paginated-graphql';

type UsePostsProps = {
  take?: number;
  initialCursor: number | null;
};

export const usePosts = ({ take, initialCursor }: UsePostsProps) => {
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
        }
      }
    }
  `);

  const [cursor, setCursor] = useState(initialCursor);

  if (cursor !== initialCursor) {
    setCursor(initialCursor);
  }

  return usePaginatedGraphQL(posts, { input: { take, cursor } });
};
