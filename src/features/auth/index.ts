import { useNavigate } from 'react-router-dom';
import { graphql } from '../../gql';
import { useGraphQLMutation } from '../../hooks/use-graphql-mutation';
import { useGraphQL } from '../../hooks/use-graphql-query';

export const useGetMe = () => {
  const me = graphql(`
    query Me {
      me {
        id
        email
        name
        role
      }
    }
  `);

  return useGraphQL(me, undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = graphql(`
    mutation Login($loginInput: LoginInput!) {
      login(loginInput: $loginInput) {
        token
      }
    }
  `);

  return useGraphQLMutation(login, undefined, {
    onSuccess: () => {
      navigate('/');
    },
  });
};
