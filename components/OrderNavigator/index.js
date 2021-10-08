import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";
const OrderNavigator = ({ data, width }) => {
  return (
    <div className={styles.orderProgressParentContainer}>
      <div className={styles.progressBarMainContainer}>
        <div className={styles.progressBar}>
          <div
            style={{
              backgroundColor: "#ff4d15",
              width: width,
              borderRadius: 10,
            }}
          ></div>
        </div>
        <div className={styles.iconcontainer}>
          {data.map((d, index) => (
            <div
              key={index}
              style={{
                alignItems: "center",
                marginRight: index === data.length - 1 ? -7 : 10,
              }}
            >
              <div
                style={{
                  height: 36,
                  width: 35,
                  borderRadius: 18,
                  backgroundColor: d.status ? "#ffa386" : "#ddd",
                }}
              />
              <p style={{ fontSize: 10, color: "#fff" }}>{d.label}</p>
              <p style={{ fontSize: 10, color: "#fff" }}>{d.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderNavigator;
