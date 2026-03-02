import React, { useState } from "react";


export default function Part1(){
  const [showPickup, setShowPickup] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [showReturn, setShowReturn] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [notification, setNotification] = useState(null);

  // اليوم الحالي بصيغة YYYY-MM-DD
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  const handleSend = async () => {
    if (!pickupDate || !returnDate) {
      setNotification({ type: "error", message: "Please select the pickup and return dates." });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pickupDate, returnDate }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("✅ Booking sent:", { pickupDate, returnDate });
        setNotification({ type: "success", message: data.message });
      } else {
        console.error("❌ Booking error:", data.error);
        setNotification({ type: "error", message: "Failed to send data.: " + data.error });
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      setNotification({ type: "error", message: "   An error occurred while sending the data." });
    }
  };

  return (
    <div className="all">
      {/* المحتوى الأصلي Part1 يبقى كما هو */}
      <div className="headline-container">
        <h1> Find, book and <br/> rent a car <span className="easily-container">
          <p className="Easily">Easily </p>
          
      
        </span></h1>
        <p>Get a car wherever and whenever you <br/> need it with your IOS and Android device.</p>
        <div className="icons">
          <a href="https://play.google.com/store/apps/details?id=com.rentalcars.online&hl=ar">
            <img className="im1" src="/media/image 2.png" alt="Logo"/>
          </a>
          <a href="https://apps.apple.com/us/app/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AA%D8%A7%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id1613929322?l=ar">
            <img className="im2" src="/media/image 3.png" alt="Logo"/>
          </a>
        </div>
      </div>

      <img className="im3" src="/media/car 2 1.png" alt="Logo"/>

      <div
        style={{
          backgroundColor: "#f0f4ff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          margin: "20px 0",
          lineHeight: "1.6",
          color: "#333",
          textAlign: "center",
          marginTop: "-240px"
        }}
      >
        <h2 style={{ marginBottom: "12px", fontSize: "22px", color: "#1a1a1a" }}>
          🚗 Car Rental Steps
        </h2>
        <p style={{ fontSize: "18px" }}> 
          Before completing your booking, please carefully select the pickup location
          and choose the pickup and return dates that suit you best.
        </p>
      </div>

      <br/><br/>
      <div className="allimg">
        <button className="allimg">
          <div className="locaation">
            <a href="https://www.google.com/maps/place/Dubai+International+Airport+(DXB)/@25.253174,55.365672,17z">
              <img className="locatio" src="/media/location.png" alt="Logo"/>
            </a>
          </div>

          <div className="locaation">
            <img
              className="locatio"
              src="/media/Pickup date.png"
              alt="Pickup Date"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPickup(!showPickup)}
            />
            {showPickup && (
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                style={{ display: "block", marginTop: "10px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }}
                min={minDate}
              />
            )}
          </div>

          <div className="locaation">
            <img
              className="locatio"
              src="/media/Frame 14.png"
              alt="Return Date"
              style={{ cursor: "pointer" }}
              onClick={() => setShowReturn(!showReturn)}
            />
            {showReturn && (
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                style={{ display: "block", marginTop: "10px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }}
                min={pickupDate || minDate}
              />
            )}
          </div>

          <div className="search">
            <button
              style={{
                backgroundColor: "blue",
                border: "none",
                borderRadius: "5px",
                width: "100px",
                height: "35px",
                color: "white",
                fontSize: "18px",
                cursor: "pointer"
              }}
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </button>
      </div>

      {notification && (
  <div
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "15px 25px",
      borderRadius: "8px",
      backgroundColor: notification.type === "success" ? "#4CAF50" : "#f44336",
      color: "#fff",
      fontWeight: "bold",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 9999,
    }}
  >
    {notification.message}
  </div>
)}

{/* هاي بتخليه يروح بعد ثانيتين */}
{notification && setTimeout(() => setNotification(null), 2000)}


      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
