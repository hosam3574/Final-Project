import React, { useState, useEffect } from "react";

import Home from "./components/Home";
 import {  Route , Routes } from "react-router-dom";
import Page2 from "./components/Page2";


import "./css/Home.css";
import "./css/page2.css";


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
    <Routes>
      <Route path="/page2" element={<Page2 />} />
      <Route path="/" element={ <Home />} />

    </Routes>
     
    
    </>
  );
}

export default App;



