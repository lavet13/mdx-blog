import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  InfiniteData,
  useInfiniteQuery,
  DefinedInitialDataInfiniteOptions,
} from '@tanstack/react-query';

type InfiniteGraphqlOptions = Omit<
  DefinedInitialDataInfiniteOptions<any, Error, any, any[], {}>,
  'queryKey' | 'queryFn' | 'initialData'
>;

import client from '../graphql-request/client';

export function useInfiniteGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  options: InfiniteGraphqlOptions,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return useInfiniteQuery<
    unknown,
    Error,
    InfiniteData<TResult, unknown>,
    any[],
    {}
  >({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey, pageParam }) => {
      // console.log({ pageParam });
      const variables = queryKey[1]
        ? { input: { ...queryKey[1].input, ...pageParam } }
        : undefined;

      return client.request(document, variables);
    },
    ...options,
  });
}
