import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // نعمله الآن

function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegister) {
        const res = await axios.post("http://localhost:5000/register", { email, password });
        alert(res.data.message);
        setIsRegister(false);
      } else {
        const res = await axios.post("http://localhost:5000/login", { email, password });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onLogin(res.data.user);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "حدث خطأ ما");
    }
  };

  return (
    <div className="login-container">
      <div className={`login-card ${isRegister ? "register-mode" : ""}`}>
        <h2 className="title">{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p
          className="toggle-text"
          onClick={() => { setIsRegister(!isRegister); setError(""); }}
        >
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </p>
      </div>
      <div className="animated-car"></div>
    </div>
  );
}

export default Login;