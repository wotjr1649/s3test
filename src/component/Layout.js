import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 mt-16 mb-20">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;