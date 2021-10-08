import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import Router from "next/router";

import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import {setterEmail} from "../../utilities/Email.js"

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [error, setError]=useState();

  function handleSubmit() {
    const contact = "+91" + phone;
    setterEmail(email)
    Auth.signUp({
      username: email,
      password: password,
      attributes: { email: email, name:name, phone_number:contact },
    })
      .then(async (user) => {
        Router.push("/signupverify")})
      .catch((e) => {
        var str=e.message;
        str=str.slice(25);
        setError(str);
        console.log(e);
      });
  }

  return (
    <>
      <Navbar />
      <div className={styles["contact-section"]} id={styles.contact}>
        <div className={styles["signup-container-1"]}>
          <div className={styles["signup-content-wrapper"]}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                marginTop:"-20px"
              }}
            >
              {" "}
              <h6 style={{ color: "#fff" }}>Signup to THC</h6>
            </div>
            { error &&
            <div style={{textAlign:'center', fontSize:'13px', color:"#B00020"}}> 
              <p>* {error} *</p>
            </div>
            }
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className={styles["login-email-wrapper"]}>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Name"
                  id={styles["name"]}
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className={styles["login-email-wrapper"]}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email"
                  id={styles["email"]}
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className={styles["login-password-wrapper"]}>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Password"
                  id={styles["password"]}
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className={styles["login-password-wrapper"]}>
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter Phone Number"
                  id={styles["phonenumber"]}
                  type="text"
                  name="phonenumber"
                  required
                />
              </div>

              <div>
                <input
                  type="submit"
                  name="Signup"
                  value="Signup"
                  id={styles["signupbutton"]}
                />
              </div>
            </form>

            <div
              style={{
                borderTop: "1px solid #ff4d15",
                borderLeft: "1px solid #ff4d15",
                borderRight: "1px solid #ff4d15",
                borderBottom: "1px solid #ff4d15",
                backgroundColor: "#000",
                height: "35px",
                width: "100%",
                color: "#ff4d15",
                fontWeight: "600",
                fontSize: "13px",
                border: "0px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5px",
                boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0",
              }}
            >
              <p>Sign up with Google</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <hr />
              <div
                style={{
                  marginTop: "0px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#eee",
                    textDecoration: "none",
                    border: "0px",
                  }}
                >
                  Forgot Password
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#eee",
                    textDecoration: "none",
                    border: "0px",
                  }}
                >
                  New User?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
