import React from "react";

export default function Total({currbill}) {
  return (
    <div style={{fontFamily:'Inter'}}>
      <div
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: 15,
          paddingTop: 15,
          fontSize:14
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: 2,
            paddingTop: 2,
          }}
        >
          <p style={{ width: "90%", color: "#000" }}>Sub Total</p>
          <p style={{ color: "#555"}}>₹ {currbill.subTotal}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: 2,
            paddingTop: 2,
          }}
        >
          <p style={{ width: "90%", color: "#000", margin: 0 }}>Shipping</p>
          <p style={{ color: "#555", margin: 0 }}>₹ {currbill.deliverycharge}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: 2,
            paddingTop: 2,
            marginTop: 10 
          }}
        >
          <p style={{ width: "90%", color: "#000", margin: 0 }}>COD Charges</p>
          <p style={{ color: "#555", margin: 0, width:38 }}>₹ {currbill.codcharges}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: 2,
            paddingTop: 2,
            marginTop: 10 
          }}
        >
          <p style={{ width: "90%", color: "#000", margin: 0 }}>Discount</p>
          <p style={{ color: "#555", margin: 0, width:42 }}>- ₹ {currbill.discount}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderBottom: "1px solid #ddd",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <h5 style={{ width: "87%", color: "#000", fontSize:18 }}>Total</h5>
        <p style={{ color: "#000", fontSize: "20px", fontWeight:500 }}>₹ {currbill.total}</p>
      </div>
    </div>
  );
}
