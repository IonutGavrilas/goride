 import Navigation from "./Navigation";
import React from 'react';
import Footer from "./Footer";

const Layout = ({ children }) => {

  return (
    <div>
      <Navigation></Navigation>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
