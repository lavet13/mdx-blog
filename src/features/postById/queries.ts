import { graphql } from '../../gql';
import { useGraphQL } from '../../hooks/use-graphql';

export const usePostById = (postId: string) => {
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

  return useGraphQL(postById, { postId } );
};
