import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export interface ITableProps {
  data: Array<any>;
  columns: Array<any>;
  header?: (curElem: any) => JSX.Element;
}

export const DataTables = (props: ITableProps) => {
  const [products, setProducts] = useState(props.data);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <div className="card">
      <DataTable
        value={products}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        tableStyle={{ minWidth: '50rem' }}
        header={props.header}
      >
        {props.columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            sortable
            header={col.header}
            body={col.body}
          />
        ))}
      </DataTable>
    </div>
  );
};
