import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full fixed top-0 left-0 bg-gradient-to-b from-[#003366] to-[#004080] text-white p-6 flex flex-col justify-between shadow-2xl">
      {/* Logo or Title */}
      <div>
        <h2 className="text-yellow-500 text-3xl font-bold mb-8 text-center">
          Admin Dashboard
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-6">
        <li>
          <Link
            to="/registrationform"
            className="flex items-center space-x-3 hover:bg-[#00509e] p-3 rounded-lg transition-all duration-300 ease-in-out"
          >
            <i className="fa fa-user-plus text-lg"></i>
            <span>Register Receptionist/Staff</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-3 hover:bg-[#00509e] p-3 rounded-lg transition-all duration-300 ease-in-out"
          >
            <i className="fa fa-cogs text-lg"></i>
            <span>Search Beneficiary (Seeker)</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className="flex items-center space-x-3 hover:bg-[#00509e] p-3 rounded-lg transition-all duration-300 ease-in-out"
          >
            <i className="fa fa-user-circle text-lg"></i>
            <span>Insight Charts</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/reports"
            className="flex items-center space-x-3 hover:bg-[#00509e] p-3 rounded-lg transition-all duration-300 ease-in-out"
          >
            <i className="fa fa-chart-line text-lg"></i>
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex items-center space-x-3 hover:bg-[#00509e] p-3 rounded-lg transition-all duration-300 ease-in-out"
          >
            <i className="fa fa-sign-out-alt text-lg"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>

      {/* Footer */}
      <div className="text-center text-sm mt-4">
        <p>&copy; 2025 Saylani Welfare</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
