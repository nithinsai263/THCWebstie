import React from "react";
import Text from "../Text";
import FooterComponent from "./footerComponent";
import styles from "./index.module.css";

let data = [
  ["Need Help", "Contact Us", "Track Order", "Returns & Refunds"],
  ["Company", "About Us", "Careers"],
  ["Resources", "Tool Kit", "Community", "Blog"],
  ["More Info", "Terms & Condition", "Privacy Policy"],
];

export default function Footer() {
  return (
    <div className={styles.huemnFooterContainer}>
      <div className={styles.footercontainer}>
        {data.map((item, index) => {
          return <FooterComponent key={index} item={item} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div>
          <h3 style={{ color: "#aaa", textAlign: "center" }}>Follow Us</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ marginLeft: "5px", marginRight: "5px" }}
              src={"/instagram.png"}
              height={"40"}
              width={"40"}
              alt="image"
            />
            <img
              style={{ marginLeft: "5px", marginRight: "5px" }}
              src={"/facebook.png"}
              height={"40"}
              width={"40"}
              alt="image"
            />
            <img
              style={{ marginLeft: "5px", marginRight: "5px" }}
              src={"/snapchat.png"}
              height={"40"}
              width={"40"}
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className={styles.footermaincontainer}>
        <div className={styles.footercontainer2}>
          <img src={"/logo.png"} height={"30px"} width={"125px"} alt="image" />
          <Text
            text={"© 2021 huemn. All rights reserved"}
            classStyle={"huemntextcontent3"}
          />
        </div>
        <div className={styles.footercontainer2}>
          <div style={{ display: "flex", paddingRight: "48px" }}>
            <Text text={"Cookies"} link={true} classStyle={"textlist2"} />
            <Text text={"Privacy"} link={true} classStyle={"textlist2"} />
            <Text text={"Terms"} link={true} classStyle={"textlist2"} />
          </div>
        </div>
      </div>
    </div>
  );
}
