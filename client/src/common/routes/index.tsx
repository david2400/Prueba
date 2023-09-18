import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Category from '../../pages/category';
import Products from '../../pages/products';

const routes = [
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/*',
    element: <Category />,
  },
];

const RouterApp = () => {
  const element = useRoutes(routes);
  return element;
};

export const App = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <RouterApp></RouterApp>
    </BrowserRouter>
  );
};
