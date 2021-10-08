import React, { useState } from "react";
import { FaUser, FaCog, FaBackward } from "react-icons/fa";
import { Auth } from "aws-amplify";
import Router from "next/router";

import styles from "./index.module.css";
const MenuItems = [
  {
    id: "adminProfile",
    title: "Profile",
    path: "/mycourses",
    cName: "dropdownLink",
  },

  {
    id: "adminSettings",
    title: "Settings",
    path: "/profilesettings",
    cName: "dropdownLink",
  },
  {
    id: "adminLogout",
    title: "Logout",
    path: "/",
    cName: "dropdownLink",
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? styles.dropdownMenuActive : styles.dropdownMenu}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={styles.adminListLiContainer}>
              {item.id === "adminProfile" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaUser size={12} />
                  </div>
                  <p className={styles.dropdownLiItems}>{item.title}</p>
                </>
              )}
              {item.id === "adminSettings" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaCog size={12} />
                  </div>
                  <p className={styles.dropdownLiItems}>{item.title}</p>
                </>
              )}
              {item.id === "adminLogout" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaBackward size={12} />
                  </div>
                  <div
                    onClick={() => {
                      Auth.signOut();
                      Router.push("/signin");
                    }}
                  >
                    <p className={styles.dropdownLiItems}>{item.title}</p>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
