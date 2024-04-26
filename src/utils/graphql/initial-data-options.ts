import { QueryKey, UndefinedInitialDataOptions } from "@tanstack/react-query";

export type InitialDataOptions<TQueryFnData> = Omit<
  UndefinedInitialDataOptions<TQueryFnData, Error, any, QueryKey>,
  'queryKey' | 'queryFn'
>;
