import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_URI, {
  mode: 'cors',
  credentials: 'include',
});

export default client;
