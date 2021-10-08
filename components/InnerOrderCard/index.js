import React from "react";
import styles from "./index.module.css";
function InnerOrderCard() {
  return (
    <div className={styles.innerordercardmaincontainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={"https://picsum.photos/600/600"}
          className={styles.innerordercardimage}
        />
        <div style={{ paddingLeft: "15px" }}>
          <h6 className={styles.innerordercardtext}>Long Sleeve Tshirt</h6>
          <h6 className={styles.innerordercardtext}>X- Large</h6>
          <h6 className={styles.innerordercardtext}>Quantity : 4</h6>
        </div>
      </div>
      <div>
        <h4>4 x ₹ 590</h4>
      </div>
    </div>
  );
}

export default InnerOrderCard;
