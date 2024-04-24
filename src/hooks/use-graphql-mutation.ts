import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  useMutation,
  type UseMutationOptions as ReactQueryUseMutationOptions,
} from '@tanstack/react-query';

import client from '../graphql-request/client';
import { Exact } from '../gql/graphql';

export type Variables<TVariables> = TVariables extends Exact<{ [key: string]: never }>
  ? any
  : TVariables;

export type UseMutationOptions<TVariables, TContext, TResult> = Omit<
  ReactQueryUseMutationOptions<TResult, unknown, TVariables, TContext>,
  'mutationFn'
>;

export function useGraphQLMutation<TResult, TVariables>(
  document: TypedDocumentNode<TResult, Variables<TVariables>>,
  requestHeaders?: Record<string, any>,
  options?: UseMutationOptions<Variables<TVariables>, unknown, TResult>
) {
  return useMutation<TResult, unknown, Variables<TVariables>, unknown>({
    mutationFn: async (variables?: Variables<TVariables>) => {
      return client.request({
        document,
        variables: variables || undefined,
        requestHeaders,
      });
    },
    ...options,
  });
}
