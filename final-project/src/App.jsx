import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Page2 from "./components/Page2";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";



import "./css/Home.css";
import "./css/page2.css";
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

 const PrivateRoute = ({ children }) => {
  return user ? children : <Navigate to="/login" />;
};

  return (
    <Routes>
      {/* Login يظهر دائمًا كصفحة مستقلة */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />


 <Route
        path="/dashboard"
        element={user ? <Dashboard onLogout={() => setUser(null)} /> : <Navigate to="/login" />}
      />


      {/* الصفحة الرئيسية محمية */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home handleLogout={handleLogout} user={user} />
          </PrivateRoute>
        }
      />

      {/* صفحة ثانية محمية */}
      <Route
        path="/page2"
        element={
          <PrivateRoute>
            <Page2 />
          </PrivateRoute>
        }
      />

      {/* أي رابط غير معروف → تحويل لصفحة Login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;