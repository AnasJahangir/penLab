import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function Layout({ component: Component }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div>
        <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        <Sidebar openSidebar={openSidebar} />
        <div className="p-4 sm:ml-64">
          <Component />
        </div>
      </div>
    </>
  );
}

export default Layout;
