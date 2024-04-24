import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  UndefinedInitialDataOptions,
  useQuery,
  type UseQueryResult,
} from '@tanstack/react-query';

export type UseQueryOptions = Omit<
  UndefinedInitialDataOptions<any, Error, any, any[]>,
  'queryKey' | 'queryFn'
>;

import client from '../graphql-request/client';

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  requestHeaders: Record<string, any> = {},
  options: UseQueryOptions = {},
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey }) => {
      return client.request({
        document,
        variables: queryKey[1] ? queryKey[1] : undefined,
        requestHeaders,
      });
    },
    ...options,
  });
}
