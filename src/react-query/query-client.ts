import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { persistQueryClient, removeOldestQuery } from '@tanstack/react-query-persist-client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15,
      gcTime: 1000 * 60 * 60 * 24,
      retry: 2,
    }
  },
});

// const persister = createSyncStoragePersister({
//   storage: window !== undefined ? (window as Window).localStorage : undefined,
//   retry: removeOldestQuery,
// });
//
// persistQueryClient({
//   queryClient,
//   persister,
//   maxAge: 1000 * 60 * 60 * 24,
// });

export default queryClient;
