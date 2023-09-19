import React from 'react';
import { FormCategory } from '../../../scenes/category/formCategory';
import { IFormProps } from '../../../interfaces/form';
import { validationAdd } from '../../../validations/category';
import { addCategory } from '../../../services/products';

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
    name: 'hola',
  };

  const onSubmit  = (values: any) => {
    console.log(values);
    addCategory(values);
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
    name: 'update',
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
