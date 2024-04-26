import { UndefinedInitialDataInfiniteOptions, InfiniteData, QueryKey } from "@tanstack/react-query";

export type InitialDataInfiniteOptions<TQueryFnData> = Omit<
  UndefinedInitialDataInfiniteOptions<TQueryFnData, Error, InfiniteData<TQueryFnData>, QueryKey>,
  'queryKey' | 'queryFn' | 'initialData'
>;
