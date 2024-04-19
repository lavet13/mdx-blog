import { graphql } from '../../gql';
import { useGraphQLMutation } from '../../hooks/use-graphql-mutation';
import { useGraphQL } from '../../hooks/use-graphql-query';

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

export const useLogin = () => {
  const login = graphql(`
    mutation Login($loginInput: LoginInput!) {
      login (loginInput: $loginInput) {
        token
      }
    }
  `);

  return useGraphQLMutation(login, {}, {});
};
