import { FC } from 'react';

import Button from '../components/regular-button';
import { Form, Formik, FormikHelpers } from 'formik';
import { ObjectSchema, string, object } from 'yup';
import { Persist } from '../components/persist-form';
import TextInput from '../components/text-input';
import useIsClient from '../utils/ssr/use-is-client';
import { Container } from '@chakra-ui/react';
import { useLogin } from '../features/auth';
import { LoginInput } from '../gql/graphql';
import { useMutation } from '@tanstack/react-query';

type InitialValues = {
  login: string;
  password: string;
};

type HandleSubmitProps = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<any>;

const validationSchema: ObjectSchema<InitialValues> = object().shape({
  login: string().required('Обязательно!'),
  password: string().required('Обязательно!'),
});

const initialValues: InitialValues = {
  login: '',
  password: '',
};

const LoginPage: FC = () => {
  const { isClient, key } = useIsClient();
  const { mutate: loginUser } = useLogin();

  const handleSubmit: HandleSubmitProps = async (values, actions) => {
    loginUser({ loginInput: values });

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <TextInput shouldFocus name='login' label='Логин' />
              <TextInput name='password' label='Пароль' />
              {isClient && (
                <Button
                  key={key}
                  variant={'black'}
                  isLoading={isSubmitting}
                  mt='4'
                  type='submit'
                >
                  Отправить
                </Button>
              )}

              <Persist name='login-form' />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default LoginPage;
