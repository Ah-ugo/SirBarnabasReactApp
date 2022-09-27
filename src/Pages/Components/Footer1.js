import React from "react";

export default function Footer1() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          // display: "flex",
          // justifyContent: "center",
          textAlign: "center",
          // alignItems: "center",
          // alignContent: "center",
          width: "100%",
          // left: "50%",
        }}>
        <div
          style={{
            borderBottom: "1px solid #ebebe0",
            paddingBottom: "20px",
          }}>
          <label style={{ color: "#ffad33", fontWeight: 700 }}>
            &#8634; Change payment method
          </label>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <label
            style={{
              paddingTop: "10px",
              paddingBottom: "20px",
              fontWeight: 700,
              color: "#ccccb3",
            }}>
            &times; Cancel Payment
          </label>
        </div>
      </div>
    </div>
  );
}
