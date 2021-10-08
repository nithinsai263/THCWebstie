import React, { useState } from "react";
import { FaBars, FaBell, FaSortDown, FaUser } from "react-icons/fa";
import AdminDropdown from "../AdminDropdown";
import styles from "./index.module.css";

function Header() {
  const [drop, setDrop] = useState(false);
  const dropdownenable = () => {
    setDrop(!drop);
  };
  return (
    <div
    className={styles.adminheadercontainer}
     
    >
      <div style={{ cursor: "pointer", paddingLeft: "20px" }}>
        <FaBars size={25} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingRight: "20px",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div style={{ paddingRight: "30px" }}>
          <FaBell size={20} />
        </div>
        <div
          onClick={dropdownenable}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundColor: "gray",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src={"https://picsum.photos/200"}
            />
          </div>
          <FaSortDown />
          {drop && <AdminDropdown />}
        </div>
      </div>
    </div>
  );
}

export default Header;
