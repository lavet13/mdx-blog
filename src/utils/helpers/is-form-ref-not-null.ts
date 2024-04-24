import { FormikProps } from 'formik';

export const isFormRefNotNull = <T>(
  ref: React.RefObject<FormikProps<T>>,
): ref is React.RefObject<FormikProps<T>> & { current: FormikProps<T> } => {
  return ref.current !== null;
};

