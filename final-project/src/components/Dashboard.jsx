import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // جلب بيانات التواريخ
    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));

    // جلب بيانات السيارات المستأجرة
    fetch("http://localhost:5000/api/rentals")
      .then(res => res.json())
      .then(data => setRentals(data))
      .catch(err => console.error(err));
  }, []);

  const cardStyle = {
    backgroundColor: "#f0f4ff",
    padding: "15px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    marginBottom: "15px",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const sectionTitle = {
    fontSize: "22px",
    color: "#2240ee",
    marginBottom: "10px",
    borderBottom: "2px solid #2240ee",
    display: "inline-block",
    paddingBottom: "5px",
  };

  // دالة لمسح كل البيانات من العرض
  const clearDashboard = () => {
    setBookings([]);
    setRentals([]);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#eef2ff", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#2240ee", marginBottom: "25px", fontSize: "32px" }}>🚀 Dashboard</h1>
        <button
          onClick={clearDashboard}
          style={{
            padding: "8px 15px",
            backgroundColor: "#2240ee",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            height: "fit-content"
          }}
        >
          Clear Dashboard
        </button>
      </div>

      <h2 style={sectionTitle}>📅 Bookings</h2>
      {bookings.length === 0 ? (
        <p style={{ color: "#555" }}>No bookings yet.</p>
      ) : (
        bookings.map((b, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <strong>Pickup:</strong> {b.pickupDate} <br/>
            <strong>Return:</strong> {b.returnDate}
          </div>
        ))
      )}

      <h2 style={{ ...sectionTitle, marginTop: "30px" }}>🚗 Rentals</h2>
      {rentals.length === 0 ? (
        <p style={{ color: "#555" }}>No rentals yet.</p>
      ) : (
        rentals.map((r, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <strong>Car:</strong> {r.name} <br/>
            <strong>Price per day:</strong> ${r.price} <br/>
            <strong>Days:</strong> {r.days} <br/>
            <strong>Total:</strong> ${r.total} <br/>
            <strong>Driver Age:</strong> {r.driverAge} <br/>
            <strong>Phone:</strong> {r.phone || "-"} <br/>
            <strong>Passport:</strong> {r.passport || "-"} <br/>
          </div>
        ))
      )}
    </div>
  );
}