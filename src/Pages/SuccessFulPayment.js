import React from "react";

export default function SuccessFulPayment() {
  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <div
            style={{
              border: "1px solid green",
              borderRadius: "100%",
              padding: "50px",
            }}
          />
          <label style={{ fontSize: "20px", fontWeight: 600 }}>
            Payment Successful
          </label>
          <label
            style={{ fontSize: "15px", fontWeight: 500, color: "GrayText" }}>
            You paid NGN 2,410 to Ooma
          </label>
        </div>

        <label>
          Secured by <span>paystack</span>
        </label>
      </main>
    </div>
  );
}
