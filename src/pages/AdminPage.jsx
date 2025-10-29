// Admin-facing page: dashboard and analytics

import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Analytics from "../components/Analytics";

const AdminPage = () => {
  return (
    <div>
      <h1 style={{color: "white"}}>Admin Panel</h1>
      <AdminDashboard />
      <Analytics />
    </div>
  );
};

export default AdminPage;
