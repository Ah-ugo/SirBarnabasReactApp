import { Input, Switch } from "antd";
import React from "react";
import Header1 from "./Components/Header1";
import LogoDetail from "./Components/LogoDetail";
import { BsFillCreditCardFill } from "react-icons/bs";
import Footer1 from "./Components/Footer1";

export default function CardPay() {
  return (
    <div>
      <main>
        <Header1 />
        <LogoDetail />
        <div style={{ margin: "20px" }}>
          <label style={{ position: "absolute" }}>CARD NUMBER</label>
          <Input
            type="text"
            suffix={<BsFillCreditCardFill />}
            placeholder="0000 0000 0000 0000"
            style={{ padding: "10px" }}
          />
          <div style={{ display: "flex" }}>
            <Input type="month" placeholder="MM / YY" aria-label="MM / YY" />
            <Input type="number" placeholder="123" aria-label="MM / YY" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}>
            <label>Remember this card next time</label>
            <Switch style={{}} />
          </div>
          <button
            style={{
              width: "100%",
              backgroundColor: "orange",
              border: "none",
              height: "50px",
              color: "white",
              fontWeight: 600,
            }}>
            Pay NGN2,410.00
          </button>
        </div>
        <Footer1 />
      </main>
    </div>
  );
}
