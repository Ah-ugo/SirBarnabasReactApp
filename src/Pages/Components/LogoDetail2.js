import { Divider } from "antd";
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
          <label style={{ fontSize: "12px", color: "GrayText" }}>
            barna@gmail.com
          </label>
          <label style={{ fontSize: "12px", color: "GrayText" }}>
            Pay{" "}
            <span
              style={{
                fontSize: "12px",
                alignSelf: "end",
                fontWeight: "700",
                color: "green",
              }}>
              NGN2,410.00
            </span>{" "}
          </label>
        </div>
      </div>
    </div>
  );
}
