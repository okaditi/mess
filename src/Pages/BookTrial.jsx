import React, { useState } from "react";

const BookTrial = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mealPref, setMealPref] = useState("veg");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      setError("Please fill name, phone and address");
      return;
    }
    setError("");
    const booking = { id: Date.now(), name, phone, address, mealPref, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("bittu_bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("bittu_bookings", JSON.stringify(existing));
    setSuccess(true);
    setName(""); setPhone(""); setAddress(""); setMealPref("veg");
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <div style={{ padding: "100px 20px", minHeight: "70vh", display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ width: 520, background: "#0f0f0f", color: "#fff", padding: 28, borderRadius: 12 }}>
        <h2>Book a Trial</h2>

        <label style={{ marginTop: 10 }}>Full Name</label>
        <input value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, marginTop: 6, background: "#121212", color: "#fff", border: "1px solid #222" }} />

        <label style={{ marginTop: 10 }}>Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, marginTop: 6, background: "#121212", color: "#fff", border: "1px solid #222" }} />

        <label style={{ marginTop: 10 }}>Address</label>
        <textarea value={address} onChange={e => setAddress(e.target.value)} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, marginTop: 6, background: "#121212", color: "#fff", border: "1px solid #222" }} rows={3} />

        <label style={{ marginTop: 10 }}>Meal Preference</label>
        <select value={mealPref} onChange={e => setMealPref(e.target.value)} style={{ width: "100%", padding: "8px 10px", marginTop: 6, borderRadius: 6, background: "#121212", color: "#fff", border: "1px solid #222" }}>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>

        {error && <div style={{ color: "#ff9b8a", marginTop: 10 }}>{error}</div>}
        {success && <div style={{ color: "#9ffd9a", marginTop: 10 }}>Your trial booking request has been received. We will contact you shortly.</div>}

        <button type="submit" style={{ marginTop: 16, padding: "10px 18px", background: "#ff6c3d", color: "#fff", border: "none", borderRadius: 8 }}>Book Trial</button>
      </form>
    </div>
  );
};

export default BookTrial;
