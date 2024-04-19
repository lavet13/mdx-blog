import request, { Variables } from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  useMutation,
  type UseMutationOptions as ReactQueryUseMutationOptions,
} from '@tanstack/react-query';

type UseMutationOptions<TVariables, TContext, TResult> = Omit<
  ReactQueryUseMutationOptions<TResult, unknown, TVariables, TContext>,
  'mutationFn'
>;

export function useGraphQLMutation<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  requestHeaders: Record<string, any> = {},
  options: UseMutationOptions<TVariables, unknown, TResult> = {}
) {
  return useMutation<TResult, unknown, TVariables, unknown>({
    mutationFn: async (variables?: TVariables) => {
      return request({
        url: import.meta.env.VITE_GRAPHQL_URI,
        document,
        variables: variables as Variables | undefined,
        requestHeaders: {
          ...requestHeaders,
          credentials: `include`,
          mode: `cors`,
        },
      });
    },
    ...options,
  });
}
