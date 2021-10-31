import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Storage } from "aws-amplify";

function Previewcomponent({ name, price, falseprice, picture, description }) {
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
    <div className={styles.previewMainContainer}>
      <div>
        <img
          src={picture ? image : "/tshirt.png"}
          className={styles.cardImageStyle}
        />
        <div className={styles.cardTextContainer}>
          <p className={styles.cardHeadingText}>{name}</p>
          <p className={styles.cardDescriptionText}>{description}</p>
          <div className={styles.cardPriceText}>
            <p className={styles.cardTruePriceText}>₹ {price}</p>
            <p className={styles.cardFalsePrice}>Rs. {falseprice}</p>
            <p className={styles.cardDiscountText}>
              ({Math.floor((price / falseprice) * 100)}% OFF)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previewcomponent;
