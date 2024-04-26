import { graphql } from '../../gql';
import {
  UseMutationOptions,
  useGraphQLMutation,
} from '../../hooks/use-graphql-mutation';
import { UseQueryOptions, useGraphQL } from '../../hooks/use-graphql-query';
import {
  LoginMutation,
  LoginMutationVariables,
  LogoutMutation,
  LogoutMutationVariables,
} from '../../gql/graphql';

export const useGetMe = (options?: UseQueryOptions) => {
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

  return useGraphQL(me, undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options,
  });
};

export const useLogin = (
  options?: UseMutationOptions<
    LoginMutationVariables,
    unknown,
    LoginMutation
  >
) => {
  const login = graphql(`
    mutation Login($loginInput: LoginInput!) {
      login(loginInput: $loginInput) {
        token
      }
    }
  `);

  return useGraphQLMutation(login, undefined, {
    ...options,
  });
};

export const useLogout = (
  options?: UseMutationOptions<
    LogoutMutationVariables,
    unknown,
    LogoutMutation
  >
) => {
  const logoutMutation = graphql(`
    mutation Logout {
      logout
    }
  `);

  return useGraphQLMutation(logoutMutation, undefined, options);
};
