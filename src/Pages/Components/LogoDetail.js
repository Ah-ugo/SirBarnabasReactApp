import React from "react";

export default function LogoDetail() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignContent: "center",
          alignItems: "center",
        }}>
        <img
          src={require("../Assets/logo.png")}
          style={{ width: "70px", borderRadius: "100%" }}
        />
        <div
          style={{
            fontSize: "25px",
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
          }}>
          <label>
            <span style={{ fontSize: "15px" }}>NGN</span> 2,410.00
          </label>
          <label
            style={{ fontSize: "10px", fontWeight: "600", alignSelf: "end" }}>
            barna@gmail.com
          </label>
        </div>
      </div>
    </div>
  );
}
