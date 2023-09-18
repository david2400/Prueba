import React from 'react';
import { DataTables } from '../../../common/table';
import { ModalsCategory } from '../../../components/category/modal';

export const DataTableCategory = () => {
  const data: any[] = [];
  const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ];
  return (
    <>
      <DataTables data={data} columns={columns}></DataTables>
      <ModalsCategory></ModalsCategory>
    </>
  );
};
