import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import MediaQuery from "react-responsive";
import styles from "./index.module.css";
import Input from "../../components/Input";

export default function Settings({ history }) {
  const [generalsettings, setGeneralsettings] = useState(true);
  const [changepassword, setChangepassword] = useState(false);
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", paddingTop: "10vh" }}>
        <MediaQuery minWidth={750}>
          <div className={styles.thcsettingswrapper}>
            <div>
              <div
                onClick={() => {
                  setGeneralsettings(true);
                  setChangepassword(false);
                }}
                style={{
                  width: "15vw",
                  height: "40px",
                  marginBottom: "20px",
                  borderRight: "2px solid gray",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <p
                  className={
                    generalsettings
                      ? styles.thcsettingsactivelabel
                      : styles.thcsettingspassivelabel
                  }
                >
                  General Settings
                </p>
              </div>
              <div
                onClick={() => {
                  setChangepassword(true);
                  setGeneralsettings(false);
                }}
                style={{
                  width: "15vw",
                  height: "40px",
                  marginBottom: "20px",
                  borderRight: "2px solid gray",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <p
                  className={
                    changepassword
                      ? styles.thcsettingsactivelabel
                      : styles.thcsettingspassivelabel
                  }
                >
                  Change Password
                </p>
              </div>
            </div>
            {generalsettings && (
              <div className={styles.thcsettingscontainer}>
                <div style={{ marginTop: -30, width: 400 }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "50px" }}>Name:</h5>{" "}
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "50px" }}>Phone:</h5>
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "50px" }}>Email:</h5>{" "}
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 20,
                      marginLeft: 5,
                      height: 40,
                      borderRadius: 3,
                      backgroundColor: "#ff4d15",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>Update Changes</p>
                  </div>
                </div>
              </div>
            )}
            {changepassword && (
              <div className={styles.thcsettingscontainer}>
                <div style={{ marginTop: -30, width: 400 }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "100px" }}>Old Password:</h5>{" "}
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "100px" }}>New Password:</h5>
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5 style={{ width: "100px" }}>
                        Re-enter New Password:
                      </h5>{" "}
                      <div style={{ width: "100%" }}>
                        {" "}
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 20,
                      marginLeft: 5,
                      height: 40,
                      borderRadius: 3,
                      backgroundColor: "#ff4d15",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>Update Changes</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={750}>
          <div
            style={{
              backgroundColor: "#000",
              display: "flex",
              color: "#fff",
              padding: "15px ",
            }}
          >
            <div
              style={{
                marginRight: "20px",
                cursor: "pointer",
                paddingBottom: "2px",
                borderBottom: "1px solid #eee",
              }}
            >
              General Settings
            </div>
            <div
              style={{
                marginRight: "20px",
                cursor: "pointer",
                paddingBottom: "2px",
                borderBottom: "1px solid #eee",
              }}
            >
              Password Settings
            </div>
          </div>
          <div className={styles.thcsettingscontainer}></div>
        </MediaQuery>
      </div>
      <Footer />
    </>
  );
}
