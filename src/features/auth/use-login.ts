import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { LoginMutation, LoginMutationVariables } from "../../gql/graphql";
import { graphql } from "../../gql";
import client from "../../graphql-request/client";

export const useLogin = (
  options?: UseMutationOptions<LoginMutation, Error, LoginMutationVariables>
) => {
  const login = graphql(`
    mutation Login($loginInput: LoginInput!) {
      login(loginInput: $loginInput) {
        token
      }
    }
  `);

  return useMutation({
    mutationFn: (variables: LoginMutationVariables) => {
      return client.request(login, variables);
    },
    ...options,
  });
};
