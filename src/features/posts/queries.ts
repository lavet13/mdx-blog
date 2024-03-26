import { useState } from 'react';
import { graphql } from '../../gql';
import { usePaginatedGraphQL } from '../../hooks/use-paginated-graphql';

type UsePostsProps = {
  take?: number;
  initialBefore?: number | null;
  initialAfter?: number | null;
};

export const usePosts = ({ take, initialAfter, initialBefore }: UsePostsProps) => {
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

  const [after, setAfter] = useState(initialAfter);
  const [before, setBefore] = useState(initialBefore);
  if (after !== initialAfter) {
    setAfter(initialAfter);
  }
  if (before !== initialBefore) {
    setBefore(initialBefore);
  }

  return usePaginatedGraphQL(posts, { input: { take, after, before } });
};
