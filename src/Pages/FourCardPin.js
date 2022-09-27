import React, { useState } from "react";
import Footer1 from "./Components/Footer1";
import Header1 from "./Components/Header1";
import LogoDetail from "./Components/LogoDetail";
import OTPInput from "otp-input-react";

export default function FourCardPin() {
  const [otp, setOtp] = useState();
  return (
    <div>
      <main>
        <Header1 />
        <LogoDetail />
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "center",
            marginTop: "40px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}>
          <label style={{ fontWeight: "700", fontSize: "15px" }}>
            Enter Your 4-digit card pin to authorize this payment
          </label>
          <OTPInput
            OTPLength={4}
            value={otp}
            onChange={setOtp}
            otpType={"number"}
            disabled={false}
            autoFocus
            style={{ marginTop: "40px" }}
          />
        </div>
        <Footer1 />
      </main>
    </div>
  );
}
