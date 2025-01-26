import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Clientform() {
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    phone: "",
    address: "",
    purpose: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://hackathon-backend-seven-sigma.vercel.app/api/beneficiaries/add",
        formData
      );

      const { token, name } = response.data;

      // Redirect to TokenPage with token and name
      navigate("/tokenpage", {
        state: { token, name },
      });

      setFormData({
        cnic: "",
        name: "",
        phone: "",
        address: "",
        purpose: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5]">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#003366]">Add New Beneficiary</h1>
          <p className="text-gray-600">
            Please fill out the form to add a new beneficiary.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CNIC
            </label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
              placeholder="12345-6789012-3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="03XX-XXXXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="House #123, Street #4, City"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366]"
              rows={3}
            ></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose
            </label>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              placeholder="Specify the purpose for adding the beneficiary..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366]"
              rows={3}
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#001f33] transition duration-300 disabled:opacity-50"
            >
              {loading ? "Adding Beneficiary..." : "Add Beneficiary"}
            </button>
          </div>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Clientform;
