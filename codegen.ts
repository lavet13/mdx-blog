import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URI,
  documents: ['./src/**/*.graphql'],
  generates: {
    './src/generated-graphql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
};

export default config;
