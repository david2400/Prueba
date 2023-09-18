import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Formik, ErrorMessage, Field } from 'formik';
import { IFormProps } from '../../../interfaces/form';

export const FormProduct = (props: IFormProps) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={async values => {
        props.onSubmit;
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        errors,
        touched,
        values,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full px-3 py-5"
          action="#"
          method="POST"
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="flex flex-col col-span-12 lg:col-span-6 gap-1">
              <label className="my-0 font-bold leading-7 text-md text-gray-600"></label>
              <InputText
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage
                component="span"
                className="text-xs text-red-600 text-center w-full"
                name="name"
              />
            </div>

            <div className="flex col-span-12 justify-center">
              <Button type="submit" className="flex items-center gap-3">
                Upload Files
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
