import { graphql } from '../../gql';
import { UseQueryOptions, useGraphQL } from '../../hooks/use-graphql-query';

export const usePostById = (postId: string, options?: UseQueryOptions) => {
  const postById = graphql(`
    query PostById($postId: ID!) {
      postById(postId: $postId) {
        id
        title
        content
        categories {
          id
          name
        }
      }
    }
  `);

  return useGraphQL(postById, undefined, options, { postId } );
};
