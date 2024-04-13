import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { useGetMe } from '../features/me/queries';

type AuthContextDefaultValue = {};

const AuthContext = createContext<AuthContextDefaultValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error(`useAuthContext must be used within a AuthContextProvider`);
  }

  return context;
};

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetMe();
  console.log({ data });

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
