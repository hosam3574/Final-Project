import React, { useState } from "react";

export default function CarCard({ name, image, price, reviews, userEmail, onNewRental }) {
  const [showModal, setShowModal] = useState(false);
  const [driverAge, setDriverAge] = useState("");
  const [days, setDays] = useState(1);
  const [isDubai, setIsDubai] = useState(false);
  const [isTourist, setIsTourist] = useState(false);
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState(null);
  const [notification, setNotification] = useState("");

  const total = days * price;

  const handleSend = async () => {
    // ✨ جهز بيانات الحجز
    const rentalData = {
      customerName: userEmail || "Guest",
      carName: name,
      price,
      days,
      total,
      driverAge,
      phone: isDubai ? phone : "-",
      passport: isTourist ? (passport?.name || "Uploaded") : "-",
      pickupDate: new Date().toISOString().split("T")[0],
      returnDate: new Date(Date.now() + days*24*60*60*1000).toISOString().split("T")[0],
    };

    console.log("🚗 New Rental Data:", rentalData);

    try {
      const res = await fetch("http://localhost:5000/api/rent-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rentalData),
      });

      const result = await res.json();
      if (res.ok) {
        setNotification("Request sent successfully!");
        if (onNewRental) onNewRental(rentalData); // 🔥 أرسل البيانات مباشرة لل Dashboard
      } else {
        setNotification("❌ Failed: " + result.error);
      }
    } catch (err) {
      setNotification("❌ Error sending data");
      console.error(err);
    }

    setShowModal(false);
    setDriverAge("");
    setDays(1);
    setIsDubai(false);
    setIsTourist(false);
    setPhone("");
    setPassport(null);

    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <p className="namecar">{name}</p>
      <div className="reviews">
        <img className="star" src="/media/Star 1.png" alt="star" />
        <span>{reviews}</span>
      </div>
      <p className="price">${total}</p>
      <button className="disgin" onClick={() => setShowModal(true)}>Rent Now</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>🚗 Rent {name}</h2>
            <label>Driver Age:
              <input type="number" value={driverAge} onChange={e => setDriverAge(e.target.value)} required />
            </label>
            <label>Number of Days:
              <input type="number" value={days} onChange={e => setDays(e.target.value)} min="1" required />
            </label>
            <p>Total: ${total}</p>
            <label>Are you from Dubai?
              <input type="checkbox" checked={isDubai} onChange={e => setIsDubai(e.target.checked)} />
            </label>
            {isDubai && <label>Phone Number:
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
            </label>}
            <label>Are you a tourist?
              <input type="checkbox" checked={isTourist} onChange={e => setIsTourist(e.target.checked)} />
            </label>
            {isTourist && <label>Passport Copy:
              <input type="file" onChange={e => setPassport(e.target.files[0])} accept="image/*,.pdf" required />
            </label>}
            <div style={{ marginTop: "15px" }}>
              <button className="send-btn" onClick={handleSend}>Send</button>
              <button className="cancel-btn" style={{ marginLeft: "10px" }} onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {notification && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#0077ff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          zIndex: 10000,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
          {notification}
        </div>
      )}
    </div>
  );
}