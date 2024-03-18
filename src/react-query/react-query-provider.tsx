import { FC, PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from './query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

