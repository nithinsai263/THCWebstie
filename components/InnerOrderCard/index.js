import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Storage } from "aws-amplify";

function InnerOrderCard({name, size, price, quantity,picture}) {
  const [image, setImage] = useState();

  useEffect(() => {
    if (picture) {
      getImage(picture.name);
    }
  }, []);

  const getImage = async (pi) => {
    Storage.get(pi).then((res) => {
      setImage(res);
    });
  };

  return (
    <div className={styles.innerordercardmaincontainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={picture ? image : "/tshirt.png"}
          className={styles.innerordercardimage}
        />
        <div style={{ paddingLeft: "15px" }}>
          <h6 className={styles.innerordercardtext}>{name}</h6>
          <h6 className={styles.innerordercardtext}>{size}</h6>
          <h6 className={styles.innerordercardtext}>Quantity : {quantity}</h6>
        </div>
      </div>
      <div>
        <h4>{quantity} x ₹ {price}</h4>
      </div>
    </div>
  );
}

export default InnerOrderCard;
