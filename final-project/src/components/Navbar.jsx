import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onLogout }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const navigate = useNavigate();

  const toggleOptions = () => setShowOptions(!showOptions);
  const toggleInfo = () => setShowInfo(!showInfo);

  // عند الضغط على Logout
  const handleLogoutClick = () => {
    onLogout();           // يمسح المستخدم من App state و localStorage
    navigate("/login");   // يعيد توجيه المستخدم مباشرة إلى صفحة Login
  };

  return (
    <div>
      <nav style={styles.nav}>
        {/* Logo */}
        <img src="/media/log1.png" alt="Logo" style={styles.logo} />

        {/* Title */}
        <h1 style={{ fontSize: "18px" }}>
          "اللهم ارزقنا الحلال وبارك لنا فيه"
        </h1>

        {/* Links */}
        <ul style={styles.links}>
          <li>
            <a href="#" style={styles.link}>
              Home
            </a>
          </li>

          <li>
            <button style={styles.aboutButton} onDoubleClick={toggleInfo}>
              About Me
            </button>
          </li>

          <li>
            <a
              href="https://www.careem.com/ar-AE/rental/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Services
            </a>
          </li>

          {/* Contact us with arrows */}
          <li style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                position: "absolute",
                top: "-22px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <span style={styles.arrow}>⬇️</span>
              <span style={{ ...styles.arrow, animationDelay: "0.3s" }}>⬇️</span>
            </div>

            <button onClick={toggleOptions} style={styles.linkButton}>
              Contact us
            </button>

            {showOptions && (
              <div style={styles.dropdown}>
                <a href="tel:+1234567890" style={styles.dropdownItem}>
                  📞 اتصل الآن
                </a>
                <a href="mailto:example@email.com" style={styles.dropdownItem}>
                  ✉️ أرسل رسالة
                </a>
              </div>
            )}
          </li>

          {/* 🔴 زر Logout */}
          <li>
            <button style={styles.logoutButton} onClick={handleLogoutClick}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Info section */}
      {showInfo && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            color: "blue",
            padding: "0 20px",
          }}
        >
          <p><strong>My Name:</strong> Hosam Mouyyad Ahmad Tradat</p>
          <p><strong>3nd year:</strong> Software Engineering Student</p>
          <p><strong>Phone:</strong> +916 770245471</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Student at:</strong> SDK</p>
          <p><strong>Course:</strong> Front-end and Back-end</p>
          <p><strong>Email:</strong> hossamtradat@gmail.com</p>
          <p>
            <strong>مشروعي:</strong> بسم الله الرحمن الرحيم، المشروع عبارة عن معرض بسيط
            شرحت فيه الخدمات وكيفية استئجار السيارة أو امتلاك سيارة الأحلام.
          </p>
        </div>
      )}

      {/* CSS للأنيميشن */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#eee",
  },
  logo: { height: "50px" },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: { textDecoration: "none", color: "black", fontWeight: "bold" },
  aboutButton: {
    background: "none",
    border: "none",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    padding: "10px",
    zIndex: 1000,
  },
  dropdownItem: { display: "block", padding: "5px 10px", textDecoration: "none", color: "#333" },
  arrow: { fontSize: "18px", animation: "bounce 1s infinite" },
  logoutButton: {
    padding: "6px 12px",
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};