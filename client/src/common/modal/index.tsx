import React, { ReactNode } from 'react';
import { Dialog } from 'primereact/dialog';

interface IModalProps {
  title: string;
  open: boolean;
  setOpen: (state: any) => void;
  children: ReactNode;
}

export const Modals = ({ title, open, setOpen, children }: IModalProps) => {
  return (
    <Dialog
      header={title}
      visible={open}
      maximizable
      style={{ width: '50vw' }}
      onHide={() => setOpen(false)}
    >
      {children}
    </Dialog>
  );
};
