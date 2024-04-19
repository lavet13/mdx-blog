import * as React from 'react';
import { connect, FormikProps } from 'formik';
import _ from 'lodash';
import isEqual from 'react-fast-compare';

export interface PersistProps {
  name: string;
  debounce?: number;
  isSessionStorage?: boolean;
  onFormSubmit?: () => void;
  handleValidation?: (values: any) => void;
}

class PersistImpl extends React.Component<
  PersistProps & { formik: FormikProps<any> },
  {}
> {
  static defaultProps = {
    debounce: 300,
  };

  saveForm = _.debounce((data: FormikProps<{}>) => {
    if (this.props.isSessionStorage) {
      window.sessionStorage.setItem(this.props.name, JSON.stringify(data));
    } else {
      window.localStorage.setItem(this.props.name, JSON.stringify(data));
    }
  }, this.props.debounce);

  componentDidUpdate(
    prevProps: Readonly<PersistProps & { formik: FormikProps<any> }>,
  ): void {
    if (!isEqual(prevProps.formik, this.props.formik)) {
      this.saveForm(this.props.formik);

      if (this.props.formik.submitCount > prevProps.formik.submitCount) {
        this.handleFormSubmit();
      }
    }
  }

  componentDidMount(): void {
    const maybeState = this.props.isSessionStorage
      ? window.sessionStorage.getItem(this.props.name)
      : window.localStorage.getItem(this.props.name);

    if (maybeState && maybeState !== null) {
      this.props.formik.setFormikState(JSON.parse(maybeState));
    }

    if (this.props.handleValidation) {
      console.log({ maybeState, formikValues: this.props.formik.values });

      this.props.handleValidation(
        maybeState && maybeState !== null
          ? JSON.parse(maybeState)?.values
          : this.props.formik.values,
      );
    }
  }

  handleFormSubmit = () => {
    // Удаление данных из localStorage после подтверждения формы
    const localStorageKey = this.props.name;
    window.localStorage.removeItem(localStorageKey);

    // Передача дополнительной функции при подтверждении формы (если она предоставлена)
    if (this.props.onFormSubmit) {
      this.props.onFormSubmit();
    }
  };

  render() {
    return null;
  }
}

export const Persist = connect<PersistProps, any>(PersistImpl);
