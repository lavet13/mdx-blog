import { FC, useRef } from 'react';

import Button from '../components/regular-button';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { ObjectSchema, string, object } from 'yup';
import { Persist } from '../components/persist-form';
import TextInput from '../components/text-input';
import useIsClient from '../utils/ssr/use-is-client';
import { Container, ToastId, useToast } from '@chakra-ui/react';
import { useGetMe, useLogin } from '../features/auth';
import { useNavigate } from 'react-router-dom';
import { isGraphQLRequestError } from '../utils/graphql/is-graphql-request-error';
import { isFormRefNotNull } from '../utils/helpers/is-form-ref-not-null';

type InitialValues = {
  login: string;
  password: string;
};

type HandleSubmitProps = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<any>;

const LoginPage: FC = () => {
  const validationSchema: ObjectSchema<InitialValues> = object().shape({
    login: string().required('Обязательно!'),
    password: string().required('Обязательно!'),
  });

  const initialValues: InitialValues = {
    login: '',
    password: '',
  };

  const { isClient, key } = useIsClient();
  const formRef = useRef<FormikProps<InitialValues>>(null);
  const navigate = useNavigate();
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);
  const { refetch } = useGetMe();
  const { mutateAsync: loginUser } = useLogin({
    onSuccess: data => {
    },
    onError: error => {
    },
  });

  const handleSubmit: HandleSubmitProps = async values => {
    if (isFormRefNotNull(formRef)) {
      try {
        await loginUser({ loginInput: values });
        formRef.current.resetForm();
        formRef.current.setStatus('submitted');
        refetch(); // refetching user

        if (toastIdRef.current) {
          toast.close(toastIdRef.current);
        }

        toastIdRef.current = toast({
          title: 'Login',
          description: 'Успешно зашли! ᕦ(ò_óˇ)ᕤ',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });

        navigate('/');
      } catch (error: unknown) {
        console.log({ error });
        if (isGraphQLRequestError(error) && formRef.current !== null) {
          if (toastIdRef.current) {
            toast.close(toastIdRef.current);
          }

          toastIdRef.current = toast({
            title: 'Login',
            description: `${error.response.errors[0].message}`,
            status: 'error',
            isClosable: true,
          });

          formRef.current.setStatus('error');
        }
      } finally {
        formRef.current.setSubmitting(false);
      }
    }
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        innerRef={formRef}
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
