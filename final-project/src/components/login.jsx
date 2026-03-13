import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onLogin(data.user); // تحديث حالة المستخدم في App.jsx
        localStorage.setItem("user", JSON.stringify(data.user)); // حفظ بيانات المستخدم

        // 🔹 شرط الادمين
        if (data.user.email === "admin@rent.com") {
          navigate("/dashboard"); // يروح للداشبورد
        } else {
          navigate("/"); // يروح للصفحة الرئيسية
        }

      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 style={{ color: "rgb(34, 88, 238)" }}>Car Rental</h1>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn">Login</button>
        </form>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;