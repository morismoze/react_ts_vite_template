import { QueryClient, DefaultOptions } from 'react-query';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: true,
    retry: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
