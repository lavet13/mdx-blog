import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import codegen from 'vite-plugin-graphql-codegen';

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
      rollupOptions: {
        output: {
          manualChunks: manualChunksFn,
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

function manualChunksFn(id: string) {
  console.log({ chunkId: id });

  if(id.includes('graphql')) {
    return 'graphql';
  }
  if(id.includes('node_modules')) {
    return 'vendor';
  }
}
