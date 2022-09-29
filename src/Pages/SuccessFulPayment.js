import React from "react";
import { HiLockClosed } from "react-icons/hi";

export default function SuccessFulPayment() {
  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}>
          <span
            style={{
              border: "3px solid green",
              borderRadius: "50%",
              padding: "10px",
              width: "60px",
              height: "60px",
            }}
          />
          <label style={{ fontSize: "25px", fontWeight: 600 }}>
            Payment Successful
          </label>
          <label
            style={{ fontSize: "20px", fontWeight: 500, color: "GrayText" }}>
            You paid NGN 2,410 to Ooma
          </label>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <HiLockClosed style={{ fontSize: "20px" }} />
          <label
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 600,
            }}>
            Secured by <span style={{ fontWeight: 700 }}>paystack</span>
          </label>
        </div>
      </main>
    </div>
  );
}
