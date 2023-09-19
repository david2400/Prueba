import { object, string } from 'yup';

export const validationAdd = () => {
  const validationSchema = object({
    name: string().required('campo requerido'),
  });

  return validationSchema;
};
