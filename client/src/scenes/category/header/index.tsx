import React from 'react';
import { Button } from 'primereact/button';
import {
  openModal,
  updateFormSubcategory,
} from '../../../components/category/modal';
import { useAtom } from 'jotai';

export const HeaderTable = () => {
  const [open, setOpen] = useAtom(openModal);
  const [update, setUpdate] = useAtom(updateFormSubcategory);

  const handlerModal = () => {
    setUpdate(false);
    setOpen(!open);
  };

  return (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Products</span>
      <Button icon="pi pi-plus" label="Agregar" onClick={handlerModal} />
    </div>
  );
};
