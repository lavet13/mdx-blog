import React, { FC, memo, useEffect, useRef } from 'react';

import { ErrorMessage, FastField, FastFieldProps } from 'formik';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';

type TextInputProps = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  shouldFocus?: boolean;
} & InputProps;

const TextInput: FC<TextInputProps> = memo(({ label, name, shouldFocus, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    shouldFocus && inputRef.current?.focus();
  }, [shouldFocus]);

  return (
    <FastField name={name}>
      {({ field: { value, ...field}, meta }: FastFieldProps) => (
        <FormControl
          isRequired={props.isRequired}
          isInvalid={!!meta.error && meta.touched}
        >
          <FormLabel htmlFor={props.id || name}>{label}</FormLabel>
          <Input
            {...field}
            {...props}
            value={value || ''}
            type={props.type || 'text'}
            id={props.id || name}
            ref={inputRef}
          />
          <ErrorMessage name={name} component={FormErrorMessage} />
        </FormControl>
      )}
    </FastField>
  );
});

export default TextInput;

