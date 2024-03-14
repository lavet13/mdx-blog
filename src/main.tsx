import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import MDXProvider from './markdown/mdx-provider.tsx'
import { ChakraProvider } from './theme/chakra-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <MDXProvider>
          <App />
        </MDXProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
