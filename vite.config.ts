import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import codegen from 'vite-plugin-graphql-codegen';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    build: {
      minify: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
    plugins: [
      { enforce: 'pre', ...mdx() },
      react(),
      codegen({
        matchOnSchemas: true,
        debug: true,
        throwOnBuild: false,
      }),
      splitVendorChunkPlugin(),
    ],
  };
});
