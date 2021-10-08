import React from "react";
import styles from"./index.module.css";
import { FaNetworkWired, FaThumbsDown, FaThumbsUp, FaUser, FaVideo } from "react-icons/fa";
function AdminCard({ Icon, title, Number }) {
  return (
    <div className={styles.dashboardTile1}>
      <div style={{padding:10}}>
        <div style={{marginTop:"5px", padding:0}}>
          {Icon === "user" && <FaUser size={35} color="#10b7ff" />}
          {Icon === "video" && <FaVideo size={35} color="#a3a110" />}
          {Icon === "paths" && <FaNetworkWired size={35} color="#a64b3b" />}
          {Icon === "likes" && <FaThumbsDown size={35} color="#519126" />}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "-10px",
          }}
        >
          <h5 style={{ color: "#777", marginRight: "20px", fontSize: "12px" }}>
            {title}
          </h5>
          <h4>{Number}</h4>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
