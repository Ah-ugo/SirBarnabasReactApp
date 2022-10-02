import React from "react";
import Header2 from "./Components/Header2";
import LogoDetail from "./Components/LogoDetail2";

export default function AuthenticateBank() {
  return (
    <div>
      <main>
        <Header2 />
        <LogoDetail />
        <div style={{ textAlign: "center" }}>
          <label
            style={{
              background: "#ffcc00",
              color: "brown",
              paddingTop: "2px",
              paddingBottom: "2px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              fontWeight: "bold",
            }}>
            TEST
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "50px",
          }}>
          <img
            src={require("../Pages/Assets/logo.png")}
            style={{ width: "100px", height: "100px" }}
          />
          <label
            style={{ textAlign: "center", fontSize: "25px", fontWeight: 600 }}>
            Please tap the button below to authenticate with your bank
          </label>
          <button
            style={{
              border: "none",
              backgroundColor: "green",
              width: "100%",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              height: "50px",
              marginTop: "50px",
              marginBottom: "20px",
            }}>
            Authenticate
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "18px",
              fontWeight: 700,
            }}>
            Cancel
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginRight: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <button
            style={{ border: "grey", marginBottom: "30px", marginTop: "50px" }}>
            Change Payment Method
          </button>
          <button style={{ border: "grey", marginBottom: "30px" }}>
            Cancel Payment
          </button>
        </div>
      </main>
    </div>
  );
}
