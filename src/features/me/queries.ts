import { graphql } from '../../gql';
import { useGraphQL } from '../../hooks/use-graphql';

export const useGetMe = () => {
  const me = graphql(`
      query Me {
        me {
          id
          email
          name
          role
        }
      }
  `);

  return useGraphQL(me);
};
