import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layoutHeader">
        <Header />
      </div>

      <div className="containerOutlet">
        <div className="box">
          <Sidebar />
        </div>

        <main className="box">
           
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
