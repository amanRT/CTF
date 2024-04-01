import React from 'react';
import BelowNavbar from '../BelowNavbar/BelowNavbar';
import Navbar from '../Navbar1/Navbar';
import Contact from '../Contact/contact';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <BelowNavbar />
      <Contact />
      {children}
    </>
  );
}

export default MainLayout;
