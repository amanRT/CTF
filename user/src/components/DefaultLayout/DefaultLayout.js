// DefaultLayout.js
import React from 'react';
import Navbar from '../NavbarComp/NavbarComp';

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default DefaultLayout;
