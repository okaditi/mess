import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";


import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Offers from "./Components/Offers";

import Login from "./Pages/Login";
import BookTrial from "./Pages/BookTrial";
import AdminDashboard from "./Pages/AdminDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "60px 0",
                  }}
                />
                <Work />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "60px 0",
                  }}
                />
                <Offers />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "60px 0",
                  }}
                />
                <Pricing />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "60px 0",
                  }}
                />
                <Testimonial />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "0px 0",
                  }}
                />
                <Contact />
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background:
                      "linear-gradient(to right, transparent, #444, transparent)",
                    margin: "0px 0",
                  }}
                />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/book-trial" element={<BookTrial />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employee"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["user", "employee", "admin"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/unauthorized"
            element={<div style={{ padding: 40 }}>Unauthorized — you don't have access.</div>}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
