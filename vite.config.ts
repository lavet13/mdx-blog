import { defineConfig, loadEnv } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import codegen from 'vite-plugin-graphql-codegen';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      { enforce: 'pre', ...mdx() },
      react(),
      codegen({
        matchOnSchemas: true,
        debug: true,
      }),
    ],
  };
});
