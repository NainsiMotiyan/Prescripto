import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Added this import
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext"; // ✅ only context here
import AdminContextProvider from "./context/AdminContext"; // ✅ default provider import
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import DoctorsList from "./pages/Admin/DoctorsList";
import AddDoctor from "./pages/Admin/AddDoctor"; // ✅ Added missing import

const App = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <AdminContextProvider>
      {aToken ? (
        <div className="bg-[#F8F9FD] min-h-screen">
          <ToastContainer />
          <Navbar />
          <div className="flex items-start">
            <Sidebar />
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/all-appointments" element={<AllAppointments />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/doctor-list" element={<DoctorsList />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Login />
          <ToastContainer />
        </>
      )}
    </AdminContextProvider>
  );
};

export default App;
