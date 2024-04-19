import { FC } from 'react';

import Button from '../components/regular-button';
import { Form, Formik, FormikHelpers } from 'formik';
import { ObjectSchema, string, object } from 'yup';
import { Persist } from '../components/persist-form';
import TextInput from '../components/text-input';
import useIsClient from '../utils/ssr/use-is-client';

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

const handleSubmit: HandleSubmitProps = async (values, actions) => {
  console.warn(JSON.stringify(values, null, 2));

  actions.setSubmitting(false);
  actions.resetForm();
};

const LoginPage: FC = () => {
  const { isClient, key } = useIsClient();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <TextInput variant="unstyled" name='login' label='Логин' />
            <TextInput variant="unstyled" name='password' label='Пароль' />
            {isClient && <Button key={key} variant={'black'} isLoading={isSubmitting} mt='4' type="submit">
              Отправить
            </Button>}

            <Persist name='login-form' />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
