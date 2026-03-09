import React from "react";

function Page2() {
  return (
    <div style={{ minHeight: "100vh", textAlign: "center", padding: "50px" }}>
      <h1>الصفحة الثانية</h1>
      <button
        style={{ padding: "12px 25px", fontSize: "16px", marginTop: "20px", cursor: "pointer" }}
        onClick={() => window.location.href = "/"}
      >
        العودة للصفحة الرئيسية
      </button>
    </div>
  );
}

export default Page2;