import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import Part3 from "./components/part3";
import Part4 from "./components/part4";
import Part5 from "./components/part5";


import "./css/part1.css";
import "./css/part2.css";
import "./css/part3.css";
import "./css/part4.css";
import "./css/part5.css";
import "./css/login.css";




function App() {
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

  // إذا المستخدم مش موجود، تظهر صفحة Login فقط
  if (!user) return <Login onLogin={handleLogin} />;

  // بعد تسجيل الدخول، تظهر باقي الصفحة
  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
    </>
  );
}

export default App;