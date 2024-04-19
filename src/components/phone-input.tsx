import { FC, memo } from 'react';

import { ErrorMessage, FastField, FastFieldProps } from 'formik';

import {
  type InputProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import {
  PatternFormat,
  type PatternFormatProps,
  OnValueChange,
} from 'react-number-format';

export const MAX_TEL_SIZE = 10;

type PhoneInputProps = {
  name: string;
  label: string;
} & InputProps &
  Partial<PatternFormatProps>;

const PhoneInput: FC<PhoneInputProps> = memo(({ name, label, ...props }) => {
  return (
    <FastField name={name}>
      {({
        field: { onChange, value, ...field },
        meta,
        form: { setFieldValue },
      }: FastFieldProps) => {
        const handleOnValueChange: OnValueChange = (values, sourceInfo) => {
          const { value, formattedValue } = values;

          setFieldValue(name, { value, formattedValue });
        };

        return (
          <FormControl
            isRequired={props.isRequired}
            isInvalid={!!meta.error && meta.touched}
          >
            <FormLabel htmlFor={props.id || name}>{label}</FormLabel>
            <PatternFormat
              {...field}
              value={value?.value ?? ''}
              {...props}
              id={props.id || name}
              customInput={Input}
              valueIsNumericString
              type='tel'
              format='+7 (###) ###-##-##'
              onValueChange={handleOnValueChange}
            />
            <ErrorMessage name={name} component={FormErrorMessage} />
          </FormControl>
        );
      }}
    </FastField>
  );
});

export default PhoneInput;
