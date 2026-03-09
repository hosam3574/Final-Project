import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";






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

 
  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Home />
    </>
  );
}

export default App;