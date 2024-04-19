import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  UndefinedInitialDataOptions,
  useQuery,
  type UseQueryResult,
} from '@tanstack/react-query';

type UseGraphqlOptions = Omit<
  UndefinedInitialDataOptions<any, Error, any, any[]>,
  'queryKey' | 'queryFn'
>;

// const result = useGraphQL(myDocument, {/* options here */}, myVariables);

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variablesAndRequestHeaders: Record<string, any> = {},
  options: UseGraphqlOptions = {},
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey }) => {
      return request(
        import.meta.env.VITE_GRAPHQL_URI,
        document,
        queryKey[1] ? queryKey[1] : undefined,
        { ...variablesAndRequestHeaders, credentials: 'include' }
      );
    },
    ...options,
  });
}
