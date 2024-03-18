import { graphql } from '../../gql';
import { useGraphQL } from '../../hooks/use-graphql';

export const usePosts = () => {
  const posts = graphql(`
    query Posts {
      posts {
        id
        title
        content
      }
    }
  `);

  return useGraphQL(posts);
};
