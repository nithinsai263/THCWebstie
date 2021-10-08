import React, { useState } from "react";

export default function Input({ value, placeholder, setValue }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(val) => {
          setValue(val.target.value);
        }}
        style={{
          height: 35,
          width: "100%",
          backgroundColor: "#000",
          border: value === "" ? "1px solid #F57D4F" : "1px solid #fff",
          borderRadius: "4px",
          textAlign: "center",
          color: "#fff",
          margin: "16px 10px",
          boxShadow: value === "" ? "#F57D4F 0px 0px 5px" : "#fff 0px 0px 5px",
        }}
      />
    </div>
  );
}
