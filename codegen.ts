import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URI,
  documents: ['./src/**/*.{tsx,ts}', '!src/gql/**/*'],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
