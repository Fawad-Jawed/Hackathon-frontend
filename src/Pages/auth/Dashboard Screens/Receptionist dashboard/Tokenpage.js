import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

function TokenPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { token, name } = location.state || {};

  const handlePrint = () => {
    window.print();
  };

  const handleLogout = () => {
    // Clear any session or authentication data here (like localStorage, etc.)
    localStorage.removeItem("userToken"); // Example: Clear token from localStorage
    navigate("/login"); // Redirect to login page after logout
  };

  if (!token) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Beneficiary Token
        </h1>
        <p className="text-gray-700 mb-4">
          Token for: <span className="font-semibold">{name}</span>
        </p>
        <QRCodeSVG value={token} size={200} className="mx-auto" />
        <p className="mt-4 text-gray-500">
          Show this QR code at the department.
        </p>
        <div className="mt-6">
          <button
            onClick={handlePrint}
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Print QR Code
          </button>
          <button
            onClick={() => navigate("/clientform")}
            className="ml-4 py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
          >
            Add Another Beneficiary
          </button>
          <button
            onClick={handleLogout}
            className="mt-4 py-2 px-4 bg-[#003366] text-white rounded-lg hover:bg-[#001f33] transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default TokenPage;
