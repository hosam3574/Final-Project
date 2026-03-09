import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import React, { useState, useEffect } from "react";
import Part1 from "./part1.jsx";
import Part2 from "./part2.jsx";
import Part3 from "./part3.jsx";
import Part4 from "./part4.jsx";
import Part5 from "./part5.jsx";

import "../css/part1.css";
import "../css/part2.css";
import "../css/part3.css";
import "../css/part4.css";
import "../css/part5.css";
import "../css/Navbar.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (loggedInUser) => setUser(loggedInUser);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
     <Navbar onLogout={handleLogout} />

      <Part1 />
      <Part2 />
     
      <Part4 />
      <Part5 />

     
    </div>
  );
}

export default Home;