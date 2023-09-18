import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Category',
          icon: 'pi pi-fw pi-bookmark',
          command: () => {
            navigate('/category');
          },
        },
        {
          label: 'Products',
          icon: 'pi pi-fw pi-video',
          command: () => {
            navigate('/products');
          },
        },
      ],
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
