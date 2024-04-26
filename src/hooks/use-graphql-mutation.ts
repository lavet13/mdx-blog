import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  useMutation,
  type UseMutationOptions as ReactQueryUseMutationOptions,
} from '@tanstack/react-query';

import client from '../graphql-request/client';

export type UseMutationOptions<TVariables, TContext, TResult> = Omit<
  ReactQueryUseMutationOptions<TResult, unknown, TVariables, TContext>,
  'mutationFn'
>;

export function useGraphQLMutation<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  requestHeaders?: Record<string, any>,
  options?: UseMutationOptions<TVariables, unknown, TResult>
) {
  return useMutation<TResult, unknown, TVariables, unknown>({
    mutationFn: async (variables: TVariables) => {
      return client.request({
        document,
        variables: variables || undefined,
        requestHeaders,
      });
    },
    ...options,
  });
}
