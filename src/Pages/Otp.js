import React from "react";
import Footer1 from "./Components/Footer1";
import Header1 from "./Components/Header1";
import LogoDetail from "./Components/LogoDetail";

export default function Otp() {
  return (
    <div style={{ height: "100vh" }}>
      <main>
        <Header1 />
        <LogoDetail />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            fontSize: "15px",
            fontWeight: 600,
            marginTop: "30px",
          }}>
          <label>Please enter the OTP sent to your mobile number</label>
          <label>080******and email te**@rave**.com</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}>
          <input
            type={"number"}
            placeholder="Enter OTP"
            style={{
              minWidth: "100%",
              border: "1px solid #ebebe0",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <button
            style={{
              width: "100%",
              border: "none",
              height: "30px",
              background: "#ffad33",
              color: "white",
              marginTop: "15px",
              fontWeight: 600,
            }}>
            Authorize Payment
          </button>
        </div>
        <Footer1 />
      </main>
    </div>
  );
}
