import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  InfiniteData,
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { PostsQuery } from '../gql/graphql';

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

// this should be refactored, this is dumb and unfunny 😂😂😂😂
export function useInfinitePaginatedGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return useInfiniteQuery<
    unknown,
    Error,
    InfiniteData<PostsQuery, unknown>,
    any[],
    { after: null | number }
  >({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey, pageParam }) => {
      const variables = queryKey[1]
        ? { input: { ...queryKey[1].input, ...pageParam } }
        : undefined;
      return request(import.meta.env.VITE_GRAPHQL_URI, document, variables);
    },
    getNextPageParam: lastPage => {
      return (lastPage as any).posts.pageInfo.hasNextPage
        ? { after: (lastPage as any).posts.pageInfo.endCursor }
        : undefined;
    },
    initialPageParam: { after: null },
  });
}
