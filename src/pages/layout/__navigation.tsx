import { FC } from 'react';
import NavLink from './__nav-link';
import { useGetMe } from '../../features/auth';
import { graphql } from '../../gql';
import { useGraphQLMutation } from '../../hooks/use-graphql-mutation';
import queryClient from '../../react-query/query-client';

const Navigation: FC = () => {
  const { data: me, isPending, isRefetching } = useGetMe();

  const logoutMutation = graphql(`
    mutation Logout {
      logout
    }
  `);

  const { mutate: logout } = useGraphQLMutation(
    logoutMutation,
    undefined,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['Me', null], null);
      },
    }
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <NavLink to='/'>Home</NavLink>
        {isRefetching ? <span>Refetching...</span> : isPending ? (
          <span>Loading...</span>
        ) : !me?.me ? (
          <NavLink to='/login'>Log In</NavLink>
        ) : (
          <NavLink as='button' onClick={() => {
            logout();
          }}>
            Logout
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
