import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    setError("");
    const user = login({ name: name.trim(), role });
    if (user.role === "admin") navigate("/admin");
    else if (user.role === "employee") navigate("/employee");
    else navigate("/dashboard");
  };

  return (
    <div style={{ minHeight: "80vh", padding: "100px 20px", display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ width: 420, background: "#0f0f0f", color: "#fff", padding: 28, borderRadius: 12 }}>
        <h2 style={{ marginBottom: 16 }}>Sign In</h2>
        <label style={{ display: "block", marginBottom: 8 }}>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #222", marginBottom: 12, background: "#121212", color: "#fff" }}
        />
        <label style={{ display: "block", marginBottom: 8 }}>Role</label>
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="radio" name="role" value="user" checked={role === "user"} onChange={() => setRole("user")} /> User
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="radio" name="role" value="employee" checked={role === "employee"} onChange={() => setRole("employee")} /> Employee
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="radio" name="role" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} /> Admin
          </label>
        </div>

        {error && <div style={{ color: "#ff9b8a", marginBottom: 12 }}>{error}</div>}

        <button type="submit" style={{ padding: "10px 18px", background: "#ff6c3d", border: "none", color: "#fff", borderRadius: 8, cursor: "pointer" }}>
          Sign in
        </button>

        <div style={{ marginTop: 12, color: "#aaa", fontSize: 13 }}>
          This is a demo login. Replace with API when ready.
        </div>
      </form>
    </div>
  );
};

export default Login;
