import React from "react";
import { Link } from "react-router-dom";

import Part1 from "./part1";
import Part2 from "./part2";
import Part3 from "./part3";
import Part4 from "./part4";
import Part5 from "./part5";

import "../css/part1.css";
import "../css/part2.css";
import "../css/part3.css";
import "../css/part4.css";
import "../css/part5.css";

function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />

     
    </div>
  );
}

export default Home;