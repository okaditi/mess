import React from "react";
import { useAuth } from "../Contexts/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: 28 }}>
      <h2>Welcome, {user?.name || "Customer"}</h2>
      <p>Manage subscriptions, view invoices and meal preferences here.</p>
    </div>
  );
};

export default UserDashboard;
