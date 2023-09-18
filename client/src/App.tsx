import React from 'react';
import { App } from './common/routes';
import { Navbar } from './components/navbar';

const layout = () => {
  return (
    <>
      <App>
        <Navbar />
      </App>
    </>
  );
};
export default layout;
