import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MDXProvider from './mdx-provider.tsx';
import { ChakraProvider } from './theme/chakra-provider.tsx';
import ReactQueryProvider from './react-query/react-query-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
