import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MDXProvider from './mdx-provider.tsx';
import { ChakraProvider } from './theme/chakra-provider.tsx';
import ReactQueryProvider from './react-query/react-query-provider.tsx';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme/index.ts';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ReactQueryProvider>
        <ChakraProvider>
          <MDXProvider>
            <App />
          </MDXProvider>
        </ChakraProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
