// src/components/DashboardLayout.jsx
import React from "react";
import Sidebar from "../../../../components/Sidebar"; // Import Sidebar component
import { Outlet } from "react-router-dom"; // Use Outlet to render the current page's content
import Registrationform from "../../Registrationform";

const Admin = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Content Area */}
      <div className="flex-1 ml-64 p-8">
        {/* Renders the content for the active route */}
      </div>
    </div>
  );
};

export default Admin;
