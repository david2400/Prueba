import { object, string } from 'yup';

export const validationAdd = () => {
  const validationSchema = object({
    name: string().required('campo requerido'),
    description: string().required('campo requerido'),
    category: string().required('campo requerido'),
    slug: string().required('campo requerido'),
  });

  return validationSchema;
};
