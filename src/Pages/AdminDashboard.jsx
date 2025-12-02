import React from "react";

const AdminDashboard = () => {
  const bookings = JSON.parse(localStorage.getItem("bittu_bookings") || "[]");
  return (
    <div style={{ padding: 28 }}>
      <h2>Admin Dashboard</h2>
      <p>Overview, bookings and admin actions here.</p>

      <div style={{ marginTop: 20 }}>
        <h3>Trial Bookings</h3>
        {bookings.length === 0 && <div>No bookings yet.</div>}
        {bookings.map(b => (
          <div key={b.id} style={{ background: "#111", padding: 12, margin: "10px 0", borderRadius: 8 }}>
            <div><strong>{b.name}</strong> ({b.phone})</div>
            <div>{b.address}</div>
            <div style={{ fontSize: 12, color: "#aaa" }}>{new Date(b.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
