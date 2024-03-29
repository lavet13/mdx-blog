import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

export function usePaginatedGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
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

export function useInfinitePaginatedGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return useInfiniteQuery({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey, pageParam }) => {
      const variables = queryKey[1]
        ? { input: { ...queryKey[1].input, after: pageParam } }
        : undefined;
      return request(import.meta.env.VITE_GRAPHQL_URI, document, variables);
    },
    getNextPageParam: (lastPage, pages) => {
      return (lastPage as any).posts.pageInfo.hasNextPage
        ? (lastPage as any).posts.pageInfo.endCursor
        : undefined;
    },
    initialPageParam: null,
    placeholderData: keepPreviousData,
  });
}
