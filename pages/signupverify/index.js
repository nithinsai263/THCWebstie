import React, {useEffect, useState} from "react";
import Auth from "@aws-amplify/auth";
import Router from "next/router";

import styles from "./index.module.css";
import {getEmail} from "../../utilities/Email.js"
import Navbar from "../../components/Navbar";

export default function SignupVerify() {
  const [otp, setOtp]=useState();
  const [email, setEmail]=useState();
  useEffect(() => {
    const userEmail=getEmail();
    setEmail(userEmail);
  });

  function handleSubmit(){
          Auth.confirmSignUp(email, otp)
        .then( (result) => {
          console.log(result);
          alert("You will be redirected to sign in page.");
           Router.push("/signin");
        })
        .catch((e) => {
          console.log(e);
        });
  }
  return (
    <>
      <Navbar />
      <div className={styles["contact-section"]} id={styles.contact}>
        <div className={styles["login-container-1"]}>
          <div className={styles["login-content-wrapper"]}>
            <div
              style={{
                textAlign: "center",
                marginTop: "-25px",
                marginBottom: "25px",
              }}
            >
              {" "}
              <h6 style={{ color: "#fff" }}>Signup to THC</h6>
            </div>

            <form  onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}>
              <div className={styles["login-password-wrapper"]}>
                <input
                value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  placeholder="Enter OTP"
                  id={styles["abcdefg"]}
                  type="text"
                  name="otp"
                  required
                />
              </div>

              <div>
                <input
                  type="submit"
                  name="Signin"
                  value="Signin"
                  id={styles["loginbutton"]}
                />
              </div>
            </form>

            <div style={{ marginTop: "20px" }}>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
