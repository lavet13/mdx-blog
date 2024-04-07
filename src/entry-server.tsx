import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import MDXProvider from './mdx-provider.tsx';
import { ChakraProvider } from './theme/chakra-provider.tsx';
import ReactQueryProvider from './react-query/react-query-provider.tsx';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme/index.ts';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <StaticRouter location={url}>
        <ReactQueryProvider>
          <ChakraProvider>
            <MDXProvider>
              <App />
            </MDXProvider>
          </ChakraProvider>
        </ReactQueryProvider>
      </StaticRouter>
    </React.StrictMode>
  );

  const head = `
`;

  return { html, head };
}
