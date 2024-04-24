import { GraphQLError } from 'graphql';

// only if we get error
interface GraphQLRequestError {
  stack?: string;
  message?: string;
  response: {
    errors: GraphQLError[];
    data: null;
    status: number;
    headers: {
      map: Record<string, string>;
    };
  };
  request: {
    query: string;
    variables: Record<string, any>;
  };
}

export function isGraphQLRequestError(error: unknown): error is GraphQLRequestError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    'request' in error
  );
}

