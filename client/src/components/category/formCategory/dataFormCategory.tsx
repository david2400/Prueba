import React from 'react';
import { FormCategory } from '../../../scenes/category/formCategory';
import { IFormProps } from '../../../interfaces/form';
import { validationAdd } from '../../../validations/category';

export const FormBase = (props: IFormProps) => {
  return (
    <FormCategory
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
    ></FormCategory>
  );
};

export const DataAddCategory = () => {
  const initialValues = {
    name: '',
    description: '',
    category: '',
    slug: '',
  };
  const onSubmit = async (values: any) => {
    return null;
  };

  return (
    <FormBase
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationAdd()}
    ></FormBase>
  );
};

export const DataUpdateCategory = () => {
  const initialValues = {
    name: '',
    description: '',
    category: '',
    slug: '',
  };
  const onSubmit = async (values: any) => {
    return null;
  };

  return (
    <FormBase
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationAdd()}
    ></FormBase>
  );
};
