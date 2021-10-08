import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../Button";
import OrderNavigator from "../OrderNavigator";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
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
export default function OrderCard({date, total, address, orderid, quantity, subtotal}) {
  const [details, setDetails] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
            src={orderditems[currentIndex].prodimage}
          />
          <div className={styles.orderCardTextWrapper}>
            {" "}
            <p className={styles.orderCardText}>
              Order ID: ${orderditems[currentIndex].orderid}
            </p>
            <p className={styles.orderCardText}>
              {" "}
              ${orderditems[currentIndex].prodname}
            </p>
            <p className={styles.orderCardText}>
              Quantity: ${orderditems[currentIndex].quantity}
            </p>
            <p className={styles.orderCardText}>
              ₹ ${orderditems[currentIndex].price}
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
          <a href={"/myorders/1"}>
            <div className={styles.ordercardbutton}>
              <p>Details</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
