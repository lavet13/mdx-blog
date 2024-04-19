import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import MDXProvider from './mdx-provider.tsx';
import { ChakraProvider } from './theme/chakra-provider.tsx';
import ReactQueryProvider from './react-query/react-query-provider.tsx';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme/index.ts';
import { AuthContextProvider } from './contexts/auth-provider.tsx';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <StaticRouter location={url}>
        <ReactQueryProvider>
          <AuthContextProvider>
            <ChakraProvider>
              <MDXProvider>
                <App />
              </MDXProvider>
            </ChakraProvider>
          </AuthContextProvider>
        </ReactQueryProvider>
      </StaticRouter>
    </React.StrictMode>
  );
}
