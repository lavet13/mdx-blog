import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { keepPreviousData, useQuery, type UseQueryResult } from '@tanstack/react-query';

export function usePaginatedGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey }) => {
      return request(
        import.meta.env.VITE_GRAPHQL_URI,
        document,
        queryKey[1] ? queryKey[1] : undefined
      );
    },
    placeholderData: keepPreviousData,
  });
}
