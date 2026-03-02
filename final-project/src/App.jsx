import React from "react";

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

function App() {
  const handleLogout = () => {
    // إذا عندك logout logic
  };

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