import React, { useState, useEffect } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import MediaQuery from "react-responsive";
import { Storage } from "aws-amplify";

import AddToCart from "../AddToCart";
import styles from "./index.module.css";

export default function CartCard({prodid, picture, title, subtitle, price, falseprice }) {
  const [flag, setFlag] = useState(false);
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
    <>
      <MediaQuery minWidth={750}>
        <div
          onMouseEnter={() => {
            setFlag(true);
          }}
          onMouseLeave={() => {
            setFlag(false);
          }}
          className={styles.cartcardmaincontainer}
        >
          <div>
            <img src={picture? image :"/tshirt.png"} className={styles.cartcardimagewrapper} />
          </div>
          <div style={{ marginLeft: 5 }}>
            <p className={styles.cartProductCardHeader}>{title}</p>
            <p className={styles.cartProductCardText}>{subtitle}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p className={styles.cartProductCardText}>₹ {price}</p>
              <p className={styles.cartProductCardText2}>Rs {falseprice}</p>
            </div>
            <div
              style={{
                marginTop:20,
                width:160,
                height:26,
              }}>
              <AddToCart productid={prodid}/>
            </div>
          </div>
          <div className={flag ? styles.cardHover : styles.cardHoverhidden}>
            <div
              className={
                flag ? styles.cardIconContainer : styles.cardIconContainerHide
              }
            >
              <div style={{ paddingBottom: "20px" }}>
                <a className={styles.decorationNone} href={`/items/1`}>
                  <FaEye size={40} color={"#fff"} />
                </a>
              </div>
              <div>
                <FaTrash size={40} color={"#fff"} />
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={750}>
        <div
          onClick={() => {
            setFlag(!flag);
          }}
          className={styles.cartcardmaincontainer}
        >
          <div>
            <img src={picture? image :"/tshirt.png"} className={styles.cartcardimagewrapper} />
          </div>
          <div style={{ marginLeft: 15, marginTop:-5 }}>
            <p className={styles.cartProductCardHeader}>{title}</p>
            <p className={styles.cartProductCardText}>{subtitle}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop:-8
              }}
            >
              <p className={styles.cartProductCardText}>₹ {price}</p>
              <p className={styles.cartProductCardText2}>Rs {falseprice}</p>
            </div>
            <div
              style={{
                marginTop:5,
                width:160,
                height:26,
              }}>
              <AddToCart productid={prodid}/>
            </div>
          </div>

          <div className={flag ? styles.cardHover2 : styles.cardHoverhidden2}>
            <div
              className={
                flag ? styles.cardIconContainer : styles.cardIconContainerHide
              }
            >
              <div style={{ paddingBottom: "20px" }}>
                <a className={styles.decorationNone} href={`/items/1`}>
                  <FaEye size={40} color={"#fff"} />
                </a>
              </div>
              <div>
                <FaTrash size={40} color={"#fff"} />
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
