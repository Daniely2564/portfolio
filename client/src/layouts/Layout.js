import React from "react";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <div style={{ paddingLeft: "250px", width: "100%" }}>{children}</div>
    </>
  );
};

export default Layout;
