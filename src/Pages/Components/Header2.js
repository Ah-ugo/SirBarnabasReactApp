import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";

export default function Header2() {
  return (
    <div style={{ background: "#f2f2f2" }}>
      <main style={{ display: "flex", alignItems: "center", padding: "20px" }}>
        <BsFillCreditCardFill
          style={{ fontSize: "20px", marginRight: "10px" }}
        />
        <label style={{ fontSize: "20px", color: "#404040", fontWeight: 700 }}>
          Pay with Card
        </label>
      </main>
    </div>
  );
}
