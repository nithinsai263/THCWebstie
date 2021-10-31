import React, { useState, useEffect } from "react";
import Link from "next/link";  
import { Storage } from "aws-amplify";

import styles from "./index.module.css";
const data = [
  {
    status: true,
    label: "Ordered",
    date: "26th Aug",
  },
  {
    status: true,
    label: "Dispatched",
    date: "27th Aug",
  },
  {
    status: false,
    label: "Delivered",
    date: "28th Aug",
  },
];
const orderditems = [
  {
    prodimage: "https://random.imagecdn.app/600/600",
    orderid: "1234",
    prodname: "Tshirt Full Sleeve",
    quantity: "5",
    price: "69",
  },
  {
    prodimage: "https://picsum.photos/600/600",
    orderid: "7890",
    prodname: "Shirt Black",
    quantity: "1",
    price: "69",
  },
];
export default function OrderCard({date, total, address, orderid, quantity, subtotal, picture}) {
  const [details, setDetails] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div
      style={{
        backgroundColor: "#111",
        marginBottom: "15px",
        border: "1px solid #444",
      }}
    >
      <div className={styles.orderCardHeader}>
        <div>
          <p className={styles.orderCardHeaderText}>Ordered Date:</p>
          <p className={styles.orderCardHeaderText}> {date}</p>
        </div>
        <div>
          <p className={styles.orderCardHeaderText}>Total Price: </p>
          <p className={styles.orderCardHeaderText}>₹ {total}</p>
        </div>
        <div>
          <p className={styles.orderCardHeaderText}>Ship To: </p>
          <p className={styles.orderCardHeaderText}>{address.substring(0, 30)}...</p>
        </div>
      </div>
      <div className={styles.thcordercard}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className={styles.thcordercardimagewrapper}
            src={picture ? image : "/tshirt.png"}
          />
          <div className={styles.orderCardTextWrapper}>
            {" "}
            <p className={styles.orderCardText}>
              Order ID: {orderid}
            </p>
            <p className={styles.orderCardText}>
              {" "}
              ${orderditems[currentIndex].prodname}
            </p>
            <p className={styles.orderCardText}>
              Items: {quantity}
            </p>
            <p className={styles.orderCardText}>
              ₹ {total}
            </p>
          </div>
        </div>
        <div>
          <img
            src={"/tik.png"}
            style={{
              height: 80,
              width: 80,
              opacity: 0.15,
              marginLeft: "-60px",
            }}
          />
        </div>
        <div>
          <Link href={`/myorders/${orderid}`}>
            <div className={styles.ordercardbutton}>
              <p>Details</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
