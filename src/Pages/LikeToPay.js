import React from "react";
import Header1 from "./Components/Header1";
import LogoDetail from "./Components/LogoDetail";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillBank, AiFillLock } from "react-icons/ai";
import { GiButterfly } from "react-icons/gi";
import { SiAmazonpay } from "react-icons/si";

export default function LikeToPay() {
  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}>
          <span>
            <AiFillLock style={{ paddingRight: "15px" }} />
            <label style={{ fontWeight: "700" }}>SECURED BY FLUTTERWAVE</label>
          </span>

          <label style={{ fontWeight: "700", color: "orangered" }}>
            Close Payment
          </label>
        </div>
        <LogoDetail />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
          }}>
          <label style={{ fontWeight: 500, fontSize: "30px" }}>How would</label>
          <label style={{ fontWeight: 500, fontSize: "30px" }}>
            You like to pay?
          </label>
        </div>
        <div
          style={{
            borderBottom: "1px solid yellow",
            marginLeft: "20px",
            marginRight: "20px",
            width: "40%",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#ebebe0",
          }}>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <FaMoneyBillAlt
              style={{ paddingRight: "10px", fontSize: "20px" }}
            />
            <label style={{ fontSize: "15px" }}>Pay with Card</label>
          </span>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <FaMoneyBillAlt
              style={{ paddingRight: "10px", fontSize: "20px" }}
            />
            <label style={{ fontSize: "15px" }}>Pay with USSD</label>
          </span>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <AiFillBank style={{ paddingRight: "10px", fontSize: "20px" }} />
            <label style={{ fontSize: "15px" }}>Pay with Bank</label>
          </span>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <AiFillBank style={{ paddingRight: "10px", fontSize: "20px" }} />
            <label style={{ fontSize: "15px" }}>Pay with Bank Transfer</label>
          </span>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <GiButterfly style={{ paddingRight: "10px", fontSize: "20px" }} />
            <label style={{ fontSize: "15px" }}>Pay with Barter</label>
          </span>
          <span
            style={{
              borderBottom: "1px solid grey",
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              padding: "15px",
            }}>
            <SiAmazonpay style={{ paddingRight: "10px", fontSize: "20px" }} />
            <label style={{ fontSize: "15px" }}>Pay with PayAttitude</label>
          </span>
        </div>
      </main>
    </div>
  );
}
