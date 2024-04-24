import { FC, useEffect, useRef } from 'react';
import NavLink from './__nav-link';
import { useGetMe, useLogout } from '../../features/auth';
import queryClient from '../../react-query/query-client';
import { ToastId, useToast } from '@chakra-ui/react';
import { isGraphQLRequestError } from '../../utils/graphql/is-graphql-request-error';

const Navigation: FC = () => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);
  const {
    data: userInfo,
    error,
    isError,
    isPending,
    isRefetching,
  } = useGetMe({ retry: false });

  useEffect(() => {
    if (isError && isGraphQLRequestError(error)) {
      toast({
        title: 'Account',
        description: error.response.errors[0].message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isError]);

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      queryClient.setQueryData(['Me', null], null);
      toast({
        title: 'Logout',
        description: 'Успешно вышли из аккаунта! ᕦ(ò_óˇ)ᕤ',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    },
    onError: error => {
      if (isGraphQLRequestError(error)) {
        if (toastIdRef.current) {
          toast.close(toastIdRef.current);
        }

        toastIdRef.current = toast({
          title: 'Logout',
          description: `${error.response.errors[0].message}`,
          status: 'error',
          isClosable: true,
        });
      }
    },
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavLink to='/'>Home</NavLink>
        {isRefetching ? (
          <span>Refetching...</span>
        ) : isPending ? (
          <span>Loading...</span>
        ) : !userInfo?.me ? (
          <NavLink to='/login'>Log In</NavLink>
        ) : (
          <NavLink
            as='button'
            onClick={() => {
              logout(undefined);
            }}
          >
            Logout
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
