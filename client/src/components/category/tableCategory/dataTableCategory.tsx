import React, { useRef } from 'react';
import { DataTables } from '../../../common/table';
import { ModalsCategory } from '../../../components/category/modal';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { HeaderTable } from '../../../scenes/category/header';

export const DataTableCategory = () => {
  const data: any[] = [];

  const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'edit', header: 'Acciones' },
  ];

  const stockBodyTemplate = (data: any) => {
    const items: MenuItem[] = [
      {
        label: 'Delete',
        icon: 'pi pi-refresh',
        command: () => {
          return;
        },
      },
    ];
    return (
      <SplitButton
        label="Save"
        icon="pi pi-plus"
        onClick={() => {
          return;
        }}
        model={items}
      />
    );
  };

  return (
    <>
      <DataTables
        data={data}
        columns={columns}
        header={HeaderTable}
      ></DataTables>
      <ModalsCategory></ModalsCategory>
    </>
  );
};
