import React, { useContext } from 'react';
import { Modals } from '../../../common/modal';
import {
  FormCategoryAdd,
  FormCategoryUpdate,
} from '../../../components/category/formCategory';
import { atom, useAtom } from 'jotai';

export const openModal = atom(false);
export const updateFormSubcategory = atom(false);

const Form = () => {
  const [update] = useAtom(updateFormSubcategory);

  return update ? <FormCategoryUpdate /> : <FormCategoryAdd />;
};

export const ModalsCategory = () => {
  const [update] = useAtom(updateFormSubcategory);
  const [open, setOpen] = useAtom(openModal);

  const title = update ? 'Modificar Categoria' : 'Registrar Categoria';
  return (
    <Modals title={title} open={open} setOpen={setOpen}>
      <Form></Form>
    </Modals>
  );
};
